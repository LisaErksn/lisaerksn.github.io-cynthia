// -------------- Btn Bannière ----------------

const banBtn = document.querySelector('.ban-btn');
banBtn.addEventListener('click', ()=>{
    const workSection = document.querySelector(".work-section")
    window.scrollTo({
        top: workSection.offsetTop,
        behavior: "smooth",
      });
})


// -------------- Changement écran Bannière ----------------

function adaptativeScreen(){
  const height = window.innerHeight
  const width = window.innerWidth
  const mobileScreen= document.getElementById('video-mobile')
  const ordiScreen = document.getElementById('video-ordi')
  if( width <= height*(9/16)){
    mobileScreen.style.display="block"
    ordiScreen.style.display="none"
  }else if( width > height*(9/16)){
    mobileScreen.style.display="none"
    ordiScreen.style.display="block"

    // si large-screen est inférieur width
    if( ordiScreen.offsetWidth <= width && ordiScreen.offsetHeight >= height) {
      ordiScreen.classList.add('screen-adaptative-large')
    }else  if ( ordiScreen.offsetWidth == width )  {
      ordiScreen.classList.remove('screen-adaptative-large')
    }
  }
}

onload = () => { adaptativeScreen() };
onresize = () => { adaptativeScreen() };


// -------------- Animation logo ----------------

function animLogo(){
  const logo = document.getElementById('logo')
  window.addEventListener('load', ()=>{
    logo.classList.add('animation-logo')
  })

}
