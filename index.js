let decrement=document.querySelector('.decrease');
let increment=document.querySelector('.increase');
let result=document.querySelector('.value');
decrement.addEventListener('click',function(){
    let ans=parseInt(result.innerText);
    ans=ans-1;
    result.innerText=ans;
})
increment.addEventListener('click',function(){
    let ans=parseInt(result.innerText);
    ans=ans+1;
    result.innerText=ans;
})