const day=document.querySelectorAll('.days span')
const month=document.querySelectorAll('.month span')
const date=document.querySelector('.date')
const meridian=document.querySelectorAll('.meridian span')
const h=document.querySelectorAll('.h')
const m=document.querySelectorAll('.m')
const s=document.querySelectorAll('.s')

function updateTime(){
//creating obj
    var time=new Date();
//Getting current
    var mnth=time.getMonth()+1;
    var dy=time.getDate();
    var yr=time.getFullYear();
//Prepend 0
    mnth=mnth<10?`0${mnth}`:`${mnth}`
    dy=dy<10?`0${dy}`:`${dy}`
//Date
    date.innerHTML=`${dy}-${mnth}-${yr}`;
//Day
    var d=time.getDay();
    day[d].classList.add('active');
//Month
    var mon=time.getDay();
    month[mon+1].classList.add('active');
//Time
    var hh=time.getHours();
    //Calculting 12 Hours Frame
    if(hh>12){
        hh=hh-12;
        meridian[1].classList.add("active");
    }
    else if(hh===12){
        hh=12;
        meridian[1].classList.add("active");
    }
    else(
        meridian[0].classList.add("active")
    )
    var mm=time.getMinutes();
    var ss=time.getSeconds();
    hh=hh<10?`0${hh}`:`${hh}`
    mm=mm<10?`0${mm}`:`${mm}`
    ss=ss<10?`0${ss}`:`${ss}`
    h[0].innerHTML=hh[0];
    h[1].innerHTML=hh[1];
    m[0].innerHTML=mm[0];
    m[1].innerHTML=mm[1];
    s[0].innerHTML=ss[0];
    s[1].innerHTML=ss[1];
    console.log(meridian)
    
}


updateTime();
setInterval(updateTime,1000)