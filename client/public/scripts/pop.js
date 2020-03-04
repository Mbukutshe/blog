const modal = document.querySelector('#popUp');
const close = document.querySelector('#dismiss');
const login = document.querySelector('#login');
const register = document.querySelector('#register');
const forgot = document.querySelector('#forgot');
const login_section = document.querySelector('#login-section');
const register_section = document.querySelector('#register-section');
const have_account = document.querySelector('#have-account');

login.addEventListener('click', () => 
{
    modal.style.display = 'block';
});

close.addEventListener('click', () =>
{
    modal.style.display = 'none';
});

register.addEventListener('click', () =>
{
    login_section.style.display = 'none';
    register_section.style.display = 'block';
});

have_account.addEventListener('click', () =>
{
    login_section.style.display = 'block';
    register_section.style.display = 'none';
});