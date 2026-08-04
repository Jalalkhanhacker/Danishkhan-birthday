const $=x=>document.querySelector(x),$$=x=>document.querySelectorAll(x);
const text="A little celebration for an incredible brother — made with duas, memories and a little AI magic.";
let ti=0;function type(){if(ti<=text.length){$('#typing').textContent=text.slice(0,ti++);setTimeout(type,35)}}type();

function target(){let y=new Date().getFullYear(),d=new Date(y,7,20);if(d<=new Date())d=new Date(y+1,7,20);return d}
function countdown(){let n=Math.max(0,target()-new Date()),s=Math.floor(n/1000);$('#d').textContent=Math.floor(s/86400);s%=86400;$('#h').textContent=String(Math.floor(s/3600)).padStart(2,'0');s%=3600;$('#m').textContent=String(Math.floor(s/60)).padStart(2,'0');$('#s').textContent=String(s%60).padStart(2,'0')}countdown();setInterval(countdown,1000);

const photos=['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg'];let pi=0;
photos.forEach((_,i)=>{let d=document.createElement('i');d.className='dot'+(i?'':' active');$('#dots').appendChild(d)});
function photo(){pi=(pi+1)%photos.length;$('#photo').style.opacity=0;setTimeout(()=>{$('#photo').src=photos[pi];$('#photo').style.opacity=1;$$('.dot').forEach((d,i)=>d.classList.toggle('active',i===pi))},300)}setInterval(photo,4000);

const cvs=$('#stars'),ctx=cvs.getContext('2d');let stars=[];function resize(){cvs.width=innerWidth;cvs.height=innerHeight;stars=Array.from({length:120},()=>({x:Math.random()*cvs.width,y:Math.random()*cvs.height,r:Math.random()*1.5+.3,v:Math.random()*.35+.1}))}function starsDraw(){ctx.clearRect(0,0,cvs.width,cvs.height);ctx.fillStyle='#dce9ff';stars.forEach(p=>{ctx.globalAlpha=.3+Math.random()*.5;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,7);ctx.fill();p.y+=p.v;if(p.y>cvs.height)p.y=0});requestAnimationFrame(starsDraw)}resize();addEventListener('resize',resize);starsDraw();

function burst(n=45){for(let i=0;i<n;i++){let e=document.createElement('i');e.className='burst';e.style.left='50%';e.style.top='45%';e.style.setProperty('--x',(Math.random()*420-210)+'px');e.style.setProperty('--y',(Math.random()*420-210)+'px');document.body.appendChild(e);setTimeout(()=>e.remove(),1200)}}
function speak(t){if(!('speechSynthesis'in window))return; speechSynthesis.cancel();speechSynthesis.speak(new SpeechSynthesisUtterance(t))}
const wish='Happy Birthday Danish Khan! Dear brother, may Allah bless you with a long, healthy and successful life. May your new year be filled with happiness, peace, barakah and beautiful memories. Keep smiling and keep moving forward. Made with love by Jalal Ahmad.';
$('#wish').onclick=()=>speak(wish);$('#modalVoice').onclick=()=>speak(wish);
$('#surprise').onclick=()=>{$('#modal').classList.add('show');burst(70)};
$('#close').onclick=()=>$('#modal').classList.remove('show');
$('#modal').onclick=e=>{if(e.target===$('#modal'))$('#modal').classList.remove('show')};
$('#giftBox').onclick=()=>{$('#giftBox').classList.add('open');$('#giftTitle').textContent='Surprise Unlocked! 🎉';$('#giftText').textContent='Danish, you are a blessing. May Allah keep you happy and successful.';burst(70)};
$('#fire').onclick=()=>{for(let i=0;i<5;i++)setTimeout(()=>burst(35),i*220)};
const ai=['Happy Birthday Danish! May Allah fill your life with happiness, success, peace and beautiful memories. 💙🎂','May Allah protect you, bless your future and grant you halal success, good health and barakah. Ameen. 🤲','Happy Birthday bro! May your food stay tasty, your phone stay charged, and your year stay amazing. 😂🎂','A new year, a new chapter. Keep smiling, keep growing and keep making beautiful memories! ✨'];
$('#ai').onclick=()=>{let r=ai[Math.floor(Math.random()*ai.length)];$('#aiText').textContent=r;speak(r);burst(25)};
let audio=null;$('#music').onclick=()=>{if(!audio){audio=new Audio('music.mp3');audio.loop=true}audio.play().catch(()=>alert('Add music.mp3 to the project folder, then tap Music again.'))};
