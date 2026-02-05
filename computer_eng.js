// ================= EXAM QUESTIONS =================
const questions2015 = [
 {q:"CPU stands for?", a:["A. Central Processing Unit","B. Central Programming Unit","C. Computer Processing Unit","D. Central Peripheral Unit"], c:0},
 {q:"Motherboard is?", a:["A. CPU","B. Main circuit board","C. Hard drive","D. Memory"], c:1},
 {q:"Which is programming language?", a:["A. HTML","B. Python","C. Windows","D. Chrome"], c:1},
 {q:"Which is input device?", a:["A. Monitor","B. Keyboard","C. Printer","D. Speaker"], c:1},
 {q:"Which is output device?", a:["A. CPU","B. Mouse","C. Monitor","D. Keyboard"], c:2},
 {q:"RAM function?", a:["A. Permanent storage","B. Temporary memory","C. Processing","D. Security"], c:1},
 {q:"ROM is?", a:["A. Read-only memory","B. Random memory","C. Run-time memory","D. Register"], c:0},
 {q:"What is IP address?", a:["A. Identity code","B. Device identifier","C. Network path","D. Computer name"], c:1},
 {q:"Binary system uses?", a:["A. 0,1","B. 1-10","C. 0-9","D. 1-8"], c:0},
 {q:"What is firewall?", a:["A. Security","B. Device","C. Network cable","D. Virus"], c:0},
 {q:"Which is OS?", a:["A. Windows","B. Python","C. HTML","D. CSS"], c:0},
 {q:"HTML tag for image?", a:["A. <img>","B. <image>","C. <pic>","D. <src>"], c:0},
 {q:"IP version 6 bits?", a:["A. 32","B. 128","C. 64","D. 256"], c:1},
 {q:"Function of CPU?", a:["A. Store data","B. Execute instructions","C. Encrypt files","D. Network"], c:1},
 {q:"Which is database?", a:["A. MySQL","B. Python","C. HTML","D. CSS"], c:0},
 {q:"CSS is for?", a:["A. Logic","B. Styling web pages","C. Data","D. Network"], c:1},
 {q:"LAN stands for?", a:["A. Local Area Network","B. Large Area Network","C. Long Access Node","D. Light Area Network"], c:0},
 {q:"HTTPS is?", a:["A. Secure protocol","B. Programming language","C. Browser","D. Database"], c:0},
 {q:"Which is software?", a:["A. Keyboard","B. Antivirus","C. Monitor","D. Mouse"], c:1},
 {q:"Cloud storage example?", a:["A. Google Drive","B. Notepad","C. Excel","D. Photoshop"], c:0},
 {q:"What is phishing?", a:["A. Hack emails","B. Virus","C. Network device","D. Programming language"], c:0},
 {q:"Function of DNS?", a:["A. Translate domain to IP","B. Encrypt data","C. Store files","D. Compile code"], c:0},
 {q:"Binary number system?", a:["A. 0-1","B. 0-9","C. 1-8","D. 0-2"], c:0},
 {q:"Firewall protects?", a:["A. Viruses","B. Keyboard","C. Monitor","D. CPU"], c:0},
 {q:"Cloud computing provides?", a:["A. On-demand resources","B. Keyboard","C. CPU","D. Monitor"], c:0}
];

// ================= VARIABLES =================
let exams = {2015: questions2015, 2016: questions2015, 2017: questions2015, 2018: questions2015};
let unlockedYears = ["2015"];
let currentYear = "2015";
let index = 0;
let score = 0;
let time = 15*60;

// ================= ELEMENTS =================
const qEl = document.getElementById("question");
const optEl = document.getElementById("options");
const timeEl = document.getElementById("time");
const paymentBox = document.getElementById("paymentBox");

// ================= YEAR BUTTONS =================
document.querySelectorAll(".year-btn").forEach(btn => {
  btn.onclick = () => {
    const year = btn.dataset.year;
    if(!unlockedYears.includes(year)){
      paymentBox.classList.remove("hidden");
      return;
    }
    paymentBox.classList.add("hidden");
    currentYear = year;
    index = 0;
    score = 0;
    loadQuestion();
  };
});

// ================= PAYMENT =================
document.getElementById("unlockBtn").onclick = () => {
  const file = document.getElementById("paymentProof").files[0];
  if(!file){ alert("Upload payment screenshot"); return; }
  unlockedYears.push("2016","2017","2018");
  document.querySelectorAll(".year-btn").forEach(b => b.classList.remove("locked"));
  paymentBox.classList.add("hidden");
  alert("Payment confirmed! Exams unlocked.");
};

// ================= TIMER =================
setInterval(()=>{
  let m = Math.floor(time/60), s = time%60;
  timeEl.textContent = `${m}:${s<10?'0':''}${s}`;
  if(time>0) time--; else submitExam();
},1000);

// ================= LOAD QUESTION =================
function loadQuestion(){
  const q = exams[currentYear][index];
  qEl.textContent = `${index+1}. ${q.q}`;
  optEl.innerHTML="";
  q.a.forEach((opt,i)=>{
    const label=document.createElement("label");
    label.innerHTML=`<input type="radio"> ${opt}`;
    label.onclick=()=>checkAnswer(label,i);
    optEl.appendChild(label);
  });
}

// ================= CHECK ANSWER =================
function checkAnswer(label,selected){
  document.querySelectorAll("#options label").forEach(l=>l.onclick=null);
  if(selected===exams[currentYear][index].c){ label.classList.add("correct"); score++; }
  else{ label.classList.add("wrong"); optEl.children[exams[currentYear][index].c].classList.add("correct"); }
}

// ================= NAVIGATION =================
document.getElementById("next").onclick=()=>{
  if(index<exams[currentYear].length-1){ index++; loadQuestion(); }
};
document.getElementById("back").onclick=()=>{
  if(index>0){ index--; loadQuestion(); }
};

// ================= SUBMIT =================
document.getElementById("submit").onclick=submitExam;
function submitExam(){
  localStorage.setItem("computerEngScore",score);
  localStorage.setItem("computerEngTotal",exams[currentYear].length);
  window.location.href="computer-engineering-result.html";
}

// ================= START =================
loadQuestion();
