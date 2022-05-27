
/**Promjenljiva za filmove, tu cuvamo ime, glumce, godinu, napomenu */

var movies = [

    {
        name: "Spider-Man : No Way Home",
        year: 2021,
        actors:"Tom Holland, Williem Dafoe, Alfred Molina, Andrew Garfield, Tobey Maguire",
        director: 'Jon Watts',
        details: 'Film sa sva 3 Spider-Mana.',
        seen : false
    },

    {
        name: "No Time To Die",
        year: 2021,
        actors:"Daniel Craig, Rami Malek, Ralph Fiennes, Naomie Harris",
        director: 'Cary Joji Fukunaga',
        details: 'Posljednji Bond film sa Daniel Craigom.',
        seen : false
    },

    {
        name: "Godfather",
        year: 1977,
        actors:"Marlon Brando, Al Pacino, Robert Duvall",
        director: 'Francis Ford Copolla',
        details: 'Smatra se najboljim filmom svih vremena.',
        seen : false
    },

    {
        name: "The Dark Knight",
        year: 2008,
        actors:"Christian Bale, Michael Caine, Heath Ledger",
        director: 'Christopher Nolan',
        details: 'Heath Ledger dobio posthumnog Oskara.',
        seen : false
    },

    {
        name: "The Lord of The Rings: The Return of The King",
        year: 2003,
        actors:"Elijah Wood, Ian McKellen, Viggo Mortensen",
        director: 'Peter Jackson',
        details: 'Film sa najviše osvojenih Oskara.',
        seen : false
    },

    {
        name: "Schindler's List",
        year: 1993,
        actors:"Liam Neeson, Ben Kingsley, Ralph Fiennes",
        director: 'Steven Spielberg',
        details: 'Moderni crno-bijeli film.',
        seen : false
    },
    
    {
        name: "Avengers : Endgame",
        year: 2019,
        actors:"Robert Downey Jr, Chris Evans, Chris Hemsworth",
        director: 'Anthony and Joe Russo',
        details: 'Kulminacija 22 filma MCU franšize.',
        seen : false
    }
];


/** Funkcija koja ce nam prikazati hardcodovane filmove u tabeli */

function showMovies()
{
    let tableMovies = "";

    //For petljom cemo proci kroz sve filmove
    // Onda cemo svaki film, s obzirom da je objekat, svaki atribut toga filma stavljamo u element iz html fajla, preko template stringova

   let counter = 0;

    movies.forEach( movie => {

        let currStatus = "green";

        if (movie.seen === false)
            currStatus = "red";

        tableMovies  +=  `

                            <tr class="${currStatus}">
                                <td> ${movie.name} </td>
                                <td> ${movie.year} </td>
                                <td> ${movie.actors.split(',')}</td>
                                <td> ${movie.director} </td>
                                <td> ${movie.details} </td>
                                <td>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" onclick="changeColor(${counter})"> 
                                    </div>
                                
                                </td> </tr>`;
                         
        counter++;                     
    });

    // Nakon toga, preko innerHTML komande, postavimo sve to u tabelu

    document.getElementById("table-body").innerHTML = tableMovies;
}


// Funkcija koja dodaje filmove

// Uzecemo sve sto korisnik unese u modal i od toga napraviti novi objekat, nakon toga, to cemo dodati u nas niz movies, koji je zapravo niz objekata

function addMovie(){

    let newMovieName = document.getElementById('movie-name-input').value;
    let newMovieYear = document.getElementById('movie-year-input').value;

    let newMovieActors = document.getElementById('movie-actors-input').value;
    let newMovieDirector = document.getElementById('movie-director-input').value;
    let newMovieDetails = document.getElementById('movie-details-input').value;

    //pravimo novi objekat

    let newMovieFull = {name:newMovieName, year:newMovieYear, actors:newMovieActors, director:newMovieDirector, details:newMovieDetails, seen:false};
    //Dodajemo taj objekat u niz filmova, azuriramo
   
    movies.push(newMovieFull);
    
    //Ponovo prikazujemo filmove, sada azurirane
    showMovies();
}

document.getElementById('input-save').addEventListener('click', () => {
    addMovie();
});


// Funckija koja mijenja boju reda

function changeColor(counter){
    let flag = false;
    if (movies[counter].seen === false)
        flag = true;
    movies[counter].seen = flag;
    showMovies();
}


// Pri ucitavanju stranice, automatski pozivamo prikazivanje filmova

showMovies();

