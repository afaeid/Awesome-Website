

/* ===== Declaring Variables for the Function Below ===== */
var menuIcon = document.querySelector('.menu-icon');
var sidebar = document.querySelector('.mobile-sideber')
var mainContent = document.querySelector('.content');
var footer = document.querySelector('footer')
/*===== Sidebar Open Function ===== */
menuIcon.onclick =  ()=>{
  sidebar.classList.toggle('openSidebar');
  if(sidebar.classList.contains('openSidebar')){
    mainContent.onclick = ()=>{
      sidebar.classList.remove('openSidebar');
    }
    footer.onclick = ()=>{
      sidebar.classList.remove('openSidebar');
    }
  }
}


/* ===== Navbar Animation on Scroll ===== */
var navbar = document.querySelector('nav')
window.onscroll = ()=>{
  navbar.classList.toggle('animNav', scrollY > 0);
}
