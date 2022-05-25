'use strict';


function tellJoke() {
    const display = document.querySelector("#displayJoke");
    // console.log(display)
    display.append(fetchJoke())
}

async function fetchJoke() {
    // console.log("Hello World");
    const pull = await fetch("https://icanhazdadjoke.com/", { headers: { Accept: "application/json" } })
        // const url = "https://dad-jokes.p.rapidapi.com/random/joke";
        // const pull = await fetch(url, { mode: "no-cors" });
    const tellJoke = tellJoke();
    console.log(tellJoke)
    console.log(pull);
    return pull;
}