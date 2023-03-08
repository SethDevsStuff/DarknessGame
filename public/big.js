/////////////////////Dialogues///////////////////////
var townNPCLines = [speak(false, 'Town Citizen', ['*grumble*'], function () {}, true)];

var hassanLethiaPart1 = [
    speak(false, 'Aunt Lethia', ['The Hierophant and the Witnesses have taken over Nazirah.', 'Prince Hassan, you came here to be safe.', 'But even here in Pallas Athos he still has massive influence.'], () => {hassanLethiaPart1[1].run()}),
    speak(true, 'Hassan', ['But-'], () => {hassanLethiaPart1[2].run()}),
    speak(false, 'Aunt Lethia', ["I'm not budging on this.", 'The pale hand is still out taking', 'the lives of the corrupted.', 'However there have been innocents killed...'], () => {hassanLethiaPart1[3].run();}),
    speak(false, 'Lethia', ['Most recently a priest at Thalassa Gardens', 'was killed. I doubt he was innocent.', 'Rumors are he has done-- things', 'to vulnerable people'], () => {goal1.complete();}),
    speak(true, 'Hassan', ['I have had a vision! And you give me ships'], () => {
        changePlayer('Anton' , () => {
            changeScene(backgrounds.double, double);
            player.x = 293;
            player.y = 212;
            direction = 1;
            mOrderComp.x = 240;
            mOrderComp.y = 212;
            mOrder.direction = 2;
        }, () => {hector[2].run();})
    }),
];

var surrounding = [
    speak(false, '???', ['AHHHHHHHHHH'], () => {goal2.complete();}),
];

var hassanWitnesses = [
    speak(true, 'Hassan', ["Stop! Don't touch the temple!"], () => {
        maleWit.direction = 0;
        femaleWit.direction = 0;
        inMenu = true;
        playerRunTo('y', 344, 500, 3, () => {playerRunTo('x', 608, 250, 2, () => {playerRunTo('y', 236, 200, 3, () => {hassanWitnesses[1].run();})})});
    }),
    speak(false, 'Witness', ["Who in the Hierophant's", 'name are you??'], () => {hassanWitnesses[2].run();}),
    speak(true, 'Hassan', ["Someone you shouldn't anger"], () => {
        inMenu = true;
        maleWit.runTo('y', 200, 150, 0, () => {
            maleWitComp.size.sy = 32.1;
            setTimeout(function () {
                maleWitComp.size.sy = 16.1;
                playerRunTo('y', 300, 50, 3, () => {
                    hassanWitnesses[3].run();
                });
                player.animations.run.stop();
            }, 500)
            
        });
    }),//witness punches Hassan
    speak(true, 'Hassan', ['Owww..'], () => {
        hassanKhepri[0].run();
    }),
];

