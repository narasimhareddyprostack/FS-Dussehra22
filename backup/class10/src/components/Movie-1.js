let Movie = () => {
    let movie_Name = "Avatar 2"
    let rel_Date = 'Dec 16'
    let more_Details = {
        dir_Name: 'James Cameran',
        "actor": "Dont know",
        "actress": "Nayana"
    }
    return <div>
        <h1>{movie_Name}</h1>
        <h2>Relase Date: {rel_Date}</h2>
        <h3>Dir Name:{more_Details.dir_Name}</h3>
        <h3>Actor:{more_Details.actor}</h3>
        <h3>Actress:{more_Details.actress}</h3>

    </div>
}
export default Movie