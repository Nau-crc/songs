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
    let result = array.filter((item) => item.year).sort().reverse();
    console.log("Exercise 4 ->", result)
    return result;
};

//Exercise 5: Filter songs by genre
function songsByGenre() {
    //Write your code here
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