var hassanKhepri = [
    speak(false, '???', ['STOP!!'], () => {khepri.runTo('y', 344, 1500, 3, () => {khepri.runTo('x', 608, 250, 2, () => {hassanKhepri[1].run();})});}),
    speak(false, '???', ["C'mon! Let's run!"], () => {
        khepri.runTo('x', 500, 200, 1, () => {khepri.runTo('y', 1000, 1500, 0)});
        playerRunTo('y', 344, 200, 0, () => {playerRunTo('x', 500, 200, 1, () => {playerRunTo('y', 1000, 1500, 0, () => {
            changeScene(backgrounds.agora, agora);
            player.y = 100;
            player.x = 290;
            direction = 1;
            khepri.group = agora;
            khepriComp.y = 100;
            khepriComp.x = 224;
            khepri.direction = 2;
            hassanKhepri[2].run();
        })})})
    }),
    speak(false, 'Khepri', ["I'm Khepri, a refugee", 'and combattant. Who are', 'you and what the hell', 'were you thinking!?!'], () => {hassanKhepri[3].run()}),
    speak(true, 'Hassan', ['My name is--', 'Cirion. I am a student', 'in Pallas Athos.'], () => {hassanKhepri[4].run()}),
    speak(false, 'Khepri', ["You've got guts kid", 'The Witnesses are zealots', 'of the Hierophant. They want to', 'take out all of the Graced. That temple', 'is a refuge for the Graced from the Witnesses.'], () => {hassanKhepri[5].run()}),
    speak(false, 'Khepri', ['I had to flee my home in Nazirah', 'because the Hierphant took over', 'and I have the Grace of Heart.'], () => {hassanKhepri[6].run()}),
    speak(true, 'Hassan', ['My father is from Nazirah.', 'I really hope he is safe'], () => {hassanKhepri[7].run()}),
    speak(false, 'Khepri', ['While the King and Queen were captured,', 'I believe that Prince Hassan escaped and I am', 'trying to find him and help to reclaim', 'the City of Nazirah'], () => {hassanKhepri[8].run()}),
    speak(true, 'Hassan', ['I should go.', 'I am sure I will', 'see you again Khepri'], () => {hassanKhepri[9].run()}),
    speak(false, 'Khepri', ['Goodbye Cirion.', 'You should find a healer'], () => {hassanKhepri[10].run()}),
    speak(true, 'Hassan', ['I will be okay'], () => {
        playerRunTo('y', 304, 500, 0, () => {playerRunTo('x', -50, 800, 1, () => {
            changePlayer('Anton', () => {
                inMenu = true;
                changeScene(backgrounds.courtyard, courtyard);
                player.x = 600;
                player.source = sprites.anton;
            }, () => {goal3.complete(); inMenu = false;});
        })})
    }),
    speak(false, 'Khepri', ['Hassan confesses to lying'], () => {
        khepri.runTo('x', 700, 600, 2, () => {khepri.runTo('y', 472, 300, 0, () => {khepri.runTo('x', 1366, 600, 2, () => {khepri.group = agora})})});
    }),
];

var antonTappan = [
    speak(false, 'Mrs. Tappan', ['I am Mrs. Tappan', 'What is your name?'], () => {antonTappan[1].run()}),
    speak(true, 'Anton', ['I am no one'], () => {antonTappan[2].run()}),
    speak(false, 'Mrs. Tappan', ['Okay Anton. I lead a scrying agency', 'I have an offer for you'], () => {antonTappan[3].run()}),
    speak(true, 'Anton', ['Not interested. You already', 'know my answer.'], () => {antonTappan[4].run()}),
    speak(false, 'Mrs. Tappan', ['This is not just any job.', 'You are the only one who can do it.'], () => {antonTappan[5].run()}),
    speak(true, 'Anton', ['My Grace of Sight...', 'Except you know I cannot do it', 'You have known since that day...'], () => {antonTappan[6].run()}),
    speak(true, 'Anton', ['I am unable to use my Grace without', 'ending up with lungs full of water', 'the nightmares of horrible memories'], () => {antonTappan[7].run()}, true),
    speak(false, 'Mrs. Tappan', ['One day, Anton, you will have to get over your', 'silly little fears.', 'Unfortunately, I was sent by someone you might know'], () => {antonTappan[8].run()}),
    speak(true, 'Anton', ['My brother...', 'The one who tortured me because of my Grace.', 'The reason for my nightmares'], () => {antonTappan[9].run()}, true),
    speak(false, 'Mrs. Tappan', ['While I might not bring him to you,', 'he will find you'], () => {antonTappan[10].run()}),
    speak(true, 'Anton', ['No. I need to leave.', 'He cannot find me'], () => {
        tappan.important = false;
        playerRunTo('x', 688, 800, 2, () => {playerRunTo('y', 657, 1000, 0, () => {
            playChangeText.hide();
            playerChange.animations.show.run(() => {
                changeScene(backgrounds.antonRoom, antonRoom);
                setTimeout(() => {
                    player.x = 1270;
                    player.y = 150;
                    antonEphyraPart1[0].run();
                }, 2000);
            });
        })});
    }, true),
];

var antonDream = [
    speak(true, 'Anton', ['Bad scrying nightmare'], () => {
        ephyra.group = docks;
        ephyraComp.x = 472;
        ephyraComp.y = 416;
        player.x = scryComp.x;
        player.y = scryComp.y;
        ephyra.direction = 1;
        playerChange.animations.hide.run(() => {
            playChangeText.show();
            ephyra.runTo('x', 520, 1500, 1);
            playerRunTo('x', 472, 1500, 3, () => {
                antonEphyraPart1[11].run();
            });
        });
    }, true),
];
var hassanDream = [
    speak(true, 'Hassan', ['Vision!!'], () => {
        playerChange.animations.hide.run(() => {
            playChangeText.show();
            goal9.complete();
            lethia.important = true;
        })
    }),
];

