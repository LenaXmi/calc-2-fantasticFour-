import './sass/main.scss';

import "./js/mobile-menu";
// (() => {
//     const menuBtnRef = document.querySelector("[data-menu-button]");
//     const mobileMenuRef = document.querySelector("[data-menu]");
//     const mobileBtnClose = document.querySelector("[data-menu-close]");

//     menuBtnRef.addEventListener("click", () => {
//         mobileMenuRef.classList.toggle("is-open");
//         menuBtnRef.classList.toggle("is-active");
//     });

//     mobileBtnClose.addEventListener("click", () => {
//         mobileMenuRef.classList.toggle("is-open");
//         menuBtnRef.classList.toggle("is-active");
//     });
// })();

// import "./js/anchor";
// $("a.scroll to").click(function() {
//     var elementClick = $(this).attr("href")
//     var destination = $(elementClick).offset().top;
//     jQuery("html:not(:animated),body:not(:animated)").animate({
//         scrollTop: destination
//     }, 500);
//     return false;
//  });

import "./js/modal";
// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     document.body.classList.toggle("modal-open");
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();