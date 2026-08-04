const $=s=>document.querySelector(s);
const img=$('#slideImg'), dots=$('#dots'), captions=[
"A beautiful memory, forever worth keeping.",
"Brotherhood, confidence and unforgettable moments.",
"Another chapter, another memory to smile about.",
"May every journey bring you closer to your dreams.",
"Keep winning, keep smiling, keep shining.",
"Some memories deserve a permanent place in the heart."
];
let idx=0, soundOn=true, musicOn=false, audioCtx=null, musicTimer=null;

function renderDots(){dots.innerHTML='';for(let i=0;i<6;i++){let d=document.createElement('i');d.className='dot'+(i===idx?' active':'');dots.appendChild(d)}}
function showSlide(n){idx=(n+6)%6;img.style.opacity=0;setTimeout(()=>{img.src=`images/${idx+1}.jpg`;img.style.opacity=1;$('#caption').textContent=captions[idx];renderDots()},180)}
$('#prev').onclick=()=>showSlide(idx-1);$('#next').onclick=()=>showSlide(idx+1);renderDots();
setInterval(()=>showSlide(idx+1),5000);

const phrases=["A brother. A friend. A blessing.","May your next chapter be your best one.","Today is all about YOU, Danish Khan. 💙"];
let p=0,c=0,del=false;
function type(){let t=phrases[p];$('#typing').textContent=t.slice(0,c);if(!del&&c<t.length)c++;else if(del&&c>0)c--;else{del=!del;if(!del)p=(p+1)%phrases.length}setTimeout(type,del?35:75)}type();

function targetDate(){let now=new Date(), y=now.getFullYear(), t=new Date(y,7,20,0,0,0);if(t<=now)t=new Date(y+1,7,20,0,0,0);return t}
function countdown(){let d=targetDate()-Date.now();let s=Math.max(0,Math.floor(d/1000));let days=Math.floor(s/86400);s%=86400;let h=Math.floor(s/3600);s%=3600;let m=Math.floor(s/60),sec=s%60;$('#days').textContent=String(days).padStart(2,'0');$('#hours').textContent=String(h).padStart(2,'0');$('#minutes').textContent=String(m).padStart(2,'0');$('#seconds').textContent=String(sec).padStart(2,'0')}countdown();setInterval(countdown,1000);

function spawn(type){if(!soundOn)return;let e=document.createElement('div');e.className=type==='heart'?'heart':'balloon';e.textContent=type==='heart'?'♥':'';e.style.left=Math.random()*100+'vw';e.style.animationDuration=(5+Math.random()*6)+'s';e.style.opacity=.5+Math.random()*.5;$('#effects').appendChild(e);setTimeout(()=>e.remove(),12000)}
setInterval(()=>spawn(Math.random()>.35?'heart':'balloon'),900);

function fireworks(){if(!soundOn)return;for(let k=0;k<22;k++){let e=document.createElement('span');e.style.cssText=`position:absolute;left:${20+Math.random()*60}vw;top:${15+Math.random()*55}vh;width:3px;height:3px;background:#fff1a8;border-radius:50%;box-shadow:0 0 12px 4px #e7c875;animation:rise .8s reverse ease-out`;$('#effects').appendChild(e);setTimeout(()=>e.remove(),900)}}
$('#openBtn').onclick=()=>{$('#surprise').classList.remove('hidden');setTimeout(()=>{$('#surprise').scrollIntoView({behavior:'smooth'});},80);fireworks();document.querySelectorAll('.heart').forEach(x=>x.remove())};
function openGift(){let card=$('#messageCard');card.classList.add('show');$('#giftWrap').style.transform='scale(.7) rotateX(70deg)';setTimeout(()=>{$('#cake').classList.remove('hidden');fireworks()},350)}
$('#giftWrap').onclick=openGift;$('#giftWrap').onkeydown=e=>{if(e.key==='Enter'||e.key===' ')openGift()};

function music(){if(!audioCtx)audioCtx=new (window.AudioContext||window.webkitAudioContext)();if(musicOn){musicOn=false;clearInterval(musicTimer);$('#musicBtn').innerHTML='♫ <span>Music</span>';return}musicOn=true;$('#musicBtn').innerHTML='♫ <span>Playing</span>';let notes=[261.63,329.63,392,523.25,392,329.63,293.66,349.23];let i=0;function note(){if(!musicOn)return;let o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type='sine';o.frequency.value=notes[i++%notes.length];g.gain.setValueAtTime(.0001,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(.045,audioCtx.currentTime+.04);g.gain.exponentialRampToValueAtTime(.0001,audioCtx.currentTime+.7);o.connect(g).connect(audioCtx.destination);o.start();o.stop(audioCtx.currentTime+.72)}note();musicTimer=setInterval(note,720)}
$('#musicBtn').onclick=music;
$('#soundBtn').onclick=()=>{soundOn=!soundOn;$('#soundBtn').textContent=soundOn?'🔊':'🔇'};