var antonEphyraPart1 = [
    speak(true, 'Anton', ['Not again...', 'My lungs are filled', 'I cannot breathe'], () => {
        inMenu = true;
        playerChange.animations.hide.run(() => {
            playChangeText.show();
            ephyra.runTo('x', 1200, 1500, 2, () => {antonEphyraPart1[1].run()});
        });
    }, true),
    speak(false, '???', ['I am not here to hurt you'], () => {antonEphyraPart1[2].run()}),
    speak(true, 'Anton', ['Who are you?'], () => {antonEphyraPart1[3].run()}),
    speak(false, '???', ['You do not know who I am?', 'The priest at Thalassa Gardens did not, either'], () => {antonEphyraPart1[4].run()}),
    speak(true, 'Anton', ['THE PALE HAND!'], () => {antonEphyraPart1[5].run()}, true),
    speak(true, 'Anton', ['Are you going to kill me?'], () => {antonEphyraPart1[6].run()}),
    speak(false, 'The Pale Hand', ['Would you deserve it?', 'Then no.', 'Mrs. Tappan said you were the most', 'powerful scryer. I need your help.', 'And who is Ilya? Because he is on his way'], () => {antonEphyraPart1[7].run()}),
    speak(true, 'Anton', ['Ilya is my brother', 'and he is coming for me. We need to go'], () => {antonEphyraPart1[8].run()}),
    speak(false, 'The Pale Hand', ['I know a place. It is safe.', 'No one will be able to find you.', 'Ilya has hired swords, we need to leave', 'through the window to not get caught'], () => {goal4.complete();inMenu = true;
        ephyra.runTo('x', 900, 500, 1, () => {ephyra.runTo('y', 90, 350, 3, () => {
            ephyra.group = antonStreet;
        })});}),
    speak(false, 'The Pale Hand', ['Quick this way!'], () => {
        ephyra.runTo('x', 892, 1000, 2, () => {ephyra.group = ephyraRoom});
        playerRunTo('x', 892, 1200, 2, () => {player.hide();
            inMenu = true;
            setTimeout(() => {
                changeScene(backgrounds.ephyraRoom, ephyraRoom);
                player.show();
                player.x = 388
                player.y = 132;
                direction = 2;
                ephyraComp.x = 460;
                ephyraComp.y = 132;
                ephyra.direction = 1;
                inMenu = false;
                beru.runTo('y', 180, 400, 3, () => {antonEphyraPart1[10].run();})
            }, 1000)
        });
    }),
    speak(false, 'Ephyra', ['Conversation with Beru'], () => {
        goal5.complete();
        playerRunTo('x', 520, 500, 2, () => {playerRunTo('y', 84, 200, 3, () => {
            inMenu = true;
            changeScene(backgrounds.antonStreet, antonStreet);
            player.x = 892;
            player.y = 300;
            inMenu = false;
        })});
    }),
    speak(false, 'Ephyra', ['...'], () => {
        playerRunTo('x', 388, 200, 1, () => {playerRunTo('y', -48, 1500, 3, () => {
            player.x = 744;
            player.y = 528;
            changeScene(backgrounds.antonStreet, antonStreet);
            playerRunTo('y', 300, 800, 3, () => {
                ephyra.group = antonStreet;
                ephyraComp.y = 705;
                ephyraComp.x = 744;
                antonEphyraPart1[12].run();})
        })});
    }),
    speak(false, 'Ephyra', ['WAIT!!'], () => {
        goal6.complete();
        ephyra.runTo('y', 350, 600, 3, () => {
            antonEphyraPart1[13].run();
        })
    }),
    speak(false, 'Ephyra', ['deal convo'], () => {
        changePlayer('Hassan', () => {
            changeScene(backgrounds.lethiaHouse, lethiaHouse);
            player.source = sprites.hassan;
            ephyra.group = ephyraRoom;
        }, () => {
            mOrder.show();
            mOrder.runTo('y', 150, 300, 0, () => {
                paladin[0].run();
            });
        });
    })
];
var antonEphyraPart2 = [
    speak(false, 'Ephyra', ['Ephyra tells beru stay safe and Anton to tell her when to kill'], () => {
        ephyra.runTo('x', 508, 200, 2, () => {ephyra.runTo('y', 92, 100, 3, () => {ephyra.group = antonStreet})});
        playerRunTo('x', 508, 800, 2, () => {playerRunTo('y', 92, 100, 3, () => {
            changeScene(backgrounds.antonStreet, antonStreet);
            player.x = 880;
            player.y = 320;
            direction = 2;
            ephyraComp.x = 930;
            ephyraComp.y = 320;
            ephyra.direction = 1;
            maleWit.hide();
            femaleWit.hide();
            antonEphyraPart2[1].run();
        })})
    }),
    speak(false, 'Ephyra', ['We need to go to the temple'], () => {
        ephyra.runTo('x', 880, 100, 1, () => {ephyra.group = temple;});
        goal8.complete();
    }),
];

