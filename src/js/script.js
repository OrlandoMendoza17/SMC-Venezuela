var hambuger = document.getElementById('hamburger')
var ham_icon = document.getElementById('ham-icon')
var toggleMenu = document.getElementById('toggleMenu')

var whatsapp = document.getElementById('whatsapp')
var facebook = document.getElementById('facebook')
var instagram = document.getElementById('instagram')

var main = document.getElementById('main')

hambuger.addEventListener('click', () =>{
  console.log('presiono')
  if (toggleMenu.classList.contains('hide')) {
    toggleMenu.classList.remove('hide')
    whatsapp.classList.add('hide')
    facebook.classList.add('hide')
    instagram.classList.add('hide')

    ham_icon.classList.remove('fa-bars')
    ham_icon.classList.add('fa-times')
  }else{
    toggleMenu.classList.add('hide')
    whatsapp.classList.remove('hide')
    facebook.classList.remove('hide')
    instagram.classList.remove('hide')
    
    ham_icon.classList.remove('fa-times')
    ham_icon.classList.add('fa-bars')
  }
})

main.addEventListener('click', ()=>{
  if (toggleMenu.classList.contains('hide')) {
    console.log('nada')
  }else{
    toggleMenu.classList.add('hide')
    whatsapp.classList.remove('hide')
    facebook.classList.remove('hide')
    instagram.classList.remove('hide')
    
    ham_icon.classList.remove('fa-times')
    ham_icon.classList.add('fa-bars')
  }
})