import React from 'react'
import { BsPlayCircle, BsFillPlayFill } from 'react-icons/bs'
import { AiOutlinePlus, AiFillStar } from 'react-icons/ai'

export default function Home({movies, handleSelected, selected}) {



  return (
    <div className="home">
        <DisplayMovie />
        <BsPlayCircle className="main-player" />
        <div className='lists'>
            {
                movies.map(movie => <Movie key={movie.id} movie={movie} handleSelected={handleSelected} selected ={selected} />)
            }
        </div>


    </div>
  )
}


const DisplayMovie = ({ selectedMovie }) => {
    //const {title, type, rating, genres, plot, url} = selectedMovie;
    return (
        <>
            <img src={require("../images/image3.jpg")} alt="image1" />
            <div className="overlay"></div>
            <div className="details">
                <h1>The Witcher</h1>
                <span>Season 1</span>
                <div className="rating">
                    <AiFillStar className="star" />
                    <AiFillStar className="star" />
                    <AiFillStar className="star" />
                    <AiFillStar className="star" />
                    <AiFillStar className="star" />
                </div>
                <div className='genres'>
                    <span>Action</span>
                    <span>Adventure</span>
                    <span>Horror</span>
                </div>
                <div className="controls">
                    <BsFillPlayFill className="play ctrl" />
                    <AiOutlinePlus className="plus ctrl" />
                </div>
                <p>
                    The Witcher is a series of video games developed and published by CD Projekt RED and later converted into a film series by Polish studio Obsidian Entertainment. The series is based on the graphic novel The Witcher: Wild Hunt, and was released in multiple regions worldwide on October 24, 2017, and concluded with the film The Witcher: The Game of the Year 2017 on January 31, 2018.

                </p>
            </div>
        </>
    )
}


// movie 
const Movie = ({movie, handleSelected, selected}) => {

    const {url, title} = movie;

    return (
        <div className='movie' onClick={handleSelected} >
            <img src={url} />
            <span>{title}</span>
        </div>
    )
}
