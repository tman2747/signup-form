let password1 = document.querySelector("#password");
let password2 = document.querySelector("#passwordConfirm");
let PasswordTEXT = document.querySelector("#PasswordTEXT")
const createAccountButton = document.querySelector(".createAccountButton")

console.log(createAccountButton.innerHTML)


password2.addEventListener("input", (e)=>{
    if (password1.value !== password2.value)
    {
        PasswordTEXT.style.opacity = 1;
        createAccountButton.style.opacity = 0;
        password2.style.border = 'rgb(255, 0, 0) 2px solid';

    }
    else
    {
        PasswordTEXT.style.opacity = 0;
        createAccountButton.style.opacity = 1;

    }
})
