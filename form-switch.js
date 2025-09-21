const formBg = document.getElementsByClassName('form-background')[0];
const switchBtn = document.getElementsByClassName('form-background__btn')[0];
const formBgText = document.getElementsByClassName('form-background__title')[0];
let mode = 'signup';

switchBtn.addEventListener('click', () => {
    if (mode === 'signup') {
        formBg.style.clipPath = 'ellipse(100% 100% at right center)';
        formBg.style.left = '50%';
        formBgText.innerHTML = 'Don\'t have an account?'
        switchBtn.innerHTML = 'Sign Up'
        mode = 'login';

    } else {
        formBg.style.clipPath = 'ellipse(95% 100% at left center)';
        formBg.style.left = '0';
        formBgText.innerHTML = `Do you have an account?`
        switchBtn.innerHTML = 'Login'
        mode = 'signup';

    }
})


