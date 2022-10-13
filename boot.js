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
const first = document.querySelector("#first");
const firstChild = document.querySelector("#firstChild");
const firstCheck = document.querySelector("#firstCheck");
const second = document.querySelector("#second");
const secondChild = document.querySelector("#secondChild");
const secondCheck = document.querySelector("#secondCheck");
const third = document.querySelector("#third");
const thirdChild = document.querySelector("#thirdChild");
const thirdCheck = document.querySelector("#thirdCheck");
const fourth = document.querySelector("#fourth");
const fourthChild = document.querySelector("#fourthChild");
const fourthCheck = document.querySelector("#fourthCheck");
const fifth = document.querySelector("#fifth");
const fifthChild = document.querySelector("#fifthChild");
const fifthCheck = document.querySelector("#fifthCheck");






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


first.addEventListener("click", ()=> {
    firstCheck.checked = !firstCheck.checked

    if(firstCheck.checked === true){
        firstChild.style.display = "block"
    } else {
        firstChild.style.display = "none"
    }
})

second.addEventListener("click", ()=> {
    secondCheck.checked = !secondCheck.checked

    if(secondCheck.checked === true){
        secondChild.style.display = "block"
    } else {
        secondChild.style.display = "none"
    }
})

third.addEventListener("click", ()=> {
    thirdCheck.checked = !thirdCheck.checked

    if(thirdCheck.checked === true){
        thirdChild.style.display = "block"
    } else {
        thirdChild.style.display = "none"
    }
})

fourth.addEventListener("click", ()=> {
    fourthCheck.checked = !fourthCheck.checked

    if(fourthCheck.checked === true){
        fourthChild.style.display = "block"
    } else {
        fourthChild.style.display = "none"
    }
})

fifth.addEventListener("click", ()=> {
    fifthCheck.checked = !fifthCheck.checked

    if(fifthCheck.checked === true){
        fifthChild.style.display = "block"
    } else {
        fifthChild.style.display = "none"
    }
})





wat.addEventListener("click", () => {
	whatsappBox.style.display = "block";
});

whatsappCancel.addEventListener("click", () => {
	whatsappBox.style.display = "none";
});
