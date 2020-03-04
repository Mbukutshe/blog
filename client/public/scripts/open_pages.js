const posts = document.querySelector('#posts');
const my_posts = document.querySelector('#mposts');
const home = document.querySelector('#home');

posts.addEventListener('click', () => 
{
    window.open('/posts', '_top');
});

my_posts.addEventListener('click', () => 
{
    window.open('/user_posts', '_top');
});

home.addEventListener('click', () => 
{
    window.open('/', '_top');
});