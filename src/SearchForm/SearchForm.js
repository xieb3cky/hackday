import React from 'react'
import "./SearchForm.css"

const SearchForm = ({ org, setOrg, handleSubmit }) => {

    const handleChange = (e) => {
        setOrg(e.target.value)
    }

    const handleForm = (e) => {
        e.preventDefault()
        handleSubmit()

    }


    return (
        <form className='find-org'>
            <div className='mt'>
                <input onChange={handleChange} type='text' name='org' id='org' value={org} />

            </div>
            <div className='mt'>
                <button className='button' onClick={handleForm} type='submit'>Find Repositories</button>
            </div>
        </form>
    )
}

export default SearchForm