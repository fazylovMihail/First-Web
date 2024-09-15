let startBtn = document.querySelector('.start-btn')
let otherConteiner = document.querySelector('.other-conteiner')

startBtn.addEventListener('click',()=>{
    startBtn.style.display = 'none'
    otherConteiner.style.display = 'flex'
})