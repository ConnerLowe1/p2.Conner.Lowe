var cam;

var sleepbut;
var weightbut;
var exerbut;
var mirrbut;

var healthopt = 1;

function preload(){
  general_data = loadJSON("/assets/json/general.json");
  health_data = loadJSON("/assets/json/health.json");

  timedatefont = loadFont("/assets/font/monofonto rg.otf");
  newsfont = loadFont("/assets/font/Roboto-Thin.ttf");
  calfont = loadFont("/assets/font/Roboto-Bold.ttf");

  cloudypng = loadImage("/assets/img/cloudy.png");
  rainypng = loadImage("/assets/img/rainy.png");
  sunnypng = loadImage("/assets/img/sunny.png");

  sleeppng = loadImage("/assets/img/sleep.png");
  weightpng = loadImage("/assets/img/weight.png");
  exerpng = loadImage("/assets/img/exercise.png");
  mtpng = loadImage("/assets/img/mirrortime.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cam = createCapture(VIDEO);
  cam.size(windowHeight,windowWidth);
  cam.hide();
}

function draw() {
  
  translate(width,0);
  scale(-1,1);
  image(cam,0,0,windowWidth,windowHeight);
  translate(width,0);
  scale(-1,1);

  drawTime();

  fill(125,100);
  stroke(135,206,235);

  //weather
  makeWeather(25,25);

  //health
  makeHealth(25,425);

  //calendar
  makeCalendar(windowWidth-425,25);

  //news
  makeNews(windowWidth-425,425);
}

function makeWeather(x,y){

  textFont(timedatefont);
  fill(0,150);
  stroke(135,206,235);
  rect(x,y,400,350,20);
  textSize(35);
  fill(255);
  text("Weather",x+140,y+45);

  line(x,y+70,x+400,y+70);

  textFont(newsfont);
  textSize(24);
  text(general_data.weather[2].fore + " • Lubbock, TX",x+95,y+100);
  image(cloudypng,x+50,y+120,150,150);
  textSize(92);
  text("42°", x+215,y+210);
  textSize(20);
  text("Low: " + general_data.weather[2].low + "    High: " + general_data.weather[2].high, x+120,y+255);
  line(x,y+270,x+400,y+270);

  textSize(16);
  text(String(month()) + "/" + String(day()+1),x+40,y+290);
  text(String(month()) + "/" + String(day()+2),x+110,y+290);
  text(String(month()) + "/" + String(day()+3),x+180,y+290);
  text(String(month()) + "/" + String(day()+4),x+250,y+290);
  text(String(month()) + "/" + String(day()+5),x+320,y+290);
  text("H",x+10,y+315);
  text("L",x+10,y+340);

  textSize(14);
  text(general_data.weather[3].high,x+53,y+315);
  text(general_data.weather[3].low,x+53,y+340);

  text(general_data.weather[4].high,x+123,y+315);
  text(general_data.weather[4].low,x+123,y+340);

  text(general_data.weather[5].high,x+193,y+315);
  text(general_data.weather[5].low,x+193,y+340);

  text(general_data.weather[6].high,x+263,y+315);
  text(general_data.weather[6].low,x+263,y+340);

  text(general_data.weather[7].high,x+333,y+315);
  text(general_data.weather[7].low,x+333,y+340);

}

function makeHealth(x,y){

  textFont(timedatefont);
  fill(0,150);
  stroke(135,206,235);
  rect(x,y,400,500,20);
  textSize(35);
  fill(255);
  text("Health",x+150,y+45);

  line(x,y+70,x+400,y+70);

  line(x,y+425,x+400,y+425);

  if(checkHover()==1){
    fill(150);
    rect(x+50,y+437,50,50);
    fill(255);
    rect(x+132,y+437,50,50);
    rect(x+214,y+437,50,50);
    rect(x+296,y+437,50,50);
  }else if(checkHover()==2){
    rect(x+50,y+437,50,50);
    fill(150);
    rect(x+132,y+437,50,50);
    fill(255);
    rect(x+214,y+437,50,50);
    rect(x+296,y+437,50,50);
  }else if(checkHover()==3){
    rect(x+50,y+437,50,50);
    rect(x+132,y+437,50,50);
    fill(150);
    rect(x+214,y+437,50,50);   
    fill(255);
    rect(x+296,y+437,50,50);
  }else if(checkHover()==4){
    rect(x+50,y+437,50,50);
    rect(x+132,y+437,50,50);
    rect(x+214,y+437,50,50);   
    fill(150);
    rect(x+296,y+437,50,50);
    fill(255);
  }else{
    rect(x+50,y+437,50,50);
    rect(x+132,y+437,50,50);
    rect(x+214,y+437,50,50);
    rect(x+296,y+437,50,50);
  }

  image(sleeppng,x+50,y+437,50,50);
  image(weightpng,x+132,y+437,50,50);
  image(exerpng,x+214,y+437,50,50);
  image(mtpng,x+296,y+437,50,50);

  switch (healthopt) {
    case 1:
      drawSleep(x,y);
      break;
    case 2:
      drawWeight(x,y);
      break;
    case 3:
      drawExercise(x,y);
      break;
    case 4:
      drawMirrorTime(x,y);   
      break;
    default:
      //  
  }

}

function makeCalendar(x,y){

  textFont(timedatefont);
  fill(0,150);
  stroke(135,206,235);
  rect(x,y,400,350,30);
  textSize(35);
  fill(255);
  text("Today",x+150,y+45);

  line(x,y+60,x+400,y+60);

  textFont(calfont);

  textSize(10);
  text("TIME",x+90,y+85);
  text("ACTIVITY",x+270,y+85);

  stroke(255,255,255);
  line(x+40,y+95,x+40,y+340);
  line(x+40,y+95,x+365,y+95);
  line(x+365,y+95,x+365,y+340);
  line(x+40,y+340,x+365,y+340);
  line(x+203,y+95,x+203,y+340);
  line(x+40,y+137,x+365,y+137);
  line(x+40,y+177,x+365,y+177);
  line(x+40,y+217,x+365,y+217);
  line(x+40,y+257,x+365,y+257);
  line(x+40,y+297,x+365,y+297);
  stroke(135,206,235);


  textSize(20);
  text(general_data.calendar[2].time1,x+67,y+125);
  text(general_data.calendar[2].activity1,x+250,y+125);

  text(general_data.calendar[2].time2,x+67,y+165);
  text(general_data.calendar[2].activity2,x+250,y+165);

  text(general_data.calendar[2].time3,x+60,y+205);
  text(general_data.calendar[2].activity3,x+250,y+205);

  text(general_data.calendar[2].time4,x+60,y+245);
  text(general_data.calendar[2].activity4,x+250,y+245);

  text(general_data.calendar[2].time5,x+67,y+285);
  text(general_data.calendar[2].activity5,x+250,y+285);

  text(general_data.calendar[2].time6,x+60,y+325);
  text(general_data.calendar[2].activity6,x+250,y+325);

}

function makeNews(x,y){

  textFont(timedatefont);
  fill(0,150);
  stroke(135,206,235);
  rect(x,y,400,500,30);
  textSize(35);
  fill(255);
  text("News",x+160,y+45);

  textFont(newsfont);

  line(x,y+70,x+400,y+70);
  line(x,y+165,x+400,y+165);
  line(x,y+265,x+400,y+265);
  line(x,y+365,x+400,y+365);
  line(x,y+465,x+400,y+465);

  stroke(150,150,0);

  textSize(14);
  text(general_data.news[0].headline,x+8,y+100);
  textSize(12);
  text(general_data.news[0].author + " • " + general_data.news[0].publisher,x+18,y+120);
  text(general_data.news[0].topic + ", " + general_data.news[0].date,x+18,y+140);

  textSize(14);
  text(general_data.news[1].headline,x+8,y+200);
  textSize(12);
  text(general_data.news[1].author + " • " + general_data.news[1].publisher,x+18,y+220);
  text(general_data.news[1].topic + ", " + general_data.news[1].date,x+18,y+240);

  textSize(14);
  text(general_data.news[2].headline,x+8,y+300);
  textSize(12);
  text(general_data.news[2].author + " • " + general_data.news[2].publisher,x+18,y+320);
  text(general_data.news[2].topic + ", " + general_data.news[2].date,x+18,y+340);

  textSize(14);
  text(general_data.news[3].headline,x+8,y+400);
  textSize(12);
  text(general_data.news[3].author + " • " + general_data.news[3].publisher,x+18,y+420);
  text(general_data.news[3].topic + ", " + general_data.news[3].date,x+18,y+440);

  stroke(135,206,235);

}

function drawTime(){

  let timestr;
  let datestr;

  if(minute()>9){timestr = "" + String(hour()) + ":" + String(minute());}
  else{timestr = "" + String(hour()) + ":0" + String(minute());}

  datestr = "" + month() + "/" + day() + "/" + year();

  textSize(72);
  textFont(timedatefont);
  fill("white");
  text(timestr,windowWidth/2-62,100);

  textSize(36);
  text(datestr,windowWidth/2-62,150);

}

function checkHover(){
  if((mouseX >= 70 && mouseX <=120)&&(mouseY>=860&&mouseY<=910)){
    return 1; //sleep
  }
  if((mouseX >= 152 && mouseX <=202)&&(mouseY>=860&&mouseY<=910)){
    return 2; //weight
  }
  if((mouseX >= 234 && mouseX <=284)&&(mouseY>=860&&mouseY<=910)){
    return 3; //exercise
  }
  if((mouseX >= 316 && mouseX <=366)&&(mouseY>=860&&mouseY<=910)){
    return 4; //mirror time
  }
}

function mousePressed(){
  if(checkHover()==1){
    healthopt = 1;
  }else if(checkHover()==2){
    healthopt = 2;
  }else if(checkHover()==3){
    healthopt = 3;
  }else if(checkHover()==4){
    healthopt = 4;
  }else{

  }
}

function drawSleep(x,y){
  textFont('Times New Roman');
  textSize(25);
  text("Sleep:",x+50,y+120);

  textSize(16);
  text(String(month()) + "/" + String(day()-1),x+60,y+160);
  text("Week Avg",x+250,y+160);
  line(x+60,y+168,x+325,y+168);

  textSize(14);
  textFont(newsfont);
  text(String(health_data.sleep[8].hours) + "       Hours Slept",x+70, y+188);
  text(String(health_data.sleep[8].pctheavy) + "     % Heavy Sleep",x+70, y+208);
  text(String(health_data.sleep[8].pctlight) + "     % Light Sleep",x+70, y+228);
  text("7.73",x+273,y+188);
  text("70",x+278,y+208);
  text("30",x+278,y+228);

  textSize(16);
  textFont('Times New Roman');
  text(String(month()) + "/" + String(day()-2),x+60,y+260);
  text("Week Avg",x+250,y+260);
  line(x+60,y+268,x+325,y+268);

  textSize(14);
  textFont(newsfont);
  text(String(health_data.sleep[7].hours) + "       Hours Slept",x+70, y+288);
  text(String(health_data.sleep[7].pctheavy) + "     % Heavy Sleep",x+70, y+308);
  text(String(health_data.sleep[7].pctlight) + "     % Light Sleep",x+70, y+328);
  text("7.28",x+273,y+288);
  text("68",x+278,y+308);
  text("32",x+278,y+328);
}

function drawWeight(x,y){
  textFont('Times New Roman');
  textSize(25);
  text("Weight:",x+50,y+120);

  textFont(newsfont);
  textSize(20);
  text("Current Weight: ", x+50, y+180);
  stroke(155,155,0);
  text(health_data.weight[9].pounds,x+195, y+180);
  stroke(135,206,235);
  text(" pounds", x+260, y+180);

  text("Past week:                                 lbs",x+50, y+250);
  line(x+50,y+258,x+330,y+258);
  textSize(14);

  text(String(month()) + "/" + String(day()-1),x+70,y+280);
  text(health_data.weight[8].pounds,x+285, y+280);

  text(String(month()) + "/" + String(day()-2),x+70,y+300);
  text(health_data.weight[7].pounds,x+285, y+300);

  text(String(month()) + "/" + String(day()-3),x+70,y+320);
  text(health_data.weight[6].pounds,x+285, y+320);

  text(String(month()) + "/" + String(day()-4),x+70,y+340);
  text(health_data.weight[5].pounds,x+285, y+340);

  text(String(month()) + "/" + String(day()-5),x+70,y+360);
  text(health_data.weight[4].pounds,x+285, y+360);

  text(String(month()) + "/" + String(day()-6),x+70,y+380);
  text(health_data.weight[3].pounds,x+285, y+380);

  text(String(month()) + "/" + String(day()-7),x+70,y+400);
  text(health_data.weight[2].pounds,x+285, y+400);
}

function drawExercise(x,y){
  textFont('Times New Roman');
  textSize(25);
  text("Exercise:",x+50,y+120);

  textSize(16);
  text(String(month()) + "/" + String(day()),x+60,y+160);
  text("Week Avg",x+250,y+160);
  line(x+60,y+168,x+325,y+168);

  textSize(14);
  textFont(newsfont);
  text(String(health_data.exercise[9].steps) + "       Steps Taken",x+70, y+188);
  text(String(health_data.exercise[9].hrsstanding) + "          Hours Standing",x+70, y+208);
  text(String(health_data.exercise[9].hrsexercised) + "        Hours Exercised",x+70, y+228);
  text("7451",x+273,y+188);
  text("3.1",x+278,y+208);
  text("1.2",x+278,y+228);

  textSize(16);
  textFont('Times New Roman');
  text(String(month()) + "/" + String(day()-1),x+60,y+260);
  text("Week Avg",x+250,y+260);
  line(x+60,y+268,x+325,y+268);

  textSize(14);
  textFont(newsfont);
  text(String(health_data.exercise[8].steps) + "       Steps Taken",x+70, y+288);
  text(String(health_data.exercise[8].hrsstanding) + "          Hours Standing",x+70, y+308);
  text(String(health_data.exercise[8].hrsexercised) + "        Hours Exercised",x+70, y+328);
  text("7142",x+273,y+288);
  text("3.0",x+278,y+308);
  text(".75",x+278,y+328);
}

function drawMirrorTime(x,y){
  textFont('Times New Roman');
  textSize(25);
  text("Mirror Time:",x+50,y+120);

  textSize(16);
  text(String(month()) + "/" + String(day()),x+60,y+160);
  text("mins",x+290,y+160);
  line(x+60,y+168,x+325,y+168);
  textSize(14);
  textFont(newsfont);
  text("Evening",x+70, y+188);
  text("Morning",x+70, y+208);
  text(String(health_data.mirrortime[9].minsnight), x+304, y+188);
  text(String(health_data.mirrortime[9].minsmorning), x+298, y+208);

  textSize(16);
  textFont('Times New Roman');
  text(String(month()) + "/" + String(day()-1),x+60,y+235);
  text("mins",x+290,y+235);
  line(x+60,y+243,x+325,y+243);
  textSize(14);
  textFont(newsfont);
  text("Evening",x+70, y+263);
  text("Morning",x+70, y+283);
  text(String(health_data.mirrortime[8].minsnight), x+304, y+263);
  text(String(health_data.mirrortime[8].minsmorning), x+298, y+283);

  textSize(16);
  textFont('Times New Roman');
  text(String(month()) + "/" + String(day()-2),x+60,y+310);
  text("mins",x+290,y+310);
  line(x+60,y+318,x+325,y+318);
  textSize(14);
  textFont(newsfont);
  text("Evening",x+70, y+338);
  text("Morning",x+70, y+358);
  text(String(health_data.mirrortime[7].minsnight), x+304, y+338);
  text(String(health_data.mirrortime[7].minsmorning), x+298, y+358);

}