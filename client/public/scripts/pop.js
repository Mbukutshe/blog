const modal = document.querySelector('#popUp');
const close = document.querySelector('#dismiss');
const login = document.querySelector('#login');
const register = document.querySelector('#register');
const forgot = document.querySelector('#forgot');
const login_section = document.querySelector('#login-section');
const register_section = document.querySelector('#register-section');
const have_account = document.querySelector('#have-account');
const login_btn = document.querySelector('#login-btn');
const register_btn = document.querySelector('#register-btn');
const message_label = document.querySelector('#message-label');


login_btn.addEventListener('click', () => 
{
   // login_section.method = 'POST';
  //login_section.action = '/user_posts';
    
 //   login_section.submit();
});

register_btn.addEventListener('click', () => 
{
    let username = document.getElementsByName('reg_user').value;
    let email = document.getElementsByName('reg_email').value;
    let password = document.getElementsByName('reg_pass').value;
    let confpassowrd = document.getElementsByName('confpass').value;

    if (password === confpassowrd)
    {
        //send the values to the server;
    }
    else
    {
        message_label.innerHTML = "Passwords do not match!";
    }

   // login_section.method = 'POST';
  //login_section.action = '/user_posts';
    
 //   login_section.submit();
});

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
    register_section.style.display = 'flex';
});

have_account.addEventListener('click', () =>
{
    login_section.style.display = 'flex';
    register_section.style.display = 'none';
});