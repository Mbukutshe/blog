const posts = document.querySelector('#posts');
const my_posts = document.querySelector('#mposts');
const home = document.querySelector('#home');
const more = document.querySelector('#more');

posts.addEventListener('click', () => 
{
    window.open('/posts', '_top');
});

my_posts.addEventListener('click', () => 
{
    window.open('/user_posts', '_top');
});

more.addEventListener('click', () => 
{
    window.open('/single-posts', '_top');
});

home.addEventListener('click', () => 
{
    window.open('/', '_top');
});