let password1 = document.querySelector("#password");
let password2 = document.querySelector("#passwordConfirm");
let PasswordTEXT = document.querySelector("#PasswordTEXT")



password2.addEventListener("input", (e)=>{
    if (password1.value !== password2.value)
    {
        PasswordTEXT.style.opacity = 1;
        password2.style.border = 'rgb(255, 0, 0) 1px solid';
        password1.style.border = 'rgb(255, 0, 0) 1px solid';

    }
    else
    {
        PasswordTEXT.style.opacity = 0;
        password2.style.border = 'rgb(0, 0, 0) 1px solid';
        password1.style.border = 'rgb(0, 0, 0) 1px solid';

    }
})
