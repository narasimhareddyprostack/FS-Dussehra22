let Movie = () => {

    let movie_Details = {
        movie_Name: "Avatar 2",
        dir_Name: 'James Cameran',
        "actor": "Dont know",
        "actress": "Nayana"
    }
    return <div>
        <pre>{JSON.stringify(movie_Details)}</pre>
        <h2>Movie Info</h2>
        <h3>Movie Name:{movie_Details.movie_Name}</h3>
        <h3>Dir Name:{movie_Details.dir_Name}</h3>
    </div>
}
export default Movie