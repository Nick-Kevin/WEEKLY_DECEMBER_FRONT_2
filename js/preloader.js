document.body.style.overflowY = 'hidden';

document.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    document.body.style.overflowY = 'auto';
});