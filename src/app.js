const yargs = require("yargs");

//has to be in brackets same as index.js
const { addFilm, listFilms } = require("./utils")//looks for index.js auto

const app = (yargsObj) => {
    if (yargsObj.add) {
        addFilm({title: yargsObj.title, actor: yargsObj.actor});
    } else if (yargsObj.list) {
        listFilms();
    } else {
        console.log("Command Unknown");
    };
};

app(yargs.argv);