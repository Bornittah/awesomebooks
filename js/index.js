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
let form = document.querySelector('#form');
let titleField = document.querySelector('#title-input');
let authorField = document.querySelector('#author-input');

form.addEventListener('submit', ()=>{
  let data= {
    'title':titleField.value,
    'author':authorField.value
  }
  let arr=[];
  if(JSON.parse(localStorage.getItem('books')===null)){
    arr.push(data);
    localStorage.setItem('books', JSON.stringify(arr));
  }else{
  let newarr = JSON.parse(localStorage.getItem('books'));
  newarr.push(data);
  localStorage.setItem('books', JSON.stringify(newarr));
  }
});