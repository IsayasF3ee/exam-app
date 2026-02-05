// ================= EXAM QUESTIONS (50) =================
const questions2015 = [
 {q:"Ohm's Law formula?", a:["A. V=IR","B. V=I+R","C. P=VI","D. I=V+R"], c:0},
 {q:"Unit of electrical power?", a:["A. Watt","B. Volt","C. Ampere","D. Ohm"], c:0},
 {q:"Unit of current?", a:["A. Ampere","B. Volt","C. Ohm","D. Watt"], c:0},
 {q:"Unit of voltage?", a:["A. Volt","B. Ampere","C. Ohm","D. Watt"], c:0},
 {q:"Unit of resistance?", a:["A. Ohm","B. Volt","C. Ampere","D. Watt"], c:0},
 {q:"AC means?", a:["A. Alternating Current","B. Active Current","C. Actual Current","D. Atomic Current"], c:0},
 {q:"DC means?", a:["A. Direct Current","B. Dynamic Current","C. Digital Current","D. Differential Current"], c:0},
 {q:"Transformers used for?", a:["A. Voltage change","B. Current storage","C. Resistance","D. Capacitance"], c:0},
 {q:"Capacitor stores?", a:["A. Electric charge","B. Magnetic flux","C. Resistance","D. Current"], c:0},
 {q:"Inductor stores?", a:["A. Magnetic energy","B. Electric charge","C. Voltage","D. Resistance"], c:0},
 {q:"Kirchhoff's Current Law?", a:["A. Sum currents at node=0","B. Sum voltages=0","C. Power=VI","D. Energy=I^2R"], c:0},
 {q:"Kirchhoff's Voltage Law?", a:["A. Sum voltages in loop=0","B. Sum currents=0","C. Power=VI","D. Energy=I^2R"], c:0},
 {q:"Resistors in series?", a:["A. Add resistances","B. Multiply resistances","C. Divide resistances","D. Subtract resistances"], c:0},
 {q:"Resistors in parallel?", a:["A. 1/Rtotal=sum(1/R)","B. Add resistances","C. Multiply resistances","D. Subtract resistances"], c:0},
 {q:"Frequency unit?", a:["A. Hertz","B. Ampere","C. Volt","D. Ohm"], c:0},
 {q:"Power formula?", a:["A. P=VI","B. P=I/V","C. P=V/I","D. P=IR"], c:0},
 {q:"Electrical energy unit?", a:["A. Joule","B. Watt","C. Volt","D. Ampere"], c:0},
 {q:"Transformer principle?", a:["A. Mutual induction","B. Ohm's law","C. Capacitor charging","D. Resistor formula"], c:0},
 {q:"Phase sequence affects?", a:["A. Motor rotation","B. Voltage drop","C. Current","D. Resistance"], c:0},
 {q:"Three phase power?", a:["A. √3*VL*IL","B. VL*IL","C. VL/IL","D. IL/VL"], c:0},
 {q:"Overcurrent protection device?", a:["A. Fuse","B. Capacitor","C. Inductor","D. Resistor"], c:0},
 {q:"Voltage regulator purpose?", a:["A. Maintain voltage","B. Store energy","C. Convert frequency","D. Measure current"], c:0},
 {q:"Rectifier converts?", a:["A. AC to DC","B. DC to AC","C. Voltage to current","D. Power to energy"], c:0},
 {q:"Inverter converts?", a:["A. DC to AC","B. AC to DC","C. Voltage to current","D. Power to energy"], c:0},
 {q:"Relay used for?", a:["A. Switching","B. Resistance measurement","C. Current calculation","D. Energy storage"], c:0},
 {q:"Circuit breaker function?", a:["A. Protect circuit","B. Store charge","C. Convert energy","D. Measure voltage"], c:0},
 {q:"Power factor definition?", a:["A. Cosθ of load","B. Voltage/current","C. Resistance","D. Capacitance"], c:0},
 {q:"Transformer primary winding?", a:["A. Input coil","B. Output coil","C. Ground","D. Neutral"], c:0},
 {q:"Transformer secondary winding?", a:["A. Output coil","B. Input coil","C. Ground","D. Neutral"], c:0},
 {q:"Single-phase motor used for?", a:["A. Household appliances","B. Industrial heavy load","C. Transformers","D. Generators"], c:0},
 {q:"Three-phase motor used for?", a:["A. Industrial load","B. Household appliance","C. Transformers","D. Batteries"], c:0},
 {q:"AC generator output?", a:["A. AC voltage","B. DC voltage","C. Resistance","D. Current"], c:0},
 {q:"DC generator output?", a:["A. DC voltage","B. AC voltage","C. Resistance","D. Current"], c:0},
 {q:"Grounding purpose?", a:["A. Safety","B. Power storage","C. Energy conversion","D. Voltage regulation"], c:0},
 {q:"Circuit diagram symbol resistor?", a:["A. Zigzag line","B. Circle","C. Square","D. Triangle"], c:0},
 {q:"Circuit diagram symbol capacitor?", a:["A. Parallel lines","B. Circle","C. Square","D. Triangle"], c:0},
 {q:"Circuit diagram symbol inductor?", a:["A. Coil","B. Circle","C. Square","D. Triangle"], c:0},
 {q:"Power electronics device?", a:["A. Diode","B. Resistor","C. Capacitor","D. Inductor"], c:0},
 {q:"Semiconductor example?", a:["A. Silicon","B. Copper","C. Iron","D. Aluminum"], c:0},
 {q:"Voltage divider formula?", a:["A. Vout=Vin*R2/(R1+R2)","B. Vout=Vin*R1/(R1+R2)","C. Vout=Vin*R1*R2","D. Vout=Vin/R2"], c:0},
 {q:"Current divider formula?", a:["A. I1=It*R2/(R1+R2)","B. I1=It*R1/(R1+R2)","C. I1=It*R1*R2","D. I1=It/R2"], c:0},
 {q:"Load factor meaning?", a:["A. Avg load/Peak load","B. Voltage/Current","C. Resistance/Current","D. Power/Voltage"], c:0},
 {q:"Electric motor torque unit?", a:["A. Nm","B. Watt","C. Volt","D. Ampere"], c:0},
 {q:"Electric motor speed unit?", a:["A. RPM","B. Hertz","C. Ohm","D. Ampere"], c:0},
 {q:"Insulator example?", a:["A. Rubber","B. Copper","C. Aluminum","D. Silicon"], c:0},
 {q:"Conductor example?", a:["A. Copper","B. Rubber","C. Glass","D. Wood"], c:0},
 {q:"Voltage drop formula?", a:["A. V=IR","B. P=VI","C. I=V/R","D. V=I+R"], c:0}
];

// ================= VARIABLES =================
let exams = {2015: questions2015, 2016: questions2015, 2017: questions2015, 2018: questions2015};
let unlockedYears = ["2015"];
let currentYear = "2015";
let index = 0;
let score = 0;
let time = 25*60; // 25 minutes

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
  localStorage.setItem("electricalEngScore",score);
  localStorage.setItem("electricalEngTotal",exams[currentYear].length);
  window.location.href="electrical_eng-result.html";
}

// ================= START =================
loadQuestion();
