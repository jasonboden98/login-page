//select element
const startButton = document.getElementById('startLogin');
const loginBox = document.getElementById('loginBox');

//switch state
//fucking this up, cant figure it out, moving on
//function fadeOutElement(loginBox) {
//    const element = document.getElementById(loginBox);
//    if (element) {
//        element.classList.add('fade-out');
//        element.addEventListener('transitioned', () => {
//            element.classList.add('hidden');
//        }, {once: true});
//    }
//}

startButton.addEventListener('click', () => {
    startButton.classList.add('hidden');
    loginBox.classList.remove('hidden');
});

//handle form submission
document.getElementById('submitLogin').addEventListener('click', () => {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user && pass) {
        alert('logging in as ${user}');
    }
    else {
        alert('Please fill in fields');
    }
});