// -------------- Btn Bannière ----------------

export function btnBanniere(){
    const banBtn = document.querySelector('.ban-btn');
    banBtn.addEventListener('click', ()=>{
        const workSection = document.querySelector(".btn-section")
        window.scrollTo({
            top: workSection.offsetTop,
         behavior: "smooth",
        });
    })
}



// -------------- Modal ----------------
export function modalImage(){
    const modalImage = document.querySelectorAll('.img-modal');
    const body = document.querySelector('body')
        modalImage.forEach( element =>{
        element.addEventListener('click', (e)=>{
            const modal = e.currentTarget.nextElementSibling
            body.classList.add('opacity-off')
            body.classList.add('scroll-off')
            modal.style.display="block"
            window.onclick = function(event){
                const close = modal.firstElementChild.firstElementChild
                if (event.target == modal || event.target == close){
                    modal.style.display = "none";
                    body.classList.remove('scroll-off')
                    body.classList.remove('opacity-off')

                }
            }
        })
    })
}

setTimeout(() => {
    modal.style.display="block"
  }, 100);



  