// Enable draggable windows
document.querySelectorAll('.title-bar').forEach(bar => {
    bar.addEventListener('mousedown', function (e) {
        const windowElement = this.closest('.window');
        const shiftX = e.clientX - windowElement.getBoundingClientRect().left;
        const shiftY = e.clientY - windowElement.getBoundingClientRect().top;

        function onMouseMove(event) {
            windowElement.style.left = event.clientX - shiftX + 'px';
            windowElement.style.top = event.clientY - shiftY + 'px';
        }

        document.addEventListener('mousemove', onMouseMove);

        document.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            document.onmouseup = null;
        };
    });

    bar.ondragstart = function () {
        return false;
    };
});

// Close windows
document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.window').style.display = 'none';
    });
});

// Start menu interactions
document.querySelector('.start-menu button').addEventListener('click', () => {
    document.querySelector('.start-menu-popup').classList.toggle('hidden');
});

// Open specific windows from start menu
document.querySelector('#openWelcome').addEventListener('click', () => {
    document.querySelector('#welcomeWindow').style.display = 'block';
});

document.querySelector('#openAbout').addEventListener('click', () => {
    document.querySelector('#aboutWindow').style.display = 'block';
});

document.querySelector('#openVideo').addEventListener('click', () => {
    document.querySelector('#videoWindow').style.display = 'block';
});

document.querySelector('#openSocials').addEventListener('click', () => {
    document.querySelector('#socialsWindow').style.display = 'block';
});

document.querySelector('#openControlPanel').addEventListener('click', () => {
    document.querySelector('#controlPanelWindow').style.display = 'block';
});

// Automatically open video window on page load and play the video
window.onload = function() {
    const videoWindow = document.querySelector('#videoWindow');
    const video = document.querySelector('#welcomeVideo');
    videoWindow.style.display = 'block';
    video.play();

    const cotaPopupWindow = document.querySelector('#cotaPopupWindow');
    cotaPopupWindow.style.display = 'block';
};
