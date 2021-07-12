let books = "";
function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(data => {
      renderBooks(data)
      books = data;
    });
   
    

  // .then(function(response) {
  //   return response.json(); 
  // })
  // .then(renderBooks(json()));
  
  // To pass the tests, don't forget to return your fetch!
  
}

function parseRandomInfoForOptionalChallengesOfThisLab(books) {
  let totalNumOfPages = 0 
  let the1031stCharInSeries = "";
  let fifthBookInSeries = ""; 
}

// const fetchBookss = () => {
//   const result =  fetch("https://anapioficeandfire.com/api/books")
//     .then(response => response.json())
//     .then(data => renderBooks(data));
//     return result; 

// }

function bookInfo(books) {
  const main = document.querySelector('body'); 
  const h3 = document.createElement('h3')
  h3.innerText = "Some random info for this lab"
}

function renderBooks(books) {
  const main = document.querySelector('main');
  
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name + " No. of Pages:" + book.numberOfPages;
    main.appendChild(h2);
    if (book === books[4]) {
      const p = document.createElement('p'); 
      h2.innerHTML += " --- I'm the fifth book in the series!!!"
    }
  });

   
}
const url = "https://anapioficeandfire.com/api/characters/1031"; 
function fetchCharacter() {
  return fetch("https://anapioficeandfire.com/api/characters/1031")
  .then(response => response.json())
  .then(data => renderCharacter(data)); 
}

function renderCharacter(character) {
  const body = document.querySelector('body'); 
  const p = document.createElement('p'); 
  p.innerHTML = "The 1031st character in the series is.... (DRUMROLL PLEASE) ------------" + character.name; 
  body.appendChild(p); 
   
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

document.addEventListener('DOMContentLoaded', function() {
  fetchCharacter();
});
