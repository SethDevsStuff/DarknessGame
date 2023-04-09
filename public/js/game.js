//Frame width:29, height: 14
var canvas = initCanvas("game",{scale:true, width:1366, height:657, full:true,});
canvas.ctx.imageSmoothingEnabled = false;

var bosanska = new Audio('Bosanska-Artiljerija.mp3');
bosanska.setAttribute('loop', true);

var mysts = new Audio('The-Falling-Mysts.mp3');
mysts.setAttribute('loop', true);

var battle = new Audio('Final-Battle.mp3');
battle.setAttribute('loop', true);

var keys = [];
window.addEventListener("keydown", handleKeyAction);
window.addEventListener("keyup", handleKeyAction);

var inMenu = false;
var menuCooldown = false;
var cts = true; //cutscene

var sprites = {
    important: image('img/important.png'),
    anton: image('img/anton.png'),
    jude: image('img/jude.png'),
    hassan: image('img/hassan.png'),
    beru: image('img/beru.png'),
    ephyra: image('img/ephyra.png'),
    hierophant: image('img/heirophant.png'),
    maleOrder: image('img/maleOrder.png'),
    femaleOrder: image('img/femaleOrder.png'),
    maleWitness: image('img/maleWitness.png'),
    femaleWitness: image('img/femaleWitness.png'),
    tappan: image('img/tappan.png'),
    lethia: image('img/lethia.png'),
    ilya: image('img/ilya.png'),
    khepri: image('img/khepri.png'),
    window: image('img/window.png'),
    scry: image('img/scry.png'),
    healer: image('img/healer.png'),
    captain: image('img/captain.png'),
    boxes: image('img/boxes.png'),
};

var backgrounds = {
    agora: image('img/agora.png'),
    antonRoom: image('img/antonRoom.png'),
    antonStreet: image('img/antonStreet.png'),
    courtyard: image('img/courtyard.png'),
    docks: image('img/docks.png'),
    double: image('img/double.png'),
    ephyraRoom: image('img/ephyraRoom.png'),
    lethiaHouse: image('img/lethiaHouse.png'),
    nazirahCell: image('img/nazirahCell.png'),
    nearLight: image('img/nearLight.png'),
    pallasCell: image('img/pallasCell.png'),
    ship: image('img/ship.png'),
    shore: image('img/shore.png'),
    temple: image('img/temple.png'),
}

playerRunTo = function(axis, value, time, ddirection, after) {
        after = after || function () {};
        player.addAnimation("runTo", [{path:axis, value}], time, 'linear');
        direction = ddirection;
        player.size.sy = 32.05;
        inMenu = true;
        player.animations.run.run();
        player.animations.runTo.run(() => {
            player.animations.run.stop(); player.animations.run.framesSince = 0; player.animations.run.position = 0; inMenu = false;
            player.size.sy = 0;
            after();
        });
}

var background = comp(0, 0, {width:1366, height:657, sWidth:1366, sHeight:657, sx:13, sy:15}, {type:'image', source:backgrounds.agora});
var scene;

var allNPCs = [];
var allObjectives = [];
var allTriggers = [];
var allObstacles = [];
var currentObjective = 0;

function handleKeyAction(event) {
    if(event.type === "keydown" && !keys.includes(event.keyCode)) {
      keys.push(event.keyCode);
    }
    if(event.type === "keyup") {
      for(var index = 0; index < keys.length; index++) {
        if(keys[index] === event.keyCode) {
          keys.splice(index, 1);
          break;
        }
      }
    }
}
 
