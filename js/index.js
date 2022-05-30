let listSection = document.querySelector('.booklist');
let addSection = document.querySelector('.addnew');
let contactSection = document.querySelector('.contacts');


let listMenuLink = document.querySelector('#bookslist');
let addMenuLink = document.querySelector('#addbooks');
let contactMenuLink = document.querySelector('#contact');

document.querySelectorAll('.navbar').forEach((link)=>{
  link.addEventListener('click', ()=>{
    listMenuLink.addEventListener('click', ()=>{
      listSection.style.display='block';
      addSection.style.display='none';
      contactSection.style.display='none';
    });
    
    addMenuLink.addEventListener('click', ()=>{
        listSection.style.display='none';
        addSection.style.display='block';
        contactSection.style.display='none';
      
    });
    
    contactMenuLink.addEventListener('click', ()=>{
      listSection.style.display='none';
      addSection.style.display='none';
      contactSection.style.display='block';
    });
});
});

// const form = document.getElementById('form');
// const title = document.getElementById('title')
// const author = document.getElementById('author');

// form.addEventListener('submit', (event) => {
//   let data = {
//     'title': title.value.trim(),
//     'author': author.value.trim()
//   }
  
  
//   if (localStorage.getItem('booklist') === null) {
//     var booklist = [];
//     //add objects
//     booklist.push(data)
//     localStorage.setItem('books', JSON.stringify(booklist))
//   } else {
//     // get the list from local storage
//     var booklist = JSON.parse(localStorage.getItem('booklist'))

//     //add object
//     booklist.push(data);
//     localStorage.setItem('books', JSON.stringify(booklist))
//   }
//   event.preventDefault()
// })

document.getElementById('form').addEventListener('submit', addbook)

function addbook (event) {
  var title = document.getElementById('title').value.trim()
  var author = document.getElementById('author').value.trim()

  //creating an object
  const bookmark = {
    title: title,
    author: author
  }

  var bookmarks = []
  if (JSON.parse(localStorage.getItem('bookmarks')) === null) {
    
    bookmarks.push(bookmark)

    localStorage.setItem('booklist', JSON.stringify(bookmarks))
  } else {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
    bookmarks.push(bookmark)

    localStorage.setItem('booklist', JSON.stringify(bookmarks))
  }

  event.preventDefault()
}