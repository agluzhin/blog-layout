/* === Main menu switch case === */
$(function() {
    $(".menu-link").on('click', function() {
        $(".menu-link").removeClass('active');
        $(this).addClass('active');
    });
});

$(function() {
    $(".pagination-link").on('click', function() {
        $(".pagination-link").removeClass('active');
        $(this).addClass('active');
    });
});

/* === Burger menu === */
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu_burger'); 

burger.addEventListener('click', function() {
  this.classList.toggle('change');
  menu.classList.toggle('active');
});