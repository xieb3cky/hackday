import React from "react";
import RepoCard from "./RepoCard"
import "./RepoList.css";

function RepoList({ repoData }) {
    const { name, id, forks, created_at, language, topics, description } = repoData;
    console.log(name)
    return (
        <>
            <div className="main">
                <div className="card">
                    <h1 className="title"> {name}</h1>

                    {/* {data.map((repo => <RepoCard repo={repo} key={repo.id} />))} */}
                </div>
            </div>

        </>
    );
}

export default RepoList;

// { name, id, forks, created_at, language, topics, description } = data