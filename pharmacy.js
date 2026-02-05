// ===============================
// DATA
// ===============================

const questions2015 = [
 {q:"Which drug is classified as an antibiotic?", a:["A. Paracetamol","B. Amoxicillin","C. Metformin","D. Salbutamol"], c:1},

 {q:"Which dosage form is used for rectal administration?", a:["A. Tablet","B. Capsule","C. Suppository","D. Syrup"], c:2},

 {q:"The main function of excipients in a formulation is to?", a:["A. Treat disease","B. Aid drug delivery","C. Increase toxicity","D. Act as antidote"], c:1},

 {q:"Which organ is mainly responsible for drug excretion?", a:["A. Liver","B. Kidney","C. Lung","D. Heart"], c:1},

 {q:"Which drug is used to reduce fever?", a:["A. Paracetamol","B. Insulin","C. Ceftriaxone","D. Amlodipine"], c:0},

 {q:"The study of adverse drug reactions is called?", a:["A. Pharmacokinetics","B. Pharmacodynamics","C. Pharmacovigilance","D. Pharmaceutics"], c:2},

 {q:"Which vitamin is water soluble?", a:["A. Vitamin A","B. Vitamin D","C. Vitamin E","D. Vitamin C"], c:3},

 {q:"Which route of administration gives fastest systemic effect?", a:["A. Oral","B. Intramuscular","C. Intravenous","D. Subcutaneous"], c:2},

 {q:"Which drug is an antihistamine?", a:["A. Cetirizine","B. Ibuprofen","C. Metformin","D. Furosemide"], c:0},

 {q:"What does OTC stand for?", a:["A. Over The Counter","B. On The Counter","C. Official Trade Control","D. Open Treatment Care"], c:0},

 {q:"Which drug is used in diabetes mellitus?", a:["A. Insulin","B. Paracetamol","C. Salbutamol","D. Amoxicillin"], c:0},

 {q:"Pharmacokinetics includes all EXCEPT?", a:["A. Absorption","B. Distribution","C. Metabolism","D. Drug action"], c:3},

 {q:"Which antimicrobial is used for fungal infection?", a:["A. Ketoconazole","B. Ciprofloxacin","C. Penicillin","D. Gentamicin"], c:0},

 {q:"Which dosage form is liquid?", a:["A. Tablet","B. Capsule","C. Syrup","D. Powder"], c:2},

 {q:"Which drug is used to treat hypertension?", a:["A. Amlodipine","B. Paracetamol","C. Insulin","D. Metronidazole"], c:0},

 {q:"What is the purpose of a prescription?", a:["A. Diagnose disease","B. Guide drug dispensing","C. Advertise drugs","D. Manufacture drugs"], c:1},

 {q:"Which drug is an NSAID?", a:["A. Ibuprofen","B. Amoxicillin","C. Insulin","D. Salbutamol"], c:0},

 {q:"Which route is NOT suitable for unconscious patients?", a:["A. Oral","B. Intravenous","C. Intramuscular","D. Subcutaneous"], c:0},

 {q:"Which drug acts as a bronchodilator?", a:["A. Salbutamol","B. Furosemide","C. Metformin","D. Diazepam"], c:0},

 {q:"Drug stability refers to?", a:["A. Drug potency","B. Drug safety","C. Ability to retain properties","D. Drug solubility"], c:2},

 {q:"Which class of drugs reduces gastric acid?", a:["A. Antacids","B. Analgesics","C. Antibiotics","D. Antipyretics"], c:0},

 {q:"Which pharmaceutical aid is used as a sweetener?", a:["A. Talc","B. Starch","C. Sucrose","D. Magnesium stearate"], c:2},

 {q:"Which route is used for rapid emergency treatment?", a:["A. Oral","B. Rectal","C. Intravenous","D. Topical"], c:2},

 {q:"Which drug is used to treat pain?", a:["A. Paracetamol","B. Insulin","C. Amlodipine","D. Ceftriaxone"], c:0},

 {q:"A prescription without a signature is?", a:["A. Valid","B. Illegal","C. Emergency","D. OTC"], c:1}
];













const exams = {
  2015: questions2015,
  2016: questions2015, // reuse or replace later
  2017: questions2015,
  2018: questions2015
};

let unlockedYears = ["2015"];
let currentYear = "2015";
let index = 0;
let score = 0;
let time = 15 * 60;

// ===============================
// ELEMENTS
// ===============================
const qEl = document.getElementById("question");
const optEl = document.getElementById("options");
const timeEl = document.getElementById("time");
const paymentBox = document.getElementById("paymentBox");

// ===============================
// YEAR BUTTONS
// ===============================
document.querySelectorAll(".year-btn").forEach(btn => {
  btn.onclick = () => {
    const year = btn.dataset.year;
    if (!unlockedYears.includes(year)) {
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

// ===============================
// PAYMENT UNLOCK
// ===============================
document.getElementById("unlockBtn").onclick = () => {
  const file = document.getElementById("paymentProof").files[0];
  if (!file) {
    alert("Please upload Telebirr or CBE payment screenshot");
    return;
  }
  unlockedYears.push("2016", "2017", "2018");
  document.querySelectorAll(".year-btn").forEach(b => b.classList.remove("locked"));
  paymentBox.classList.add("hidden");
  alert("Payment successful! Exams unlocked.");
};

// ===============================
// TIMER
// ===============================
setInterval(() => {
  let m = Math.floor(time / 60);
  let s = time % 60;
  timeEl.textContent = `${m}:${s < 10 ? "0" : ""}${s}`;
  if (time > 0) time--;
  else submitExam();
}, 1000);

// ===============================
// LOAD QUESTION
// ===============================
function loadQuestion() {
  const q = exams[currentYear][index];
  qEl.textContent = `${index + 1}. ${q.q}`;
  optEl.innerHTML = "";

  q.a.forEach((opt, i) => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio"> ${opt}`;
    label.onclick = () => checkAnswer(label, i);
    optEl.appendChild(label);
  });
}

// ===============================
// CHECK ANSWER
// ===============================
function checkAnswer(label, selected) {
  document.querySelectorAll("#options label").forEach(l => l.onclick = null);
  if (selected === exams[currentYear][index].c) {
    label.classList.add("correct");
    score++;
  } else {
    label.classList.add("wrong");
    optEl.children[exams[currentYear][index].c].classList.add("correct");
  }
}

// ===============================
// NAVIGATION
// ===============================
document.getElementById("next").onclick = () => {
  if (index < exams[currentYear].length - 1) {
    index++;
    loadQuestion();
  }
};

document.getElementById("back").onclick = () => {
  if (index > 0) {
    index--;
    loadQuestion();
  }
};

// ===============================
// SUBMIT + RESULT
// ===============================
document.getElementById("submit").onclick = submitExam;

function submitExam() {
  localStorage.setItem("pharmacyScore", score);
  localStorage.setItem("pharmacyTotal", exams[currentYear].length);
  window.location.href = "result.html";
}

// START
loadQuestion();
