var database;
var gameState,gameState0 =0 ,gameState1 = 0;
var startButton;
var img1,bgi1,bgi2,bgi3,bgi4,bgi5,bgi5Hologram;
var game,form,player,codeEntered;
var bg,mmm;
var count1 = 0,count2 = 0,countS = 0,countS2 = 0;
var reference,playerCount;
var asteroid,asteroidi;
const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz';
var randomCode = '';
var allPlayers;
var textBubble,canvas;
var arjuni,manii,saii,tagI;//,arjunTagi,maniTagi,saiTagi,yellowTag,yellowTagi,redTag,redTagi;
var text1,text2,text3,text4,text5,text6,text7,text8,text9,text10,text11,text12;
var hologrami;
var textObject;


function preload(){
  img1 = loadImage("images/start_button_1.png");
  bgi1 = loadImage("images/background.png");
  bgi2 = loadImage("images/bg2.png");
  bgi3 = loadImage("images/campScene_0.png");
  bgi4 = loadImage("images/campScene_1.png");
  bgi5 = loadImage("images/asteroidScene.png");
  bgi5Hologram = loadImage("images/asteroidSceneH.png");
  hologrami = loadImage("images/hologram.png");
  asteroidi = loadImage("images/asteroid.png");
  arjuni = loadImage("images/Arjun.png");
  manii = loadImage("images/Mani.png");
  saii = loadImage("images/Sai.png");
  tagI = loadImage("images/blueTag.png");
  text1 = loadImage("images/text1.png");
  text2 = loadImage("images/text2.png");
  text3 = loadImage("images/text3.png");
  text4 = loadImage("images/text4.png");
  text5 = loadImage("images/text5.png");
  text6 = loadImage("images/text6.png");
  text7 = loadImage("images/text7.png");
  text8 = loadImage("images/text8.png");
  text9 = loadImage("images/text9.png");
  text10 = loadImage("images/text10.png");
  text11 = loadImage("images/text11.png");
  text12 = loadImage("images/text12.png");
  text13 = loadImage("images/text13.png");
  text14 = loadImage("images/text14.png");
  text15 = loadImage("images/text15.png");
  

}

function setup() {
  createCanvas(800,800);
  database = firebase.database();
  //frameRate(180)
  game = new Game();
  game.createForm();

  textObject = new Text();

  
  for(var i=0;i < 5;i++){
      mmm = Math.round(random(1,26));
      randomCode += ALPHABETS.slice(mmm-1,mmm)
  }

  canvas = createSprite(400,400,800,800);
  canvas.visible = false;
  startButton = createSprite(400,750);
  startButton.addImage(img1);
  startButton.scale = 0.75;

  textBubble = createSprite(500,640,550,140);
  textBubble.addImage(text1)
  textBubble.visible = false;

  asteroid = createSprite(550,-50);
  asteroidi.visible = false;
  asteroid.scale = 0.4;
  asteroid.addImage(asteroidi);
  
  bg = bgi1;
  
}

function draw() {
  
        console.log(displayWidth);
  background(bg); 

  drawSprites();

  
if(gameState == 0 || gameState === undefined){
    if(gameState0 == 0){
      startButton.visible = true;
      textSize(49);
      fill("#DADEDD");
      push();
      textFont("Tempest Apache Title");
      text("The Cybertron Warriors",00,70);
      pop();
      push();
      textFont("SPACE RANGER");
      text("start",320,760);
      pop();

      if(mousePressedOver(startButton)){
        gameState0 = 1;
        
      }
    }

    if(gameState0 == 1){
      form.choose();
      bg = bgi2;
      startButton.visible = false;
      textSize(49);
      fill("#DADEDD");
      push();
      pop();

    }
    if(gameState0 == 2){
      form.hostPressed();
    }
    if(gameState0 == 3){
      form.joinPressed();
    }

    if(gameState0 == 4){
      if(count1 == 0){
        game.getState();
        count1 += 1;
      }
      if(count2 == 0 && playerCount!== undefined){
        count2 += 1;
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
      }

      textSize(50);
      textFont("Tempest Apache");
      fill("white")
      text("welcome "+player.name.slice(0,10),100,200);
      textSize(30);
      fill("red");
      text("waiting for the other players to join.....",100,260)
      textSize(20);
      text("[ the game starts when 3 players join the game ]",100,290)
      textSize(45);
      fill("white");
      text("players joined :",100,400);
      fill("grey")
      textSize(30);
      text("name",160,460);
      text("charecter",360,460)

      fill("white");
      textSize(30);
      if(allPlayers!== undefined){

        if(allPlayers.player1.name!==null){
          text("1.",110,500);
          text(allPlayers.player1.name.slice(0,10),160,500);
          text("arjun [the cybertron red]",360,500)
        }

        if(allPlayers.player2!==undefined){
          text("2.",110,540);
          text(allPlayers.player2.name.slice(0,10),160,540);
          text("sai [the cybertron yellow]",360,540)
        }

        if(allPlayers.player3!==undefined){
          text("3.",110,580);
          text(allPlayers.player3.name.slice(0,10),160,580);
          text("mani [the cybertron blue]",360,580)
        }

      }

      if(playerCount >= 3){// && player.index == 1
        form.start.show();
      }
    }
  }

  if(gameState == 1){
    imageMode(CENTER)
    rectMode(CENTER)
    gameState0 = 5;
    form.start.hide();
    bg = "#00010D";
    if(gameState1 == 0){
      countS += 1;
      if(countS <140){
        bg = bgi3;
      }
      if(countS == 60){
        asteroid.visible = true;
        asteroid.setVelocity(-10,5);
      }else if(countS >= 140){
        asteroid.destroy();
        var Yposition = map(countS,140,170,0,95);
        image(bgi3,400,400-Yposition,800,800-Yposition*2);
      }
      if(countS == 171){
        gameState1 = 1;
        countS = -30;
      }
    }

    if(gameState1 == 1){
      textObject.createTexts();
    }
  }
  //console.log(mouseX,mouseY);
}
