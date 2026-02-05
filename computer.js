// --------------------------
// Computer Science Exam JS
// --------------------------

// Questions for 2015 & 2016 (25 MCQs each)
const allQuestions = {
    "2015": [
        {q:"What does CPU stand for?", a:["A. Central Process Unit","B. Central Processing Unit","C. Computer Personal Unit","D. Central Power Unit"], correct:1},
        {q:"Which language is used for web apps?", a:["A. HTML","B. Python","C. C++","D. All"], correct:0},
        {q:"Binary number system is based on?", a:["A. Base 2","B. Base 10","C. Base 16","D. Base 8"], correct:0},
        {q:"HTML stands for?", a:["A. HyperText Markup Language","B. Hyper Tool Multi Language","C. HighText Markup Language","D. Hyperlinks Text Markup"], correct:0},
        {q:"Which is volatile memory?", a:["A. ROM","B. RAM","C. Flash","D. Hard Disk"], correct:1},
        {q:"Operating system example?", a:["A. Linux","B. Windows","C. MacOS","D. All"], correct:3},
        {q:"Which is programming language?", a:["A. Python","B. HTML","C. CSS","D. SQL"], correct:0},
        {q:"IP address identifies?", a:["A. User","B. Computer","C. Network device","D. All"], correct:2},
        {q:"Which is search engine?", a:["A. Google","B. Firefox","C. Windows","D. Linux"], correct:0},
        {q:"ASCII stands for?", a:["A. American Standard Code for Information Interchange","B. American Standard Coding Info","C. Automated System Code for Info","D. None"], correct:0},
        {q:"HTML tag for paragraph?", a:["A. <p>","B. <h1>","C. <div>","D. <span>"], correct:0},
        {q:"Primary memory example?", a:["A. RAM","B. ROM","C. HDD","D. SSD"], correct:0},
        {q:"Binary digit is called?", a:["A. Byte","B. Bit","C. Nibble","D. Word"], correct:1},
        {q:"Full form of URL?", a:["A. Uniform Resource Locator","B. Uniform Resource Link","C. Uniform Register Locator","D. Universal Resource Locator"], correct:0},
        {q:"Which is NOT OS?", a:["A. Linux","B. Windows","C. Photoshop","D. Unix"], correct:2},
        {q:"HTML uses?", a:["A. Tags","B. Functions","C. Methods","D. Variables"], correct:0},
        {q:"CSS stands for?", a:["A. Cascading Style Sheet","B. Coded Style Sheet","C. Cascading Script Sheet","D. Coded Script Style"], correct:0},
        {q:"Which is database?", a:["A. MySQL","B. HTML","C. CSS","D. JavaScript"], correct:0},
        {q:"HTML link tag?", a:["A. <a>","B. <link>","C. <href>","D. <url>"], correct:0},
        {q:"Computer virus type?", a:["A. Trojan","B. Worm","C. Spyware","D. All"], correct:3},
        {q:"Fetch-Decode-Execute is part of?", a:["A. CPU cycle","B. RAM cycle","C. OS cycle","D. ROM cycle"], correct:0},
        {q:"Java is?", a:["A. Programming language","B. OS","C. Database","D. Hardware"], correct:0},
        {q:"Which is NOT input device?", a:["A. Keyboard","B. Mouse","C. Monitor","D. Scanner"], correct:2},
        {q:"HTML comment tag?", a:["A. <!-- comment -->","B. /* comment */","C. // comment","D. <comment>"], correct:0},
        {q:"Binary of decimal 10?", a:["A. 1010","B. 1001","C. 1100","D. 1110"], correct:0}
    ],
    "2016": [
        {q:"Which of these is NOT a programming language?", a:["A. Python","B. Java","C. HTML","D. C++"], correct:2},
        {q:"What does RAM stand for?", a:["A. Read Access Memory","B. Random Access Memory","C. Read-Only Memory","D. Run Access Memory"], correct:1},
        {q:"Which HTML tag is for a hyperlink?", a:["A. <link>","B. <a>","C. <href>","D. <url>"], correct:1},
        {q:"Which one is NOT an operating system?", a:["A. Linux","B. Windows","C. Photoshop","D. macOS"], correct:2},
        {q:"Binary 1010 equals decimal?", a:["A. 10","B. 12","C. 8","D. 9"], correct:0},
        {q:"CSS is used for?", a:["A. Structure","B. Style","C. Function","D. Logic"], correct:1},
        {q:"IP stands for?", a:["A. Internet Protocol","B. Internal Protocol","C. Internet Program","D. Internal Program"], correct:0},
        {q:"Which is a database?", a:["A. MySQL","B. JavaScript","C. HTML","D. CSS"], correct:0},
        {q:"Which device is output?", a:["A. Keyboard","B. Monitor","C. Mouse","D. Scanner"], correct:1},
        {q:"Which is NOT a network device?", a:["A. Switch","B. Router","C. Keyboard","D. Hub"], correct:2},
        {q:"HTML stands for?", a:["A. HyperText Markup Language","B. Hyper Tool Multi Language","C. HighText Markup Language","D. Hyperlinks Text Markup"], correct:0},
        {q:"Which is volatile memory?", a:["A. ROM","B. RAM","C. SSD","D. HDD"], correct:1},
        {q:"Full form of URL?", a:["A. Uniform Resource Locator","B. Uniform Resource Link","C. Universal Register Locator","D. Uniform Reference Link"], correct:0},
        {q:"Which is NOT a programming paradigm?", a:["A. OOP","B. Procedural","C. Functional","D. Excel"], correct:3},
        {q:"Fetch-Decode-Execute is part of?", a:["A. CPU cycle","B. RAM cycle","C. OS cycle","D. ROM cycle"], correct:0},
        {q:"Java is?", a:["A. Programming language","B. OS","C. Hardware","D. Database"], correct:0},
        {q:"Which of these is a compiler?", a:["A. Python","B. GCC","C. HTML","D. JavaScript"], correct:1},
        {q:"Primary storage example?", a:["A. RAM","B. HDD","C. SSD","D. USB"], correct:0},
        {q:"Secondary storage example?", a:["A. RAM","B. ROM","C. Hard Disk","D. CPU"], correct:2},
        {q:"Which is NOT a web browser?", a:["A. Chrome","B. Firefox","C. Windows","D. Edge"], correct:2},
        {q:"Binary digit is called?", a:["A. Byte","B. Bit","C. Nibble","D. Word"], correct:1},
        {q:"HTML comment tag?", a:["A. <!-- comment -->","B. /* comment */","C. // comment","D. <comment>"], correct:0},
        {q:"CSS comment tag?", a:["A. <!-- comment -->","B. /* comment */","C. // comment","D. <comment>"], correct:1},
        {q:"Full form of IP?", a:["A. Internet Protocol","B. Internal Protocol","C. Internet Program","D. Internal Program"], correct:0},
        {q:"Which is NOT input device?", a:["A. Keyboard","B. Mouse","C. Monitor","D. Scanner"], correct:2}
    ],
    "2017": [], 
    "2018": []
};

