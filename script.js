


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
//    localStorage.clear();
let date;
let datesdata;
let titledata;
    if(localStorage.getItem('eventtitle')!=null)
    {
     date=localStorage.getItem('eventdate');
    
    title.innerHTML=localStorage.getItem('eventtitle');
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

        function selectionload()
        {
            let tbl=document.getElementById('table');
                for(let r=1;r<tbl.rows.length;r++)
                {
                    if(tbl.rows[r].cells[0].innerHTML==localStorage.getItem('selectedbtn')){
                        // console.log(tbl.rows[r].cells[0].innerHTML);
                        // console.log(localStorage.getItem('selectedbtn'));
                            tbl.rows[r].classList.add('selected');
                    }
                }
        }

        function ShowData() {
           
            $(".asdf").empty();
            
            //    let asdfa=localStorage.getItem('selectedbtn');
            //    for(let a=0;a<tabss.length;a++)
            //    {
                //     tabss.rows[asdfa].classList.toggle('selected');
                //    }
                
                getdata();
                
      
            var tbl = document.getElementById('table-body');
             
            for (let i = 0; i < arr1.length; i++) {
              
             
                    let idtable=Math.floor(Math.random()*507);

                    let tablerow= document.createElement('tr');
                    tablerow.setAttribute('id',idtable);
                    tablerow.setAttribute('class','asdf');
                   table.appendChild(tablerow);
                     
    
             
                    let a0=document.createElement('td');
                   let a=document.createElement('td');
                   let b=document.createElement('td');
                   let c=document.createElement('td');
                   let d=document.createElement('td');

                   d.style.textAlign="center";

                   a0.classList.add('row-data');
                   b.classList.add('row-data');
                   c.classList.add('row-data');

                   a0.innerHTML=arr1[i].id;
                   a0.setAttribute('hidden','');
                   a.innerHTML= '<input type="radio" name="selection" onclick="check()" >';
                             b.innerHTML = arr1[i].title;


                 c.innerHTML = arr1[i].eventdates;
                 


                 d.innerHTML = '<button class="deletetablebutton"  onclick="DeleteRow('+i+')"><i id="delbutton"  class="fa fa-trash fa-2x"></i></button>';

                   
                 tablerow.appendChild(a0);
                   tablerow.appendChild(a);
                       tablerow.appendChild(b);
                   tablerow.appendChild(c);
                   tablerow.appendChild(d);





                // let r = tbl.insertRow();
                // r.classList.add('asdf');
                // r.setAttribute('id',idtable);
                //                 var cell0 = r.insertCell();
                // // cell0.style.display = "none";
                // cell0.classList.add('row-data');
                // cell0.setAttribute('hidden','');
                // var cell1 = r.insertCell();

                // var cell2 = r.insertCell();
                // cell2.classList.add('row-data');
                // var cell3 = r.insertCell();
                // cell3.classList.add('row-data');

                // var cell4 = r.insertCell();
                


                // // let radio =document.createElement('input');
                // // radio.setAttribute('type','radio');
                // // radio.setAttribute('name','selection');
                // cell0.innerHTML = arr1[i].id;
                // cell1.innerHTML = '<input type="radio" name="selection" onclick="check()" >';
                // cell2.innerHTML = arr1[i].title;


                // cell3.innerHTML = arr1[i].eventdates;


                // cell4.innerHTML = '<button class="deletetablebutton"  onclick="DeleteRow('+i+')"><i id="delbutton"  class="fa fa-trash fa-2x"></i></button>';
                
                    

                //    tablerow.appendChild(radio);
                //    tablerow.appendChild(b);
                //    tablerow.appendChild(c);
                //    tablerow.appendChild(d);
            }

            
            selectionload();
            
        }

      
        function check()
        {
            var rowId = 
                    event.target.parentNode.parentNode.id;
                   
                var data = 
 document.getElementById(rowId).querySelectorAll(".row-data"); 

document.getElementById(rowId).classList.toggle('selected');
             
                    var eventid=data[0].innerHTML;
                var eventtitles = data[1].innerHTML;
                var eventdates = data[2].innerHTML;
  
                localStorage.setItem('eventtitle',eventtitles);
                localStorage.setItem('eventdate',eventdates);
                localStorage.setItem('selectedbtn',eventid);
                
                window.location.reload();
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

        let arr1 = new Array();
        function getdata() {
            var str = localStorage.getItem('users');
            if (str != null) {
                arr1 = JSON.parse(str);
            }
        }
eventbtn.addEventListener('click',(e) => {
ShowData();   

    events.style.display = "block";

        closebtn.onclick = function () {
            // $('.asdf').empty();
            // events.style.display = "none";
            // eventbtn.style.pointerEvents="visible";
                window.location.reload();

        };

        addbtn.onclick = function () {
            document.getElementById('add-events').style.display = "block";

        };

        closeaddbtn.onclick = function () {
            document.getElementById('add-events').style.display = "none";
           
        };

        addevent.onclick = function () {


            let names = document.getElementById('event-title').value;
            let dates = document.getElementById('event-date').value;
           
            if(names=="" || dates=="")
            {
                document.getElementById('message').innerHTML="Please fill out all field";
                setTimeout(() => {
                    document.getElementById('message').innerHTML="";
                    
                }, 3000);
                return false;
            }


                let eventdetails=new Array();
            let randomid = Math.floor(Math.random() * 999);
            eventdetails=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[];
            eventdetails.push({
                "id": randomid,
                "title": names,
                "eventdates": dates
            });
            localStorage.setItem('users', JSON.stringify(eventdetails));
                document.getElementById('add-events').style.display="none";
            eventbtn.click();
            
            



        };
      
      
        // checked();

        
        
        
        
        
        // var tablesss= document.getElementById('table');
        eventbtn.style.pointerEvents="none";
       

    });

    function DeleteRow(index)
    {
        let task= localStorage.getItem('users');
        let taskobj= JSON.parse(task);
        taskobj.splice(index,1);

        localStorage.setItem('users',JSON.stringify(taskobj));
        if(document.getElementById('table-body').rows.length==0)
        {
            localStorage.removeItem('eventtitle');
            localStorage.removeItem('eventdate');
            localStorage.removeItem('selectedbtn');
        }
        ShowData();
        

    }
    
