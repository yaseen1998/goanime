alert ("thank you to visit my first website I hope you feel comfortable with it")
while(true){
var name = prompt("select your favanime(choose the number)"+"\n"+"1.death note"+"\n"+"2.Attack on titan"+"\n"+"3.Fullmetal Alchemist" +"\n"+"4.Sword Art Online")
if (name ==1 ||name== 2 || name==3 ||name ==4){
  break;
}
else{
  alert("you choose a wrong answer")
}
}
if (name == 1){
  var ep = prompt("which episode do you want "+"\n"+"from (1_37)")
  document.write("<h3> your favanime :death note</h3>"+ "<h4>score rate 8.63 </h4>"+"\n"+"<img"+ " src="+"https://static3.srcdn.com/wordpress/wp-content/uploads/2021/03/Death-Note-Characters-Ranked-by-Likability-Feature-Image-2.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5"+">")
  for (ep;ep<=37;ep++){
    if (ep==37){
      ep="37 the end"
    }
   document.write("<h4>"+"<a href="+"https://gogoanime.pe/death-note-episode-"+ep+"> ep"+ep
   +"</a>"+"</h4>")
    }
  }
  else if (name ==2 ){
    var ep = prompt("which episode do you want "+"\n"+"from (1_25)")
    document.write("<h3>your favanime :Attack on titan<h3>"+"<h4>score rate 8.51 </h4>"+"\n"+"<img"+ " src="+"https://an-master.net/wp-content/uploads/2020/11/Attack-on-Titan-Season-4-Release-Date-Trailer-News.jpg"+">")
    for (ep;ep<=25;ep++){
       if (ep==25){
      ep="25 the end"
    }
   document.write("<h4>"+"<a href="+"https://gogoanime.pe/shingeki-no-kyojin-episode-"+ep+"> ep"+ep
   +"</a>"+"</h4>")
    }
    
    }
    else if (name ==3 ){
      var ep = prompt("which episode do you want "+"\n"+"from (1_64)")
    document.write("<h3>your favanime :Fullmetal Alchemist</h3> "+"<h4>score rate 9.17 </h4>"+"\n"+"<img"+ " src="+"https://thefandomentals.com/wp-content/uploads/2018/11/Webp.net-resizeimage.jpg"+">")
    for (ep;ep<=64;ep++){
       if (ep==64){
      ep="64 the end"
    }
   document.write("<h4>"+"<a href="+"https://gogoanime.pe/fullmetal-alchemist-brotherhood-episode-"+ep+"> ep"+ep
   +"</a>"+"</h4>")
    }
    }
    else if (name ==4 ){
    var ep = prompt("which episode do you want "+"\n"+"from (1_25)")
    document.write("<h3>your favanime :Sword Art Online</h3>"+"<h4>score rate 7.22 </h4>"+"\n"+"<img"+ " src="+"https://i.pinimg.com/originals/a6/d9/6b/a6d96b1e585781865bc6b4fe8d97a50f.jpg"+">")
    for (ep;ep<=25;ep++){
       if (ep==25){
      ep="25 the end"
    }
   document.write("<div>"+"<a href="+"https://gogoanime.pe/sword-art-online-episode-"+ep+"> ep"+ep
   +"</a>"+"<div>")
   
  }
    }

else {
    document.write("<h3>you don't choose any one </h3>"+"\n"+"<img"+ " src="+"https://store-images.s-microsoft.com/image/apps.3120.13911809384204628.e1b36730-e00b-4750-9bcd-f69d990b087c.f98b9ae8-d692-4c0c-aff5-fbe02f9459a9?mode=scale&q=90&h=720&w=1280&background=%23FFFFFF"+">")
    for (var i=1;i<=5;i++)
    document.write("<h4>"+"hello"+"</h4>")
    }
   