var paladin = [
    speak(false, 'Guard', ['The Order of the Last Light requests the', 'presence of Prince Hassan of Herat at', 'the docks immediately. This will be a PRIVATE meeting.'], () => {
        mOrder.runTo('y', 0, 300, 3, () => {mOrder.group = antonRoom; goal7.complete(); jude.show();})
    }),
    speak(false, 'Sentry', ['STOP! You are being detained for', 'tresspassing on temple grounds at this time of day.'], () => {
        mOrder.group = temple;
        mOrderComp.x = 485;
        mOrderComp.y = 665;
        mOrder.runTo('y', 310, 1000, 3);
        ilya.runTo('y', 360, 500, 0, () => {ilya.runTo('x', 1400, 1500, 2, () => {
            playChangeText.hide();
            playerChange.animations.show.run(() => {
                changeScene(backgrounds.pallasCell, pallasCell);
                player.x = 280;
                player.y = 310;
                playerChange.animations.hide.run(() => {
                    playChangeText.show();
                    hector[0].run();
                });
            });
        })})
    }),
];

var judeAnton = [
    speak(true, 'Hassan', ['Prophecy convo!!'], () => {
        changePlayer('Anton', () => {
            changeScene(backgrounds.ephyraRoom, ephyraRoom);
            player.source = sprites.anton;
            player.x = 364;
            player.y = 140;
            direction = 2;
            ephyraComp.x = 484;
            ephyraComp.y = 140;
        }, () => {
            antonEphyraPart2[0].run();
        });
    }),
];

var ilyaAnton = [
    speak(false, 'Ilya', ['Brother! It has been too long'], () => {
        ephyra.show();
        ephyra.runTo('y', 200, 300, 0, () => {setTimeout(function () {console.log('whyu'); ilyaAnton[1].run();}, 1000)});//Idk why I need a delay lolol
    }),
    speak(false, 'Ephyra', ['A deal is a deal. Just say the word.'], () => {
        paladin[1].run();
    })
];

var hector = [
    speak(false, 'Paladin', ['Overhear hector accusing Ephyra'], () => {
        mOrder.hide();
        mOrder.group = pallasCell;
        mOrderComp.x = 535;
        mOrderComp.y = 10;
        mOrder.show();
        mOrder.runTo('y', 220, 300, 0, () => {mOrder.runTo('x', 280, 600, 1, () => {mOrder.direction = 0; hector[1].run();})});
    }),
    speak(false, 'Hector', ['Convinces Anton to take him to Beru'], () => {
        /*
        changeScene(backgrounds.double, double);
        player.x = 293;
        player.y = 212;
        direction = 1;
        mOrderComp.x = 240;
        mOrderComp.y = 212;
        mOrder.direction = 2;
        */
        changePlayer('Hassan', () => {
            player.source = sprites.hassan;
            changeScene(backgrounds.lethiaHouse, lethiaHouse);
            player.x = 1240;
            player.y = 100;
        }, () => {
            playChangeText.hide();
            playerChange.animations.show.run();
            hassanDream[0].run();
        })
    }),
    speak(false, 'Hector', ['Bring me to the sister of the other prisoner'], () => {
        mOrder.runTo('x', 293, 100, 2, () => {mOrder.group = antonStreet; beru.group = antonStreet;});
    }),
    speak(false, 'Hector', ['It is you! You are a revenant!! You are an act', 'against nature! You are the reason my family is dead!'], () => {
        jude.group = antonStreet;
    }),
    speak(false, 'Jude', ['Hector stop! As your leader I command you to stop.'])
]

