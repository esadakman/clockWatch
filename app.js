let min = 0,
  sec = 0,
  msec = 0;
let timer;

const playPauseButton = document.getElementsByClassName("fas")[0];
const stopButton = document.getElementsByClassName("fas")[1];
const timekeeper = document.getElementById("timekeeper");

const run = () => {
  timekeeper.innerHTML =
    (min < 10 ? "0" + min : min) +
    ":" +
    (sec < 10 ? "0" + sec : sec) +
    ":" +
    (msec < 10 ? "0" + msec : msec);
  msec++;
  if (msec === 100) {
    sec++;
    msec = 0;
  }
  if (sec === 60) {
    min++;
    sec = 0;
  }
};

const start = () => {
  timer = setInterval(run, 10);
  // console.log(timer);
};

playPauseButton.addEventListener("click", (e) => {
  e.target.className === "fas fa-play" ? start() : clearInterval(timer);

  e.target.className =
    e.target.className === "fas fa-play" ? "fas fa-pause" : "fas fa-play";
});

stopButton.addEventListener("click", (e) => {
  if (playPauseButton.className === "fas fa-play") {
    clearInterval(timer);
    timekeeper.innerHTML = "00:00:00";
  } else {
    clearInterval(timer);
    timekeeper.innerHTML = "00:00:00";
    playPauseButton.className = "fas fa-play";
  }
  msec = 0;
  sec = 0;
  min = 0;
});



  // let [sSeconds, setsSeconds] = useState(0);
  // let [minutes, setMinutes] = useState();
  // let [seconds, setSeconds] = useState();
  // setInterval(() => {
  // let sSecond = 0;
  // setsSeconds(sSecond++);
  // let minute = "00";
  // setMinutes(minute);
  // let second = "00";
  // setSeconds(second);
  // }, 1000);
  // sSecond = 0;
  // let run = () => {};
  // setInterval(() => {
    // setsSeconds(sSeconds++);
    // console.log(sSeconds);
  // }, 1000);

  // const start = () => {
  //   timer = setInterval(run, 10);
  // console.log(timer);
  // };