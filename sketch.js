var bg,bgImg
var ss,ssImg
var alien,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14
var gameover,gameoverImg
var restart,restartImg
var score=0
var gameState="play"
var laser
var laserGroup,alienGroup
var edges

function preload(){
bgImg=loadImage("Asset/bg3.jpg")
ssImg=loadImage("Asset/ss.png")
a1=loadImage("Asset/a1.png")
a2=loadImage("Asset/a2.png")
a3=loadImage("Asset/a3.png")
a4=loadImage("Asset/a4.png")
a5=loadImage("Asset/a5.png")
a6=loadImage("Asset/a6.png")
a7=loadImage("Asset/a7.png")
a8=loadImage("Asset/a8.png")
a9=loadImage("Asset/a9.png")
a10=loadImage("Asset/a10.png")
a11=loadImage("Asset/a11.png")
a12=loadImage("Asset/a12.png")
a13=loadImage("Asset/a13.png")
a14=loadImage("Asset/a14.png")
}

function setup(){
    createCanvas(1200,500)
    bg=createSprite(600,250,1200,500)
    bg.addImage(bgImg)
    
    ss=createSprite(100,350)
    ss.addImage(ssImg)
    ss.scale=0.4

    laserGroup=new Group()
    alienGroup=new Group()
    edges=createEdgeSprites()
}

function draw(){
background(0)
drawSprites()

fill(255)
textSize(30)
text("Score:"+score,50,50)
if(gameState==="play"){
    if(keyDown(UP_ARROW)){
        ss.y-=5
    }
    if(keyDown(DOWN_ARROW)){
        ss.y+=5
    }
    if(keyDown("space")){
        fireLaser()
    }
    ss.collide(edges[2])
    ss.collide(edges[3])
    spawnAliens()
    laserGroup.isTouching(alienGroup,destroyAlien)
if(alienGroup.isTouching(ss)){
gameState="end"
}
}

if(gameState==="end"){
gameOver()
}
}

function fireLaser(){
    laser=createSprite(200,ss.position.y,60,5)
    laser.shapeColor="lime"
    laser.velocityX=10
    laser.lifetime=120
    laserGroup.add(laser)
}
function spawnAliens(){
    if(frameCount%50===0){
        var ran=Math.round(random(100,400))
        alien=createSprite(1300,ran)
        var ranImg=Math.round(random(1,14))
        switch(ranImg){
            case 1:
                alien.addImage(a1)
                alien.scale=0.5
                alien.velocityX=-11
                break
            case 2:
                alien.addImage(a2)
                alien.scale=0.5
                alien.velocityX=-12
                 break
            case 3:
                 alien.addImage(a3)
                 alien.scale=0.5
                 alien.velocityX=-13
                break
            case 4:
                alien.addImage(a4)
                alien.scale=0.5
                alien.velocityX=-10
                break
             case 5:
                 alien.addImage(a5)
                 alien.scale=0.5
                 alien.velocityX=-11
                break
             case 6:
                alien.addImage(a6)
                alien.scale=0.3
                alien.velocityX=-7
                break
             case 7:
                 alien.addImage(a7)
                 alien.scale=0.3
                 alien.velocityX=-14
                 break
             case 8:
                alien.addImage(a8)
                alien.scale=0.5
                alien.velocityX=-13
                break
            case 9:
                alien.addImage(a9)
                alien.scale=0.5
                alien.velocityX=-12
                 break
            case 10:
                alien.addImage(a10)
                alien.scale=0.5
                alien.velocityX=-14
                break
            case 11:
                alien.addImage(a11)
                alien.scale=0.5
                alien.velocityX=-13
                break
             case 12:
                alien.addImage(a12)
                alien.scale=0.5
                alien.velocityX=-12
                break
            case 13:
                alien.addImage(a13)
                alien.scale=0.5
                alien.velocityX=-10
                break
            case 14:
                alien.addImage(a14)
                alien.scale=0.5
                alien.velocityX=-14
                break
    

    
        }
        alien.lifetime=width/14
        alienGroup.add(alien)
    }
}
function destroyAlien(laser,alien){
alien.destroy()
laserGroup.destroyEach()
score+=10
}
function gameOver(){
alienGroup.destroyEach()
laserGroup.destroyEach()
swal ({
    title:"G A M E  O V E R ! ! !",
    text:"You Lost The Game  :( \n... click on the button below to play again",
    imageUrl:"Asset/gameover.png",
    imageSize:"150x150",
    confirmButtonText:"Play Again"
},function(isConfirm){
    location.reload()
})
}

