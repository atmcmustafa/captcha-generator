let text = document.getElementById("captcha-text"),
reload =  document.getElementById("captcha-reload"),
enter = document.getElementById("captcha-enter"),
check = document.getElementById("captcha-verify"),
result = document.getElementById("captcha-result");

let loading = document.getElementById("loading")

let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function getCaptcha() {
    
    for (let i = 0; i < 6 ; i++) {  
    let letter = allCharacters[Math.floor(Math.random() * allCharacters.length)]
    text.innerText += ` ${letter}`  
    }   
}

check.addEventListener("click", () => {
    result.style.display = "Block"
    let inputVal = enter.value.split('').join(' ');

    if(inputVal == text.innerText) {
        result.style.color ="#4db2ec"
        result.innerText = `Nice! Captcha is true.`
        loader();
        setTimeout(() => {
            removeContent();
            getCaptcha();
            removeloader();
        }, 3000);
    }
    else {
        result.style.color = "#ff0000";
        result.innerText = `Bad. Captcha is false. Try again.`
    }

})

function removeContent() {
    text.innerText ="";
    enter.value ="";
    result.style.display = "none"
}

reload.addEventListener("click", () => {
    removeContent();
    loader()
    setTimeout(() => {
        getCaptcha();
        removeloader()
    }, 500);
})

function loader() {
    loading.style.display = "block";
}

function removeloader() {
    loading.style.display = "none";
}
getCaptcha();