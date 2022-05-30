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