// --------------------------
// DOM Elements
// --------------------------
const form = document.getElementById('exam-form');
const timerEl = document.getElementById('timer');
const submitBtn = document.getElementById('submit-btn');
const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');
const examYearBtns = document.querySelectorAll('.exam-year-btn');
const paymentSection = document.getElementById('payment-section');
const paymentScreenshot = document.getElementById('payment-screenshot');
const confirmPaymentBtn = document.getElementById('confirm-payment');

let currentYear = "2015";
let currentIndex = 0;
let paidYears = ["2015"]; // 2015 unlocked
let time = 15*60;

// --------------------------
// Timer
// --------------------------
const countdown = setInterval(()=>{
    let min = Math.floor(time/60);
    let sec = time%60;
    timerEl.textContent = `Time Left: ${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
    time--;
    if(time<0){ clearInterval(countdown); submitExam(); }
},1000);

// --------------------------
// Exam Year Buttons
// --------------------------
examYearBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        const year = btn.dataset.year;
        if(!paidYears.includes(year)){
            paymentSection.style.display = "block";

            confirmPaymentBtn.onclick = function(){
                if(paymentScreenshot.files.length === 0){
                    alert("Please upload your payment screenshot first.");
                    return;
                }
                alert(`Payment screenshot uploaded. Exam ${year} unlocked!`);
                paidYears.push(year);
                btn.classList.remove('locked');
                btn.innerHTML = `${year} Exam`;
                paymentSection.style.display = "none";
                paymentScreenshot.value = "";
                currentYear = year;
                currentIndex = 0;
                renderQuestion();
            };
        } else {
            currentYear = year;
            currentIndex = 0;
            renderQuestion();
        }
    });
});

// --------------------------
// Render Question
// --------------------------
function renderQuestion(){
    const questions = allQuestions[currentYear];
    if(!questions || questions.length===0){
        form.innerHTML = "<p>No questions available for this year.</p>";
        backBtn.style.display="none";
        nextBtn.style.display="none";
        submitBtn.style.display="none";
        return;
    }

    const q = questions[currentIndex];
    let html = `<div class="question-card"><h4>Q${currentIndex+1}. ${q.q}</h4>`;
    q.a.forEach((option,optIndex)=>{
        html += `<label><input type="radio" name="q${currentIndex}" value="${optIndex}"> ${option}</label>`;
    });
    html += `</div>`;
    form.innerHTML = html;

    backBtn.style.display = currentIndex===0 ? "none" : "inline-block";
    nextBtn.style.display = currentIndex===questions.length-1 ? "none" : "inline-block";
    submitBtn.style.display = currentIndex===questions.length-1 ? "inline-block" : "none";

    // Immediate feedback
    const labels = form.querySelectorAll('label');
    labels.forEach(label=>{
        label.addEventListener('click', ()=>{
            const input = label.querySelector('input');
            const correctIndex = q.correct;
            const siblings = form.querySelectorAll(`input[name="q${currentIndex}"]`);
            siblings.forEach(r=>{
                r.parentElement.classList.remove('correct','wrong');
                if(parseInt(r.value)===correctIndex) r.parentElement.classList.add('correct');
            });
            if(parseInt(input.value)!==correctIndex) label.classList.add('wrong');
        });
    });
}

// --------------------------
// Navigation
// --------------------------
backBtn.addEventListener('click', ()=>{ if(currentIndex>0){currentIndex--; renderQuestion();} });
nextBtn.addEventListener('click', ()=>{ if(currentIndex<allQuestions[currentYear].length-1){currentIndex++; renderQuestion();} });

// --------------------------
// Submit Exam
// --------------------------
submitBtn.addEventListener('click', submitExam);

function submitExam(){
    alert("Exam submitted successfully!");
    location.reload();
}

// Initial render
renderQuestion();
