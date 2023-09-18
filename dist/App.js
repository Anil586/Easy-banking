// header//
const navbar = document.querySelector('header');


window.onscroll = () => {
  if(window.scrollY > 100){
    navbar.classList.add('bg-color-primary-dark');
    navbar.classList.add('bg-color-gray');
  } else{
    navbar.classList.remove('bg-color-primary-dark');
    navbar.classList.remove('bg-color-gray');
  }
}


//mobile menu
  const hamburger = document.querySelector('#hamburger');
  const menu = document.querySelector('#menu');
  const hLink = document.querySelectorAll('#hLink');
  const fasolid = document.querySelector(".fa-solid");

  hamburger.addEventListener("click",() => {
      menu.classList.toggle('hidden');
      fasolid.classList.toggle('fa-xmark');
  })

  hLink.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      fasolid.classList.toggle('fa-xmark');
    })
  })

  //testimonial//
const userTexts = document.getElementsByClassName("user-text");
const userPics = document.getElementsByClassName("user-pic");

function showReview() {
  for(userPic of userPics){
    userPic.classList.remove("active-pic");
  }
  for(userText of userTexts){
    userText.classList.remove("active-text")
  }

  let i = Array.from(userPics).indexOf(event.target);

  userPics[i].classList.add('active-pic');
  userTexts[i].classList.add('active-text');
  
}

//Flip the cards for pricing //
     
 const toggleBtn = document.getElementById('toggleBtn');
  //card_1// card 2 and card 3//
 const card_1_front = document.querySelector("#card_1_front");
 const card_1_back = document.querySelector("#card_1_back");

 const card_2_front = document.querySelector("#card_2_front");
 const card_2_back = document.querySelector("#card_2_back");
  
 const card_3_front = document.querySelector("#card_3_front");
 const card_3_back = document.querySelector("#card_3_back");

  toggleBtn.addEventListener('change', ()=>{

   card_1_front.classList.toggle('-rotate-y-180');
   card_1_back.classList.toggle('rotate-y-180');

   card_2_front.classList.toggle('-rotate-y-180');
   card_2_back.classList.toggle('rotate-y-180');

   card_3_front.classList.toggle('-rotate-y-180');
   card_3_back.classList.toggle('rotate-y-180'); 
   })
   



