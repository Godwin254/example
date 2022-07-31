import React from 'react'

export default function () {
  return (
    <div className="new-movie">
        <div className='sideA'>
            <img src={require("../images/image1.jpg")} alt="image1"/>
            <div className="overlay"></div>
        </div>

        <div className="sideB">
            <h3>Create a new movie</h3>
            <form>
                <label>Title</label>
                <input type="text" placeholder="Title" />
                <label>Genre</label>
                <input type="text" placeholder="Genre" />
                <label>Rating</label>
                <input type="text" placeholder="Rating" />
                <label>Description</label>
                <textarea placeholder="Description"></textarea>
                <button>Create</button>
            </form>
        </div>

    </div>
  )
}
