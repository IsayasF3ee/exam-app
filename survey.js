// ================= EXAM QUESTIONS =================
const questions2015 = [
 {q:"What is a survey?", a:["A. Random guessing","B. Data collection method","C. Experiment","D. Opinion"], c:1},
 {q:"Primary data comes from?", a:["A. Existing records","B. Observation or questionnaire","C. Internet only","D. Books"], c:1},
 {q:"Sample size should be?", a:["A. Too small","B. Too large","C. Representative","D. Irrelevant"], c:2},
 {q:"A structured questionnaire is?", a:["A. Open-ended","B. Predefined questions","C. Oral interview","D. Observation sheet"], c:1},
 {q:"Which is qualitative data?", a:["A. Age","B. Name","C. Weight","D. Salary"], c:1},
 {q:"Which is quantitative data?", a:["A. Gender","B. Education level","C. Number of children","D. Marital status"], c:2},
 {q:"Random sampling ensures?", a:["A. Bias","B. Representativeness","C. Subjectivity","D. Error"], c:1},
 {q:"Which is a survey method?", a:["A. Experiment","B. Observation","C. Interview","D. Both B & C"], c:3},
 {q:"Likert scale measures?", a:["A. Numerical data","B. Opinion intensity","C. Time","D. Weight"], c:1},
 {q:"Cross-sectional survey is?", a:["A. Single point in time","B. Over time","C. Experimental","D. Longitudinal"], c:0},
 {q:"Longitudinal survey measures?", a:["A. One day","B. Over time","C. Snapshot","D. Opinion"], c:1},
 {q:"Closed-ended questions are?", a:["A. Yes/No","B. Multiple choice","C. Both","D. Essay"], c:2},
 {q:"Pilot testing is done to?", a:["A. Test questionnaire","B. Analyze results","C. Publish report","D. Conduct interview"], c:0},
 {q:"Data coding refers to?", a:["A. Collecting data","B. Assign numbers to responses","C. Cleaning data","D. Analyzing"], c:1},
 {q:"Survey population is?", a:["A. Sample","B. All units of interest","C. Questionnaire","D. Data entry"], c:1},
 {q:"Non-response error occurs when?", a:["A. All respond","B. Some do not respond","C. Data accurate","D. Sampling random"], c:1},
 {q:"Confidentiality in survey means?", a:["A. Publish names","B. Keep private","C. Share publicly","D. None"], c:1},
 {q:"Likert scale example?", a:["A. Strongly agree","B. Weakly agree","C. Maybe","D. Not sure"], c:0},
 {q:"Survey validity ensures?", a:["A. Accuracy of measurement","B. Random error","C. Reliability","D. None"], c:0},
 {q:"Reliability refers to?", a:["A. Consistency","B. Accuracy","C. Precision","D. Validity"], c:0},
 {q:"Sampling frame is?", a:["A. List of population","B. Sample","C. Questionnaire","D. Coding"], c:0},
 {q:"Open-ended questions allow?", a:["A. Fixed choices","B. Free text","C. Yes/No","D. Multiple choice"], c:1},
 {q:"Survey analysis includes?", a:["A. Coding","B. Statistical analysis","C. Interpretation","D. All"], c:3},
 {q:"Which is probability sampling?", a:["A. Convenience","B. Random","C. Judgmental","D. Snowball"], c:1},
 {q:"Ethics in survey means?", a:["A. Confidentiality","B. Consent","C. Avoid harm","D. All"], c:3}
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
  localStorage.setItem("surveyScore",score);
  localStorage.setItem("surveyTotal",exams[currentYear].length);
  window.location.href="survey-result.html";
}

// ================= START =================
loadQuestion();
