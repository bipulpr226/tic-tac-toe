let flag=true;
let arr=[1,0,1,0,1,0,0,1,0];
let index;
let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');
let p1count=0,p2count=0;
document.querySelector('.type').addEventListener("click",function(e) 
{


   //console.log(e.target.innerText)
   // if(flag){
   //  e.target.innerText = 'x'
   // }
   // else{
   // e.target.innerText = '0'
   // }
   // flag= !flag;
   index = e.target.id; 
   if(arr[index]==1 || arr[index]==0)
    {e.target.innerText=getVal();
     arr[index]=getVal();
     getWinner();
     flag=!flag; 
   
   }
   console.log(arr);
})

function getVal()
{
   return(flag)?'x':'o';
}

function getWinner()
{
  

   if(
      (arr[0]==arr[1] && arr[1]==arr[2])||
      (arr[3]==arr[4] && arr[4]==arr[5])||
      (arr[6]==arr[7] && arr[7]==arr[8])||
      (arr[0]==arr[3] && arr[3]==arr[6])||
      (arr[1]==arr[4] && arr[4]==arr[7])||
      (arr[2]==arr[5] && arr[5]==arr[8])||
      (arr[0]==arr[4] && arr[4]==arr[8])||
      (arr[2]==arr[4] && arr[4]==arr[6]))
      {
          if(flag){
              alert('winner is X');
              p1count++;
          }
          else{
              alert('winner is 0');
              p2count++;
          }
          document.querySelector('.score1').innerText=p1count;
          document.querySelector('.score2').innerText=p2count;
          arr=[];
         
   }
   // for (let i = 0; i <= 7; i++) {
   //    let [a,b,c] = winnerArray[i];//[0,1,2]
   //    console.log(a,b,c);
   //    if((arr[a]==arr[b] && arr[b]==arr[c]))
   //        {
   //            if(flag){
   //                alert('winner is '+player1.value);
   //                p1count++;
   //            }
   //            else{
   //                alert('winner is '+player2.value);
   //                p2count++;
   //            }
   //            document.querySelector('.score1').innerText=p1count;
   //            document.querySelector('.score2').innerText=p2count;
   //            arr=[];
   //     }
   //    }
   }     


function start()
{
   if(player1.value!="" && player2.value!= "")
     {
document.querySelector('.open').style='display:none;'
document.querySelector('.type').style='display:block;'
document.querySelector('.p1').innerText = player1.value;
document.querySelector('.p2').innerText = player2.value
 
 
}
}
function reset() {
   for (let i = 0; i <= 8; i++) {
       document.querySelectorAll('.box')[i].innerHTML= '';
       arr = [1, 0, 1, 0, 1, 0, 0, 1, 0];
   }
   flag = true;
}


function restart()
{
   location.reload();
}
