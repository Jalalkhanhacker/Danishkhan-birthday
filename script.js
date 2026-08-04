"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       ELEMENTS
    ========================================= */

    const countdownScreen =
        document.getElementById("countdownScreen");

    const birthdayWebsite =
        document.getElementById("birthdayWebsite");

    const daysEl =
        document.getElementById("days");

    const hoursEl =
        document.getElementById("hours");

    const minutesEl =
        document.getElementById("minutes");

    const secondsEl =
        document.getElementById("seconds");

    const countdownText =
        document.getElementById("countdownText");

    const gift =
        document.getElementById("gift");

    const giftText =
        document.getElementById("giftText");

    const surpriseButton =
        document.getElementById("surpriseButton");

    const voiceButton =
        document.getElementById("voiceButton");

    const floatingItems =
        document.getElementById("floatingItems");

    const canvas =
        document.getElementById("fireworks");


    /* =========================================
       20 AUGUST COUNTDOWN
    ========================================= */

    function getNextBirthday() {

        const now = new Date();

        let year = now.getFullYear();

        /*
          JavaScript:
          January = 0
          February = 1
          ...
          August = 7
        */

        let target =
            new Date(
                year,
                7,
                20,
                0,
                0,
                0
            );

        /*
          Agar is saal 20 August
          guzar chuki hai to next year.
        */

        if (target <= now) {

            target =
                new Date(
                    year + 1,
                    7,
                    20,
                    0,
                    0,
                    0
                );

        }

        return target;
    }


    const birthdayTarget =
        getNextBirthday();


    /* =========================================
       COUNTDOWN UPDATE
    ========================================= */

    function updateCountdown() {

        const now = new Date();

        const difference =
            birthdayTarget.getTime() -
            now.getTime();


        if (difference <= 0) {

            if (daysEl)
                daysEl.textContent = "00";

            if (hoursEl)
                hoursEl.textContent = "00";

            if (minutesEl)
                minutesEl.textContent = "00";

            if (secondsEl)
                secondsEl.textContent = "00";

            showBirthdayWebsite();

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
                (1000 * 60 * 60)) % 24
            );


        const minutes =
            Math.floor(
                (difference /
                (1000 * 60)) % 60
            );


        const seconds =
            Math.floor(
                (difference / 1000) % 60
            );


        if (daysEl) {

            daysEl.textContent =
                String(days).padStart(2, "0");

        }


        if (hoursEl) {

            hoursEl.textContent =
                String(hours).padStart(2, "0");

        }


        if (minutesEl) {

            minutesEl.textContent =
               
