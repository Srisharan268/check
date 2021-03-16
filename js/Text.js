class Text{
    constructor(){};

    createTexts(){
        bg = bgi4;


      if(countS <= 0){
      countS += 1
      }
      
      if(countS == 1){
        //left
        textBubble.visible = true;

        image(arjuni,125,750);
        image(tagI,295,550,150,40);

        fill("#FFFFFFBF");
        rect(500,640,550,140);


        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(35)
        fill("white")
        text("ARJUN",240,558);

        if(mousePressedOver(canvas)||keyWentDown("space")){
          countS += 1;
        }
      }else if(countS == 2){
        //right
        countS2 +=1
        textBubble.visible = true;
        textBubble.x = 300;
        textBubble.addImage(text2);

        image(saii,675,750);
        image(tagI,505,550,150,40);

        fill("#FFFFFFBF");
        rect(300,640,550,140);
        
        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(35)
        fill("white")
        text("SAI",475,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS == 3){
        //left
        textBubble.visible = true;
        textBubble.x = 500;
        textBubble.addImage(text3);
        countS2 += 1

        image(manii,125,750);
        image(tagI,295,550,150,40);

        fill("#FFFFFFBF");
        rect(500,640,550,140);

        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(35)
        fill("white")
        text("MANI",250,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS ==4){
        textBubble.visible = false;
        
        countS2 +=1;
        if(countS2<=51){
          fill(color(0,0,0,countS2*5))
        }
        if(countS2>51 && countS2 <=81){
          fill(color(0,0,0,255))
          if(countS2 == 81){
            countS2 =100;
          }
        }
        if(countS2 > 100 && countS2 <= 151){
          fill(color(0,0,0,255-(countS2-100)*5))
          bg = bgi5;
        }
        
        rect(400,400,800,800);
        if(countS2 == 151){
          countS = 5;
          countS2 = 0;
        }
      }else if(countS == 5){
        bg = bgi5;
        countS2 += 1;
        if(countS2>=30){
          
          //left
          textBubble.visible = true;
          textBubble.x = 500;
          textBubble.addImage(text4);
          countS2 += 1

          image(arjuni,125,750);
          image(tagI,295,550,150,40);

          fill("#FFFFFFBF");
          rect(500,640,550,140);

          textStyle(BOLD)
          textFont("Tempest Apache");
          textSize(35)
          fill("white")
          text("ARJUN",240,558);

          if(countS2 > 45){
            if(mousePressedOver(canvas)||keyWentDown("space")){
              countS += 1;
              countS2 = 0;
            }
          }
        }

      }else if(countS == 6){
        //right
        bg = bgi5;
        countS2 +=1
        textBubble.visible = true;
        textBubble.x = 300;
        textBubble.addImage(text5);

        image(manii,675,750);
        image(tagI,505,550,150,40);

        fill("#FFFFFFBF");
        rect(300,640,550,140);
        
        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(35)
        fill("white")
        text("MANI",460,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS ==7){
        textBubble.visible = false;
        bg = bgi5;
        countS2 +=1;
        if(countS2<=51){
          tint(255,countS2*5);
          image(bgi5Hologram,400,400,800,800);
        }
        if(countS2 == 51){
          countS = 8;
          countS2 = 0
        }
      }else if(countS == 8){
        //left
        bg = bgi5Hologram;
        textBubble.visible = true;
        textBubble.x = 500;
        textBubble.addImage(text6);
        countS2 += 1

        image(saii,125,750);
        image(tagI,295,550,150,40);

        fill("#FFFFFFBF");
        rect(500,640,550,140);

        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(35)
        fill("white")
        text("SAI",265,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS == 9){
        //right
        bg = bgi5;
        countS2 +=1
        textBubble.visible = true;
        textBubble.x = 300;
        textBubble.addImage(text7);

        image(hologrami,700,710);
        image(tagI,505,550,150,40);

        fill("#FFFFFFBF");
        rect(300,640,550,140);
        
        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(30)
        fill("white")
        text("KRYPNOT",437,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS == 10){
        //left
        bg = bgi5;
        textBubble.visible = true;
        textBubble.x = 500;
        textBubble.addImage(text8);
        countS2 += 1

        image(manii,125,750);
        image(tagI,295,550,150,40);

        fill("#FFFFFFBF");
        rect(500,640,550,140);

        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(35)
        fill("white")
        text("MANI",250,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS == 11){
        //right
        bg = bgi5;
        countS2 +=1
        textBubble.visible = true;
        textBubble.x = 300;
        textBubble.addImage(text9);

        image(hologrami,700,710);
        image(tagI,505,550,150,40);

        fill("#FFFFFFBF");
        rect(300,640,550,140);
        
        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(30)
        fill("white")
        text("KRYPNOT",437,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS == 12){
        //right
        bg = bgi5;
        countS2 +=1
        textBubble.visible = true;
        textBubble.x = 300;
        textBubble.addImage(text10);

        image(hologrami,700,710);
        image(tagI,505,550,150,40);

        fill("#FFFFFFBF");
        rect(300,640,550,140);
        
        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(30)
        fill("white")
        text("KRYPNOT",437,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS == 13){
        bg = bgi5;
        countS2 += 1;
        //left
        textBubble.visible = true;
        textBubble.x = 500;
        textBubble.addImage(text11);
        countS2 += 1

        image(arjuni,125,750);
        image(tagI,295,550,150,40);

        fill("#FFFFFFBF");
        rect(500,640,550,140);

        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(35)
        fill("white")
        text("ARJUN",240,558);

        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS == 14){
        //right
        bg = bgi5;
        countS2 +=1
        textBubble.visible = true;
        textBubble.x = 300;
        textBubble.addImage(text12);

        image(hologrami,700,710);
        image(tagI,505,550,150,40);

        fill("#FFFFFFBF");
        rect(300,640,550,140);
        
        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(30)
        fill("white")
        text("KRYPNOT",437,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS == 15){
        //left
        bg = bgi5Hologram;
        textBubble.visible = true;
        textBubble.x = 500;
        textBubble.addImage(text13);
        countS2 += 1

        image(saii,125,750);
        image(tagI,295,550,150,40);

        fill("#FFFFFFBF");
        rect(500,640,550,140);

        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(35)
        fill("white")
        text("SAI",265,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS == 16){
        //right
        bg = bgi5;
        countS2 +=1
        textBubble.visible = true;
        textBubble.x = 300;
        textBubble.addImage(text14);

        image(hologrami,700,710);
        image(tagI,505,550,150,40);

        fill("#FFFFFFBF");
        rect(300,640,550,140);
        
        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(30)
        fill("white")
        text("KRYPNOT",437,558);
        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            countS += 1;
            countS2 = 0;
          }
        }
      }else if(countS == 17){
        bg = bgi5;
        countS2 += 1;
        //left
        textBubble.visible = true;
        textBubble.x = 500;
        textBubble.addImage(text15);
        countS2 += 1

        image(arjuni,125,750);
        image(tagI,295,550,150,40);

        fill("#FFFFFFBF");
        rect(500,640,550,140);

        textStyle(BOLD)
        textFont("Tempest Apache");
        textSize(35)
        fill("white")
        text("ARJUN",240,558);

        if(countS2 > 15){
          if(mousePressedOver(canvas)||keyWentDown("space")){
            gameState1 = 2;
            textBubble.visible = false;
            countS2 = 0;
          }
        }
      }

      drawSprites();
    }
}