// main.js - common behaviors
document.addEventListener('DOMContentLoaded', function(){
  // year in footer
  const y = new Date().getFullYear();
  document.getElementById('year') && (document.getElementById('year').textContent = y);
  document.getElementById('year2') && (document.getElementById('year2').textContent = y);

  // mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('nav-list');
  if(navToggle && navList){
    navToggle.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      navList.style.display = expanded ? 'none' : 'flex';
    });
  }

  // keyboard accessible skip to main (if present)
  const main = document.getElementById('main');
  if(main){ main.tabIndex = -1; }
});
