const menu = document.querySelector(".menu");
const nav = document.querySelector("#nav");
const cancel = document.querySelector("#cancel");
const sm = document.querySelector("#sm");
const sh = document.querySelector("#sh");
const put = document.querySelectorAll(".put");
const modalPar = document.querySelector(".modalPar");
const modalCancel = document.querySelector(".x");
const whatsappBox = document.querySelector(".chatbox-cont");
const whatsappCancel = document.querySelector(".cancel-icon");
const check = document.querySelector("#check");
const wat = document.querySelector("#wat");
const sub = document.querySelector("#sub");
const form = document.querySelector("#form");
const Program = document.querySelector("#Program");


// Animation

function reveal() {
    var bottom = document.querySelectorAll(".bottom");
    var top = document.querySelectorAll(".top");
    var left = document.querySelectorAll(".left");
    var right = document.querySelectorAll(".right");
    var scale = document.querySelectorAll(".scale");
  
    for (var i = 0; i < bottom.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = bottom[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        bottom[i].classList.add("active");
      } else {
        bottom[i].classList.remove("active");
      }
    }

    for (var i = 0; i < top.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = top[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          top[i].classList.add("active");
        } else {
          top[i].classList.remove("active");
        }
      }

      for (var i = 0; i < left.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = left[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          left[i].classList.add("active");
        } else {
          left[i].classList.remove("active");
        }
      }

      for (var i = 0; i < right.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = right[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          right[i].classList.add("active");
        } else {
          right[i].classList.remove("active");
        }
      }

      for (var i = 0; i < scale.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = scale[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          scale[i].classList.add("active");
        } else {
          scale[i].classList.remove("active");
        }
      }
  }
  
  window.addEventListener("scroll", reveal);


menu.addEventListener("click", () => {
	nav.style.display = "flex";
	menu.style.display = "none";
	cancel.style.display = "block";
});

cancel.addEventListener("click", () => {
	menu.style.display = "block";
	nav.style.display = "none";
	cancel.style.display = "none";
});


	sm.addEventListener("click", () => {
        check.checked = !check.checked
        if (check.checked === true) {            
            sh.style.display = "flex"
        } else {            
            sh.style.display = "none"
        }
	});

    // Whatsapp box functions

    wat.addEventListener("click", ()=> {
        whatsappBox.style.display = "block"
    })

whatsappCancel.addEventListener("click", ()=> {
    whatsappBox.style.display = "none"
})

const inputArr = Array.from(put)

sub.addEventListener("click", (e)=> {
    e.preventDefault()    
    modalPar.style.display="flex"

    inputArr.map((input)=> {
        console.log(input.value)
    })
})

modalCancel.addEventListener("click", (e)=> {
    modalPar.style.display = "none"
})



Program.addEventListener("change", ()=> {
    if (Program.value === "Demo Free Class") {
        FE.style.display = "none"
        BE.style.display = "none"
        FS.style.display = "none"
        SB.style.display = "none"
        WC.style.display = "none"
        sub.style.display = "block"
    } else  if (Program.value === "Front-End(web)") {
        FE.style.display = "block"
        BE.style.display = "none"
        FS.style.display = "none"
        SB.style.display = "none"
        WC.style.display = "none"
        sub.style.display = "none"
    } else  if (Program.value === "Back-End(Web)") {
        FE.style.display = "none"
        BE.style.display = "block"
        FS.style.display = "none"
        SB.style.display = "none"
        WC.style.display = "none"
        sub.style.display = "none"
    } else  if (Program.value === "Full-Stack(web)") {
        FE.style.display = "none"
        BE.style.display = "none"
        FS.style.display = "block"
        SB.style.display = "none"
        WC.style.display = "none"
        sub.style.display = "none"
    } else  if (Program.value === "Summer Bootcamp") {
        FE.style.display = "none"
        BE.style.display = "none"
        FS.style.display = "none"
        SB.style.display = "block"
        WC.style.display = "none"
        sub.style.display = "none"
    } else  if (Program.value === "Weekend-Classes") {
        FE.style.display = "none"
        BE.style.display = "none"
        FS.style.display = "none"
        SB.style.display = "none"
        WC.style.display = "block"
        sub.style.display = "none"
    }
})



   