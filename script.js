let card=document.querySelectorAll('.card-container .card');
const match=document.querySelectorAll('.matched');
let count=0;
let first="";
let second="";
let time=60;
let timecounter=0;
let checked=0;
function timer(){
    let istimer=setInterval(() => {
        document.getElementById('timer').innerHTML=time--;
        if(+document.getElementById('timer').innerHTML==0)
       {
        alert('gameover');
        timecounter=0;
    //
clearInterval(istimer);
window.location.reload();
      }
    }, 1000);
   

}



card.forEach((car)=>{
    car.classList.add('after');
 
    car.addEventListener('click',()=>{
        timecounter++;
        if(timecounter===1)
        {
            timer();
            // console.log('try');
        }
        


       
       
        car.classList.remove('after');
        car.classList.add('card-clicked');
            if(count===0)
            {
                first=car.getAttribute('plang');
                count++;
                
                
            }
            else{
            
                second=car.getAttribute('plang');
                count=0;
            }

            if(first===second)
            {
                if(first!="" && second!="")
                {
const elements = document.querySelectorAll('[plang="'+first+'"]');
// alert('matched');
elements.forEach((eleme)=>{

    eleme.classList.add('matched');
    checked++;
    eleme.classList.remove('card-clicked');
    first="";
    second="";

})

                }
               
            }
            else{
                        if(first!="" && second!=""){

                const unmatched=document.querySelectorAll('.card.card-clicked');
                unmatched.forEach(el1=>{
                    el1.classList.add('shake');
                });
                setTimeout(() => {
                    document.querySelectorAll('.card-clicked img').forEach(el=>{
                        el.style.display="none";
                        unmatched.forEach(el=>{
                            
                            el.classList.add('after');
                    el.classList.remove('shake');
                   });
               });

               unmatched.forEach(ele=>{
                    ele.classList.remove('card-clicked');
               });
               first="";
               second="";
               

                }, 1000);
              
                
            }
        }   
        if(match.length==20)
{
    alert('game complted');
}
setTimeout(() => {
    if(checked==20)
    {
        // console.log('finish');
        alert('game completed');
        window.location.reload();
    }
    
}, 500);

            // console.log(first);
            // console.log(second);
        
    });
});


