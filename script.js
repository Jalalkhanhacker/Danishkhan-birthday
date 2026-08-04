/* =====================================================
   DANISH KHAN — PREMIUM BIRTHDAY WEBSITE V2.0
===================================================== */


/* ================= COUNTDOWN ================= */

const countdownScreen = document.getElementById("countdownScreen");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const countdownText =
  document.getElementById("countdownText");

const birthdayWebsite =
  document.getElementById("birthdayWebsite");


/*
   20 August
   Month 7 = August because JavaScript months
   start from 0.
*/

function getNextBirthday() {

  const now = new Date();

  let year = now.getFullYear();

  let birthday =
    new Date(year, 7, 20, 0, 0, 0);

  if (now >= birthday) {

    birthday =
      new Date(year + 1, 7, 20, 0, 0, 0);

  }

  return birthday;

}


let birthdayDate =
  getNextBirthday();


function updateCountdown() {

  const now = new Date();

  const difference =
    birthdayDate - now;


  /* Birthday reached */

  if (difference <= 0) {

    openBirthdayWebsite();

    return;

  }


  const days =
    Math.floor(
      difference /
      (1000 * 60 * 60 * 24)
    );


  const hours =
    Math.floor(
      (difference /
        (1000 * 60 * 60)) %
        24
    );


  const minutes =
    Math.floor(
      (difference
// FORCE OPEN AFTER COUNTDOWN
setTimeout(() => {
    countdownScreen.classList.add("hide");

    setTimeout(() => {
        birthdayWebsite.classList.add("show");
        startBirthdayEffects();
    }, 900);

}, 5000);
