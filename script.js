function calender() {
    var day = ['Sunday', 'Monaday', 'Tuesday', 'Wednesday', 'Thursady', 'Friday', 'Saturady'];
    var month = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'];
    var d = new Date();
    setText('day', day[d.getDay()]);
    setText('date', d.getDate());
    setText('month-year', month[d.getMonth()]+ ' ' + (d.getFullYear()));
};

function setText(id, val){
  if(val < 10){
      val='0'+val;
  }  
    document.getElementById(id).innerHTML=val;
};

window.onload= calender;