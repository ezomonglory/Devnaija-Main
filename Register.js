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
const text = document.querySelector("#text");
const email = document.querySelector("#email");
const FE = document.querySelector("#FE");
const BE = document.querySelector("#BE");
const FS = document.querySelector("#FS");
const SB = document.querySelector("#SB");
const WC = document.querySelector("#WC");

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

//   End Animation

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
	check.checked = !check.checked;
	if (check.checked === true) {
		sh.style.display = "flex";
	} else {
		sh.style.display = "none";
	}
});

// Whatsapp box functions

wat.addEventListener("click", () => {
	whatsappBox.style.display = "block";
});

whatsappCancel.addEventListener("click", () => {
	whatsappBox.style.display = "none";
});

// details to be submited
const inputArr = Array.from(put);

// DemoClass
sub.addEventListener("click", async (e) => {
    e.preventDefault();
    
    const input = [];
	inputArr.map((inputs) => input.push(inputs.value));
    console.log(input);

	// Data to be sent to the DataBase
	const data = {
		guardian_firstname: input[0],
		guardian_lasstname: input[1],
		guardian_phone_no: input[2],
		guardian_email: input[3],
		firstname: input[4],
		lastname: input[5],
		phone_no: input[6],
		email: input[7],
		age: input[8],
		gender: input[9],
		location: input[10],
		course: input[11],
		class_type: input[12],
		req_type: "POST",
	};

    console.log(data);
	// try {
		

	// 	modalPar.style.display = "flex";
	// 	console.log(res);
	// } catch (error) {
	// 	console.log(error);
	// }

    await fetch(
        "https://blooming-atoll-51549.herokuapp.com/registration/register",
        {
            method: "POST",
            body: JSON.stringify({
                guardian_firstname: "test",
                guardian_lasstname: "test",
                guardian_phone_no: "test",
                guardian_email: "test",
                firstname: "test",
                lastname: "test",
                phone_no: "test",
                email: "test",
                age: 12,
                gender: "test",
                location: "test",
                course: "test",
                class_type: "test",
                req_type: "POST",
            }),
          
        },
    ).then((res)=> {
        console.log(res)
    }).catch((error)=> {
        console.log(error)
    })
});

// Sending the data

modalCancel.addEventListener("click", (e) => {
	modalPar.style.display = "none";
});

// Front-End class

FE.addEventListener(
	"click",
	function payWithPaystack(e) {
		e.preventDefault();

		let handler = PaystackPop.setup({
			key: "pk_live_1c26c9ed723c19c3aac8bacb48d544386bf5608e", // Replace with your public key
			email: email.value,
			amount: 20000000,
			ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
			// label: "Optional string that replaces customer email"
			onClose: function () {},
			callback: function (response) {
				let message = "Payment complete! Reference: " + response.reference;
				text.textContent = "Payment Successful";
				modalPar.style.display = "flex";
			},
		});

		handler.openIframe();
	},
	false,
);

// Back End

BE.addEventListener(
	"click",
	function payWithPaystack(e) {
		e.preventDefault();

		let handler = PaystackPop.setup({
			key: "pk_live_1c26c9ed723c19c3aac8bacb48d544386bf5608", // Replace with your public key
			email: email.value,
			amount: 30000000,
			ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
			// label: "Optional string that replaces customer email"
			onClose: function () {},
			callback: function (response) {
				let message = "Payment complete! Reference: " + response.reference;
				text.textContent = "Payment Successful";
				modalPar.style.display = "flex";
			},
		});

		handler.openIframe();
	},
	false,
);

// Full Stack

FS.addEventListener(
	"click",
	function payWithPaystack(e) {
		e.preventDefault();

		let handler = PaystackPop.setup({
			key: "pk_live_1c26c9ed723c19c3aac8bacb48d544386bf5608", // Replace with your public key
			email: email.value,
			amount: 50000000,
			ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
			// label: "Optional string that replaces customer email"
			onClose: function () {},
			callback: function (response) {
				let message = "Payment complete! Reference: " + response.reference;
				text.textContent = "Payment Successful";
				modalPar.style.display = "flex";
			},
		});

		handler.openIframe();
	},
	false,
);

// Summer Boot camp

SB.addEventListener(
	"click",
	function payWithPaystack(e) {
		e.preventDefault();

		let handler = PaystackPop.setup({
			key: "pk_live_1c26c9ed723c19c3aac8bacb48d544386bf5608", // Replace with your public key
			email: email.value,
			amount: 5000000,
			ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
			// label: "Optional string that replaces customer email"
			onClose: function () {},
			callback: function (response) {
				let message = "Payment complete! Reference: " + response.reference;
				text.textContent = "Payment Successful";
				modalPar.style.display = "flex";
			},
		});

		handler.openIframe();
	},
	false,
);

// Weekend-Class

WC.addEventListener(
	"click",
	function payWithPaystack(e) {
		e.preventDefault();

		let handler = PaystackPop.setup({
			key: "pk_live_1c26c9ed723c19c3aac8bacb48d544386bf5608", // Replace with your public key
			email: email.value,
			amount: 3000000,
			ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
			// label: "Optional string that replaces customer email"
			onClose: function () {},
			callback: function (response) {
				let message = "Payment complete! Reference: " + response.reference;
				text.textContent = "Payment Successful";
				modalPar.style.display = "flex";
			},
		});

		handler.openIframe();
	},
	false,
);

modalCancel.addEventListener("click", (e) => {
	modalPar.style.display = "none";
});

Program.addEventListener("change", () => {
	if (Program.value === "Demo Free Class") {
		FE.style.display = "none";
		BE.style.display = "none";
		FS.style.display = "none";
		SB.style.display = "none";
		WC.style.display = "none";
		sub.style.display = "block";
	} else if (Program.value === "Front-End(web)") {
		FE.style.display = "block";
		BE.style.display = "none";
		FS.style.display = "none";
		SB.style.display = "none";
		WC.style.display = "none";
		sub.style.display = "none";
	} else if (Program.value === "Back-End(Web)") {
		FE.style.display = "none";
		BE.style.display = "block";
		FS.style.display = "none";
		SB.style.display = "none";
		WC.style.display = "none";
		sub.style.display = "none";
	} else if (Program.value === "Full-Stack(web)") {
		FE.style.display = "none";
		BE.style.display = "none";
		FS.style.display = "block";
		SB.style.display = "none";
		WC.style.display = "none";
		sub.style.display = "none";
	} else if (Program.value === "Summer Bootcamp") {
		FE.style.display = "none";
		BE.style.display = "none";
		FS.style.display = "none";
		SB.style.display = "block";
		WC.style.display = "none";
		sub.style.display = "none";
	} else if (Program.value === "Weekend-Classes") {
		FE.style.display = "none";
		BE.style.display = "none";
		FS.style.display = "none";
		SB.style.display = "none";
		WC.style.display = "block";
		sub.style.display = "none";
	}
});
