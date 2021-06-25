import './sass/main.scss';

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
let timerId = null;

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', onChangeBgr);
refs.stopBtn.addEventListener('click', stopChangeBgr);

function onChangeBgr(e) {
  refs.startBtn.disabled = true;

  timerId = setInterval(() => {
    document.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
}

function stopChangeBgr(e) {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
}
