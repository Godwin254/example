import React from 'react'
import { Link } from 'react-router-dom'
import {  BsSearch } from 'react-icons/bs'
import { MdOutlineFavoriteBorder, MdOutlineAccountCircle } from 'react-icons/md'
import { RiMovie2Line } from 'react-icons/ri'

export default function Navbar() {
  return (
    <div className="navbar">
        <div className='logo'>
        <Link to='/'><h1><RiMovie2Line className='lg'/>moviz</h1></Link>
        </div>
        <div className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/add-review">Add Review</Link>
        </div>

        <div className='btns'>
          <MdOutlineFavoriteBorder className="btn favorite" />
          <MdOutlineAccountCircle className="btn account" />
          <BsSearch className='btn search' />
        </div>
    </div>
  )
}
