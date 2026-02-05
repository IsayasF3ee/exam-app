// ================= EXAM QUESTIONS =================
const questions2015 = [
 {q:"What does CPU stand for?", a:["A. Central Process Unit","B. Central Processing Unit","C. Computer Personal Unit","D. Control Processing Unit"], c:1},
 {q:"HTML is used for?", a:["A. Programming logic","B. Styling pages","C. Structure web pages","D. Database management"], c:2},
 {q:"Which is a programming language?", a:["A. HTML","B. CSS","C. JavaScript","D. HTTP"], c:2},
 {q:"IP address is used for?", a:["A. Identifying device","B. Storing files","C. Formatting disks","D. Writing code"], c:0},
 {q:"RAM is?", a:["A. Permanent storage","B. Temporary memory","C. Processing unit","D. Network device"], c:1},
 {q:"Which is an OS?", a:["A. Windows","B. Python","C. HTML","D. Excel"], c:0},
 {q:"Function of DNS?", a:["A. Translate domain to IP","B. Encrypt data","C. Store files","D. Compile code"], c:0},
 {q:"Which is cloud storage?", a:["A. Google Drive","B. Notepad","C. Excel","D. Photoshop"], c:0},
 {q:"What is firewall?", a:["A. Security system","B. Programming code","C. Network cable","D. Virus"], c:0},
 {q:"What is phishing?", a:["A. Hack emails","B. Computer virus","C. Storage system","D. Programming language"], c:0},
 {q:"Which is software?", a:["A. Keyboard","B. Antivirus","C. Monitor","D. Mouse"], c:1},
 {q:"HTML tag for image?", a:["A. <img>","B. <image>","C. <pic>","D. <src>"], c:0},
 {q:"Which is a database?", a:["A. MySQL","B. Python","C. HTML","D. CSS"], c:0},
 {q:"IP version 6 has how many bits?", a:["A. 64","B. 128","C. 32","D. 256"], c:1},
 {q:"Binary number system uses?", a:["A. 0,1","B. 0-9","C. 1-8","D. 0-2"], c:0},
 {q:"Function of CPU?", a:["A. Execute instructions","B. Store data","C. Connect network","D. Encrypt files"], c:0},
 {q:"HTML stands for?", a:["A. HyperText Markup Language","B. HighText Markup Language","C. Hyperlink Text Language","D. HighText Markup Logic"], c:0},
 {q:"What is HTTPS?", a:["A. Secure protocol","B. Programming language","C. Database type","D. Browser"], c:0},
 {q:"Which device is input?", a:["A. Monitor","B. Keyboard","C. Printer","D. Speaker"], c:1},
 {q:"Which device is output?", a:["A. Keyboard","B. Mouse","C. Monitor","D. CPU"], c:2},
 {q:"CSS is used for?", a:["A. Content structure","B. Styling web pages","C. Logic programming","D. Database"], c:1},
 {q:"Which is a markup language?", a:["A. HTML","B. Java","C. Python","D. C++"], c:0},
 {q:"What is LAN?", a:["A. Local Area Network","B. Large Area Network","C. Light Area Network","D. Long Access Node"], c:0},
 {q:"What is IP address type?", a:["A. Unique device ID","B. Network cable","C. CPU code","D. Browser"], c:0},
 {q:"Firewall protects against?", a:["A. Viruses & attacks","B. Power failure","C. Screen damage","D. Keyboard errors"], c:0},
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
  localStorage.setItem("itScore",score);
  localStorage.setItem("itTotal",exams[currentYear].length);
  window.location.href="it-result.html";
}

// ================= START =================
loadQuestion();
