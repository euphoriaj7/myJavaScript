'use strict';


function tellJoke() {

}

function fetchJoke() {
    const url = "https://rapidapi.com/KegenGuyll/api/dad-jokes";
    const pull = fetch(url, { mode: "no-cors" });
    console.log(pull);
}