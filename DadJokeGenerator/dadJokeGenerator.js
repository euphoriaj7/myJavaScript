'use strict';

const myFetch = 'https://icanhazdadjoke.com/';
let prank = true;

function tellJoke(joke) {
    const display = document.querySelector("#displayJoke");
    // console.log(display)
    // console.log(joke.joke)
    // display.append(joke.joke)
    display.innerHTML = joke.joke;
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

function startup() {
    let button = document.querySelector("button")
    button.addEventListener("click", (Event) => {
        if (prank == true) {
            document.getElementById("displayJoke").innerHTML = "A Joke!";
            const myTimeOut = setTimeout(() => {
                document.getElementById("displayJoke").innerHTML = "Just kidding, click on the button again to get a real joke ;)";
            }, 5000);
            prank = false;

        } else {
            fetchJoke();
        }
    })

}
startup();