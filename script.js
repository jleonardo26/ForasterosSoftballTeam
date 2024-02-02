

//CODIGO dropdown de barra de navegacion
document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll('.btn-inicio');
  
    dropdowns.forEach(function (dropdown) {
      dropdown.addEventListener('click', function () {
        dropdown.parentElement.querySelector('.dropdown').classList.toggle('show');
      });
    });
  
    window.addEventListener('click', function (event) {
      if (!event.target.matches('.btn-inicio')) {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(function (dropdown) {
          if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
          }
        });
      }
    });
  });





