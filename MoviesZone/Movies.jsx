import React, { useState } from 'react'
import { movies } from './data'

export const Movies = () => {

    const [movielist, setMovielist] = useState(movies)

    const filterbyCategory = (cat) => {
        setMovielist(movies.filter((data) => data.category === cat))
    }

    return (

        <>
            <div className="my-3" style={{ width: "1000px", margin: "auto", }}>
                <div className=" text-center">
                    <button
                        onClick={() => setMovielist(movies)}
                        type="button"
                        className="btn btn-outline-primary mx-3">ALL</button>
                    <button
                        onClick={() => filterbyCategory("Action")}
                        type="button"
                        className="btn btn-outline-secondary mx-3">Action</button>
                    <button
                        onClick={() => filterbyCategory("Thriller")}
                        type="button"
                        className="btn btn-outline-success mx-3">Thriller</button>
                    <button
                        onClick={() => filterbyCategory("Animation")}
                        type="button"
                        className="btn btn-outline-danger mx-3">Animation</button>
                    <button
                        onClick={() => filterbyCategory("Horror")}
                        type="button"
                        className="btn btn-outline-warning mx-3">Horror</button>
                    <button
                        onClick={() => filterbyCategory("Drama")}
                        type="button"
                        className="btn btn-outline-info mx-3">Drama</button>
                    <button
                        onClick={() => filterbyCategory("Sci-Fi")}
                        type="button"
                        className="btn btn-outline-light mx-3">Sci-fi</button>
                </div>
            </div>

            <div
                style={
                    {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        //gap: '2rem', 
                        textAlign: 'center',
                        width: '1300px',
                        margin: 'auto',
                        marginTop: '1.5rem'
                    }
                }>
                {movielist.map((data) => (
                    <div key={data.id} style={{ maxWidth: '280px', textAlign: 'center' }}>
                        <div style={{ padding: '10px' }} className="hover_effect">
                            <img src={data.poster_path} alt="" style={{ width: '200px', height: '280px', borderRadius: '10px', border: '1px solid yellow' }} />
                        </div>
                        <h5>{data.title}</h5>
                        <p >{data.release_date}</p>
                    </div>
                ))}
            </div>

        </>
    );
};

export default Movies