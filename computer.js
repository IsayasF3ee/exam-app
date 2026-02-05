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
    "2017": [
{q:"Full form of IP?", a:["A. Internet Protocol","B. Internal Protocol","C. Internet Program","D. Internal Program"], correct:0},
  {q:"Which is NOT input device?", a:["A. Keyboard","B. Mouse","C. Monitor","D. Scanner"], correct:2},
  {q:"What does HTML stand for?", a:["A. Hyper Text Markup Language","B. High Text Markup Language","C. Hyperlinks and Text Markup Language","D. Hyper Tool Markup Language"], correct:0},
  {q:"CSS stands for?", a:["A. Cascading Style Sheets","B. Colorful Style Sheets","C. Creative Style Sheets","D. Computer Style Sheets"], correct:0},
  {q:"Which is client-side scripting?", a:["A. PHP","B. JavaScript","C. SQL","D. Python"], correct:1},
  {q:"Which tag is used for table row?", a:["A. <tr>","B. <td>","C. <th>","D. <table>"], correct:0},
  {q:"Which tag defines a table header?", a:["A. <th>","B. <td>","C. <tr>","D. <thead>"], correct:0},
  {q:"Which property is used to change font size in CSS?", a:["A. font-size","B. text-size","C. font-style","D. text-style"], correct:0},
  {q:"Which operator is used for assignment in JS?", a:["A. =","B. ==","C. ===","D. :="], correct:0},
  {q:"Which symbol starts a comment in JS?", a:["A. //","B. <!--","C. /*","D. #"], correct:0},
  {q:"Which method adds element to end of array in JS?", a:["A. push()","B. pop()","C. shift()","D. unshift()"], correct:0},
  {q:"Which method removes last element from array?", a:["A. pop()","B. push()","C. shift()","D. unshift()"], correct:0},
  {q:"Which method adds element to beginning of array?", a:["A. unshift()","B. shift()","C. push()","D. pop()"], correct:0},
  {q:"Which method removes first element from array?", a:["A. shift()","B. unshift()","C. push()","D. pop()"], correct:0},
  {q:"Which is correct syntax for function in JS?", a:["A. function myFunc() {}","B. func myFunc() {}","C. def myFunc() {}","D. method myFunc() {}"], correct:0},
  {q:"Which is block-level element?", a:["A. <div>","B. <span>","C. <a>","D. <b>"], correct:0},
  {q:"Which is inline element?", a:["A. <span>","B. <div>","C. <p>","D. <h1>"], correct:0},
  {q:"What is boolean operator AND?", a:["A. &&","B. ||","C. !","D. =="], correct:0},
  {q:"What is boolean operator OR?", a:["A. ||","B. &&","C. !","D. ==="], correct:0},
  {q:"Which method converts string to integer in JS?", a:["A. parseInt()","B. parseFloat()","C. Number()","D. toString()"], correct:0},
  {q:"Which event occurs when user clicks on element?", a:["A. onclick","B. onmouseover","C. onsubmit","D. onchange"], correct:0},
  {q:"Which attribute defines image source?", a:["A. src","B. href","C. alt","D. link"], correct:0},
  {q:"Which HTML element defines a hyperlink?", a:["A. <a>","B. <link>","C. <href>","D. <url>"], correct:0},
  {q:"Which is NOT programming language?", a:["A. HTML","B. Java","C. Python","D. C++"], correct:0},
  {q:"Which operator adds numbers in JS?", a:["A. +","B. -","C. *","D. /"], correct:0},
  {q:"Which operator subtracts numbers?", a:["A. -","B. +","C. *","D. /"], correct:0},
  {q:"Which operator multiplies numbers?", a:["A. *","B. +","C. -","D. /"], correct:0},
  {q:"Which operator divides numbers?", a:["A. /","B. +","C. -","D. *"], correct:0},
  {q:"Which operator checks equality without type coercion?", a:["A. ===","B. ==","C. !=","D. ="], correct:0},
  {q:"Which HTML tag adds a line break?", a:["A. <br>","B. <hr>","C. <lb>","D. <break>"], correct:0},
  {q:"Which HTML tag adds horizontal line?", a:["A. <hr>","B. <br>","C. <line>","D. <hl>"], correct:0},
  {q:"Which CSS property changes text color?", a:["A. color","B. font-color","C. text-color","D. bg-color"], correct:0},
  {q:"Which CSS property changes background color?", a:["A. background-color","B. color","C. bg-color","D. font-color"], correct:0},
  {q:"Which JS keyword defines variable?", a:["A. var/let/const","B. int","C. dim","D. define"], correct:0},
  {q:"Which JS keyword defines constant?", a:["A. const","B. var","C. let","D. final"], correct:0},
  {q:"Which method writes to console?", a:["A. console.log()","B. print()","C. echo()","D. document.write()"], correct:0},
  {q:"Which method shows alert box?", a:["A. alert()","B. prompt()","C. confirm()","D. write()"], correct:0},
  {q:"Which method asks input from user?", a:["A. prompt()","B. alert()","C. confirm()","D. input()"], correct:0},
  {q:"Which method asks confirmation?", a:["A. confirm()","B. alert()","C. prompt()","D. check()"], correct:0},
  {q:"Which HTML tag defines table?", a:["A. <table>","B. <tr>","C. <td>","D. <th>"], correct:0},
  {q:"Which tag defines table cell?", a:["A. <td>","B. <tr>","C. <table>","D. <th>"], correct:0},
  {q:"Which tag defines table row?", a:["A. <tr>","B. <td>","C. <th>","D. <table>"], correct:0},
  {q:"Which tag defines table header?", a:["A. <th>","B. <td>","C. <tr>","D. <thead>"], correct:0},
  {q:"Which JS loop iterates fixed times?", a:["A. for","B. while","C. do-while","D. foreach"], correct:0},
  {q:"Which JS loop runs at least once?", a:["A. do-while","B. while","C. for","D. foreach"], correct:0},
  {q:"Which JS loop runs while condition true?", a:["A. while","B. for","C. do-while","D. foreach"], correct:0},
  {q:"Which HTML tag defines unordered list?", a:["A. <ul>","B. <ol>","C. <li>","D. <list>"], correct:0},
  {q:"Which HTML tag defines ordered list?", a:["A. <ol>","B. <ul>","C. <li>","D. <list>"], correct:0},
  {q:"Which tag defines list item?", a:["A. <li>","B. <ul>","C. <ol>","D. <list>"], correct:0},
  {q:"Which JS function converts string to number?", a:["A. parseInt()","B. parseFloat()","C. Number()","D. All of the above"], correct:3},
  {q:"Which JS function converts number to string?", a:["A. toString()","B. parseInt()","C. parseFloat()","D. Number()"], correct:0},
  {q:"Which symbol starts block comment?", a:["A. /*","B. //","C. <!--","D. #"], correct:0},
  {q:"Which symbol ends block comment?", a:["A. */","B. //","C. -->","D. #"], correct:0}

    ], 

    "2018": [
{q:"ES6 feature introduced which keyword?", a:["A. var","B. let/const","C. int","D. define"], correct:1},
  {q:"Arrow function syntax uses?", a:["A. ()=>","B. ->","C. =>>","D. >>>"], correct:0},
  {q:"Template literals use?", a:["A. `backticks`","B. 'single quotes'","C. \"double quotes\"","D. #hash"], correct:0},
  {q:"Which method returns array length?", a:["A. length","B. size","C. count","D. total"], correct:0},
  {q:"Which array method adds last?", a:["A. push()","B. pop()","C. shift()","D. unshift()"], correct:0},
  {q:"Which array method removes last?", a:["A. pop()","B. push()","C. shift()","D. unshift()"], correct:0},
  {q:"Which array method adds first?", a:["A. unshift()","B. shift()","C. push()","D. pop()"], correct:0},
  {q:"Which array method removes first?", a:["A. shift()","B. unshift()","C. push()","D. pop()"], correct:0},
  {q:"Fetch API used for?", a:["A. HTTP requests","B. DOM manipulation","C. Styling","D. Events"], correct:0},
  {q:"Promises handle?", a:["A. Async operations","B. CSS","C. HTML","D. Variables"], correct:0},
  {q:"Which method adds HTML content?", a:["A. innerHTML","B. innerText","C. textContent","D. write()"], correct:0},
  {q:"Which method adds text content?", a:["A. textContent","B. innerHTML","C. write()","D. console.log()"], correct:0},
  {q:"Which event triggers when page loads?", a:["A. onload","B. onclick","C. onhover","D. onsubmit"], correct:0},
  {q:"Which operator checks equality without type coercion?", a:["A. ===","B. ==","C. =","D. !="], correct:0},
  {q:"Which operator checks equality with type coercion?", a:["A. ==","B. ===","C. =","D. !="], correct:0},
  {q:"Which JS object stores key-value pairs?", a:["A. Object","B. Array","C. Map","D. Set"], correct:0},
  {q:"Which ES6 data structure stores unique values?", a:["A. Set","B. Map","C. Object","D. Array"], correct:0},
  {q:"Which ES6 data structure stores key-value pairs?", a:["A. Map","B. Set","C. Object","D. Array"], correct:0},
  {q:"Default parameter is feature of?", a:["A. ES6","B. ES5","C. HTML5","D. CSS3"], correct:0},
  {q:"Which method finds array element?", a:["A. find()","B. filter()","C. map()","D. forEach()"], correct:0},
  {q:"Which method filters array?", a:["A. filter()","B. find()","C. map()","D. forEach()"], correct:0},
  {q:"Which method transforms array elements?", a:["A. map()","B. filter()","C. find()","D. reduce()"], correct:0},
  {q:"Which method reduces array to single value?", a:["A. reduce()","B. map()","C. filter()","D. find()"], correct:0},
  {q:"Which JS keyword defines constant?", a:["A. const","B. let","C. var","D. final"], correct:0},
  {q:"Which JS keyword defines variable?", a:["A. let/var","B. const","C. int","D. define"], correct:0},
  {q:"Which event occurs on button click?", a:["A. onclick","B. onload","C. onhover","D. onchange"], correct:0},
  {q:"Which HTML tag links CSS file?", a:["A. <link>","B. <script>","C. <style>","D. <css>"], correct:0},
  {q:"Which method parses JSON?", a:["A. JSON.parse()","B. JSON.stringify()","C. parse()","D. stringify()"], correct:0},
  {q:"Which method stringifies JSON?", a:["A. JSON.stringify()","B. JSON.parse()","C. stringify()","D. parse()"], correct:0},
  {q:"Which symbol starts comment?", a:["A. //","B. /*","C. <!--","D. #"], correct:0},
  {q:"Which symbol ends block comment?", a:["A. */","B. //","C. -->","D. #"], correct:0},
  {q:"Which HTML tag adds line break?", a:["A. <br>","B. <hr>","C. <lb>","D. <break>"], correct:0},
  {q:"Which HTML tag adds horizontal line?", a:["A. <hr>","B. <br>","C. <line>","D. <hl>"], correct:0},
  {q:"Which CSS property changes text color?", a:["A. color","B. text-color","C. font-color","D. bg-color"], correct:0},
  {q:"Which CSS property changes background color?", a:["A. background-color","B. color","C. font-color","D. bg-color"], correct:0},
  {q:"Which method writes to console?", a:["A. console.log()","B. alert()","C. print()","D. document.write()"], correct:0},
  {q:"Which JS keyword for function?", a:["A. function","B. func","C. method","D. def"], correct:0},
  {q:"Which HTML tag defines table?", a:["A. <table>","B. <tr>","C. <td>","D. <th>"], correct:0},
  {q:"Which tag defines table row?", a:["A. <tr>","B. <td>","C. <th>","D. <table>"], correct:0},
  {q:"Which tag defines table header?", a:["A. <th>","B. <td>","C. <tr>","D. <thead>"], correct:0},
  {q:"Which HTML tag defines unordered list?", a:["A. <ul>","B. <ol>","C. <li>","D. <list>"], correct:0},
  {q:"Which HTML tag defines ordered list?", a:["A. <ol>","B. <ul>","C. <li>","D. <list>"], correct:0},
  {q:"Which tag defines list item?", a:["A. <li>","B. <ul>","C. <ol>","D. <list>"], correct:0},
  {q:"Which method converts string to number?", a:["A. parseInt()","B. parseFloat()","C. Number()","D. All of the above"], correct:3},
  {q:"Which method converts number to string?", a:["A. toString()","B. parseInt()","C. parseFloat()","D. Number()"], correct:0},
  {q:"Which JS operator adds numbers?", a:["A. +","B. -","C. *","D. /"], correct:0},
  {q:"Which JS operator subtracts numbers?", a:["A. -","B. +","C. *","D. /"], correct:0},
  {q:"Which JS operator multiplies numbers?", a:["A. *","B. +","C. -","D. /"], correct:0},
  {q:"Which JS operator divides numbers?", a:["A. /","B. +","C. -","D. *"], correct:0}

    ]
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

