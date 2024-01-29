window.onload=()=>{
    let countdownTimer=10;
    let timerPromise=new Promise((myResolve, myReject)=>{
        const timer= setInterval(()=>{
            if(countdownTimer<=0){
                myResolve('Your Time Is Over!!!!!!')
                clearInterval(timer)
            }
            countdownTimer-=pass1()
        },1000)
    })
    timerPromise.then((value)=>{
        logResult(value)
    })
    function pass1(){
        document.getElementById("intervalTimer").innerHTML=countdownTimer;
        console.log(countdownTimer)
        return 1;
    }
    const logResult=(_value)=>(document.getElementById('lapsed').innerHTML=_value)    
}