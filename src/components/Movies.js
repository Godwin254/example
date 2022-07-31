import React from 'react'

export default function Movies() {
  return (
    <div className='movies'>
        <h2>Find your movies...</h2>
        <div className='category'>
            <h2>Latest</h2>
            <div className='movie-list'>
                <div className='movie'>
                    <img src={require("../images/image2.jpg")} />
                    <span>Movie name 5r57rftfrturfutrfutrtrutrutru</span>
                </div>
                <div className='movie'>
                    <img src={require("../images/image2.jpg")} />
                    <span>Movie name</span>
                </div>
                  <div className='movie'>
                      <img src={require("../images/image2.jpg")} />
                      <span>Movie name</span>
                  </div>
                  <div className='movie'>
                      <img src={require("../images/image2.jpg")} />
                      <span>Movie name</span>
                  </div>
                  <div className='movie'>
                      <img src={require("../images/image2.jpg")} />
                      <span>Movie name</span>
                  </div>
                  <div className='movie'>
                      <img src={require("../images/image2.jpg")} />
                      <span>Movie name</span>
                  </div>
                  <div className='movie'>
                      <img src={require("../images/image2.jpg")} />
                      <span>Movie name</span>
                  </div>
                  <div className='movie'>
                      <img src={require("../images/image2.jpg")} />
                      <span>Movie name</span>
                  </div>
                  <div className='movie'>
                      <img src={require("../images/image2.jpg")} />
                      <span>Movie name</span>
                  </div>
                  <div className='movie'>
                      <img src={require("../images/image2.jpg")} />
                      <span>Movie name</span>
                  </div>
            </div>
        </div>
        <div className='category'>
                <h2>Action & Thriller</h2>
                <div className='movie-list'>
                    <div className='movie'>
                        <img src={require("../images/image2.jpg")} />
                        <span>Movie name</span>
                    </div>
                    <div className='movie'>
                        <img src={require("../images/image2.jpg")} />
                        <span>Movie name</span>
                    </div>
                </div>
        </div>
    </div>
  )
}
