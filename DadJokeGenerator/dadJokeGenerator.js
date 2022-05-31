'use strict';

const myFetch = 'https://icanhazdadjoke.com/';

function tellJoke(joke) {
    const display = document.querySelector("#displayJoke");
    // console.log(display)
    display.append(joke.joke)
}

async function fetchJoke() {
    // console.log("Hello World");
    // const pull = await fetch("https://icanhazdadjoke.com/", { headers: { Accept: "application/json" } })
    // const url = "https://dad-jokes.p.rapidapi.com/random/joke";
    // const pull = await fetch(url, { mode: "no-cors" });
    const options = {
        headers: {
            Accept: "application/json"
        }
    }

    const pull = await fetch(myFetch, options)
    const joke = await pull.json();
    tellJoke(joke);
    console.log(tellJoke)
    console.log(pull);
    return pull;
}