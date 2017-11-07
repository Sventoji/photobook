
$(document).ready(function() {
    $(window).resize(function() {
        if($(window).width() >= 470) {
            $('.header-container').css('display', 'flex',);
        } else {
            $('.header-container').css('display', 'block',);
        }
    }).resize();
});

$(document).ready(function() {
    $(window).resize(function() {
        if($(window).width() >= 636) {
            $('.how-content').css('display', 'inline-flex',);
        } else if($(window).width() >= 468) {
            $('.how-content').css('display', 'block',);
        } else {
            $('.how-content').css('display', 'flex',);
        }
    }).resize();
}); 


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}