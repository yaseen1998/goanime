alert("thank you to visit my first website I hope you feel comfortable with it")
while (true) {
  var choose = prompt("choose one of them " + "\n" + "1.resume watch the anime" + "\n" + "2.select random anime to watch" + "\n" + "3. find out the website")
  if (choose == 1) {
    while(true){
      var name = prompt("select your favanime(choose the number)" + "\n" + "1.death note" + "\n" + "2.Attack on titan" + "\n" + "3.Fullmetal Alchemist" + "\n" + "4.Sword Art Online" + "\n" + "5.One punch man")
if(name == 1 || name == 2 || name == 3 || name == 4 || name == 5) {
      break;
    }
else { alert("you choose a wrong answer " + "\n" + "try again") }

  }
  if (name == 1) {
    var ep = prompt("which episode do you want " + "\n" + "from (1_37)")
    document.write("<h3> death note (score rate 8.63)</h3>" + +"\n" + "<img" + " src=" + "https://static3.srcdn.com/wordpress/wp-content/uploads/2021/03/Death-Note-Characters-Ranked-by-Likability-Feature-Image-2.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5" + "style='height:750px ;width:750px ;'>")
    for (ep; ep <= 37; ep++) {
      if (ep == 37) {
        ep = "37 the end"
      }
      document.write("<h4>" + "<a href=" + "https://gogoanime.pe/death-note-episode-" + ep + "> death note Episode " + ep
        + "</a>" + "</h4>")
    }break;
  }
  else if (name == 2) {
    var ep = prompt("which episode do you want " + "\n" + "from (1_25)")
       document.write("<h3>Attack on titan (score rate 8.51)<h3>"+"\n"+"<img" + " src=" + "https://pbs.twimg.com/profile_images/1324093768618909697/Ij-CAeyd_400x400.jpg style='width:750px;height:750px;'>")

    for (ep; ep <= 25; ep++) {
      if (ep == 25) {
        ep = "25 the end"
      }
      document.write("<h4>" + "<a href=" + "https://gogoanime.pe/shingeki-no-kyojin-episode-" + ep + ">Attack on titan Episode " + ep
        + "</a>" + "</h4>")
    }break;

  }
  else if (name == 3) {
    var ep = prompt("which episode do you want " + "\n" + "from (1_64)")
    document.write("<h3>Fullmetal Alchemist (score rate 9.17)</h3> " + "\n" + "<img" + " src=" + "https://thefandomentals.com/wp-content/uploads/2018/11/Webp.net-resizeimage.jpg style='width:750px;height:750px;'>")
    for (ep; ep <= 64; ep++) {
      if (ep == 64) {
        ep = "64 the end"
      }
      document.write("<h4>" + "<a href=" + "https://gogoanime.pe/fullmetal-alchemist-brotherhood-episode-" + ep + "> Fullmetal Alchemist Episode " + ep
        + "</a>" + "</h4>")
    }break;
  }
  else if (name == 4) {
    var ep = prompt("which episode do you want " + "\n" + "from (1_25)")
    document.write("<h3>Sword Art Online (score rate 7.22) </h3>" + "\n" + "<img" + " src=" + "https://i.pinimg.com/originals/a6/d9/6b/a6d96b1e585781865bc6b4fe8d97a50f.jpg" + " style='height:750px ;width:750px ;'>")
    for (ep; ep <= 25; ep++) {
      if (ep == 25) {
        ep = "25 the end"
      }
      document.write("<h4>" + "<a href=" + "https://gogoanime.pe/sword-art-online-episode-" + ep + "> Sword Art Online Episode " + ep
        + "</a>" + "<h4>")

    }break;
  }

  else if (name == 5) {
    var ep = prompt("which episode do you want " + "\n" + "from (1_12)")
    document.write("<h3>your favanime :One punch man (score rate 8.54)</h3>" + "\n" + "<img" + " src=" + "https://static.posters.cz/image/1300/poster/one-punch-man-saitama-genos-i87465.jpg" + "style='height:750px ;width:750px ;>")
    for (ep; ep <= 12; ep++) {
      if (ep == 12) {
        ep = "12 the end"
      }
      document.write("<h4>" + "<a href=" + "https://gogoanime.pe/one-punch-man-episode-" + ep + "> One punch man Episode " + ep
        + "</a>" + "<h4>")

    }break;
  }


}

  else if (choose == 2) {
  var name = Math.floor(Math.random() * 5) + 1;
  if (name == 1) {
    var ep = 1
    document.write("<h3> your favanime :death note (score rate 8.63)</h3>" + +"\n" + "<img" + " src=" + "https://static3.srcdn.com/wordpress/wp-content/uploads/2021/03/Death-Note-Characters-Ranked-by-Likability-Feature-Image-2.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5" + ">")
    for (ep; ep <= 37; ep++) {
      if (ep == 37) {
        ep = "37 the end"
      }
      document.write("<h4>" + "<a href=" + "https://gogoanime.pe/death-note-episode-" + ep + "> death note Episode " + ep
        + "</a>" + "</h4>")
    }break;
  }
  else if (name == 2) {
    var ep = 1
    document.write("<h3>Attack on titan (score rate 8.51)<h3>"+"\n"+"<img" + " src=" + "https://pbs.twimg.com/profile_images/1324093768618909697/Ij-CAeyd_400x400.jpg style='width:750px;height:750px;'>")
    for (ep; ep <= 25; ep++) {
      if (ep == 25) {
        ep = "25 the end"
      }
      document.write("<h4>" + "<a href=" + "https://gogoanime.pe/shingeki-no-kyojin-episode-" + ep + ">Attack on titan Episode " + ep
        + "</a>" + "</h4>")
    }break;

  }
  else if (name == 3) {
    var ep = 1
     document.write("<h3>Fullmetal Alchemist (score rate 9.17)</h3> " + "\n" + "<img" + " src=" + "https://thefandomentals.com/wp-content/uploads/2018/11/Webp.net-resizeimage.jpg style='width:750px;height:750px;'>")
    for (ep; ep <= 64; ep++) {
      if (ep == 64) {
        ep = "64 the end"
      }
      document.write("<h4>" + "<a href=" + "https://gogoanime.pe/fullmetal-alchemist-brotherhood-episode-" + ep + "> Fullmetal Alchemist Episode " + ep
        + "</a>" + "</h4>")
    }break;
  }
  else if (name == 4) {
    var ep = 1
    document.write("<h3>Sword Art Online (score rate 7.22) </h3>" + "\n" + "<img" + " src=" + "https://i.pinimg.com/originals/a6/d9/6b/a6d96b1e585781865bc6b4fe8d97a50f.jpg" + " style='height:750px ;width:750px ;'>")
    for (ep; ep <= 25; ep++) {
      if (ep == 25) {
        ep = "25 the end"
      }
      document.write("<h4>" + "<a href=" + "https://gogoanime.pe/sword-art-online-episode-" + ep + "> Sword Art Online Episode " + ep
        + "</a>" + "<h4>")

    }break;
  }

  else if (name == 5) {
    var ep = 1
    document.write("<h3>your favanime :One punch man (score rate 8.54)</h3>" + "\n" + "<img" + " src=" + "https://static.posters.cz/image/1300/poster/one-punch-man-saitama-genos-i87465.jpg" + ">")
    for (ep; ep <= 12; ep++) {
      if (ep == 12) {
        ep = "12 the end"
      }
      document.write("<h4>" + "<a href=" + "https://gogoanime.pe/one-punch-man-episode-" + ep + "> One punch man Episode " + ep
        + "</a>" + "<h4>")

    }break;
  }
}
else if (choose == 3) {
  break;
}
else { alert("you choose a wrong answer " + "\n" + "try again") }




}
