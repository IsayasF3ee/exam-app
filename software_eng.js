// ================= EXAM QUESTIONS (50) =================
const questions2015 = [
 {q:"What is SDLC?", a:["A. Software Development Life Cycle","B. System Data Life Cycle","C. Software Design Logic","D. System Development Logic"], c:0},
 {q:"Which model is linear?", a:["A. Waterfall","B. Agile","C. Spiral","D. RAD"], c:0},
 {q:"Requirement analysis purpose?", a:["A. Coding","B. Gather & analyze requirements","C. Testing","D. Deployment"], c:1},
 {q:"UML stands for?", a:["A. Unified Modeling Language","B. User Model Logic","C. Unit Measure Language","D. Unified Methodology Logic"], c:0},
 {q:"Black box testing checks?", a:["A. Internal logic","B. Output & functionality","C. Performance","D. Documentation"], c:1},
 {q:"White box testing checks?", a:["A. Internal logic","B. Output","C. UX","D. Database"], c:0},
 {q:"Agile sprint duration?", a:["A. 1-4 weeks","B. 6 months","C. 1 day","D. 1 year"], c:0},
 {q:"Version control example?", a:["A. Git","B. HTML","C. SQL","D. Java"], c:0},
 {q:"Design pattern example?", a:["A. Singleton","B. Loop","C. Variable","D. Function"], c:0},
 {q:"Code refactoring purpose?", a:["A. Add new bugs","B. Improve code structure","C. Delete code","D. Reduce performance"], c:1},
 {q:"Which is functional requirement?", a:["A. Login feature","B. UI color","C. Font size","D. Page layout"], c:0},
 {q:"Which is non-functional requirement?", a:["A. Security","B. Login","C. Registration","D. Search"], c:0},
 {q:"Integration testing checks?", a:["A. Individual modules","B. Module interactions","C. Code syntax","D. Documentation"], c:1},
 {q:"Acceptance testing done by?", a:["A. Developer","B. Client","C. Tester","D. Manager"], c:1},
 {q:"Which is versioning system?", a:["A. GitHub","B. Browser","C. Editor","D. IDE"], c:0},
 {q:"RAD stands for?", a:["A. Rapid Application Development","B. Random Analysis Design","C. Rapid Agile Design","D. Reliable Application Development"], c:0},
 {q:"Spiral model focuses on?", a:["A. Risk analysis","B. Deployment","C. Documentation","D. UI"], c:0},
 {q:"Test case contains?", a:["A. Inputs, expected outputs","B. Variables","C. Comments","D. Functions"], c:0},
 {q:"Pair programming is?", a:["A. Solo coding","B. Two devs working together","C. Testing technique","D. Deployment"], c:1},
 {q:"Refactoring improves?", a:["A. Code readability","B. Code bugs","C. UI only","D. Database"], c:0},
 {q:"Continuous integration is?", a:["A. Manual testing","B. Frequent code merging","C. Deployment","D. Versioning"], c:1},
 {q:"CI/CD stands for?", a:["A. Continuous Integration/Continuous Delivery","B. Code Input/Code Delivery","C. Continuous Internet/Continuous Data","D. Code Integration/Code Deployment"], c:0},
 {q:"Scrum master role?", a:["A. Lead developer","B. Facilitator","C. Tester","D. Client"], c:1},
 {q:"Use case diagram shows?", a:["A. Classes","B. User interactions","C. Database tables","D. Code flow"], c:1},
 {q:"Activity diagram represents?", a:["A. Workflow","B. Code","C. Database","D. UI"], c:0},
 {q:"Software metrics measure?", a:["A. Code quality","B. Font size","C. Color scheme","D. Layout"], c:0},
 {q:"Alpha testing done by?", a:["A. Client","B. Developer","C. End user","D. Manager"], c:1},
 {q:"Beta testing done by?", a:["A. Developer","B. End user","C. Tester","D. Manager"], c:1},
 {q:"Software maintenance type?", a:["A. Corrective","B. Perfective","C. Adaptive","D. All"], c:3},
 {q:"Which is software model?", a:["A. Waterfall","B. Agile","C. Spiral","D. All"], c:3},
 {q:"Code documentation purpose?", a:["A. Understanding code","B. Add bugs","C. Delete code","D. None"], c:0},
 {q:"CASE tool example?", a:["A. Rational Rose","B. Eclipse","C. NetBeans","D. VS Code"], c:0},
 {q:"Software quality attribute?", a:["A. Maintainability","B. Speed","C. CPU","D. Memory"], c:0},
 {q:"Coupling refers to?", a:["A. Module dependency","B. Color scheme","C. CPU usage","D. Memory"], c:0},
 {q:"Cohesion refers to?", a:["A. Module responsibility","B. Data flow","C. CPU usage","D. Memory"], c:0},
 {q:"Software prototyping purpose?", a:["A. Explore requirements","B. Deployment","C. Testing","D. Coding"], c:0},
 {q:"SDLC phases include?", a:["A. Requirement, design, coding, testing","B. Coding only","C. Deployment only","D. Testing only"], c:0},
 {q:"Black box testing tool?", a:["A. Selenium","B. Git","C. VS Code","D. Eclipse"], c:0},
 {q:"White box testing tool?", a:["A. JUnit","B. Word","C. Excel","D. Browser"], c:0},
 {q:"Code review helps?", a:["A. Find bugs","B. Ignore bugs","C. Delete code","D. Deployment"], c:0},
 {q:"Software reliability means?", a:["A. System uptime","B. UI","C. CPU usage","D. Database"], c:0},
 {q:"Software scalability means?", a:["A. Handle growth","B. Font size","C. Color scheme","D. CPU usage"], c:0},
 {q:"Version control action?", a:["A. Commit","B. Delete files","C. Copy files","D. Open browser"], c:0},
 {q:"Code coverage measures?", a:["A. Tested code percentage","B. Font size","C. Color scheme","D. CPU usage"], c:0},
 {q:"Agile ceremonies include?", a:["A. Sprint planning, daily standup, review, retrospective","B. Deployment only","C. Coding only","D. Testing only"], c:0},
 {q:"Software deployment means?", a:["A. Release system to users","B. Delete system","C. Ignore system","D. Test system only"], c:0}
];

// ================= VARIABLES =================
let exams = {2015: questions2015, 2016: questions2015, 2017: questions2015, 2018: questions2015};
let unlockedYears = ["2015"];
let currentYear = "2015";
let index = 0;
let score = 0;
let time = 25*60; // 25 min

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
  localStorage.setItem("softwareEngScore",score);
  localStorage.setItem("softwareEngTotal",exams[currentYear].length);
  window.location.href="software_eng-result.html";
}

// ================= START =================
loadQuestion();
