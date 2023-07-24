let mainNav = document.querySelector('#mainNav')

window.addEventListener('scroll', function(){
    //console.log(window.scrollY)
    if(window.scrollY > 0){
        mainNav.classList.add('bg-black', 'txt-white')
        
    }else {
        mainNav.classList.remove('bg-black', 'txt-white')
    }
})