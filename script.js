/* =====================================
   DANISH KHAN PREMIUM BIRTHDAY v2.0
   ===================================== */

const birthdayText =
  "May your next chapter be filled with happiness, barakah and success. 💙";

const typingElement = document.getElementById("typing");

let typingIndex = 0;

function typeText() {
  if (typingIndex < birthdayText.length) {
    typingElement.textContent += birthdayText.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeText, 45);
  }
}

typeText();

/* ==============================
   COUNTDOWN
   ============================== */

function getNextBirthday() {

  const now = new Date();

  let year = now.getFullYear();

  let target = new Date(
    year,
    7,
    20,
    0,
    0,
    0
  );

  if (target <= now) {
    target = new Date(
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

function updateCountdown() {

  const target = getNextBirthday();

  const now = new Date();

  const difference = target - now;

  const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );

  const seconds = Math.floor(
    (difference / 1000) % 60
  );

  document.getElementById("days").textContent =
    String(days).padStart(2, "0");

  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);

/* ==============================
   PHOTO SLIDESHOW
   ============================== */

const photos = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg"
];

let photoIndex = 0;

const slideshow =
  document.getElementById("slideshow");

const dots =
  document.getElementById("dots");

photos.forEach((photo, index) => {

  const dot = document.createElement("div");

  dot.className =
    index === 0 ? "dot active" : "dot";

  dots.appendChild(dot);

});

function changePhoto() {

  photoIndex++;

  if (photoIndex >= photos.length) {
    photoIndex = 0;
  }

  slideshow.style.opacity = "0";

  setTimeout(() => {

    slideshow.src = photos[photoIndex];

    slideshow.style.opacity = "1";

    document.querySelectorAll(".dot")
      .forEach((dot, index) => {
        dot.classList.toggle(
          "active",
          index === photoIndex
        );
      });

  }, 350);
}

setInterval(changePhoto, 4000);

/* ==============================
   FLOATING HEARTS
   ============================== */

function createHeart() {

  const heart = document.createElement("div");

  heart.className = "heart";

  heart.textContent =
    Math.random() > .5 ? "💙" : "❤️";

  heart.style.left =
    Math.random() * 100 + "vw";

  heart.style.bottom =
    "-30px";

  heart.style.fontSize =
    (15 + Math.random() * 25) + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(createHeart, 1200);

/* ==============================
   STAR BACKGROUND
   ============================== */

const canvas =
  document.getElementById("stars");

const ctx =
  canvas.getContext("2d");

let stars = [];

function resizeCanvas() {

  canvas.width =
    window.innerWidth;

  canvas.height =
    window.innerHeight;

  stars = [];

  for (let i = 0; i < 120; i++) {

    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8,
      speed: .1 + Math.random() * .4
    });

  }
}

resizeCanvas();

window.addEventListener(
  "resize",
  resizeCanvas
);

function drawStars() {

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  ctx.fillStyle = "rgba(255,255,255,.8)";

  stars.forEach(star => {

    ctx.beginPath();

    ctx.arc(
      star.x,
      star.y,
      star.r,
      0,
      Math.PI * 2
    );

    ctx.fill();

    star.y += star.speed;

    if (star.y > canvas.height) {
      star.y = 0;
    }

  });

  requestAnimationFrame(drawStars);
}

drawStars();

/* ==============================
   SURPRISE
   ============================== */

const surpriseBtn =
  document.getElementById("surpriseBtn");

const finalMessage =
  document.getElementById("finalMessage");

surpriseBtn.addEventListener(
  "click",
  () => {

    finalMessage.scrollIntoView({
      behavior: "smooth"
    });

    for (let i = 0; i < 25; i++) {
      setTimeout(createHeart, i * 70);
    }

    if ("speechSynthesis" in window) {

      const speech =
        new SpeechSynthesisUtterance(
          "Happy Birthday Danish Khan. May Allah bless you with happiness, success, peace and countless beautiful memories."
        );

      speech.rate = .9;
      speech.pitch = 1;

      window.speechSynthesis.speak(speech);
    }

  }
);

/* ==============================
   AI BIRTHDAY MESSAGE
   ============================== */

const aiMessages = [

  "Danish, may Allah open the doors of success for you and fill your life with peace and happiness. 💙",

  "A new year of life, a new chapter of memories. May every step ahead bring you closer to your dreams. ✨",

  "May Allah protect you, bless your family, increase your happiness and make your future brighter than ever. 🤲💙",

  "Happy Birthday Danish! Keep smiling, keep growing and keep making beautiful memories. 🎂✨"

];

