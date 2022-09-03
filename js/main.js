const elBurgerButton = document.querySelector('.burger');
const elMenu = document.getElementById('menu');

if(elBurgerButton){
  elBurgerButton.addEventListener('click', function(){
    elBurgerButton.classList.toggle('active');
    elMenu.classList.toggle('hidden')
    elMenu.classList.toggle('block')
  })
}

// Dark Mode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

const elModeBtm = document.querySelector('#mode');

elModeBtm.addEventListener('click', () =>{
  document.querySelector('html').classList.toggle('dark');

  if(document.querySelector('html').classList.contains('dark')){
    localStorage.theme ='dark'
  } else{
    localStorage.theme = 'light'
  }
})