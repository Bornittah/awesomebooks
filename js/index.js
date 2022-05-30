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

// storage

let titleInput = document.querySelector('#title-input');
let authorInput = document.querySelector('#author-input');

document.getElementById('form').addEventListener('submit', ()=>{
  let book = {
    'title': titleInput.value,
    'author': authorInput.value
  };

  let books = [];
  if (JSON.parse(localStorage.getItem('booklist')) === null) {
    books.push(book);
    localStorage.setItem('booklist', JSON.stringify(books));
  } 
  else {
    let newbooks = JSON.parse(localStorage.getItem('booklist'));
    newbooks.push(book);
    localStorage.setItem('booklist', JSON.stringify(newbooks));
  }

});

let booklist = document.querySelector('.list');
window.onload=()=>{
  let str='';
  if (JSON.parse(localStorage.getItem('booklist')) === null) {
    str=`<li class="list-item">No book stored!</li>`;
  }
  else{
    let data = JSON.parse(localStorage.getItem('booklist'));
    for(let obj of data){
    str+=`<li class="list-item">
    <p>${obj.title} by ${obj.author}</p>
    <a href="" class="remove-btn">Remove</a>
  </li>`
  }
  }
  booklist.innerHTML=str;
}

