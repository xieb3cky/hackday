import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import SearchForm from './SearchForm/SearchForm';
import RepoCard from './Repos/RepoCard';



const baseURL = "https://api.github.com/search/repositories?q=org:"
function App() {

  const [cards, setCards] = useState([])
  const [org, setOrg] = useState("")

  const fetchData = async () => {

    const { data } = await axios.get(baseURL + org, {
      params: {
        sort: "forks",
        per_page: 10
      },
    })
    console.log("fetching")

    setCards(data.items)
  }

  const handleSubmit = async () => {
    await fetchData()
    setOrg("")
  }

  return (
    <>
      <SearchForm setOrg={setOrg} org={org} handleSubmit={handleSubmit} />

      {cards.map((c => <RepoCard data={c} key={c.id} />))}

    </>
  );
}

export default App;