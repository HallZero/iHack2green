let circularProgress = document.querySelector('.circular-progress');
let progressValue = document.querySelector('.progress-value');

let progressStartValue = 0, 
    progressEndValue = 66,
    speed = 10;
    
let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#70db70 ${progressStartValue}%, #2d3740 ${progressStartValue}% 100%)`;

    if(progressStartValue == progressEndValue) {
        clearInterval(progress);
    }
}, speed);