// ================= EXAM QUESTIONS =================
const questions2015 = [
 {q:"Which is the primary role of journalism?", a:["A. Entertainment","B. Reporting news","C. Advertising","D. Marketing"], c:1},
 {q:"Ethical journalism requires?", a:["A. Bias","B. Accuracy","C. Plagiarism","D. Sensationalism"], c:1},
 {q:"A lead in journalism refers to?", a:["A. Closing statement","B. First paragraph","C. Headline font","D. Opinion piece"], c:1},
 {q:"Which medium is print journalism?", a:["A. Television","B. Radio","C. Newspaper","D. Podcast"], c:2},
 {q:"Which is investigative journalism?", a:["A. Advertising","B. Deep reporting","C. Opinion writing","D. Social media post"], c:1},
 {q:"Freedom of press means?", a:["A. Censorship","B. Government control","C. Right to publish","D. Blocking content"], c:2},
 {q:"A press release is?", a:["A. News statement","B. Advertisement","C. Opinion article","D. Podcast"], c:0},
 {q:"Which is broadcast journalism?", a:["A. Newspaper","B. TV & Radio","C. Blogs","D. Newsletter"], c:1},
 {q:"Fact-checking ensures?", a:["A. Entertainment","B. Accuracy","C. Rumors","D. Bias"], c:1},
 {q:"Which is a source in journalism?", a:["A. Witness","B. Actor","C. Advertiser","D. Blogger"], c:0},
 {q:"What is yellow journalism?", a:["A. Sensationalism","B. Accurate news","C. Editorial writing","D. Sports news"], c:0},
 {q:"What is a byline?", a:["A. Article title","B. Writer's name","C. Date","D. Editor"], c:1},
 {q:"Objectivity in journalism means?", a:["A. Personal opinion","B. Bias","C. Neutral reporting","D. Editorial control"], c:2},
 {q:"Press conference is?", a:["A. Gathering reporters","B. Newspaper ad","C. Radio show","D. TV commercial"], c:0},
 {q:"Op-ed stands for?", a:["A. Opinion editorial","B. Official editorial","C. Open education","D. Online edition"], c:0},
 {q:"Investigative report requires?", a:["A. Quick writing","B. Deep research","C. Advertising","D. Gossip"], c:1},
 {q:"What is journalistic ethics?", a:["A. Laws","B. Rules for reporting","C. Freedom","D. Entertainment"], c:1},
 {q:"Which is an editorial?", a:["A. Advertisement","B. Opinion piece","C. News story","D. Press release"], c:1},
 {q:"Which is citizen journalism?", a:["A. Professional reporters","B. Public reporting","C. Broadcast news","D. Paid news"], c:1},
 {q:"What is plagiarism?", a:["A. Citing sources","B. Copying without credit","C. Original writing","D. Fact-checking"], c:1},
 {q:"Which is an exclusive news story?", a:["A. Widely published","B. First-hand reporting","C. Advertisement","D. Press release"], c:1},
 {q:"Which is an investigative source?", a:["A. Gossip","B. Document","C. Fiction","D. Rumor"], c:1},
 {q:"Ethical reporting avoids?", a:["A. Facts","B. Opinion","C. Misrepresentation","D. Sources"], c:2},
 {q:"A news beat is?", a:["A. Reporter’s area","B. Headline","C. Column","D. Advertisement"], c:0},
 {q:"Which is primary research?", a:["A. Survey","B. Blog","C. Magazine article","D. Social media post"], c:0}
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
  localStorage.setItem("journalismScore",score);
  localStorage.setItem("journalismTotal",exams[currentYear].length);
  window.location.href="journalism-result.html";
}

// ================= START =================
loadQuestion();