///////////////////Objectives////////////////////////////
/*
1. Speak to Aunt Lethia
2. Go to the Agora
3. Go to the Temple
4. Meet Mrs. Tappan
5. Escape out the window
7. Go into the scrying pool
8. Make a deal with Ephyra
9. Meet the order of the last light at the docks
10. Go to the Temple to meet Ilya
11. Speak to Aunt Lethia
12. Lead Hector to Ephyra's abode
13. Find Jude a healer(you might need to explore)
14. Test your luck against the captain
15. Beat the captain at Rock-Paper-Scissors
16. Speak to Khepri
17. Find the Last Prophet
18. Find chrism oil
19. Light the flare
*/
var goal1 = new Objective(['Speak to Aunt Lethia'], () => {lethia.important = false;});
var goal2 = new Objective(['Go to the Agora']);
var goal3 = new Objective(['Go to the Temple'], () => {tappan.show(); tappan.important = true;});
var goal4 = new Objective(['Meet Mrs. Tappan'], () => {tappan.hide(); theWindow.important = true;});
var goal5 = new Objective(['Escape out the window'], () => {scry.important = true;});
var goal6 = new Objective(['Attempt to scry']);
var goal7 = new Objective(['Make a deal with Ephyra'], () => {scry.important = false;});
var goal8 = new Objective(['Meet at the docks', 'with the Order of the Last Light'], () => {jude.hide(); jude.group = antonStreet});
var goal9 = new Objective(['Go to the Temple to meet Ilya']);
var goal10 = new Objective(['Speak to Aunt Lethia']);
var goal11 = new Objective(['Lead Hector to Beru']);
var goal12 = new Objective(['Find Jude a healer']);
var goal13 = new Objective(['Beat the captain at Rock-Paper-Scissors']);
var goal14 = new Objective(['Speak to Khepri']);
var goal15 = new Objective(['Find the Last Prophet']);
var goal16 = new Objective(['Find chrism oil']);
var goal17 = new Objective(['Light the flare']);

////////////////Scenes/////////////////////
var agora = group(0, 0); agora.hide();
var antonRoom = group(0, 0); antonRoom.hide();
var antonStreet = group(0, 0); antonStreet.hide();
var courtyard = group(0, 0); courtyard.hide();
var docks = group(0, 0); docks.hide();
var double = group(0, 0); double.hide();
var ephyraRoom = group(0, 0); ephyraRoom.hide();
var lethiaHouse = group(0, 0); lethiaHouse.hide();
var nazirahCell = group(0, 0); nazirahCell.hide();
var nearLight = group(0, 0); nearLight.hide();
var pallasCell = group(0, 0); pallasCell.hide();
var ship = group(0, 0); ship.hide();
var shore = group(0, 0); shore.hide();
var temple = group(0, 0); temple.hide();

scene = agora;
changeScene(backgrounds.lethiaHouse, lethiaHouse);
///////////Triggers & Obstacles////////////
//Agora
var agoraTrigC1 = comp(0, 270, {width:32, height:96});
var agoraTrig1 = new Trigger(agoraTrigC1, () => {
    inMenu = true;
    changeScene(backgrounds.antonStreet, antonStreet);
    player.y = 500;
    player.x = 1200;
    direction = 1;
    inMenu = false;
}, agora);
var agoraTrigC2= comp(220, 0, {width:96, height:32});
var agoraTrig2 = new Trigger(agoraTrigC2, () => {
    inMenu = true;
    changeScene(backgrounds.temple, temple);
    player.y = 500;
    player.x = 500;
    direction = 3;
    inMenu = false;
    if(currentObjective == 2){
        hassanWitnesses[0].run();
    } else if(currentObjective == 8){
        ilya.show();
        ephyra.hide();
        ephyraComp.x = 605;
        ephyraComp.y = 135;
        ephyra.direction = 3;
        ilya.runTo('y', 215, 800, 0, () => {ilyaAnton[0].run();});
    }
}, agora); 

var agoraObC1 = comp(720, 0, {width:32, height:275});
var agoraOb1 = new Obstacle(agoraObC1, agora);

//antonRoom

//courtyard

