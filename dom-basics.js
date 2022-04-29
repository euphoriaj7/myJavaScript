const newP = document.createElement('p')
newP.innerText = "My awesome new paragraph.";
// document.body.appendChild(newP);
document.querySelector('.green').closest('section').appendChild(newP);
const newImg = document.createElement('img');
newImg.src = "https://placeimg.com/200/200/animals";
newImg.alt = "Random pic of an animal";
document.body.appendChild(newImg);
const newList = document.createElement('ol');
newList.innerHTML = "<li>one</li><li>two</li><li>three</li>"
document.body.appendChild(newList)

const newDiv = document.createElement('div');
newDiv.innerHTML = "<ul><li>Welcome to JavascriptLanguage</li></ul>"
document.body.appendChild(newDiv);

const newH2 = document.createElement('h2');
newH2.innerText = "Here is my animal"
document.body.querySelector('div').appendChild(newH2);