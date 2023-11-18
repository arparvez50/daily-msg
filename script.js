let msgBoxes = document.querySelectorAll('.msg__box');
let popUpBox = document.querySelector('.popup__msg');

msgBoxes.forEach(box => {
        box.addEventListener('click',function(event){
                // console.log(event.target.innerText);
                navigator.clipboard.writeText(event.target.innerText);
                // popup show/hide
                popUpBox.style.display = 'block'
                setTimeout(function(){
                        popUpBox.style.display = 'none'
                },300)
        })
})
