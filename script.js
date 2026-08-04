/* =========================================================
   DANISH KHAN — PREMIUM BIRTHDAY WEBSITE
   Complete script.js
========================================================= */

"use strict";

/* =========================================================
   ELEMENTS
========================================================= */

const countdownScreen = document.getElementById("countdownScreen");
const birthdayWebsite = document.getElementById("birthdayWebsite");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const countdownText = document.getElementById("countdownText");

const gift = document.getElementById("gift");
const giftText = document.getElementById("giftText");

const surpriseButton = document.getElementById("surpriseButton");
const fireworkButton = document.getElementById("fireworkButton");

const floatingItems = document.getElementById("floatingItems");

const canvas = document.getElementById("fireworks");

const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const dotsContainer = document.getElementById("dots");

const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const popupWish = document.getElementById("popupWish");

const voiceButton = document.getElementById("voiceButton");


/* =========================================================
   SAFE HELPERS
========================================================= */

function exists(element) {
    return element !== null && element !== undefined;
}


/* =========================================================
   BIRTHDAY DATE
========================================================= */

function getNextBirthday() {

    const now = new Date();

    let year = now.getFullYear();

    /*
       JavaScript months:
       January = 0
       August = 7
    */

    let birthday = new Date(
        year,
        7,
        20,
        0,
        0,
        0
    );

    if (now >= birthday) {

        birthday = new Date(
            year + 1,
            7,
            20,
            0,
            0,
            0
        );

    }

    return birthday;
}


let birthdayDate = getNextBirthday();


/* =========================================================
   COUNTDOWN
========================================================= */

function updateCountdown() {

    const now = new Date();

    let difference =
        birthdayDate.getTime() -
        now.getTime();


    if (difference <= 0) {

        if (exists(daysElement))
            daysElement.textContent = "00";

        if (exists(hoursElement))
            hoursElement.textContent = "00";

        if (exists(minutesElement))
            minutesElement.textContent = "00";

        if (exists(secondsElement))
            secondsElement.textContent = "00";

        openBirthdayWebsite();

        return;
    }


    const days = Math.floor(
        difference /
        (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference /
            (1000 * 60 * 60)) % 24
    );


    const minutes = Math.floor(
        (difference /
            (1000 * 60)) % 60
    );


    const seconds = Math.floor(
        (