const aiBtn =
  document.getElementById("aiBtn");

const aiMessage =
  document.getElementById("aiMessage");

aiBtn.addEventListener(
  "click",
  () => {

    const random =
      Math.floor(
        Math.random() * aiMessages.length
      );

    aiMessage.textContent =
      aiMessages[random];

    if ("speechSynthesis" in window) {

      speechSynthesis.cancel();

      const voice =
        new SpeechSynthesisUtterance(
          aiMessages[random]
        );

      voice.rate = .9;

      speechSynthesis.speak(voice);
    }

  }
);

/* ==============================
   MUSIC BUTTON
   ============================== */

let audioContext;
let musicPlaying = false;

const musicBtn =
  document.getElementById("musicBtn");

function startAmbientMusic() {

  if (!audioContext) {

    audioContext =
      new (
        window.AudioContext ||
        window.webkitAudioContext
      )();

  }

  const oscillator =
    audioContext.createOscillator();

  const gain =
    audioContext.createGain();

  oscillator.type = "sine";

  oscillator.frequency.value = 220;

  gain.gain.value = .025;

  oscillator.connect(gain);

  gain.connect(
    audioContext.destination
  );

  oscillator.start();

  musicPlaying = true;

  musicBtn.textContent = "⏸️";

  musicBtn.dataset.active = "true";

  window.currentOscillator =
    oscillator;
}

musicBtn.addEventListener(
  "click",
  () => {

    if (!musicPlaying) {

      startAmbientMusic();

    } else {

      if (
        window.currentOscillator
      ) {
        window.currentOscillator.stop();
      }

      musicPlaying = false;

      musicBtn.textContent = "🎵";
    }

  }
);

/* ==============================
   SOUND BUTTON
   ============================== */

const soundBtn =
  document.getElementById("soundBtn");

let soundEnabled = true;

soundBtn.addEventListener(
  "click",
  () => {

    soundEnabled =
      !soundEnabled;

    soundBtn.textContent =
      soundEnabled ? "🔊" : "🔇";

  }
);/* =====================================
   DANISH KHAN PREMIUM BIRTHDAY v2.0
   ===================================== */

const birthdayText =
  "May your next chapter be filled with happiness, barakah and success. 💙";

const typingElement = document.getElementById("typing");

let typingIndex = 0;

function typeText() {
  if (typingIndex < birthdayText.length) {
    typingElement.textContent += birthdayText.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeText, 45);
  }
}

typeText();

/* ==============================
   COUNTDOWN
   ============================== */

function getNextBirthday() {

  const now = new Date();

  let year = now.getFullYear();

  let target = new Date(
    year,
    7,
    20,
    0,
    0,
    0
  );

  if (target <= now) {
    target = new Date(
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

function updateCountdown() {

  const target = getNextBirthday();

  const now = new Date();

  const difference = target - now;

  const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );

  const seconds = Math.floor(
    (difference / 1000) % 60
  );

  document.getElementById("days").textContent =
    String(days).padStart(2, "0");

  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);

/* ==============================
   PHOTO SLIDESHOW
   ============================== */

const photos = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg"
];

let photoIndex = 0;

const slideshow =
  document.getElementById("slideshow");

const dots =
  document.getElementById("dots");

photos.forEach((photo, index) => {

  const dot = document.createElement("div");

  dot.className =
    index === 0 ? "dot active" : "dot";

  dots.appendChild(dot);

});

function changePhoto() {

  photoIndex++;

  if (photoIndex >= photos.length) {
    photoIndex = 0;
  }

  slideshow.style.opacity = "0";

  setTimeout(() => {

    slideshow.src = photos[photoIndex];

    slideshow.style.opacity = "1";

    document.querySelectorAll(".dot")
      .forEach((dot, index) => {
        dot.classList.toggle(
          "active",
          index === photoIndex
        );
      });

  }, 350);
}

setInterval(changePhoto, 4000);

/* ==============================
   FLOATING HEARTS
   ============================== */

function createHeart() {

  const heart = document.createElement("div");

  heart.className = "heart";

  heart.textContent =
    Math.random() > .5 ? "💙" : "❤️";

  heart.style.left =
    Math.random() * 100 + "vw";

  heart.style.bottom =
    "-30px";

  heart.style.fontSize =
    (15 + Math.random() * 25) + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(createHeart, 1200);

/* ==============================
   STAR BACKGROUND
   ============================== */

const canvas =
  document.getElementById("stars");

const ctx =
  canvas.getContext("2d");

let stars = [];

function resizeCanvas() {

  canvas.width =
    window.innerWidth;

  canvas.height =
    window.innerHeight;

  stars = [];

  for (let i = 0; i < 120; i++) {

    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8,
      speed: .1 + Math.random() * .4
    });

  }
}

