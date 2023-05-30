import React from 'react'
import "./RepoCard.css"


const RepoCard = ({ data }) => {
    console.log(data)
    const { name, id, forks, created_at, language, topics, description, html_url } = data
    return (
        <>
            <div className='main'>
                <div className="card">

                    <div className='title'>
                        <h4>{name}</h4>
                        <a href={html_url} target="_blank">Link</a>
                        <div>
                            <span>{created_at}</span>
                        </div>
                    </div>
                    <p>{description}</p>
                    <div className='info'></div>

                    <div>{description}</div>
                </div>

            </div>
        </>
    )
}

export default RepoCard