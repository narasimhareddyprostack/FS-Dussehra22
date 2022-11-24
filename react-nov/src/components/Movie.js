import React from 'react'
class Movie extends React.Component {
    movie_Name = "Avatar2"
    type = ['2d', '3d']
    more_Details = {
        dir_Name: "James C",
        actor: "Rajni Kanth",
        actress: "Nayana"
    }
    render() {
        return <>
            <h1>Movie Component</h1>
            <h3>Movie Name:{this.movie_Name}</h3>
            <h3>Selected Type:{this.type[0]}</h3>
            <button className="ashok">Book Tickets</button>
            <ul>
                <li> Crew : {this.more_Details.dir_Name} </li>
                <li> Crew : {this.more_Details.actor} </li>
                <li> Crew : {this.more_Details.actress} </li>
            </ul>
        </>
    }
}

export default Movie