function displayDate(){
    let today=new Date();
    let hrs=today.getHours();
    let mnts=today.getMinutes();
    let sec=today.getSeconds();
    let session = document.getElementById('session');
    
    
    document.getElementById("hours").innerHTML= hrs;
    document.getElementById("minutes").innerHTML= mnts;
    document.getElementById("seconds").innerHTML= sec;
    


    }
    setInterval(displayDate);
     

