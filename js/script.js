function Load(){
    document.getElementById('load').style.display ='none';
}
// -------------timeInterval----------------
const ref = setInterval(() =>{
const aft = new Date(2021,11,29,16,31,00);
const now = new Date().getTime();
const diff = aft-now;

const Sec = 1000;
const Min = Sec*60;
const Hr =Min*60;
const Day = Hr*24;

const dd = Math.floor(diff/Day);
const hh = Math.floor((diff%Day) / Hr);
const mm = Math.floor((diff%Hr) / Min);
const ss = Math.floor((diff%Min) / Sec);
document.getElementById('day').innerText = dd;
document.getElementById('hr').innerText = hh;
document.getElementById('mn').innerText = mm;
document.getElementById('sec').innerText = ss;
if(diff<=0){
    clearInterval(ref);
    document.getElementById('day').innerText = "00";
document.getElementById('hr').innerText = '00';
document.getElementById('mn').innerText = '00';
document.getElementById('sec').innerText = '00';
}
},1000);

// ------------counters------------------------------------------
var counters =document.querySelectorAll('.counter');
counters.forEach((num) => {
    // console.log(num);
    num.innerHTML = 0;
    const upDateCount =() =>{
        const TargetCount = +num.getAttribute('data-target'); //conver into integer
        // console.log(TargetCount);
        const startingCount = Number( num.innerHTML);//conver into integer
        const TargetDiff = Math.round(TargetCount/100);
        if(startingCount < TargetCount){
            num.innerHTML =`${startingCount+TargetDiff}`;  
        setTimeout(upDateCount,10)
        }
        else{
            num.innerHTML = TargetCount;
        }
    }
    upDateCount();

 });

//  ------------scrool button-------------------------
 const Top = document.getElementById('top');
 window.onscroll= function(){
    //  Top.style.display='none';
    if(document.body.scrollTop >40 || document.documentElement.scrollTop >40){
       Top.style.display='block';  
    }
    else{
         Top.style.display='none';
    }
 }
 Top.addEventListener('click',()=>{
    document.body.scrollTop= 0;
    document.documentElement.scrollTop =0;
 })
 function btnHide(){
    Top.style.display='none';
 }