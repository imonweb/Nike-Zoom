const nikeCurrent = document.querySelector('#nike-big');
const imgs = document.querySelectorAll('.small__img__row img');

// imgs.forEach(img => img.addEventListener('click', (e) => {
//   nikeCurrent.src = e.target.src  
// }));

imgs.forEach(img => img.addEventListener('click', nikeClick));

function nikeClick(e){
  imgs.forEach(img => (img.style.opacity = 1));
  nikeCurrent.src = e.target.src;
  nikeCurrent.classList.add('fade-in');
  setTimeout(() => nikeCurrent.classList.remove('fade-in'),500);
  e.tartget.style.opacity = opacity;
}