var courtTrigC1 = comp(662, 625, {width:96, height:32}, {fill:{color:'black'}});
var courtTrig1 = new Trigger(courtTrigC1, () => {
    if(currentObjective == 3) return false;
    inMenu = true;
    changeScene(backgrounds.antonStreet, antonStreet);
    player.y = 70;
    player.x = 748;
    direction = 1;
    inMenu = false;
}, courtyard);

//docks

var docksTrigC1 = comp(370, 0, {width:96, height:32}, {fill:{color:'olivedrab'}});
var docksTrig1 = new Trigger(docksTrigC1, () => {
    if(currentObjective == 5) return false;
    inMenu = true;
    changeScene(backgrounds.antonStreet, antonStreet);
    player.y = 540;
    player.x = 744;
    direction = 3;
    inMenu = false;
}, docks);
//double
var doubleTrigC1 = comp(1334, 170, {width:32, height:96}, {fill:{color:'yellow'}});
var doubleTrig1 = new Trigger(doubleTrigC1, () => {
    inMenu = true;
    changeScene(backgrounds.antonStreet, antonStreet);
    player.y = 304;
    player.x = 64;
    direction = 2;
    inMenu = false;
    if(currentObjective == 7){
        khepri.group = antonStreet;
        khepriComp.x = 700;
        khepriComp.y = 304;
        khepri.runTo('x', 400, 600, 1, () => {
            hassanKhepri[11].run();
        });
    }
}, double);

var doubleTrigC2 = comp(300, 625, {width:96, height:32}, {fill:{color:'yellow'}});
var doubleTrig2 = new Trigger(doubleTrigC2, () => {
    inMenu = true;
    changeScene(backgrounds.lethiaHouse, lethiaHouse);
    player.y = 88;
    player.x = 554;
    direction = 0;
    inMenu = false;
}, double);
//antonStreet

var antStTrigC1 = comp(0, 270, {width:32, height:96}, {fill:{color:'blue'}});
var antStTrig1 = new Trigger(antStTrigC1, () => {
    inMenu = true;
    changeScene(backgrounds.double, double);
    player.y = 200;
    player.x = 1250;
    direction = 1;
    inMenu = false;
}, antonStreet);

var antStTrigC2 = comp(1334, 465, {width:32, height:96}, {fill:{color:'blue'}});
var antStTrig2 = new Trigger(antStTrigC2, () => {
    inMenu = true;
    changeScene(backgrounds.agora, agora);
    player.y = 270;
    player.x = 150;
    direction = 2;
    inMenu = false;
    if(currentObjective == 1){
        surrounding[0].run();
    }
}, antonStreet);

var antStTrigC3 = comp(710, 0, {width:96, height:32}, {fill:{color:'blue'}});
var antStTrig3 = new Trigger(antStTrigC3, () => {
    inMenu = true;
    changeScene(backgrounds.courtyard, courtyard);
    player.y = 530;
    player.x = 700;
    direction = 3;
    inMenu = false;
}, antonStreet);

var antStTrigC4 = comp(710, 625, {width:96, height:32}, {fill:{color:'blue'}});
var antStTrig4 = new Trigger(antStTrigC4, () => {
    inMenu = true;
    changeScene(backgrounds.docks, docks);
    player.y = 200;
    player.x = 400;
    direction = 0;
    inMenu = false;
}, antonStreet);

//Lethia House
var lhTrigC1 = comp(500, 0, {width:96, height:32}, {fill:{color:'orange'}});
var lhTrig1 = new Trigger(lhTrigC1, () => {
    inMenu = true;
    changeScene(backgrounds.double, double);
    player.y = 572;
    player.x = 338;
    direction = 3;
    inMenu = false;
}, lethiaHouse);

//Temple
var tempTrigC1 = comp(475, 625, {width:96, height:32}, {fill:{color:'salmon'}});
var tempTrig1 = new Trigger(tempTrigC1, () => {
    if(currentObjective == 2 || currentObjective == 8) return false;
    inMenu = true;
    changeScene(backgrounds.agora, agora);
    player.y = 46;
    player.x = 260;
    direction = 1;
    inMenu = false;
}, temple);
//Near lighthouse
var nearTrigC1 = comp(0, 320, {width:32, height:96}, {fill:{color:'purple'}});
var nearTrig1 = new Trigger(nearTrigC1, () => {
    inMenu = true;
    changeScene(backgrounds.shore, shore);
    player.y = 44;
    player.x = 1274;
    direction = 1;
    inMenu = false;
}, nearLight);

