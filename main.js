const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const mute = document.querySelector(".mute")

btn.addEventListener('click', function() {
    if(!btn.classList.contains('slide')) {
        btn.classList.add('slide');
        video.pause();
    } else {
        btn.classList.remove('slide');
        video.play();
    };
});

mute.addEventListener('click', function() {
    if(mute.textContent === 'Unmuted') {
        mute.textContent = 'Muted';
        video.muted = false;
    } else {
        mute.textContent = 'Unmuted';
        video.muted = true;
    };
});