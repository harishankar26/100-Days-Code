window.addEventListener("load", () => {
    var a = document.getElementById('createAccount');
    console.log(a)
    a.addEventListener("click", () => {
        var loginForm = document.getElementsByClassName('login-form')[0];
        var registerForm = document.getElementsByClassName('register-form')[0];

        loginForm.setAttribute('style', 'display:none;');
        registerForm.setAttribute('style', 'display:block;');
    });

    var loginAnchor = document.getElementById('login');
    loginAnchor.addEventListener('click', () => {
        var loginForm = document.getElementsByClassName('login-form')[0];
        var registerForm = document.getElementsByClassName('register-form')[0];

        loginForm.setAttribute('style', 'display:block;');
        registerForm.setAttribute('style', 'display:none;');      
    })
})