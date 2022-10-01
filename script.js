


    const days=document.getElementById("day");
    const hours=document.getElementById("hour");
    const minutes=document.getElementById("minute");
    const seconds=document.getElementById("seconds");
    const title=document.getElementById("title");

    const eventbtn=document.getElementById('eventbtn');
    const events=document.getElementById('Events');
   const closebtn= document.querySelector('.close-btn.close');
   const closeaddbtn=document.querySelector('.close-btn.close-add');
   const table=document.getElementById('table');
   const addbtn=document.querySelector('.add-btn.addevents');

   const addevent=document.getElementById('addevent');
let date;
    if(localStorage.getItem('eventdate')!=null)
    {
     date=localStorage.getItem('eventdate');
    
    title.innerHTML=localStorage.getItem('eventname');
    }
    else{
date="1 Jan 2023";
    }

    setInterval(() => {
        
        countdown(date);
    }, 1000);

    function countdown(x){
        
   
        let dates=new Date(x);
       
        let currentdate=new Date();
        const diff=(dates-currentdate)/1000;
            
           days.innerHTML=format(Math.floor(diff/3600/24));

            
            hours.innerHTML=format(Math.floor(diff/3600)%24);
            minutes.innerHTML=format(Math.floor(diff/60)%60);
           seconds.innerHTML=format(Math.floor(diff)%60);
         

        }
      
        function format(time){
            if(time<10)
            {
                return(`0${time}`);
            }
            else{
                return time;
            }
            
        }
eventbtn.addEventListener('click',function(e){

        

            events.style.display="block";
            closebtn.onclick=function()
            {
                events.style.display="none";
                $('.asdf').empty();
            }

            addbtn.onclick=function(){
                document.getElementById('add-events').style.display="block";

            }
            
            closeaddbtn.onclick=function()
            {
                document.getElementById('add-events').style.display="none";


            }
            addevent.onclick=function(){
                let name=document.getElementById('event-title').value;
                let dates=document.getElementById('event-date').value;

                localStorage.setItem('eventname',name);
                localStorage.setItem('eventdate',dates);
                    
            }
            if(localStorage.getItem('eventdate')!=null || localStorage.getItem('eventname')!=null){

          
                let tablerow= document.createElement('tr');
                tablerow.setAttribute('class','asdf');
               table.appendChild(tablerow);
                    let radio =document.createElement('input');
                    radio.setAttribute('type','radio');
                    radio.setAttribute('name','selection');

         

               let a=document.createElement('td');
               let b=document.createElement('td');
               let c=document.createElement('td');
               let d=document.createElement('td');
                
               b.innerHTML=localStorage.getItem('eventname');

               c.innerHTML=localStorage.getItem('eventdate');

          
               d.innerHTML="Delete";

               tablerow.appendChild(radio);
               tablerow.appendChild(b);
               tablerow.appendChild(c);
               tablerow.appendChild(d);
               
            }

            e.preventDefault();
                    });