function processKeys(){
    if(!inMenu && !cts){
       //[S,A,D,W]
        var order = [keys.indexOf(83), keys.indexOf(65), keys.indexOf(68), keys.indexOf(87)];
        var recentDirection = keys[Math.max(...order)];
        switch(recentDirection) {
        case 83://down
            if(!player.animations.run.running){
                player.animations.run.resume();
                player.size.sy = 32.1;
            }
            player.y += playerSpeed*(1/frameRate);
            var i;
            for(i=0;i<allObstacles.length;i++){
                if(allObstacles[i].functioning() && detectCrash(player, allObstacles[i].component)){
                    player.y = allObstacles[i].getSide('top');
                }
            }
            direction = 0;
        break;
        
        case 65://left
            if(!player.animations.run.running){
                player.animations.run.resume();
                player.size.sy = 32.1;
            }
            player.x -= playerSpeed*(1/frameRate);
            for(i=0;i<allObstacles.length;i++){
                if(allObstacles[i].functioning() && detectCrash(player, allObstacles[i].component)){
                    player.x = allObstacles[i].getSide('right');
                }
            }
            direction = 1;  
        break;

        case 68://right
            if(!player.animations.run.running){
                player.animations.run.resume();
                player.size.sy = 32.1;
            }
            player.x += playerSpeed*(1/frameRate);
            for(i=0;i<allObstacles.length;i++){
                if(allObstacles[i].functioning() && detectCrash(player, allObstacles[i].component)){
                    player.x = allObstacles[i].getSide('left');
                }
            }
            direction = 2;
        break;

        case 87://up
            if(!player.animations.run.running){
                player.animations.run.resume();
                player.size.sy = 32.1;
            }
            player.y -= playerSpeed*(1/frameRate);
            for(i=0;i<allObstacles.length;i++){
                if(allObstacles[i].functioning() && detectCrash(player, allObstacles[i].component)){
                    player.y = allObstacles[i].getSide('bottom');
                }
            }
            direction = 3;
        break;

        default:
            if(player.animations.run.running){
                player.animations.run.stop();
            player.animations.run.framesSince = 0;
            player.animations.run.position = 0;
            player.size.sy = 0.1;
            }
            

        }
        if(keys.includes(32)){//Space
            var i;
            for(i=0;i<allNPCs.length;i++){
                if(allNPCs[i].isShowing() && detectCrash(allNPCs[i].interComp, player) && !menuCooldown){
                    allNPCs[i].interaction();
                    break;
                }
            }
        } 
    } else {
        if(cts && mainData.active){
            if(keys.includes(32)){//Space
                if(mainData.location == 'main' && mainData.selection == 1 && mainData.move){
                    playChangeText.hide();
                    playerChange.animations.show.run(() => {
                        bosanska.pause();
                        bosanska.currentTime = 0;
                        mysts.play();
                        mainMenu.hide();
                        mainData.active = false;
                        mainData.move = false;
                        backgroundInf[0].run();
                    });
                } else if(mainData.location == 'main' && mainData.selection == 0 && mainData.move) {
                    credits.show();
                    mainData.move = false;
                    setTimeout(function () {
                        mainData.move = true;
                    }, 1000);
                    mainData.location = 'credits';
                    credText.animations.scroll.run(() => {
                        mainData.location = 'main';
                        credText.y = 700;
                        credits.hide();
                    });
                } else if(mainData.location == 'credits' && mainData.move){
                    credText.animations.scroll.stop();
                    mainData.move = false;
                    setTimeout(function () {
                        mainData.move = true;
                    }, 1000)
                    mainData.location = 'main';
                    credits.hide();
                    credText.y = 700;
                }
            } else if(keys.includes(65) && mainData.move){//A
                if(mainData.selection != 0){
                    mainData.selection--;
                    mainCred.outline.width = 6;
                    mainPlay.outline.width = 3;
                }
            } else if(keys.includes(68) && mainData.move){//D
                if(mainData.selection != 1){
                    mainData.selection++;
                    mainCred.outline.width = 3;
                    mainPlay.outline.width = 6;
                }
            }
        }
        else if(keys.includes(32) && !mainData.active && inMenu){//Space
            if(!menuCooldown){
                boxMain.hide();
                boxOther.hide();
                inMenu = false;
                currentDialogue.after();
                menuCooldown = true;
                setTimeout(function () {
                    menuCooldown = false;
                }, 400);
            }
        }
    }
    
    player.size.sx = direction * 16 + 0.05;
    var i;
    for(i=0;i<allNPCs.length;i++){
        allNPCs[i].comp.size.sx = allNPCs[i].direction * 16 + 0.05;
        if(allNPCs[i].isShowing()){
            if(allNPCs[i].important) {allNPCs[i].importantComp.show();} else{allNPCs[i].importantComp.hide();}
            allNPCs[i].comp.show();
        } else {
            allNPCs[i].comp.hide();
            allNPCs[i].importantComp.hide();
        }
    }
    for(i=0;i<allTriggers.length;i++){
        if(allTriggers[i].functioning() && detectCrash(allTriggers[i].component, player) && !allTriggers[i].triggered && !inMenu){
            allTriggers[i].action();
        }
    }
}

