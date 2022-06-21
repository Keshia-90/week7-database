const fs = require("fs");

const addFilm = (filmObj) => {
    try {
        const stringyObj = JSON.stringify(filmObj);
        fs.writeFileSync('./storage.json', stringyObj)//takes stringyObj and put it in file .json
    } catch (error) {
        console.log(error);
    }
};

const listFilms = () => {
    try {
        const filmList = fs.readFileSync('./storage.json');
        const list = JSON.parse(filmList);
        console.log(list);
    } catch (error){
        console.log(error);
    };
};

module.exports = {addFilm, listFilms}