const a = document.querySelectorAll('.box')

a.forEach(item => {
    item.addEventListener('click', ()=>{
        
        item.classList.toggle('circle')
        
    })
});