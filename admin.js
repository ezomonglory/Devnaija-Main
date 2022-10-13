const login = document.getElementById("login")
const password = document.getElementById("password")
const form = document.getElementById("form")
const btn = document.getElementById("btn")
const invalid = document.getElementById("invalid")
const valid = document.getElementById("valid")
const link = document.getElementById("link")


btn.addEventListener("click", (e)=> {
    e.preventDefault
    handleSubmit()
})

const handleSubmit = () => {
    console.log(login.value, password.value)
    if (login.value === "DevnaijaAcademy" && password.value === "123456") {
        invalid.style.display = "block"                
        invalid.style.color = "green"
        invalid.textContent = "Login Sucessfull"       
        console.log(login.value, password.value)
        link.setAttribute("href", "./Upload.html")
    } else{
        invalid.style.color = "red"
        invalid.textContent = "Invalid Username or Password"       
        invalid.style.display = "block"
    }
}

