let image_upload = document.querySelector('#images-upload');
let choose_images = document.querySelector('#choose-images');
let preview_images = document.querySelector('#preview-images');

let file_input = document.createElement('input');
file_input.type = 'file';
file_input.accept = 'image/*';
file_input.multiple = true;

choose_images.addEventListener('click', () =>
{
    file_input.click();
});

file_input.addEventListener('change', () =>
{
    images(file_input.files);
});

let images = (images) => 
{
    let count = 0;
    let total = images.length;

    while (count < total)
    {
        preview(images[count]);
        count++;
    }
}

let preview = (image) =>
{
    let pic = document.createElement('img');
    pic.className = 'prev-images';
    preview_images.appendChild(pic);

    let fileReader = new FileReader();
    fileReader.addEventListener('load', () => {
        pic.src = fileReader.result;
    });
    fileReader.readAsDataURL(image);
}