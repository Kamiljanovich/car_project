const headerMenuLogo = document.querySelector('.i');
const headerPanel = document.querySelector('.header__panel');
const p_btn = document.querySelector(".profile_btn")
const l_panel = document.querySelector(".profile_modal")
const x_btn = document.querySelector('.x_btn')
headerMenuLogo.addEventListener('click', function(){
    if(headerPanel.classList.contains('active')){
        
        headerPanel.classList.remove('active')
        headerMenuLogo.innerHTML = '<i class="fa-solid fa-bars"></i>'
    }else{
        headerMenuLogo.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        headerPanel.classList.add('active')
    }
});


p_btn.addEventListener('click', function(){
    l_panel.style.display = 'inline-block'
})

function xBtn(){
    l_panel.style.display = 'none'
}