//Shore
var shoTrigC1 = comp(1334, 32, {width:32, height:96}, {fill:{color:'brown'}});
var shoTrig1 = new Trigger(shoTrigC1, () => {
    inMenu = true;
    changeScene(backgrounds.nearLight, nearLight);
    player.y = 332;
    player.x = 50;
    direction = 2;
    inMenu = false;
}, shore);

///////////////////NPCs////////////////////
var lethiaComp = comp(700, 500, {width:48, height:48,}, {type:'image', source:sprites.lethia});
var lethia = new NPC(lethiaComp, lethiaComp, 0, () => {
    if(currentObjective == 0){
        player.y = lethiaComp.getY()+lethiaComp.getHeight()+1;
        direction = 3;
        hassanLethiaPart1[0].run();
    } else if(currentObjective == 9){
        hassanLethiaPart1[4];
    }
}, lethiaHouse); lethia.important = true;

var maleWitComp = comp(650, 180, {width:48, height:48, sWidth:16, sHeight:16}, {type:'image', source:sprites.maleWitness});
var maleWit = new NPC(maleWitComp, maleWitComp, 3, function () {}, temple);

var femaleWitComp = comp(580, 180,{width:48, height:48, sWidth:16, sHeight:16}, {type:'image', source:sprites.femaleWitness});
var femaleWit = new NPC(femaleWitComp, femaleWitComp, 3, function () {}, temple);

var khepriComp = comp(500, 900, {width:48, height:48, sWidth:16, sHeight:16}, {type:'image', source:sprites.khepri});
var khepri = new NPC(khepriComp, khepriComp, 3, function () {}, temple);

var tappanComp = comp(400, 200, {width:48, height:48,}, {type:'image', source:sprites.tappan});
var tappan = new NPC(tappanComp, tappanComp, 0, () => {
    player.x = tappanComp.getX()+tappanComp.getWidth()+1;
    direction = 1;
    antonTappan[0].run();
}, courtyard); tappan.hide();

var ephyraComp = comp(1100, 200, {width:48, height:48, sWidth:16, sHeight:16}, {type:'image', source:sprites.ephyra});
var ephyra = new NPC(ephyraComp, ephyraComp, 2, () => {}, antonRoom);

var windowComp = comp(900, 60, {height:48, width:48}, {type:'image', source:sprites.window});
var theWindow = new NPC(windowComp, windowComp, 0, () => {
    changeScene(backgrounds.antonStreet, antonStreet);
    player.x = 316;
    player.y = 300;
    direction = 0;
    ephyraComp.x = 360;
    ephyraComp.y = 300;
    ephyra.direction = 0;
    antonEphyraPart1[9].run();
}, antonRoom);

var scryComp = comp(416, 416, {height:48, width:48}, {type:'image', source:sprites.scry});
var scry = new NPC(scryComp, scryComp, 0, () => {
    playChangeText.hide();
    playerChange.animations.show.run(() => {
        direction = 3;
        setTimeout(() => {
            antonDream[0].run();
        }, 1000);
    });
}, docks);

var beruComp = comp(430, 300, {width:48, height:48, sWidth:16, sHeight:16}, {type:'image', source:sprites.beru});
var beru = new NPC(beruComp, beruComp, 3, () => {}, ephyraRoom);

var mOrderComp = comp(550, 0, {width:48, height:48, sWidth:16, sHeight:16}, {type:'image', source:sprites.maleOrder});
var mOrder = new NPC(mOrderComp, mOrderComp, 0, function () {}, lethiaHouse);
mOrder.hide();

var judeComp = comp(1000, 400, {width:48, height:48, sWidth:16, sHeight:16}, {type:'image', source:sprites.jude});
var jude = new NPC(judeComp, judeComp, 1, () => {
    judeAnton[0].run();
}, docks); jude.important = true; jude.hide();

var ilyaComp = comp(615, 135, {width:48, height:48, sWidth:16, sHeight:16}, {type:'image', source:sprites.ilya});
var ilya = new NPC(ilyaComp, ilyaComp, 0, () => {}, temple); ilya.hide();