resizeCanvas();

window.addEventListener(
  "resize",
  resizeCanvas
);

function drawStars() {

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  ctx.fillStyle = "rgba(255,255,255,.8)";

  stars.forEach(star => {

    ctx.beginPath();

    ctx.arc(
      star.x,
      star.y,
      star.r,
      0,
      Math.PI * 2
    );

    ctx.fill();

    star.y += star.speed;

    if (star.y > canvas.height) {
      star.y = 0;
    }

  });

  requestAnimationFrame(drawStars);
}

drawStars();

/* ==============================
   SURPRISE
   ============================== */

const surpriseBtn =
  document.getElementById("surpriseBtn");

const finalMessage =
  document.getElementById("finalMessage");

surpriseBtn.addEventListener(
  "click",
  () => {

    finalMessage.scrollIntoView({
      behavior: "smooth"
    });

    for (let i = 0; i < 25; i++) {
      setTimeout(createHeart, i * 70);
    }

    if ("speechSynthesis" in window) {

      const speech =
        new SpeechSynthesisUtterance(
          "Happy Birthday Danish Khan. May Allah bless you with happiness, success, peace and countless beautiful memories."
        );

      speech.rate = .9;
      speech.pitch = 1;

      window.speechSynthesis.speak(speech);
    }

  }
);

/* ==============================
   AI BIRTHDAY MESSAGE
   ============================== */

const aiMessages = [

  "Danish, may Allah open the doors of success for you and fill your life with peace and happiness. 💙",

  "A new year of life, a new chapter of memories. May every step ahead bring you closer to your dreams. ✨",

  "May Allah protect you, bless your family, increase your happiness and make your future brighter than ever. 🤲💙",

  "Happy Birthday Danish! Keep smiling, keep growing and keep making beautiful memories. 🎂✨"

];

const aiBtn =
  document.getElementById("aiBtn");

const aiMessage =
  document.getElementById("aiMessage");

aiBtn.addEventListener(
  "click",
  () => {

    const random =
      Math.floor(
        Math.random() * aiMessages.length
      );

    aiMessage.textContent =
      aiMessages[random];

    if ("speechSynthesis" in window) {

      speechSynthesis.cancel();

      const voice =
        new SpeechSynthesisUtterance(
          aiMessages[random]
        );

      voice.rate = .9;

      speechSynthesis.speak(voice);
    }

  }
);

/* ==============================
   MUSIC BUTTON
   ============================== */

let audioContext;
let musicPlaying = false;

const musicBtn =
  document.getElementById("musicBtn");

function startAmbientMusic() {

  if (!audioContext) {

    audioContext =
      new (
        window.AudioContext ||
        window.webkitAudioContext
      )();

  }

  const oscillator =
    audioContext.createOscillator();

  const gain =
    audioContext.createGain();

  oscillator.type = "sine";

  oscillator.frequency.value = 220;

  gain.gain.value = .025;

  oscillator.connect(gain);

  gain.connect(
    audioContext.destination
  );

  oscillator.start();

  musicPlaying = true;

  musicBtn.textContent = "⏸️";

  musicBtn.dataset.active = "true";

  window.currentOscillator =
    oscillator;
}

musicBtn.addEventListener(
  "click",
  () => {

    if (!musicPlaying) {

      startAmbientMusic();

    } else {

      if (
        window.currentOscillator
      ) {
        window.currentOscillator.stop();
      }

      musicPlaying = false;

      musicBtn.textContent = "🎵";
    }

  }
);

/* ==============================
   SOUND BUTTON
   ============================== */

const soundBtn =
  document.getElementById("soundBtn");

let soundEnabled = true;

soundBtn.addEventListener(
  "click",
  () => {

    soundEnabled =
      !soundEnabled;

    soundBtn.textContent =
      soundEnabled ? "🔊" : "🔇";

  }
);
