const questions2015 = [
 {q:"What is the unit of force?", a:["A. Joule","B. Newton","C. Watt","D. Pascal"], c:1},
 {q:"Cement mainly contains?", a:["A. Lime","B. Silica","C. Alumina","D. All"], c:3},
 {q:"Which test is done on cement?", a:["A. Slump","B. Fineness","C. Impact","D. Crushing"], c:1},
 {q:"Concrete is strong in?", a:["A. Tension","B. Compression","C. Shear","D. Bending"], c:1},
 {q:"Steel is used in RCC because?", a:["A. Cheap","B. Tensile strength","C. Light","D. Color"], c:1},
 {q:"Unit of stress?", a:["A. N","B. N/m","C. N/m²","D. kg"], c:2},
 {q:"Which is binding material?", a:["A. Sand","B. Aggregate","C. Cement","D. Water"], c:2},
 {q:"Bricks are burnt in?", a:["A. Furnace","B. Kiln","C. Oven","D. Stove"], c:1},
 {q:"Surveying deals with?", a:["A. Design","B. Measurement","C. Construction","D. Painting"], c:1},
 {q:"Unit of work?", a:["A. Joule","B. Watt","C. Newton","D. Pascal"], c:0},
 {q:"Which is fine aggregate?", a:["A. Gravel","B. Stone","C. Sand","D. Brick"], c:2},
 {q:"Foundation transfers load to?", a:["A. Air","B. Soil","C. Column","D. Beam"], c:1},
 {q:"Beam resists?", a:["A. Compression","B. Tension","C. Bending","D. Shear"], c:2},
 {q:"Column mainly resists?", a:["A. Tension","B. Compression","C. Shear","D. Bending"], c:1},
 {q:"RCC stands for?", a:["A. Reinforced Cement Concrete","B. Ready Cement Concrete","C. Rough Cement Concrete","D. Reinforced Clay Concrete"], c:0},
 {q:"Which soil has least bearing capacity?", a:["A. Sand","B. Gravel","C. Clay","D. Rock"], c:2},
 {q:"Plaster thickness usually?", a:["A. 5mm","B. 10mm","C. 20mm","D. 50mm"], c:1},
 {q:"Which is surveying instrument?", a:["A. Theodolite","B. Hammer","C. Trowel","D. Saw"], c:0},
 {q:"Unit of density?", a:["A. kg","B. kg/m³","C. m³","D. N/m²"], c:1},
 {q:"Footing is provided under?", a:["A. Beam","B. Column","C. Slab","D. Wall"], c:1},
 {q:"Which test for concrete workability?", a:["A. Compression","B. Slump","C. Tensile","D. Impact"], c:1},
 {q:"Dead load is?", a:["A. Moving","B. Permanent","C. Wind","D. Earthquake"], c:1},
 {q:"Which material is brittle?", a:["A. Steel","B. Rubber","C. Glass","D. Aluminum"], c:2},
 {q:"Civil engineering mainly deals with?", a:["A. Medicine","B. Buildings","C. Software","D. Banking"], c:1},
 {q:"Unit of pressure?", a:["A. Joule","B. Watt","C. Pascal","D. Newton"], c:2}
];

let index = 0;
let time = 15*60;

const form = document.getElementById("exam-form");
const timer = document.getElementById("timer");
const back = document.getElementById("back");
const next = document.getElementById("next");
const submit = document.getElementById("submit");

// timer
setInterval(()=>{
    let m=Math.floor(time/60);
    let s=time%60;
    timer.innerText=`Time Left: ${m}:${s.toString().padStart(2,'0')}`;
    time--;
},1000);

function render(){
    let q = questions2015[index];
    let html = `<div class="question"><h3>Q${index+1}. ${q.q}</h3>`;
    q.a.forEach((op,i)=>{
        html+=`<label><input type="radio" name="q"> ${op}</label>`;
    });
    html+=`</div>`;
    form.innerHTML = html;

    submit.style.display = index===questions2015.length-1 ? "block":"none";
}

form.addEventListener("click",e=>{
    if(e.target.tagName==="LABEL"){
        let labels=form.querySelectorAll("label");
        labels.forEach((l,i)=>{
            l.classList.remove("correct","wrong");
            if(i===questions2015[index].c) l.classList.add("correct");
        });
        let clicked=[...labels].indexOf(e.target);
        if(clicked!==questions2015[index].c) e.target.classList.add("wrong");
    }
});

back.onclick=()=>{ if(index>0){index--; render();}};
next.onclick=()=>{ if(index<questions2015.length-1){index++; render();}};
submit.onclick=()=>{ alert("Civil Engineering Exam Submitted!"); location.reload();};

render();