var player =  comp(100, 100, {width:48, height:48, sWidth:16, sHeight:16}, {type:'image', source:sprites.hassan});
player.addTextureAnimation("run", [{path:'sy', value:16.1, time:300}, {path:'sy', value:32.1, time:300}]);
player.animations.run.run(); player.animations.run.stop();

var playerSpeed = 15;
var screen = 0;
var direction = 0;
var currentPlayerBox = comp(583, 0, {width:200, height:100}, {fill:{color:'gainsboro'}, opacity:.8});
var currentPlayer = comp(683, 50, {font:45}, {type:'text', text:['Hassan'], font:'consolas', fill:{color:'slategray'}});


var dialogue = group(273, 200);
var boxMain = group(0, 0, 1, 1, dialogue); boxMain.hide();
var boxOther = group(0, 0, 1, 1, dialogue); boxOther.hide();
var currentDialogue = {};

var newObjective = comp(683, 250, {font:50}, {type:'text', text:['New Objective!'], fill:{color:'yellow'}, font:'consolas', modifiers:'bold', opacity:0});
newObjective.addAnimation('show', [{path:'opacity', value: 1}], 800, 'linear');
newObjective.addAnimation('hide', [{path:'opacity', value: 0}], 1000, 'linear');
var goalThings = group(50, 10);
var goalBox = comp(0, 0, {width:300, height:100}, {fill:{color:'gray'}, opacity:.9}); goalBox.setGroup(goalThings);
var goalTitle = comp(150, 20,{font:23}, {type:'text', text:['Objectives:'], font:'consolas', modifiers:'bold'}); goalTitle.setGroup(goalThings);
var goalText = comp(150, 50, {font:18}, {type:'text', text:['Speak to Aunt Lethia'], font:'consolas'}); goalText.setGroup(goalThings);

var playerChange = group(0, 0); playerChange.opacity = 0;
playerChange.addAnimation('show', [{path:'opacity', value: 1}], 800, 'linear');
playerChange.addAnimation('hide', [{path:'opacity', value: 0}], 1000, 'linear');
var playChangeBox = comp(0, 0, {width:1366, height:657}, {fill:{color:'black',}}); playChangeBox.setGroup(playerChange);
var playChangeText = comp(683, 300, {font:75}, {type:'text', font:'consolas', modifiers:'bold', fill:{color:'white'}, text:['Now playing as:', 'Anton']}); playChangeText.setGroup(playerChange);
function changePlayer(player, middle, after){
    middle = middle || function () {};
    after = after || function () {};
    playChangeText.text[1] = player;
    playerChange.animations.show.run(() => {
        middle();
        currentPlayer.text = [player];
        playerChange.animations.hide.run(() => {after()});
    });
}

var dialogueMainBox = comp(0, 0, {width:820, height:400}, {fill:{color:'gainsboro'}, opacity:.8}); dialogueMainBox.setGroup(boxMain);
var dialogueMain = comp(410, 125, {font:24}, {type:'text', font:'consolas', text:['Lorem ipsum dolor sit amet', 'it will be added here', 'in the future :)']}); dialogueMain.setGroup(boxMain);
var speakerMain = comp(730, 40, {font:16}, {type:'text', modifiers:'italic bold', font:'consolas', text:['player']},); speakerMain.setGroup(boxMain);
var dialogueDirection1 = comp(410, 375, {font:15}, {type:'text', font:'consolas', text:['Press SPACE to continue']}); dialogueDirection1.setGroup(boxMain);

var dialogueOtherBox = comp(0, 0, {width:820, height:400}, {fill:{color:'silver'}, opacity:.8}); dialogueOtherBox.setGroup(boxOther);
var dialogueOther = comp(410, 125, {font:24}, {type:'text', font:'consolas', text:['Lorem ipsum dolor sit amet', 'it will be added here', 'in the future :)']}); dialogueOther.setGroup(boxOther);
var speakerOther = comp(90, 40, {font:16}, {type:'text', modifiers:'italic bold', font:'consolas', text:['player']},); speakerOther.setGroup(boxOther);
var dialogueDirection2 = comp(410, 375, {font:15}, {type:'text', font:'consolas', text:['Press SPACE to continue']}); dialogueDirection2.setGroup(boxOther);