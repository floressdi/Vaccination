 const menu = document.getElementById("menu"),
        btnMenu = document.getElementById("btnMenu"),
        icon = document.querySelector(".icon");


btnMenu.addEventListener('click', () =>{
    menu.classList.toggle('ulactive');
    icon.classList.toggle('bx-x')
    icon.classList.toggle('bx-menu')

})