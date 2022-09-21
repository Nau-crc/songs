//Exercise 1: Get the array of all Artists.
function getAllArtists(array){
    let result = array.map((item) => item.artist)
    console.log("Exercise 1 ->", result);
    return result;
};

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist){
    let result = array.filter((item) => item.artist === artist)
    console.log("Exercise 2 ->", result);
    return result;
};

//Exercise 3: Alphabetic order by title
function orderAlphabetically(array){
    let result = array.map((item) => item.title).sort().slice(0, 10)
    console.log("Exercise 3 ->", result)
    return result;
};

//Exercise 4: Order by year, ascending
function orderByYear(array){
    let result = array.map((item) => ({ title: item.title, year: item.year,})).sort(function(a,b){if(a.title < b.title){return a.title.localeCompare(b.title)}}).sort(function(a,b){return a.year - b.year});
    console.log("Exercise 4 ->", result)
    return result;
};

//Exercise 5: Filter songs by genre
function songsByGenre(array, genre) {
    let result = array.map((item) => (
        {title: item.title, 
        year: item.year, 
        artist: item.artist, 
        album: item.album, 
        duration: item.duration, 
        genre: item.genre
        })).filter((item) =>
            item.genre.includes(genre));
    console.log("Exercise 5 ->", result)
    return result;
};

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds() {
    //Write your code here
};

//Exercise 7: Get the longest song
function getLongestSong(){
    //Write your code here
};

//Exercise 8: Get the shortest song
function getShortestSong(){
    //Write your code here
};



if(typeof module !== 'undefined') {
    module.exports = {
        getAllArtists,
        getSongsFromArtist,
        orderAlphabetically,
        orderByYear,
        songsByGenre,
        minutsToSeconds,
        getLongestSong,
        getShortestSong
    };
};