function speak(main, speaker, text, after, thought){
    return new Speak(main, speaker, text, after, thought);
}
function Speak(main, speaker, text, after, thought){
    this.main = main;
    this.speaker = speaker;
    this.text = text;
    this.after = after || function() {};
    this.thought = thought;

    this.run = function () {
        if(menuCooldown) return false;
        currentDialogue = this;
        inMenu = true;
        menuCooldown = true;
        setTimeout(function () {
            menuCooldown = false;
        }, 400);
        if(this.thought){
            dialogueMain.modifiers = 'italic';
            dialogueOther.modifiers = 'italic';
        } else {
            dialogueMain.modifiers = 'bold';
            dialogueOther.modifiers = 'bold';
        }
        if(main){
            dialogueMain.text = this.text;
            speakerMain.text = [this.speaker];
            boxMain.show();
        } else{
            dialogueOther.text = this.text;
            speakerOther.text = [this.speaker];
            boxOther.show();
        }
    };
}

function NPC(component, interactionComponent, direction, onInteraction, group){
    this.comp = component;
    this.interComp = interactionComponent;
    this.direction = direction;
    this.interaction = onInteraction || function () {};
    this.important = false;
    this.group = group || {};
    this.showing = true;

    this.importantComp = comp(this.comp.getX() + 10, this.comp.getY() - 50, {width:48, height:48}, {type:'image', source:sprites.important}); this.importantComp.hide();

    this.comp.addTextureAnimation("run", [{path:'sy', value:16.1, time:300}, {path:'sy', value:32.1, time:300}]);

    this.runTo = function(axis, value, time, direction, after) {
        after = after || function () {};
        this.comp.addAnimation("runTo", [{path:axis, value}], time, 'linear');
        this.direction = direction;
        this.comp.size.sy = 32.01;
        this.comp.animations.run.run();
        this.comp.animations.runTo.run(() => {
            this.comp.animations.run.stop(); this.comp.animations.run.framesSince = 0; this.comp.animations.run.position = 0;
            this.comp.size.sy = 0;
            after();
        });
    }

    this.isShowing = function () {
        if(this.group.x != undefined){
            return this.group.isShowing() && this.showing;
        }
        return this.showing;
    }
    this.show = function () {
        this.showing = true;
    }
    this.hide = function () {
        this.showing = false;
    }

    allNPCs.push(this);
}

function Objective(text, run){
    this.text = text;
    this.completed = false;
    this.run = run || function () {};

    this.complete = function () {
        if(this.completed) return false;
        this.completed = true;
        currentObjective++;
        goalText.text = allObjectives[currentObjective].text;
        this.run();
        newObjective.animations.show.run();
        newObjective.animations.hide.run();
    }

    allObjectives.push(this);
}

function Trigger(component, action, group){
    this.component = component;
    this.action = action || function () {};
    this.showing = true;
    this.group = group;
    this.triggered = false;
    this.component.hide();

    this.functioning = function () {
        if(this.group.x != undefined){
            return this.group.isShowing() && this.showing;
        }
        return this.showing;
    }

    allTriggers.push(this);
}

function Obstacle(component, group){
    this.component = component;
    this.component.hide();
    this.group = group;
    this.showing = true;
    this.component.opacity = .7;

    this.functioning = function () {
        if(this.group.x != undefined){
            return this.group.isShowing() && this.showing;
        }
        return this.showing;
    }

    this.getSide = function (direction){
        switch(direction){
            case "left":
                return this.component.getX()-player.getWidth()-.1;

            case "right":
                return this.component.getX() + this.component.getWidth()+.1;
            
            case "top":
                return this.component.getY()-player.getHeight()-.1;
            
            case "bottom":
                return this.component.getY()+this.component.getHeight()+.1;
        }
    }

    allObstacles.push(this);
}

function changeScene(backgroundSrc, group){
    background.source = backgroundSrc;
    scene.hide();
    scene = group;
    scene.show();
}

function detectCrash(comp1, comp2){
    var dir1 = {left:comp1.getX(), right:comp1.getX()+comp1.getWidth(), top:comp1.getY(), bot:comp1.getY(), top:comp1.getY()+comp1.getHeight()};
    var dir2 = {left:comp2.getX(), right:comp2.getX()+comp2.getWidth(), top:comp2.getY(), bot:comp2.getY(), top:comp2.getY()+comp2.getHeight()};

    if(dir1.left == dir1.right || dir1.top == dir1.bot || dir2.left == dir2.right || dir2.top == dir2.bot) return false;
    if(dir1.left > dir2.right || dir2.left > dir1.right) return false;
    if(dir1.bot > dir2.top || dir2.bot > dir1.top) return false;
    return true;
}

function quote(text, author){
    text.push('                 -' + author);
    return text;
}

function isEven(num){
    var cut = num/2;
    if(cut == Math.floor(cut)){
        return true;
    }
    return false;
}
