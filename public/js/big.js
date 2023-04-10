var boundaries = group(0, 0);
/////////////////////Dialogues///////////////////////
var townNPCLines = [speak(false, 'Town Citizen', ['*grumble*'], function () {}, true)];

/*
changePlayer('Anton' , () => {
            changeScene(backgrounds.double, double);
            player.x = 293;
            player.y = 212;
            direction = 1;
            mOrderComp.x = 240;
            mOrderComp.y = 212;
            mOrder.direction = 2;
            mOrder.group = double;
        }, () => {hector[2].run();});
*/

var backgroundInf = [
    speak(true, '', ['In this world, every person has the', 'energy of life known as Esha. This force', 'is life. The Esha of every person', 'is individually unique, like a fingerprint.'], () => {backgroundInf[1].run();}),
    speak(true, '', ['People born with special powers known as', 'Graces are able to use esha in additional,', 'useful ways. The Graced are revered by many', 'in the world. Some more than others'], () => {backgroundInf[2].run();}),
    speak(true, '', ['Firstly, the Grace of Blood.', 'The power to give or take Esha,', 'which can heal or harm. This Grace', 'is importantly utilized by healers, who', 'give esha to patients in order to heal.'], () => {backgroundInf[3].run();}),
    speak(true, '', ['The Grace of Heart.', 'The ability to flow esha into parts', 'of the body, enhancing the strength, speed,', 'agility, and senses. Those with this Grace', 'typically become warriors.'], () => {backgroundInf[4].run();}),
    speak(true, '', ['The Grace of Mind.', 'The power to imbue objects with esha,', 'adding unique and helpful properties', 'to the objects. Used by alchemists', 'and artificers.'], () => {backgroundInf[5].run();}),
    speak(true, '', ['The Grace of Sight.', 'The rarest of the four graces and unlike', 'the rest. Rather than manipulating esha,', 'the Graced of Sight can detect esha all around them,', 'and can locate the source of anyones esha just using', 'a name. Used by scryers,', 'a business built around finding people'], () => {backgroundInf[6].run();}),
    speak(true, '', ['Even more rarely will one with the Grace', 'of Sight be able to see they future.', 'The lucky few are prophets, but there has not', 'been one in one hundred years...'], () => {
        playerChange.animations.hide.run(() => {
            playChangeText.show();
            cts = false;
        });
    }),
];

var hassanLethiaPart1 = [
    speak(false, 'Aunt Lethia', ['The Hierophant and the Witnesses have taken over Nazirah.', 'Prince Hassan, you came here to be safe.', 'But even here in Pallas Athos he still has massive influence.'], () => {hassanLethiaPart1[1].run()}),
    speak(true, 'Hassan', ['But-'], () => {hassanLethiaPart1[2].run()}),
    speak(false, 'Aunt Lethia', ["I'm not budging on this.", 'The pale hand is still out taking', 'the lives of the corrupted.', 'However there have been innocents killed...'], () => {hassanLethiaPart1[3].run();}),
    speak(false, 'Lethia', ['Most recently a priest at Thalassa Gardens', 'was killed. I doubt he was innocent.', 'Rumors are he has done-- things', 'to vulnerable people'], () => {goal1.complete(); cts=false;}),
    speak(true, 'Hassan', ["Aunt Lethia I've had a dream, a vision I believe!", ''], () => {hassanLethiaPart1[5].run();}),
    speak(false, 'Lethia', ["You've seen it! You've seen how to", 'stop the age of darkness! You will need', 'more ships to carry all your soldiers.', 'My son Cirion has a fleet and will take you and', 'the refugees to retake the city of Nazirah.'], () => {
        lethia.important = false;
        changePlayer('Anton' , () => {
            player.source = sprites.anton;
            changeScene(backgrounds.double, double);
            player.x = 293;
            player.y = 212;
            direction = 1;
            mOrderComp.x = 240;
            mOrderComp.y = 212;
            mOrder.direction = 2;
            mOrder.group = double;
        }, () => {hector[2].run();});
    }),
    speak(false, 'Lethia', ["I've just gotten word from Nazirah, the Hierophant", "ordered the execution of the King of Herat", 'last night. I am so sorry, your father', 'is dead, Hassan.'], () => {hassanLethiaPart1[7].run();}),
    speak(true, 'Hassan', ["I swear. I will do everything in my power", "to make the Hierophant pay for this. We will", "sail for Nazirah tomorrow. And he better be", 'ready for us.'], () => {hassanLethiaPart1[8].run();}),
    speak(false, 'Lethia', ['Unfortunately, Hassan, we will be leaving before the morning..', 'They are here.'], () => {
        maleWitComp.x = 539;
        maleWitComp.y = 20;
        maleWit.direction = 0;
        maleWit.group = lethiaHouse;
        hassanLethiaPart1[9].run();
    }),
    speak(true, 'Hassan', ['Who? Who is here?', "What's going on?"], () => {hassanLethiaPart1[10].run();}),
    speak(false, 'Lethia', ['Well, Hassan. I have to admit, you had', 'a pretty fine plan layed out. It just so happens', 'that ours was better.'], () => {hassanLethiaPart1[11].run();}),
    speak(true, 'Hassan', ['This entire time, you have been working', 'with the Hierophant?! I began to trust you.'], () => {
        changePlayer('Anton', () => {
            changeScene(backgrounds.ship, ship);
            player.source = sprites.anton;
            player.x = 464;
            player.y = 433;
            direction = 3;
            judeComp.x = 805;
            judeComp.y = 433;
            jude.direction = 3;
            jude.group = ship;
        }, () => {
            judeAnton[95].run();
        })
    }),
    speak(false, 'Witness', ["You've been summoned by the Queen."], () => {
        maleWit.runTo('x', 1366, 1300, 2, () => {
            maleWit.hide();
            hassanLethiaPart1[13].run();
        });
    }),
    speak(true, 'Hassan', ['Mother? She is still alive?'], () => {
        playerRunTo('y', 107, 600, 3, () => {
            playerRunTo('x', 1366, 1000, 2, () => {
                changeScene(backgrounds.nearLight, nearLight);
                player.x = 100;
                player.y = 355;
                playerRunTo('x', 620, 1000, 2, () => {
                    hassanLethiaPart1[14].run();
                });
            });
        });
    }, true),
    speak(false, 'Lethia', ['Prince Hassan.', 'Welcome home.'], () => {hassanLethiaPart1[15].run();}),
    speak(true, 'Hassan', ['Aunt Lethia.'], () => {hassanLethiaPart1[16].run();}),
    speak(false, 'Lethia', ['Aunt Lethia?', 'Come now, Hassan. You know how to address', 'your new queen.'], () => {hassanLethiaPart1[17].run();}),
    speak(true, 'Hassan', ['My mother is the queen.', "Whatever you've done with her, you are still", 'nothing but a jealous usurper.'], () => {hassanLethiaPart1[18].run();}),
    speak(false, 'Lethia', ['Hassan, that anger does not serve you.'], () => {hassanLethiaPart1[19].run();}),
    speak(true, 'Hassan', ['What have you done with the rest of my soldiers?'], () => {hassanLethiaPart1[20].run();}),
    speak(false, 'Lethia', ['You mean the rest of your scraped-together', "band of misfits? Don't worry. They're all", "alive. Imprisoned, but alive. You'll be seeing them shortly."], () => {hassanLethiaPart1[21].run();}),
    speak(true, 'Hassan', ['I put my trust in you. I put all their lives', 'in your hands. And you--', 'you betrayed all of us.'], () => {hassanLethiaPart1[22].run();}),
    speak(false, 'Lethia', ['No. YOU did. By leading them here, telling them', 'you were the Prophet they had been waiting for.', "When we both know that couldn't be further", 'from the truth.'], () => {hassanLethiaPart1[23].run();}),
    speak(true, 'Hassan', ['...'], () => {hassanLethiaPart1[24].run();}),
    speak(false, 'Lethia', ['Ha!', 'If there is one thing that has surprised me, Hassan,', "it's that carried on this farce for so long.", 'You certainly played your part well. You were exactly', 'what they wanted you to be.'], () => {hassanLethiaPart1[25].run();}),
    speak(false, 'Lethia', ['A leader. Smart, charismatic. Yet, when', 'they find out what you truly are, do you think', 'any of that will matter?'], () => {hassanLethiaPart1[26].run();}),
    speak(true, 'Hassan', ['How--how did you--?'], () => {hassanLethiaPart1[27].run();}),
    speak(false, 'Lethia', ['I was more surprised than anyone when you had your', 'dream that night. For a moment,', 'I almost believed it. That you were the long-awaited', 'Prophet, come at last.'], () => {hassanLethiaPart1[28].run();}),
    speak(true, 'Hassan', ["That's why you didn't want me to ", 'come back here. You never wanted', 'to protect me. You were just afraid that if', 'I proclaimed myself the Prophet, true or false,', 'I would come to Nazirah with an army.'], () => {hassanLethiaPart1[29].run();}),
    speak(true, 'Hassan', ["I'd reclaim the throne, and undo everything", 'you and the Witnesses had done.', 'No one else even knew I was in Pallas Athos.', "Why didn't you just kill me. It would have", 'been much simpler'], () => {hassanLethiaPart1[30].run();}),
    speak(false, 'Lethia', ['No matter what you may think of me,', "I'm not a monster, Hassan. You are still", 'my blood.'], () => {hassanLethiaPart1[31].run();}),
    speak(true, 'Hassan', ['So was my father.'], () => {hassanLethiaPart1[32].run();}),
    speak(false, 'Lethia', ["And I didn't want him to die, either.", 'The Hierophant forced my hand, when he would not', 'abdicate the throne. Know this Prince Hassan.', 'You will never, ever, be enough. Nazirah will be mine.'], () => {
        changePlayer('Anton', () => {
            player.source = sprites.anton;
            changeScene(backgrounds.shore, shore);
            player.x = 670;
            player.y = 500;
            direction = 3;
            ilya.group = shore;
            ilya.show();
            ilyaComp.x = 670;
            ilyaComp.y = 450;
        }, () => {
            ilyaAnton[49].run();
        });
    }),
];
/*
playChangeText.text = ['To be continued...'];
        playerChange.animations.show.run(() => {
            setTimeout(function () {
                credits.show();
                credInstructions.hide();
                credText.animations.scroll.run();
                mainData.move = true;
                mainData.selection = Infinity;
                mainData.active = true;
            }, 2500);
        });
*/
var surrounding = [
    speak(false, '???', ['AHHHHHHHHHH'], () => {goal2.complete();}),
];

var hassanWitnesses = [
    speak(true, 'Hassan', ["Stop! Don't touch the temple!"], () => {
        maleWit.direction = 0;
        femaleWit.direction = 0;
        playerRunTo('y', 344, 500, 3, () => {playerRunTo('x', 608, 250, 2, () => {playerRunTo('y', 236, 200, 3, () => {hassanWitnesses[1].run();})})});
    }),
    speak(false, 'Witness', ["Who in the Hierophant's", 'name are you??'], () => {hassanWitnesses[2].run();}),
    speak(true, 'Hassan', ["Someone you shouldn't anger"], () => {
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
                changeScene(backgrounds.courtyard, courtyard);
                player.x = 600;
                player.source = sprites.anton;
            }, () => {goal3.complete(); cts = false;});
        })})
    }),
    speak(false, 'Khepri', ['Cirion! Where are you going?'], () => {extra[8].run();}),
    speak(false, 'Khepri', ['Prince Hassan!', 'Thank goodness you are here.', 'The Witnesses have attacked the temple with their secret', "weapon called Godfire. It has a pale white, ghostly look.", 'Supposedly it can burn the Grace out of anyone.'], () => {hassanKhepri[13].run();}),
    speak(false, 'Khepri', ['The Temple was lit with Graced refugees', 'inside. Emir went in to save as many as he', 'could. But the temple..', "It exploded before he could get out. I didn't", 'realize the violent reaction chrism oil would have with', 'Godfire.'], () => {hassanKhepri[14].run();}),
    speak(true, 'Hassan', ['Emir is dead? But he was in my vision.', 'Or was it just a regular dream, am I', 'really the Last Prophet? Could Jude be wrong about', 'me? But if I tell everyone, we will have no chance', "to retake Nazirah. Their morale is high, I musn't shut", 'it down.'], () => {
        changePlayer('Anton', () => {
            player.source = sprites.anton;
            changeScene(backgrounds.courtyard, courtyard);
            captain.hide();
            player.x = 360;
            player.y = 200;
            direction = 1;
            cts = true;
            jude.direction = 2;
        }, () => {
            judeAnton[21].run();
        })
    }, true),
    speak(false, 'Khepri', ['Hassan!'], () => {hassanKhepri[16].run(); direction = 3;}),
    speak(true, 'Hassan', ['Khepri! Are the others okay?'], () => {hassanKhepri[17].run();}),
    speak(false, 'Khepri', ['Yes, they are okay. How are we', 'going to stop the Hierophant??'], () => {hassanKhepri[18].run();}),
    speak(true, 'Hassan', ['A prophecy says that while the', 'lighthouse stands, the Seif line will rule', 'Nazirah.'], () => {hassanKhepri[19].run();}),
    speak(false, 'Khepri', ['Chrism oil! It has an explosive reaction', 'with Godfire. There has to be some', 'laying around here somewhere. Can you find', 'it?'], () => {hassanKhepri[20].run();}),
    speak(true, 'Hassan', ['Good thinking!'], () => {
        goal15.complete();
        cts = false;
        boxes.important = true;
    }),
    speak(false, 'Khepri', ['There we go! The lighthouse is rigged', 'with chrism oil. All that needs to happen now', 'is for it to be lit.'], () => {hassanKhepri[22].run();}),
    speak(true, 'Hassan', ["I'll do it."], () => {hassanKhepri[23].run();}),
    speak(false, 'Khepri', ["Hassan, it's too dangerous."], () => {hassanKhepri[24].run();}),
    speak(true, 'Hassan', ["Everything I've done has gone wrong,", 'and I want to do at least one thing right.'], () => {
        goal16.complete();
        cts = false;
    }),
    speak(true, 'Hassan', ['The smoke. I cannot breathe.', "It's too much."], () => {
        playChangeText.hide();
        playerChange.animations.show.run(() => {
            hassanKhepri[26].run();
        });
    }, true),
    speak(false, 'Khepri', ['Hassan?', 'Hassan!!'], () => {
        playChangeText.text = ['Anton']
        playChangeText.animations.show.run(() => {
            player.source = sprites.anton;
            player.x = 985;
            player.y = -48;
            judeComp.x = 1033;
            judeComp.y = -48;
            jude.show();
            jude.group = shore;
            changeScene(backgrounds.shore, shore);
            playerRunTo('y', 50, 500, 0, () => {});
            jude.runTo('y', 30, 300, 0, () => {});
            playerChange.animations.hide.run(() => {
                background.x += 5;
                for(let i=0;i<1000;i++){
                    setTimeout(() => {
                        if(isEven(i)){
                            background.x += 10;
                        } else {
                            background.x -= 10;
                        }
                    }, i*150);
                }
                setTimeout(() => {
                    antonDream[4].run();
                }, 2000);
            });
        });
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
    speak(true, 'Anton', ['I can feel the esha of everyone', 'washing over top of me'], () => {antonDream[1].run();}, true),
    speak(true, 'Anton', ['I need to reach further than I', 'ever have before'], () => {antonDream[2].run();}, true),
    speak(true, 'Anton', ['I feel something!', 'But it is not esha', 'It is something cold and dark--'], () => {antonDream[3].run();}, true),
    speak(true, 'Anton', ['No...', 'NO', 'It is icy cold hands forcing me', 'under the water. I cannot get air', 'My lungs are filling with water-'], () => {
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
    speak(true, 'Anton', ["What's happening!?"], () => {
        direction = 2;
        jude.direction = 2;
        antonDream[5].run();
    }),
    speak(false, 'Jude', ['The lighthouse! Something is happening.'], () => {antonDream[6].run();}),
    speak(true, 'Anton and Jude', ['AHHHHHHHHHHHHHHHHHH'], () => {
        playerRunTo('y', 650, 300, 3, () => {
            setTimeout(() => {
                playChangeBox.fill.color = 'white';
                playerChange.animations.show.run(() => {
                    antonDream[7].run();
                });
            }, 1000);
        })
        jude.runTo('y', 650, 300, 3, () => {})
    }),
    speak(true, 'Anton', ['Am I... dead? No,', "I'm floating in the water.", 'I sense something else. I can see...', 'Ephyra? And Beru and Hector. That must be', 'Tel Amot. Ephyra has taken the life of Hector...'], () => {antonDream[8].run()}),
    speak(true, 'Anton', ['Mrs. Tappan? It seems that she will', "help Ephyra find Eleazar's Chalice."], () => {antonDream[9].run()}),
    speak(true, 'Anton', ['I only blinked. What do I see now?', 'This must be the Age of Darkness. A city in ruins,', 'a red sky, and a sun obsured by shadow.', 'Smoke, smoke everywhere, twisting through the cracks of', 'the skeletal remains of buildings.'], () => {antonDream[10].run()}),
    speak(true, 'Anton', ['The final piece of the prophecy revealed.', 'In vision of Grace and fire.', 'To bring the age of dark to yield.', 'Or break the world entire.'], () => {antonDream[11].run()}),
    speak(true, 'Anton', ['This is my purpose.', 'The fate of the world rests on my shoulders.', 'I am the Last Prophet.', 'And I will stop the Age of Darkness', 'in its tracks.'], () => {
        playChangeText.text = ['To be continued...'];
        setTimeout(() => {
            playChangeBox.fill.color = 'black';
            setTimeout(function () {
                battle.pause();
                bosanska.play();
                credits.show();
                credInstructions.hide();
                credText.animations.scroll.run();
                mainData.move = true;
                mainData.selection = Infinity;
                mainData.active = true;
            }, 2500);
        }, 1500);
    }),
];
/*
playerChange.animations.hide.run(() => {
            playChangeText.show();
            goal9.complete();
            lethia.important = true;
        })
*/
var hassanDream = [
    speak(true, 'Hassan', ['What- what is this. I see Nazirah below me...', 'Not the same as I left it however.', 'Now overrun by fear and shadow.', 'Witnesses in white cloaks flood the streets.'], () => {hassanDream[1].run();}, true),
    speak(true, 'Hassan', ['On the lighthouse with me stands Khepri.', 'Her eyes dance in the firelight. And the same', 'fierce countenance as always. Her sword ready by', 'her side.'], () => {hassanDream[2].run();}, true),
    speak(true, 'Hassan', ['And on my other side stands Amir the Acolyte.', 'A soldier and man of faith.', 'And I, the leader, the Last Prophet between them both.'], () => {hassanDream[3].run();}, true),
    speak(true, 'Hassan', ['In the harbor, sat ships with sails the', 'color of the moonlight. Soldiers pour', 'off the ships, meeting the force of the Witnesses.', 'Refugees and mercenaries in green, gold, and dark blue,', 'begin to overtake white and black'], () => {hassanDream[4].run();}, true),
    speak(true, 'Hassan', ['The mysterious white flames in the hands of Witnesses flicker', 'out like dying stars.'], () => {hassanDream[5].run();}, true),
    speak(true, 'Hassan', ['In a blink I am in the throne room, upon', 'the golden chair detailed with images of Herati victories.', 'Nazirah is once more mine.'], () => {playerChange.animations.hide.run(() => {hassanDream[6].run();})}, true),
    speak(true, 'Hassan', ['This must be it!', "I've had my vision. I must tell others."], () => {
        playChangeText.show();
        goal9.complete();
        lethia.important = true;
        cts = false;
    }, true),
];

var extra = [
    speak(false, 'Ephyra', ['Supposedly, the Chalice of Alizar should fix', 'the ailment that Beru has. Since it was made', 'through the imbuement of esha, you can', 'theoretically find it?'], () => {extra[1].run();}),
    speak(true, 'Anton', ['I mean sure it should be possible but', 'why should I help you? You cannot force me'], () => {extra[2].run();}),
    speak(false, 'Beru', ['She can be VERY convincing you know. She has--', 'her methods...'], () => {extra[3].run()}),
    speak(true, 'Anton', ['Yes, fine, I will help you.', 'I need a scrying pool in order to', 'detect esha clearly'], () => {extra[4].run();}),
    speak(false, 'Ephyra', ['There is a scrying pool south of here', 'on the docks. Good luck!'], () => {
        goal5.complete();
        playerRunTo('x', 520, 500, 2, () => {playerRunTo('y', 84, 200, 3, () => {
            changeScene(backgrounds.antonStreet, antonStreet);
            player.x = 892;
            player.y = 300;
            cts = false;
            direction = 0;
        })});
    }),
    speak(true, 'Anton', ['I am sorry. I cannot scry without', 'seeing memories from my past.', 'Of my brother drowning me under a frozen lake'], () => {extra[6].run();}),
    speak(false, 'Ephyra', ['If you brother was dead, would your', 'nightmares stop? I need your powers Anton'], () => {extra[7].run();}),
    speak(true, 'Anton', ['I think it would certainly help'], () => {antonEphyraPart1[13].run();}),
    speak(true, 'Hassan', ['I am sorry Khepri. I did', 'not mean to decieve you. My name', 'is not Cirion. I am Hassan'], () => {extra[9].run();}),
    speak(false, 'Khepri', ['You are the prince. This whole time you...', 'I have to go.'], () => {khepri.runTo('x', 700, 600, 2, () => {khepri.runTo('y', 472, 300, 0, () => {khepri.runTo('x', 1366, 600, 2, () => {khepri.group = agora; cts = false;})})});}),
    speak(false, 'Ephyra', ['My business does not concern you', 'What are YOU doing here?'], () => {extra[11].run();}),
    speak(false, 'Paladin', ['That does not matter. Your business however,', 'is KILLING. You killed that priest, and he', "wasn't the first. Tell me, how many lives has the", 'Pale Hand claimed?'], () => {extra[12].run();}),
    speak(false, 'Ephyra', ['...'], () => {extra[13].run();}),
    speak(false, 'Paladin', ['It really is you. After all these years.', "I thought I'd never set eyes on you again.", 'But here you are'], () => {extra[14].run();}),
    speak(false, 'Paladin', ["You recognize me don't you? I spent months", 'trying to find you. I chased down every', 'rumor of the Pale Hand. And finally I face you.', 'Do you have anything to say?'], () => {extra[15].run();}),
    speak(false, 'Ephyra', ['...'], () => {extra[16].run();}),
    speak(false, 'Paladin', ['YOU KILLED MY FAMILY. ADMIT IT!', 'Once again I ask, how many people have you left', 'your mark on?'], () => {extra[17].run();}),
    speak(false, 'Ephyra', ['You should know I only kill those who deserve it. Those', 'who are cruel, who use their power to hurt others.'], () => {extra[18].run();}),
    speak(false, 'Paladin', ['Ah, yes. The Pale Hand only kills the wicked. How', "strange that that didn't seem to matter when you took", "my family's lives. They were innocent, but that didn't", 'stop you from killing them. Do you even remember them?'], () => {extra[19].run();}),
    speak(false, 'Ephyra', ['Yes.', 'Yes I do Hector Navarro'], () => {extra[20].run();}),
    speak(false, 'Hector', ['My mother. My father. My brother.', 'They took you in, showed you kindness.', 'And you MURDERED them.'], () => {extra[21].run();}),
    speak(false, 'Ephyra', ["I didn't-", 'It was an accident.'], () => {extra[22].run();}),
    speak(false, 'Hector', ["I don't believe that. You take lives because you CAN.", "You think you're a god, but you're not.", "You know, I used to wonder why I didn't die, too.", 'Why was I spared?'], () => {extra[23].run();}),
    speak(false, 'Hector', ['After five long years, I finally know that answer.', "I survived because I'm supposed to stop you.", 'Fate. To make sure the Pale Hand never', 'reaches for another life again.'], () => {extra[24].run();}),
    speak(false, 'Hector', ['I will bring you to justice. Make', 'you admit to the Order, to me, to', 'everyone. Tell everyone the monster you truly are.'], () => {extra[25].run();}),
    speak(false, 'Ephyra', ['And how do you intend to make me do that?'], () => {extra[26].run();}),
    speak(false, 'Hector', ['You have a sister. I remember her.', "You won't be willing to tell me where she is,", 'but she must be in the city and I know exactly', 'where to start.'], () => {
        mOrder.hide();
        mOrder.group = pallasCell;
        mOrderComp.x = 535;
        mOrderComp.y = 10;
        mOrder.show();
        mOrder.runTo('y', 220, 300, 0, () => {mOrder.runTo('x', 280, 600, 1, () => {mOrder.direction = 0; hector[1].run();})});
    }),
    speak(true, 'Anton', ["The what? I don't know what that is."], () => {extra[28].run();}),
    speak(false, 'Hector', ["Don't lie to me. The Paladin of the Order of", 'the Last Light senses are trained to be heightened', 'beyond anything you have ever encountered.'], () => {extra[29].run();}),
    speak(false, 'Hector', ['Now.', 'Tell me, you came here with the Pale Hand.', "Didn't you?"], () => {extra[30].run();}),
    speak(false, 'Hector', ["DIDN'T YOU?"], () => {extra[31].run();}),
    speak(true, 'Anton', ['Fine.', "Yes. Fine. I did. We're old pals, me and the", 'Pale Hand.'], () => {extra[32].run();}),
    speak(false, 'Hector', ['She has a sister, I need to find her.', "Tell me where she is, and I won't hurt you."], () => {extra[33].run();}),
    speak(true, 'Anton', ["And if I refuse, you'll what? Kill me?", "I haven't done anything do warrant that."], () => {extra[34].run();}),
    speak(false, 'Hector', ["It doesn't matter to me what you haven't done.", 'Tell me where her sister is.'], () => {extra[35].run();}),
    speak(true, 'Anton', ['What are you going to do with her?'], () => {extra[36].run();}),
    speak(false, 'Hector', ['Nothing.', 'If the Pale Hand cooperates.'], () => {extra[37].run();}),
    speak(true, 'Anton', ["I can't tell you where she is.", 'But I can show you. Get me', 'out of this cell and I will take', 'you to her.'], () => {extra[38].run();}),
    speak(false, 'Hector', ["You're playing games while the fate of", 'the world lies in the balance. Whatever she', "is to you, it's not worth what will happen if I don't", 'find her.'], () => {extra[39].run();}),
    speak(true, 'Anton', ['If the fate of the world really hangs in the balance,', 'then what does one prisoner going free matter?'], () => {extra[40].run();}),
    speak(true, 'Anton', ["Someones's coming.", 'Better decide quick.'], () => {extra[41].run();}),
    speak(false, 'Hector', ['Fine. You are coming with me.'], () => {
        changePlayer('Hassan', () => {
            player.source = sprites.hassan;
            changeScene(backgrounds.lethiaHouse, lethiaHouse);
            player.x = 1240;
            player.y = 100;
        }, () => {
            playChangeText.hide();
            playerChange.animations.show.run(() => {
                hassanDream[0].run();
            });
            jude.important = false;
        });
    }),
]
var antonEphyraPart1 = [
    speak(true, 'Anton', ['Not again...', 'My lungs are filled', 'I cannot breathe'], () => {
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
    speak(false, 'The Pale Hand', ['I know a place. It is safe.', 'No one will be able to find you.', 'Ilya has hired swords, we need to leave', 'through the window to not get caught'], () => {goal4.complete();
        ephyra.runTo('x', 900, 500, 1, () => {ephyra.runTo('y', 90, 350, 3, () => {
            ephyra.group = antonStreet;
            cts = false;
        })});}),
    speak(false, 'The Pale Hand', ['Quick this way!'], () => {
        ephyra.runTo('x', 892, 1000, 2, () => {ephyra.group = ephyraRoom});
        playerRunTo('x', 892, 1200, 2, () => {player.hide();
            setTimeout(() => {
                changeScene(backgrounds.ephyraRoom, ephyraRoom);
                player.show();
                player.x = 388
                player.y = 132;
                direction = 2;
                ephyraComp.x = 460;
                ephyraComp.y = 132;
                ephyra.direction = 1;
                beru.runTo('y', 180, 400, 3, () => {antonEphyraPart1[10].run();})
            }, 1000)
        });
    }),
    speak(false, 'Ephyra', ['My actual name is Ephyra. I have been killing', 'to take their esha to heal my sister Beru.', 'She is constantly sick and I have to do this', 'to keep her alive.'], () => {extra[0].run();}),
    speak(false, 'Ephyra', ['Anton what happened?'], () => {
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
            extra[5].run();
        })}),
    speak(false, 'Ephyra', ['So it is a deal then.', 'I will setup a meeting at the temple', 'with your brother very soon'], () => {
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
    speak(false, 'Ephyra', ['Anton. When you want me to kill,', 'say "esha".', 'Beru, do NOT leave the house'], () => {
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
    }, () => {}),
    speak(false, 'Ephyra', ['We need to go to the temple'], () => {
        ephyra.runTo('x', 880, 100, 1, () => {ephyra.group = temple;});
        goal8.complete();
        cts = false;
    }),
];

var judeOww = speak(false, 'Jude', ['Owwwwwww...'], () => {healer.important = true; jude.runTo('x', player.x, 300, 2, () => {jude.hide();})});

var paladin = [
    speak(false, 'Guard', ['The Order of the Last Light requests the', 'presence of Prince Hassan of Herat at', 'the docks immediately. This will be a PRIVATE meeting.'], () => {
        mOrder.runTo('y', 0, 300, 3, () => {mOrder.group = antonRoom; goal7.complete(); jude.show(); cts = false;})
    }),
    speak(false, 'Sentry', ['STOP! You are being detained for', 'tresspassing on temple grounds at this time of day.'], () => {
        mOrder.group = temple;
        player.animations.run.stop();
        player.size.sy = 0.1;
        mOrderComp.x = 485;
        mOrderComp.y = 665;
        mOrder.runTo('y', 450, 1000, 3);
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
    speak(false, 'Guard', ['Prince Hassan come quick!', 'The temple is under attack by the Witnesses!'], () => {
        mysts.pause();
        battle.play();
        fOrd.runTo('y', -20, 800, 3, () => {
            fOrd.hide();
            goal13.complete();
            khepri.show();
            khepri.group = agora;
            khepriComp.x = 702;
            khepriComp.y = 290;
            khepri.direction = 1;
            cts = false;
        })
    }),

];

var judeAnton = [
    speak(false, 'Jude', ['My name is Jude.','I have been waiting to meet you for a', 'very long time. Since the day you', 'were born.'], () => {judeAnton[1].run();}),
    speak(true, 'Hassan', ['And what has made you return to Pallas Athos?', 'Why were you looking for me?'], () => {judeAnton[2].run();}),
    speak(false, 'Jude', ['We did not know it was you whom', 'we were looking for until recently.', 'The Final Secret Prophecy is reads:'], () => {judeAnton[3].run();}),
    speak(false, 'Jude', ['When the Age of Prophets wanes', 'And the fate of the world lies in shadow,', 'Only our final prophecy remains,', 'Given to the guardian, the Keeper of the Word.'], () => {judeAnton[4].run();}),
    speak(false, 'Jude', ['The deceiver ensnares the world with lies,', "To death's pale hand the wicked fall,", 'That which sleeps in the dust shall rise,', 'And in their wake will come a darkness.'], () => {judeAnton[5].run();}),
    speak(false, 'Jude', ['But born beneath a light-streaked sky,', 'An heir with the blessed Sight,', 'A promise of the past undone', 'The shadowed future made bright.'], () => {judeAnton[6].run();}),
    speak(false, 'Jude', ['The final piece of our prophecy revealed', 'In vision of Grace and fire', 'To bring the age of dark to yield', 'Or break the world entire'], () => {judeAnton[7].run();}),
    speak(false, 'Jude', ['You were born on the summer solstice', '16 years ago. On that night, the sky', 'glowed with celestial light.', 'Prince Hassan, you are the Last Prophet.'], () => {judeAnton[8].run();}),
    speak(true, 'Hassan', ['You must be mistaken', 'I was not the only child born on that day'], () => {judeAnton[9].run();}),
    speak(false, 'Jude', ['That would have made our jobs easier', 'But when the Witnesses took over Nazirah,', 'we thought back to another prophecy.', 'As long as the lighthouse of Nazirah stands,', 'the Seif line shall rule.'], () => {judeAnton[10].run();}),
    speak(true, 'Hassan', ['Prophecies cannot be undone can they?'], () => {judeAnton[11].run();}),
    speak(false, 'Jude', ['It has never happened before but the Prophets', 'have never predicted it before, either.', 'That fulfills another line of the prophecy', 'A promise of the past undone'], () => {judeAnton[12].run();}),
    speak(true, 'Hassan', ['But I did not do that! The', 'hierophant did!'], () => {judeAnton[13].run();}),
    speak(false, 'Jude', ['But you, or rather, your family, were the subject', 'of the prophecy of Nazirah', 'Therefore, it was your destiny that was undone.'], () => {judeAnton[14].run();}),
    speak(true, 'Hassan', ['So that is two signs. But what', 'of the third?', 'an heir with the blessed Sight.'], () => {judeAnton[15].run();}),
    speak(false, 'Jude', ['But you are an heir and not yet seventeen.', 'There is still time for your grace to manifest.', 'We intend to keep you safe,', 'and to wait for you to fulfill the prophecy', 'and show us how to stop the Age of Darkness.'], () => {judeAnton[16].run();}),
    speak(true, 'Hassan', ['The Age of Darkness', 'What is it?'], () => {judeAnton[17].run();}),
    speak(false, 'Jude', ['The end of the Graced.', 'The prophecy states three harbingers for it.', 'The Deceiver, whom we believe to be', 'the hierophant, the Pale Hand of Death, and', 'one who would rise from the dust.'], () => {judeAnton[18].run();}),
    speak(false, 'Jude', ['We await your vision, to show the future.'], () => {judeAnton[19].run();}),
    speak(true, 'Hassan', ['So we just wait,', 'And what if it never comes?'], () => {judeAnton[20].run();}),
    speak(false, 'Jude', ['It will'], () => {
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
    speak(false, 'Jude', ['I was going to try to sleep at the inn but', "you've seem to have claimed the room."], () => {player.animations.run.stop(); player.size.sy = 0.1; judeAnton[22].run();}),
    speak(true, 'Anton', ["I don't mind. If you want to share my bed,", "that'll cost you."], () => {judeAnton[23].run();}),
    speak(false, 'Jude', ['...'], () => {judeAnton[24].run();}),
    speak(true, 'Anton', ['That was a joke. You know people tell them', 'to make each other laugh?'], () => {judeAnton[25].run();}),
    speak(false, 'Jude', ['I know what a joke is.'], () => {judeAnton[26].run();}),
    speak(true, 'Anton', ["Seemed like you weren't very familiar with", 'the concept.'], () => {judeAnton[27].run();}),
    speak(false, 'Jude', ['Meaning what?'], () => {judeAnton[28].run();}),
    speak(true, 'Anton', ['Well, you know, just that you are very...', 'tightened up and serious all the time.'], () => {judeAnton[29].run();}),
    speak(false, 'Jude', ["I've given it more thought. I believe that", 'you meant to return my sword to me.', "If you'd meant to steal it outright, you wouldn't have", 'wagered next to the same tavern where I was', 'sleeping.'], () => {judeAnton[30].run();}),
    speak(false, 'Jude', ['And you did see me back here safely and find a', 'healer for my shoulder. I ought to thank you.'], () => {judeAnton[31].run();}),
    speak(true, 'Anton', ["Saying you ought to thank someone isn't the same as", 'a thank-you.'], () => {judeAnton[32].run();}),
    speak(false, 'Jude', ['You did still try to wager my sword.'], () => {judeAnton[33].run();}),
    speak(true, 'Anton', ['I guess I ought to apologize.'], () => {judeAnton[34].run();}),
    speak(false, 'Jude', ["Saying you ought to apologize isn't the same as", 'an apology.'], () => {judeAnton[35].run();}),
    speak(true, 'Anton', ['Touché'], () => {judeAnton[36].run();}),
    speak(false, 'Jude', ["I've been wanting to know, what were", 'you doing with the Pale Hand?'], () => {judeAnton[37].run();}),
    speak(true, 'Anton', ['She was...', 'She was trying to help me.'], () => {judeAnton[38].run();}),
    speak(false, 'Jude', ["Help you? She's a murderer. That doesn't", 'scare you?'], () => {judeAnton[39].run();}),
    speak(true, 'Anton', ["Do you know what it's like to feel", 'fear, Jude? I mean, real fear.'], () => {judeAnton[40].run();}),
    speak(true, 'Anton', ['It feels just like drowning, and you can either', 'let yourself sink or you can fight and claw your', 'way to the surface. The thing is,', "I'm not really sure there's a difference, in the end."], () => {judeAnton[41].run();}),
    speak(true, 'Anton', ["So, no. The Pale Hand doesn't scare me.", "That's not what I'm afraid of."], () => {judeAnton[42].run();}),
    speak(false, 'Jude', ['But something does. And that...fear...', "is that why you're so eager to get out of", 'Pallas Athos?'], () => {judeAnton[43].run();}),
    speak(true, 'Anton', ['Sure, I guess. Why are you chasing that Hector?', 'He tried to kill you! If I were you', "I'd be trying to get as far away from him as possible."], () => {judeAnton[44].run();}),
    speak(false, 'Jude', ["Well I'm not like you. I have a responsibility", 'to him. I am his leader. I chose him, and if', 'he dishonors himself, he dishonors me.'], () => {judeAnton[45].run();}),
    speak(true, 'Anton', ['That, sounds like horsecrap'], () => {judeAnton[46].run();}),
    speak(false, 'Jude', ["What would you know about it? You've more", 'interest in gambling than in honor.'], () => {judeAnton[47].run();}),
    speak(true, 'Anton', ['You could learn a thing or two from the', 'card table. A good player knows when to cut', 'his losses and walk away.'], () => {judeAnton[48].run();}),
    speak(false, 'Jude', ['I will NOT give up on him.'], () => {judeAnton[49].run();}),
    speak(true, 'Anton', ['Oh.', "So. It's like that.", "You're in love with him, aren't you?"], () => {judeAnton[50].run();}),
    speak(false, 'Jude', ["I'm not.", "I'm--He's--"], () => {judeAnton[51].run();}),
    speak(true, 'Anton', ['Maybe you are better off staying away from the card', 'table. You are a horrible bluffer.'], () => {judeAnton[52].run();}),
    speak(false, 'Jude', ["It's not like that, I wouldn't expect", 'you to understand.', "It's--I have a duty. A purpose"], () => {judeAnton[53].run();}),
    speak(false, 'Jude', ["I've failed that duty. The Keeper of the Word", 'is not supposed to fall in love, not supposed', 'to succumb to doubt, to let their emotions', 'get in the way of the prophecy.', "But I've done it all.."], () => {judeAnton[54].run();}),
    speak(false, 'Jude', ["All I want is to find Hector and", 'to bring him back where he belongs.'], () => {judeAnton[55].run();}),
    speak(true, 'Anton', ['Hector is in Tel Amot. You can find him th--'], () => {judeAnton[56].run();}),
    speak(false, 'Ephyra', ['Anton!'], () => {
        ephyraComp.x = 675;
        ephyraComp.y = 615;
        ephyra.group = courtyard;
        ephyra.runTo('y', 230, 1000, 3, () => {
            ephyra.direction = 1;
            direction = 2;
            judeAnton[57].run();
        });
    }),
    speak(true, 'Anton', ['What is this cold?', 'ILYA.', 'What is he doing here?'], () => {judeAnton[58].run();}, true),
    speak(true, 'Anton', ['Ephyra! How did you find me? How did you get', 'out of the prison?'], () => {judeAnton[59].run();}),
    speak(false, 'Ephyra', ['How did YOU get out of the prison?'], () => {judeAnton[60].run();}),
    speak(true, 'Anton', ['...'], () => {judeAnton[61].run();}),
    speak(false, 'Ephyra', ["I know Hector Navarro broke you out.", 'And I know he went after Beru. Tell me', 'where they are.'], () => {judeAnton[62].run();}),
    speak(true, 'Anton', ['I tried to help her. I swear.', 'I distracted Navarro to give Beru time to', 'run away. She went to find a train to', 'Tel Amot. But there was a fight. Navarro', 'got away.'], () => {judeAnton[63].run();}),
    speak(true, 'Anton', ['After that I do not know.', "My brother, he's here. Somehow he found", 'me. He--', 'How did YOU get out of the prison, Ephyra?'], () => {judeAnton[64].run();}),
    speak(false, 'Ephyra', ["It was the only way.", 'The only way to save Beru.'], () => {judeAnton[65].run();}),
    speak(true, 'Anton', ["I feel Ilya's esha drawing closer."], () => {judeAnton[66].run();}, true),
    speak(false, 'Ephyra', ["I know this isn't what you wanted.", 'But I think you are wrong about him.', "I don't think he's what you think he is."], () => {judeAnton[67].run();}),
    speak(true, 'Anton', ["He's exactly what I think he is. And you just--you--"], () => {
        ilyaComp.x = 675;
        ilyaComp.y = 615;
        ilya.direction = 3;
        ilya.group = courtyard;
        judeAnton[68].run();
    }),
    speak(true, 'Anton', ['Ilya..'], () => {
        ilya.runTo('y', 400, 500, 3, () => {
            judeAnton[69].run();
        });
    }),
    speak(false, 'Ilya', ['You never bid me farewell, Anton'], () => {judeAnton[70].run();}),
    speak(false, 'Ephyra', ['I thought you were going to wait for me', 'to talk with him.'], () => {judeAnton[71].run();}),
    speak(false, 'Ilya', ['I changed my mind.', "Anton, you didn't bid me farewell the first time", 'you left, either. When you stole away in', 'the middle of the night. Grandmother and Father', 'blamed me you know?'], () => {judeAnton[72].run();}),
    speak(false, 'Ilya', ['Gave me the worst beating of my life.'], () => {judeAnton[73].run();}),
    speak(true, 'Anton', ['Well, they had it right. I was running', 'away from you.'], () => {judeAnton[74].run();}),
    speak(false, 'Ilya', ["No you weren't. Perhaps that's what", 'you needed to tell yourself back then.', 'Perhaps it was easier that way, to think that', 'all your fears could be traced to your cruel,', 'jealous, brother.'], () => {judeAnton[75].run();}),
    speak(false, 'Ilya', ["But that's not the truth, and deep down,", 'you know that.'], () => {judeAnton[76].run();}),
    speak(true, 'Anton', ['I ran away because you were going to kill me.'], () => {judeAnton[77].run();}),
    speak(false, 'Ilya', ['You mean the lake? No, Anton.', "I didn't try to kill you, but something", 'happened that day. Something that scared you more', 'than I ever could. Something that, even now,', "you can't face."], () => {judeAnton[78].run();}),
    speak(true, 'Anton', ['I know what happened'], () => {judeAnton[79].run();}),
    speak(false, 'Ilya', ['Do you?'], () => {judeAnton[80].run();}),
    speak(true, 'Anton', ['My lungs burn for air. I am drowning', 'HELP', 'HELP'], () => {judeAnton[81].run();}, true),
    speak(false, 'Jude', ['Anton?', 'Are you all right?'], () => {judeAnton[82].run();}),
    speak(false, 'Jude', ['You! Ephyra!', "I don't understand. Anton said you", 'were trying to help him.'], () => {judeAnton[83].run();}),
    speak(true, 'Anton', ["It's simple. She decided to betray me instead."], () => {judeAnton[84].run();}),
    speak(false, 'Ephyra', ['Could you be anymore dramatic?', "I didn't betray you. I came to find Beru."], () => {judeAnton[85].run();}),
    speak(true, 'Anton', ['And led Ilya here in the process,', 'along with Witnesses.'], () => {judeAnton[86].run();}),
    speak(false, 'Ephyra', ['Witnesses? What Witnesses?'], () => {
        maleWit.group = courtyard;
        femaleWit.group = courtyard;
        maleWitComp.x = 675+60;
        maleWitComp.y = 615;
        femaleWitComp.x = 675+60;
        femaleWitComp.y = 615+30;
        maleWit.show();
        femaleWit.show();
        maleWit.runTo('y', 430, 450, 3);
        femaleWit.runTo('y', 460, 450, 3, () => {
            judeAnton[87].run();
        });
    }),
    speak(false, 'Ilya', ['Oh. I forgot to mention.', 'I may have invited a couple of friends', 'along the way.'], () => {judeAnton[88].run();}),
    speak(false, 'Ephyra', ['But you said you wanted to help Anton.', 'To make up for your actions.', 'You said--'], () => {judeAnton[89].run();}),
    speak(true, 'Anton', ['He lied to you, Ephyra.', 'All he does is lie.'], () => {judeAnton[90].run();}),
    speak(false, 'Ilya', ['I do a little more than just that.', 'Get them.'], () => {
        maleWit.runTo('y', 380, 200, 3, () => {
            setTimeout(function () {
                judeAnton[91].run();
            }, 500);            
        });
    }),
    speak(false, 'Ephyra', ['Allies. What happened to allies?'], () => {judeAnton[92].run();}),
    speak(false, 'Ilya', ['You made a good ally.', 'But you will make an even better prisoner.'], () => {judeAnton[93].run();}),
    speak(false, 'Ephyra', ["I should've killed you while I had the", 'chance. I am truly sorry Anton.', 'I have to go find Beru.'], () => {
        ephyra.runTo('y', -48, 1200, 3, () => {
            ephyra.hide();
            judeAnton[94].run();
        });
    }),
    speak(false, 'Ilya', ["Anton, I would say I'm sorry, but..", "I'm not."], () => {
        changePlayer('Hassan', () => {
            player.source = sprites.hassan;
            changeScene(backgrounds.lethiaHouse, lethiaHouse);
            player.x = 610;
            player.y = 490;
            direction = 2;
        }, () => {
            hassanLethiaPart1[6].run();
        })
    }),
    speak(true, 'Anton', ['When I said we would be on a ship soon,', "I didn't imagine it like this."], () => {judeAnton[96].run();}),
    speak(false, 'Jude', ["I'm--", "I'm sorry Anton. I failed to protect you.", "I failed to protect the Last Prophet."], () => {judeAnton[97].run();}),
    speak(true, 'Anton', ["I should've seen this coming. Ilya", 'is nothing but evil. I let my guard down slightly,', 'and this is what I get.'], () => {
        playChangeText.hide();
        playerChange.animations.show.run(() => {
            changeScene(backgrounds.nazirahCell, nazirahCell);
            player.x = 175;
            player.y = 370;
            playerChange.animations.hide.run(() => {
                playChangeText.show();
                ilyaComp.x = 595;
                ilyaComp.y = 85;
                ilya.group = nazirahCell;
                ilya.runTo('y', 100, 600, 0, () => {
                    ilyaAnton[18].run();
                });
            });
        });
    }),
    speak(true, 'Jude', ['Anton!'], () => {
        playerRunTo('x', 419, 1500, 1, () => {playerRunTo('y', 510, 800, 0, () => {
            judeAnton[99].run();
        })});
    }),
    speak(false, 'Ilya', ["I didn't think I'd ever see your", 'face again. I assume you heard the news', 'about your proclaimed Last Prophet. Must', 'be heartbreaking.'], () => {judeAnton[100].run();}),
    speak(true, 'Jude', ['I was mistaken once, but I know now,', 'the Last Prophet is in the water next', 'to you. You are never going to hurt him', 'again. Anton, we need to go.'], () => {judeAnton[101].run();}),
    speak(false, 'Ilya', ['I told you.', "You can't run from this anymore. You can't", 'run from what is inside your own head.'], () => {judeAnton[102].run();}),
    speak(true, 'Jude', ['You are my priority now Anton.', 'I will protect you at all costs.'], () => {
        playerRunTo('y', -48, 1200, 3, () => {});
        anton.runTo('x', 419, 500, 1, () => {anton.runTo('y', -48, 1200, 3, () => {
            hassan.hide();
            changePlayer('Hassan', () => {
                player.source = sprites.hassan;
                changeScene(backgrounds.nearLight, nearLight);
                player.x = 600;
                player.y = 392;
                khepriComp.x = 660;
                khepriComp.y = 150;
                khepri.group = nearLight;
                khepri.show();
                khepri.runTo('y', 180, 200, 0, () => {
                    hassanKhepri[15].run();
                })
            });
        })})
    })
];

var ilyaAnton = [
    speak(false, 'Ilya', ['Brother! It has been too long'], () => {ilyaAnton[1].run();}),
    speak(true, 'Anton', ['Not long enough. Why were you looking', 'for me?'], () => {ilyaAnton[2].run();}),
    speak(false, 'Ilya', ['I wanted to make sure you were safe.'], () => {ilyaAnton[3].run();}),
    speak(true, 'Anton', ['Safe? You have never cared about that.', 'I have not forgotten what you tried to do', 'to me'], () => {ilyaAnton[4].run();}),
    speak(false, 'Ilya', ["I've changed.", 'I look back at the vicious, rage-filled', 'creature who hurt you, and I not longer recognize him.', 'All I have wanted since you left was to find you and', 'tell you how sorry I am for the things I did.'], () => {ilyaAnton[5].run();}),
    speak(true, 'Anton', ['The things you did..', 'You tortured me. You said you would kill me.'], () => {ilyaAnton[6].run();}),
    speak(false, 'Ilya', ['I cannot excuse what I did, but you know that', 'I suffered too. You do not know how it felt', 'to be the unwanted son. To live in the', 'shadow of the Graced, Chosed son.'], () => {ilyaAnton[7].run();}),
    speak(true, 'Anton', ['I never wanted to be that. Every night,', 'I wished that someone would take my grace away. So', 'you would stop hating me.'], () => {ilyaAnton[8].run();}),
    speak(true, 'Anton', ['But do NOT tell me you want to apologize now.', "Don't tell me that you've changed. Don't tell me", 'you can ever, ever escape the things you did to me.', 'Because I cannot.'], () => {ilyaAnton[9].run();}),
    speak(false, 'Ilya', ['Anton, I know I was cruel. I hurt you.', 'I wanted you to suffer. But the things I said to you,', 'that I threatened you. I would never have killed you.', 'Never'], () => {ilyaAnton[10].run();}),
    speak(true, 'Anton', ['LIAR', 'You tried to drown me! You led me', 'to that frozen lake, and when the ice broke', 'you held me under.'], () => {ilyaAnton[11].run();}),
    speak(false, 'Ilya', ['Is that what you think happened? That day,', 'on the lake, I SAVED you. You fell in, and', 'I dragged you from the freezing water. Your skin was so blue.', 'At that moment I realized I needed to protect you.', 'To be the brother I should have been from the start.', 'But you left before I had the chance.'], () => {ilyaAnton[12].run();}),
    speak(true, 'Anton', ['STOP', 'STOP LYING'], () => {ilyaAnton[13].run();}),
    speak(false, 'Ilya', ["I'm not lying, Anton"], () => {ilyaAnton[14].run();}),
    speak(true, 'Anton', ['STOP', 'STOP', 'STOP'], () => {ilyaAnton[16].run();}),
    speak(false, 'Ilya', ['Oh, Anton.', "You still don't know what you're running from do you?"], () => {ilyaAnton[16].run();}),
    speak(false, 'Ilya', ["Who's there??"], () => {
        ephyra.show();
        ephyra.runTo('y', 200, 300, 0, () => {setTimeout(function () {console.log('whyu'); ilyaAnton[17].run();}, 1000)});//Idk why I need a delay lolol
    }),
    speak(false, 'Ephyra', ['A deal is a deal. Just say the word.'], () => {
        paladin[1].run();
    }),
    speak(false, 'Ilya', ['Anton.'], () => {
        ilya.runTo('x', 175, 1000, 1, () => {
            ilya.runTo('y', 220, 800, 0, () => {
                ilyaAnton[19].run();
            });
        });
    }),
    speak(false, 'Ilya', ["I think you'll agree these accomodations exceed", 'the ones in Pallas Athos.'], () => {ilyaAnton[20].run();}),
    speak(true, 'Anton', ['I guess in Herat they like to comfort their', 'lambs before they slaughter them.'], () => {ilyaAnton[21].run();}),
    speak(false, 'Ilya', ['A lamb? Is that what you think you are?'], () => {ilyaAnton[22].run();}),
    speak(false, 'Ilya', ['So tell me, Anton. How are you', 'finding Nazirah?'], () => {ilyaAnton[23].run();}),
    speak(true, 'Anton', ["Well, I'm being held prisoner by the person I despise", 'more than anyone else in the world, so', "I can't say it's recommended itself to me."], () => {ilyaAnton[24].run();}),
    speak(false, 'Ilya', ['I suppose it was to much to hope that you might', 'have learned some manners since we were children.'], () => {ilyaAnton[25].run();}),
    speak(true, 'Anton', ['Oh, I did. I just must have missed the lesson', 'where they teach you to be polite to murderous older', 'brothers.'], () => {ilyaAnton[26].run();}),
    speak(false, 'Ilya', ["Murderous? I'm not sure that's fair. I know what", 'you think happened that day on the lake, but', "I'm afraid your mind has played tricks on you."], () => {ilyaAnton[27].run();}),
    speak(true, 'Anton', ["I know what I remember. You hid it so well from", 'Grandmother and Father, but we both know what you', 'really were like. What you really did.'], () => {ilyaAnton[28].run();}),
    speak(false, 'Ilya', ["I don't deny that I hurt you when we were young.", "I'm sorry for that. I was stupid back then. Jealous,", 'inconsolable.'], () => {ilyaAnton[29].run();}),
    speak(true, 'Anton', ['Psychotic.'], () => {ilyaAnton[30].run();}),
    speak(false, 'Ilya', ["That's all in the past."], () => {ilyaAnton[31].run();}),
    speak(true, 'Anton', ['Then let me go. Let me go, and just stay away from me.'], () => {ilyaAnton[32].run();}),
    speak(false, 'Ilya', ["I can't do that. Not now that I finally see what", 'Father and Grandmother tried so hard to teach me.', 'What they told me over and over, until I could', 'barely stand it anymore.'], () => {ilyaAnton[33].run();}),
    speak(false, 'Ilya', ['They were right. You are special, Anton.', "They didn't even realize how much. They thought you", 'you were the chosen heir of the dead, raving king,', "but you're more than that."], () => {ilyaAnton[34].run();}),
    speak(false, 'Ilya', ['Brother, it is time to go.'], () => {
        playChangeText.hide();
        playerChange.animations.show.run(() => {
            changeScene(backgrounds.nearLight, nearLight);
            lethiaComp.x = 730;
            lethiaComp.y = 355;
            lethia.group = nearLight;
            player.x = 625;
            player.y = 175;
            direction = 0;
            ilyaComp.x = 689;
            ilyaComp.y = 175;
            ilya.group = nearLight;
            playerChange.animations.hide.run(() => {
                playChangeText.show();
                ilyaAnton[35].run();
            });
        });
        
    }),
    speak(false, 'Ilya', ['Lady Lethia, I trust your journey from', 'Pallas Athos was tolerable.'], () => {ilyaAnton[36].run();}),
    speak(false, 'Lethia', ['Is this him?'], () => {ilyaAnton[37].run();}),
    speak(false, 'Ilya', ['It is.'], () => {ilyaAnton[38].run();}),
    speak(false, 'Lethia', ['The Hierophant may believe your word, but', 'my own confidence in you is waning.', 'Last we spoke, you said you would deliver the', 'Pale Hand along with this boy. Yet you let her', 'slip through your hands. Thanks to your', "carelessness, I'll have to expend more valuable resources", 'finding her again.'], () => {ilyaAnton[39].run();}),
    speak(false, 'Ilya', ['There was a complication. She escaped, and she', "would've have killed the Witnesses you sent", 'with me.'], () => {ilyaAnton[40].run();}),
    speak(false, 'Lethia', ["You'd better be sure about him. We can't", 'afford another mistake.'], () => {ilyaAnton[41].run();}),
    speak(false, 'Ilya', ["I'm sure."], () => {ilyaAnton[42].run();}),
    speak(false, 'Lethia', ["I suppose we'll find out soon enough. You did", 'well in delivering the Keeper, at least.'], () => {ilyaAnton[43].run();}),
    speak(false, 'Ilya', ["It was mere luck they were together."], () => {ilyaAnton[44].run();}),
    speak(false, 'Lethia', ["The prophets would've called it fate."], () => {ilyaAnton[45].run();}),
    speak(false, 'Ilya', ['Then fate is on our side.'], () => {ilyaAnton[46].run();}),
    speak(false, 'Lethia', ['Of that, we can be sure.', "But your job isn't over yet. Find the answers", 'we seek. If the Hierophant is satisfied,', 'then we all get what we want. I will', 'have Nazirah, the Hierophant will have his reckoning,', 'and you will have your place at his side secured.'], () => {ilyaAnton[47].run();}),
    speak(false, 'Ilya', ['It will be done.'], () => {ilyaAnton[48].run();}),
    speak(false, 'Lethia', ["Now, if you'd be so kind, I have other", 'business to attend to. My nephew Hassan will be', 'arriving in Nazirah soon, and I must prepare', 'his welcome.'], () => {
        changePlayer('Hassan', () => {
            player.source = sprites.hassan;
            changeScene(backgrounds.shore, shore);
            ilya.hide();
            player.x = 383;
            player.y = 392;
            direction = 3;
            maleWitComp.x = 383;
            maleWitComp.y = 107;
            maleWit.direction = 0;
            maleWit.group = shore;
        }, () => {
            hassanLethiaPart1[12].run();
        });
    }),
    speak(false, 'Ilya', ['Nazirah is really quite the impressive city.', 'The very first rulers had the Grace of Mind,', 'and they used their abilities to build their capital', 'city into a technological marvel.'], () => {ilyaAnton[50].run()}),
    speak(true, 'Anton', ['I thought you were supposed to hate the Graced'], () => {ilyaAnton[51].run()}),
    speak(false, 'Ilya', ['Should I discount the ingenuity of my enemies', 'simply because I seek to best them?'], () => {ilyaAnton[52].run()}),
    speak(true, 'Anton', ['What am I doing here Ilya?'], () => {ilyaAnton[53].run()}),
    speak(false, 'Ilya', ['In Pallas Athos, you said that I once tried', 'to drown you in the frozen lake where we grew', 'up. Do you want to know the truth about', 'that day?'], () => {ilyaAnton[54].run()}),
    speak(true, 'Anton', ['I know what happened'], () => {ilyaAnton[55].run()}),
    speak(false, 'Ilya', ['I never tried to drown you. I found you', 'outside during the last snow of the season.', 'You stepped onto the frozen lake and the', 'ice broke beneath you. I', 'saved you from the lake.'], () => {ilyaAnton[56].run()}),
    speak(false, 'Ilya', ['You grabbed my arm and looked at me.', 'You begged me to let you drown.'], () => {ilyaAnton[57].run()}),
    speak(true, 'Anton', ["You're lying."], () => {ilyaAnton[58].run()}),
    speak(false, 'Ilya', ['You saw something that day, Anton.', 'It was only later that I realized what', 'it meant. That you are not just the Graced', 'son of a cursed line. You saw something', 'no one has seen in a hundred years.'], () => {ilyaAnton[59].run()}),
    speak(false, 'Ilya', ['You saw the future.', "That's what really happened that day. What you", 'were too afraid to admit to yourself. Now,', 'I want to know something. I want to know what', 'you saw.'], () => {
        ilya.runTo('y', 495, 1000, 0, () => {});
        playerRunTo('y', 545, 1000, 3, () => {
            ilyaAnton[60].run();
        });
    }),
    speak(true, 'Anton', ["Ilya, please, please don't do this.", "Please don't do this to me."], () => {ilyaAnton[61].run()}),
    speak(false, 'Ilya', ["I wish I didn't have to. You've been through", "enough, haven't you?"], () => {ilyaAnton[62].run()}),
    speak(false, 'Ilya', ["You CAN'T tell me, can you?", 'The memory of the lake is a gateway. I', 'figured it out when I saw you in Pallas Athos.', 'The way you reacted when you spoke of it.', 'You went back there. I saw it in your eyes.'], () => {ilyaAnton[63].run()}),
    speak(true, 'Anton', ['Stop.'], () => {ilyaAnton[64].run()}),
    speak(false, 'Ilya', ['You were there, drowning like you did five years', 'ago, trying to escape what you saw in your vision.'], () => {ilyaAnton[65].run()}),
    speak(true, 'Anton', ['Stop.'], () => {ilyaAnton[66].run()}),
    speak(false, 'Ilya', ['I remember what you were like that day.', 'You were in a trance. I could not reach you,', 'no matter how hard I tried. The vision had', "a hold on you, and I couldn't break you out of it."], () => {ilyaAnton[67].run()}),
    speak(true, 'Anton', ['No, not the water again', 'no, no..'], () => {ilyaAnton[68].run()}, true),
    speak(false, 'Ilya', ['What did you see, Anton?', 'What did you see that made you want to die', 'rather than live with it in your head?'], () => {
        changePlayer('Hassan', () => {
            changeScene(backgrounds.nearLight, nearLight);
            player.source = sprites.hassan;
            player.x = 627;
            player.y = 395;
            direction = 2;
            hier.show();
            judeComp.x = 660;
            judeComp.y = 185;
            jude.direction = 0;
            jude.group = nearLight;
            jude.show();
        }, () => {
            jude.runTo('y', 260, 500, 0, () => {});
            hier.runTo('x', 735, 1300, 1, () => {
                hierSpeak[0].run();
            });
        });
    }),
    speak(true, 'Anton', ['Please. Please stop drowning me.'], () => {ilyaAnton[70].run()}),
    speak(false, 'Ilya', ['You want this to stop?', 'Tell me what you saw.'], () => {ilyaAnton[71].run()}),
    speak(true, 'Anton', ["You're going to kill me.", 'I always knew you would.'], () => {ilyaAnton[72].run()}),
    speak(false, 'Ilya', ['Tell me what you saw and this will', 'all be over.'], () => {ilyaAnton[73].run()}),
    speak(true, 'Anton', ["I can't. I don't know what I saw, why I tried to--", 'Why are you doing this?', 'Why do you need to know what I saw?'], () => {ilyaAnton[74].run()}),
    speak(false, 'Ilya', ['Before you begged me to let you drown, you', 'said something else. You said "It is', 'coming. The darkness."'], () => {ilyaAnton[75].run()}),
    speak(false, 'Ilya', ["I didn't know what it meant then. But after", 'I joined the Witnesses, the Hierophant shared with', 'me his most closely kept secret. A secret that few others', 'know. But he trusted me with it.'], () => {ilyaAnton[76].run()}),
    speak(false, 'Ilya', ['Before the Prophets disappeared, they made a', 'final prophecy. A prophecy that predicted the', 'to those who stand against the natural order of', 'the world. A Reckoning that would restore the world', 'to the way it was before the Prophets.'], () => {ilyaAnton[77].run()}),
    speak(false, 'Ilya', ['They called it the Age of Darkness.', "The Prophets didn't know how this knew age", 'would come about. But you do. You saw what they could not.', 'You saw the Reckoning, Anton.', 'You saw it all.'], () => {ilyaAnton[78].run()}),
    speak(true, 'Anton', ['No.', "I don't know about a Reckoning. I don't", 'know anything.'], () => {ilyaAnton[79].run()}),
    speak(false, 'Ilya', ['Anton, you are putting yourself in more', 'pain. Just tell me.'], () => {ilyaAnton[80].run()}),
    speak(true, 'Anton', ['I need to get help somehow.', 'Can I channel my esha, and', 'send a message? I have to try'], () => {ilyaAnton[81].run()}, true),
    speak(true, 'Anton', ['All I feel is darkness.', 'Help. Help me.'], () => {
        changePlayer('Jude', () => {
            changeScene(backgrounds.nearLight, nearLight);
            player.source = sprites.jude;
            player.x = 660;
            player.y = 260;
            hassan.show();
        }, () => {
            hierSpeak[20].run();
        })
    }, true),
];

var hierSpeak = [
    speak(false, 'The Hierophant', ["It's time now you knew the truth."], () => {hierSpeak[1].run()}),
    speak(false, 'Jude', ['The truth?', 'We know what you really are.', 'You are the Deciever.'], () => {hierSpeak[2].run()}),
    speak(false, 'The Hierophant', ['Ah, yes, the Deciever.', 'The first harbinger of our new age, according', 'to the prophecy. You believe it is I?', 'What falsehood have I spoken?'], () => {hierSpeak[3].run()}),
    speak(false, 'Jude', ["You've told your followers lies about the Graced,", 'convincing them to hate us.', "You claim you were once an acolyte, but there's", 'no trace of you at any of the temples.', 'You have slandered the names of the Prophets and', 'led these people all astray.'], () => {hierSpeak[4].run()}),
    speak(false, 'The Hierophant', ['My followers are not the ones who have been', 'lead astray. And I have preached no', 'lies. But there is someone here who has.', 'Someone whose deception has led you all here.'], () => {hierSpeak[5].run()}),
    speak(false, 'Lethia', ['Tell them, Prince Hassan.', 'Or perhaps ... you cannot admit it, even now.', "Perhaps you'd rather these people face the", 'Reckoning without knowing the true reason', 'they are here.'], () => {hierSpeak[6].run()}),
    speak(true, 'Hassan', ["No. I'll tell them."], () => {hierSpeak[7].run()}),
    speak(true, 'Hassan', ['The truth,', 'is that I am not the Prophet.'], () => {hierSpeak[8].run()}),
    speak(false, 'Jude', ['I--', "You're lying."], () => {hierSpeak[9].run()}),
    speak(true, 'Hassan', ['I thought that I was the Prophet.', 'I believed it for much longer than', 'I should have. But my vision was nothing', 'more than a dream. And even when I', 'realized the truth, I let the lie continue.'], () => {hierSpeak[10].run()}),
    speak(true, 'Hassan', ['For that, I--I have no excuse.'], () => {hierSpeak[11].run()}),
    speak(false, 'Jude', ['The day you were born, the sky lit up--'], () => {hierSpeak[12].run()}),
    speak(true, 'Hassan', ['A mere coincidence.'], () => {hierSpeak[13].run()}),
    speak(false, 'Jude', ['But the prophecy of Nazirah,', 'it was undone when the Witnesses took', 'the city.'], () => {hierSpeak[14].run()}),
    speak(false, 'Lethia', ['Wrong.', 'The lighthouse stands, and the Seif line still rules', 'this kingdom. I am the heir of my mother. I', 'am the Queen of Herat.'], () => {hierSpeak[15].run()}),
    speak(false, 'Jude', ['But--', 'the vision. The vision that showed us how', 'how to stop the Age of Darkness.'], () => {hierSpeak[16].run()}),
    speak(true, 'Hassan', ['It was a dream.', 'Nothing more.'], () => {hierSpeak[17].run()}),
    speak(false, 'Jude', ["You're not the Last Prophet.", 'It was never you.'], () => {hierSpeak[18].run()}),
    speak(false, 'The Hierophant', ['He is but a false Prophet.', 'A Deciever.'], () => {hierSpeak[19].run()}),
    speak(false, 'The Hierophant', ['Prince Hassan is the first harbinger of the', 'Age of Darkness.'], () => {
        changePlayer('Anton', () => {
            player.source = sprites.anton;
            changeScene(backgrounds.shore, shore);
            player.x = 650;
            player.y = 545;
            direction = 0;
            ilyaComp.x = 670;
            ilyaComp.y = 510;
        }, () => {
            ilyaAnton[69].run();
        })
    }),
    speak(false, 'The Hierophant', ['Retribution is here.', 'Jude Weatherborne, you will be the first', 'to face the Reckoning.', 'Lethia, let us prepare the godfire and', 'cleanse the earth.'], () => {
        hier.runTo('x', 1135, 1000, 2, () => {});
        lethia.runTo('x', 1135, 1000, 2, () => {
            hier.hide();
            lethia.hide();
            setTimeout(() => {
                hierSpeak[21].run();
            }, 1000);
        });
    }),
    speak(false, '???', ['Help. Help me.'], () => {hierSpeak[22].run();}, true),
    speak(true, 'Jude', ['What and who is this?', 'I recognize this esha. It is special.', 'This is the esha of the Last Prophet.', 'I must save them!'], () => {
        goal14.complete();
        cts = false;
        anton.show();
        jude.hide();
    }, true),
];

/*
        mOrder.hide();
        mOrder.group = pallasCell;
        mOrderComp.x = 535;
        mOrderComp.y = 10;
        mOrder.show();
        mOrder.runTo('y', 220, 300, 0, () => {mOrder.runTo('x', 280, 600, 1, () => {mOrder.direction = 0; hector[1].run();})});
*/
/*
        changeScene(backgrounds.double, double);
        player.x = 293;
        player.y = 212;
        direction = 1;/
        mOrderComp.x = 240;
        mOrderComp.y = 212;
        mOrder.direction = 2;
//////////////////////////////////////////////////////
        changePlayer('Hassan', () => {
            player.source = sprites.hassan;
            changeScene(backgrounds.lethiaHouse, lethiaHouse);
            player.x = 1240;
            player.y = 100;
        }, () => {
            playChangeText.hide();
            playerChange.animations.show.run(() => {
                hassanDream[0].run();
            });
            
        });
        */

var hector = [
    speak(false, 'Paladin', ['What are you doing here in Pallas Athos?'], () => {extra[10].run();}),
    speak(false, 'Hector', ['Hello, my name is Hector Navarro.', "I've been searching for the Pale Hand for a", 'very long time.'], () => {extra[27].run();}),
    speak(false, 'Hector', ['Bring me to the sister of the Pale Hand'], () => {
        mOrder.runTo('x', 293, 100, 2, () => {mOrder.group = antonStreet; beru.group = antonStreet; goal10.complete(); cts = false;});
    }),
    speak(false, 'Hector', ['It is you! You are a revenant!! You are an act', 'against nature! You are the reason my family is dead!'], () => {
        jude.show();
        judeComp.x = 20;
        judeComp.y = 300;
        beru.runTo('x', 724, 800, 2, () => {jude.runTo('x', 330, 600, 2); beru.runTo('y', 660, 1400, 0, () => {
            hector[4].run();
        })});
    }),
    speak(false, 'Jude', ['Hector stop! As your leader I command you to stop.'], () => {
        mOrder.runTo('x', 330, 400, 1, () => {jude.runTo('x', 150, 100, 2, () => {setTimeout(() => {mOrder.runTo('x', 724, 1000, 2, () => {mOrder.runTo('y', 660, 700, 0, () => {goal11.complete(); cts = false;})})}, 500)})});
    })
];

var gambleSpeak = [
    speak(false, 'Healer', ["Hi! I'm a healer in Pallas Athos.", "I'm available all hours of the day and", 'I use my Grace of Blood to channel esha', 'and heal people!']),
    speak(false, 'Healer', ['Wow your friend the Paladin has taken a beating.', "Don't worry though! I can get him back to 100%", 'By tomorrow morning! It will cost you 80 virtues'], () => {gambleSpeak[2].run();}),
    speak(true, 'Anton', ["80 VIRTUES?!", '60 virtues is more fair.'], () => {gambleSpeak[3].run();}),
    speak(false, 'Healer', ["75. Do we have a deal?"], () => {gambleSpeak[4].run();}),
    speak(true, 'Anton', ['Fine'], () => {gambleSpeak[5].run();}),
    speak(false, 'Healer', ['Good. Maybe you can waste your night', 'gambling with my husband.', "Just be warned. He's very competitive"], () => {healer.important = false; captain.important = true; goal12.complete(); healer.hide(); cts = false;}),
    speak(false, 'Ship Captain', ["Hi there. I'm the captain of the", 'Black Comorant. I also love to play rock', 'paper scissors. Yay gambling!']),
    speak(false, 'Ship Captain', ['While your friend is being healed by my', 'husband, maybe you would care for a game of..'], () => {gambleSpeak[8].run()}),
    speak(false, 'Ship Captain', ['Rock Paper Scissors?', "It's no fun without a wager however..."], () => {gambleSpeak[9].run()}),
    speak(true, 'Anton', ['What can you wager?'], () => {gambleSpeak[10].run()}),
    speak(false, 'Ship Captain', ['A little birdie told me that there was', 'a revenant in town. You and the Paladin', 'were seen with her. I have been told she', 'is going to Tel Amot, her home.'], () => {gambleSpeak[11].run()}),
    speak(false, 'Ship Captain', ['If you defeat me, I can provide you safe passage', 'to there. Of course you need to wager', 'something of your own.'], () => {gambleSpeak[12].run()}),
    speak(true, 'Anton', ['My friend the Paladin has a sword, I can', 'wager that.'], () => {gambleSpeak[13].run()}),
    speak(false, 'Ship Captain', ['A worthy gamble. Good luck. Best of 3. Here we g--'], () => {
        judeComp.x = 275;
        judeComp.y = 180;
        jude.direction = 0;
        jude.group = courtyard;
        jude.show();
        jude.runTo('y', 200, 500, 0, () => {
            gambleSpeak[14].run();
        });
    }),
    speak(false, 'Jude', ["Hey, where's my sw--"], () => {gambleSpeak[15].run()}),
    speak(false, 'Jude', ['YOU IDIOT WHY DO YOU HAVE MY', 'SWORD.'], () => {gambleSpeak[16].run()}),
    speak(true, 'Anton', ['I was going to give it back'], () => {gambleSpeak[17].run()}),
    speak(false, 'Jude', ['NO YOU ARE WAGERING IT ON A CHILDRENS GAME', 'WHAT IF YOU LOSE?!'], () => {gambleSpeak[18].run()}),
    speak(true, 'Anton', ['Oh Jude.', "I don't lose."], () => {gambleSpeak[19].run()}),
    speak(false, 'Jude', ['It has been passed down for', 'GENERATIONS. If you lose it here,', 'it is over for you. What has your', 'opponent wagered?'], () => {gambleSpeak[20].run()}),
    speak(true, 'Anton', ['Supposedly Hector is chasing Beru', 'to her home of Tel Amot. The captain', 'has provided safe passage to me to there.'], () => {gambleSpeak[21].run()}),
    speak(false, 'Jude', ['Hector? Can you take me too captain?'], () => {gambleSpeak[22].run()}),
    speak(false, 'Ship Captain', ['Yes but you will have to wager', 'something as well.'], () => {gambleSpeak[23].run()}),
    speak(false, 'Jude', ['I have a pure gold ring. I will wager that'], () => {gambleSpeak[24].run()}),
    speak(false, 'Ship Captain', ['There is much on the line. Time to begin.', 'Rock, Paper, Scissors...'], () => {gambleSpeak[25].run()}),
    speak(false, 'Ship Captain', ['ROCK!'], () => {gambleSpeak[26].run()}),
    speak(true, 'Anton', ['SCISSORS!'], () => {gambleSpeak[27].run()}),
    speak(false, 'Jude', ['Anton! You are losing!'], () => {gambleSpeak[28].run()}),
    speak(true, 'Anton', ["Don't worry I got this."], () => {gambleSpeak[29].run()}),
    speak(false, 'Jude', ["Doesn't seem like it.."], () => {gambleSpeak[30].run()}),
    speak(false, 'Ship Captain', ['Haha! I win the first round!', 'Again, Rock, Paper, Scissors...'], () => {gambleSpeak[31].run()}),
    speak(false, 'Ship Captain', ['Paper!'], () => {gambleSpeak[32].run()}),
    speak(true, 'Anton', ['Scissors!'], () => {gambleSpeak[33].run()}),
    speak(false, 'Ship Captain', ['Well played, it is tied 1-1', 'This is for the win, Rock, Paper, Scissors...'], () => {gambleSpeak[34].run()}),
    speak(false, 'Ship Captain', ['Rock!'], () => {gambleSpeak[35].run()}),
    speak(true, 'Anton', ['Rock!'], () => {gambleSpeak[36].run()}),
    speak(false, 'Ship Captain', ['Wow! A tie! Keeping me on my toes here.', 'Hopefully the last time,', 'Rock, Paper, Scissors...'], () => {gambleSpeak[37].run()}),
    speak(false, 'Ship Captain', ['Scissors!'], () => {gambleSpeak[38].run()}),
    speak(true, 'Anton', ['Rock!'], () => {gambleSpeak[39].run()}),
    speak(false, 'Ship Captain', ['How!? How did I lose!? You cheated!', 'I never lose. But we did have a deal.', 'I will bring both of you to Tel Amot.'], () => {
        changePlayer('Hassan', () => {
            player.source = sprites.hassan;
            changeScene(backgrounds.lethiaHouse, lethiaHouse);
            player.x = 704;
            player.y = 178;
            direction = 1;
        }, () => {
            fOrd.show();
            fOrd.runTo('y', 178, 1000, 0, () => {
                paladin[2].run();
            })
        })
    }),

];

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
var goal1 = new Objective(['Speak to Aunt Lethia'], () => {lethia.important = false; jude.hide();});
var goal2 = new Objective(['Go to the Agora']);
var goal3 = new Objective(['Go to the Temple'], () => {tappan.show(); tappan.important = true;});
var goal4 = new Objective(['Meet Mrs. Tappan'], () => {tappan.hide(); theWindow.important = true;});
var goal5 = new Objective(['Escape out the window'], () => {scry.important = true;});
var goal6 = new Objective(['Attempt to scry']);
var goal7 = new Objective(['Make a deal with Ephyra'], () => {scry.important = false;});
var goal8 = new Objective(['Meet at the docks', 'with the Order of the Last Light'], () => {jude.hide(); jude.group = antonStreet});
var goal9 = new Objective(['Go to the Temple to meet Ilya']);
var goal10 = new Objective(['Speak to Aunt Lethia']);
var goal11 = new Objective(['Lead Hector to Beru'], () => {judeOww.run();});
var goal12 = new Objective(['Find Jude a healer']);
var goal13 = new Objective(['Beat the captain at Rock-Paper-Scissors'], () => {captain.important = false;});
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
    changeScene(backgrounds.antonStreet, antonStreet);
    player.y = 500;
    player.x = 1200;
    direction = 1;
}, agora);
var agoraTrigC2= comp(220, 0, {width:96, height:32});
var agoraTrig2 = new Trigger(agoraTrigC2, () => {
    changeScene(backgrounds.temple, temple);
    player.y = 500;
    player.x = 500;
    direction = 3;
    if(currentObjective == 2){
        cts = true;
        hassanWitnesses[0].run();
    } else if(currentObjective == 8){
        cts = true;
        ilya.show();
        ephyra.hide();
        ephyraComp.x = 605;
        ephyraComp.y = 135;
        ephyra.direction = 3;
        ilya.runTo('y', 215, 800, 0, () => {ilyaAnton[0].run();});
    }
}, agora); 

var agoraObC1 = comp(720, 0, {width:16, height:240});
var agoraOb1 = new Obstacle(agoraObC1, agora);

//antonRoom

//courtyard

var courtTrigC1 = comp(662, 625, {width:96, height:32}, {fill:{color:'black'}});
var courtTrig1 = new Trigger(courtTrigC1, () => {
    if(currentObjective == 3) return false;
    changeScene(backgrounds.antonStreet, antonStreet);
    player.y = 70;
    player.x = 748;
    direction = 1;
}, courtyard);

//docks

var docksTrigC1 = comp(370, 0, {width:96, height:32}, {fill:{color:'olivedrab'}});
var docksTrig1 = new Trigger(docksTrigC1, () => {
    if(currentObjective == 5) return false;
    changeScene(backgrounds.antonStreet, antonStreet);
    player.y = 540;
    player.x = 744;
    direction = 3;
}, docks);
//double
var doubleTrigC1 = comp(1334, 170, {width:32, height:96}, {fill:{color:'yellow'}});
var doubleTrig1 = new Trigger(doubleTrigC1, () => {
    changeScene(backgrounds.antonStreet, antonStreet);
    player.y = 304;
    player.x = 64;
    direction = 2;
    if(currentObjective == 7){
        cts = true;
        player.animations.run.stop();
        player.size.sy = 0.1;
        khepri.group = antonStreet;
        khepriComp.x = 700;
        khepriComp.y = 304;
        khepri.runTo('x', 400, 600, 1, () => {
            hassanKhepri[11].run();
        });
    } else if(currentObjective == 10){
        cts = true;
        player.animations.run.stop();
        player.size.sy = 0.1;
        beruComp.x = 500;
        beruComp.y = 300;
        beru.direction = 1;
        mOrderComp.x = 380;
        mOrderComp.y = 300;
        hector[3].run();
    }
}, double);

var doubleTrigC2 = comp(300, 625, {width:96, height:32}, {fill:{color:'yellow'}});
var doubleTrig2 = new Trigger(doubleTrigC2, () => {
    changeScene(backgrounds.lethiaHouse, lethiaHouse);
    player.y = 88;
    player.x = 554;
    direction = 0;
}, double);
//antonStreet

var antStTrigC1 = comp(0, 270, {width:32, height:96}, {fill:{color:'blue'}});
var antStTrig1 = new Trigger(antStTrigC1, () => {
    changeScene(backgrounds.double, double);
    player.y = 200;
    player.x = 1250;
    direction = 1;
}, antonStreet);

var antStTrigC2 = comp(1334, 465, {width:32, height:96}, {fill:{color:'blue'}});
var antStTrig2 = new Trigger(antStTrigC2, () => {
    changeScene(backgrounds.agora, agora);
    player.y = 270;
    player.x = 150;
    direction = 2;
    if(currentObjective == 1){
        surrounding[0].run();
    } else if(currentObjective == 13){
        cts = true;
        khepri.runTo('x', player.x + 64, 750, 1, () => {
            hassanKhepri[12].run();
        });
    }
}, antonStreet);

var antStTrigC3 = comp(710, 0, {width:96, height:32}, {fill:{color:'blue'}});
var antStTrig3 = new Trigger(antStTrigC3, () => {
    changeScene(backgrounds.courtyard, courtyard);
    player.y = 530;
    player.x = 700;
    direction = 3;
}, antonStreet);

var antStTrigC4 = comp(710, 625, {width:96, height:32}, {fill:{color:'blue'}});
var antStTrig4 = new Trigger(antStTrigC4, () => {
    changeScene(backgrounds.docks, docks);
    player.y = 200;
    player.x = 400;
    direction = 0;
}, antonStreet);

//Lethia House
var lhTrigC1 = comp(500, 0, {width:96, height:32}, {fill:{color:'orange'}});
var lhTrig1 = new Trigger(lhTrigC1, () => {
    changeScene(backgrounds.double, double);
    player.y = 572;
    player.x = 338;
    direction = 3;
}, lethiaHouse);

//Temple
var tempTrigC1 = comp(475, 625, {width:96, height:32}, {fill:{color:'salmon'}});
var tempTrig1 = new Trigger(tempTrigC1, () => {
    if(currentObjective == 2 || currentObjective == 8) return false;
    changeScene(backgrounds.agora, agora);
    player.y = 46;
    player.x = 260;
    direction = 1;
}, temple);
//Near lighthouse
var nearTrigC1 = comp(0, 320, {width:32, height:96}, {fill:{color:'purple'}});
var nearTrig1 = new Trigger(nearTrigC1, () => {
    changeScene(backgrounds.shore, shore);
    player.y = 44;
    player.x = 1274;
    direction = 1;
    if(currentObjective == 14){
        cts = true;
        player.animations.run.stop();
        player.size.sy = 0.1;
        judeAnton[98].run();
    }
}, nearLight);

var boomComp = comp(1180, 323, {width:5, height:96},);
var boom = new Trigger(boomComp, () => {
    if(currentObjective == 16){
        hassanKhepri[25].run();
        cts = true;
        player.x -= 30;
    }
}, nearLight);

//Shore
var shoTrigC1 = comp(1334, 32, {width:32, height:96}, {fill:{color:'brown'}});
var shoTrig1 = new Trigger(shoTrigC1, () => {
    if(currentObjective == 13) return false;
    changeScene(backgrounds.nearLight, nearLight);
    player.y = 332;
    player.x = 50;
    direction = 2;
}, shore);

///////////////////NPCs////////////////////
var lethiaComp = comp(700, 500, {width:48, height:48,}, {type:'image', source:sprites.lethia});
var lethia = new NPC(lethiaComp, lethiaComp, 0, () => {
    if(currentObjective == 0){
        player.y = lethiaComp.getY()+lethiaComp.getHeight()+1;
        cts = true;
        direction = 3;
        hassanLethiaPart1[0].run();
    } else if(currentObjective == 9){
        player.y = lethiaComp.getY()+lethiaComp.getHeight()+1;
        cts = true;
        direction = 3;
        hassanLethiaPart1[4].run();
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
    cts = true;
    player.x = tappanComp.getX()+tappanComp.getWidth()+1;
    direction = 1;
    antonTappan[0].run();
}, courtyard); tappan.hide();

var ephyraComp = comp(1100, 200, {width:48, height:48, sWidth:16, sHeight:16}, {type:'image', source:sprites.ephyra});
var ephyra = new NPC(ephyraComp, ephyraComp, 2, () => {}, antonRoom);

var windowComp = comp(900, 60, {height:48, width:48}, {type:'image', source:sprites.window});
var theWindow = new NPC(windowComp, windowComp, 0, () => {
    cts = true;
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
    if(currentObjective != 5 && !scry.important) return false;
    cts = true;
    scry.important = false;
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
    cts = true;
    direction = 2;
    player.x = 951;
    judeAnton[0].run();
}, docks); jude.important = true; jude.hide();

var ilyaComp = comp(615, 135, {width:48, height:48, sWidth:16, sHeight:16}, {type:'image', source:sprites.ilya});
var ilya = new NPC(ilyaComp, ilyaComp, 0, () => {}, temple); ilya.hide();

var healerComp = comp(275, 200, {width:48, height:48, sWidth:16, sHeight:16}, {type:'image', source:sprites.healer})
var healer = new NPC(healerComp, healerComp, 0, () => {
    player.x = 324;
    direction = 1;
    if(currentObjective == 11){
        cts = true;
        gambleSpeak[1].run();
    } else {
        gambleSpeak[0].run();
    }
}, courtyard);

var captainComp = comp(279, 270, {width:48, height:48, sWidth:16, sHeight:16}, {type:'image', source:sprites.captain});
var captain = new NPC(captainComp, captainComp, 0, () => {
    player.x = 180;
    player.y = 270;
    direction = 2;
    if(captain.important == true && currentObjective == 12){
        cts = true;
        gambleSpeak[7].run();
    } else {
        gambleSpeak[6].run();
    }
}, courtyard);

var fOrdComp = comp(535, -20, {width:48, height:48, sWidth:16, sHeight:16}, {type:'image', source:sprites.femaleOrder});
var fOrd = new NPC(fOrdComp, fOrdComp, 0, () => {}, lethiaHouse); fOrd.hide();

var hierComp = comp(1078, 455, {width:48, height:48, sWidth:16, sHeight:16}, {type:'image', source:sprites.hierophant});
var hier = new NPC(hierComp, hierComp, 1, () => {}, nearLight); hier.hide();

var hassanComp = comp(600, 392, {width:48, height:48, sWidth:16, sHeight:16}, {type:'image', source:sprites.hassan});
var hassan = new NPC(hassanComp, hassanComp, 2, () => {}, nearLight); hassan.hide();

var antonComp = comp(650, 545, {width:48, height:48, sWidth:16, sHeight:16}, {type:'image', source:sprites.anton});
var anton = new NPC(antonComp, antonComp, 0, () => {}, shore); anton.hide();

var boxComp = comp(240, 135, {width:64, height:64, sWidth:48, sHeight:48}, {type:'image', source:sprites.boxes});
var boxes = new NPC(boxComp, boxComp, 0, () => {
    if(currentObjective == 15 && boxes.important){
        playChangeText.hide();
        cts = true;
        playerChange.animations.show.run(() => {
            boxes.important = false;
            boxes.hide();
            player.x = 720;
            player.y = 450;
            direction = 3;
            khepriComp.x = 720;
            khepriComp.y = 405;
            khepri.direction = 0;
            playerChange.animations.hide.run(() => {
                hassanKhepri[21].run();
            });
        });
    }
}, nearLight);

var player =  comp(100, 100, {width:48, height:48, sWidth:16, sHeight:16}, {type:'image', source:sprites.hassan});
player.addTextureAnimation("run", [{path:'sy', value:16.1, time:300}, {path:'sy', value:32.1, time:300}]);
player.animations.run.run(); player.animations.run.stop();

var opTopComp = comp(0,-1, {height:1, width:1366});
var opTop = new Obstacle(opTopComp, boundaries);
var opLeftComp = comp(-1, 0, {width:1, height:657});
var opLeft = new Obstacle(opLeftComp, boundaries);
var opRightComp = comp(1366, 0, {width:1, height:657});
var opRight = new Obstacle(opRightComp, boundaries);
var opBotComp = comp(0, 657, {width:1366, height:1});
var opBot = new Obstacle(opBotComp, boundaries);

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

var mainData = {active:false, location:'main', selection:1, move:false};
var mainMenu = group(0, 0);
var mainBack = comp(0, 0, {width:1366, height:657}, {fill:{color:'ivory'}}); mainBack.setGroup(mainMenu);
var mainTitle = comp(683, 100, {font:75}, {type:'text', font:'consolas', text:['There Will Come a Darkness']}); mainTitle.setGroup(mainMenu);
var mainPlay = comp(583, 400, {width:200, height:75}, {fill:{color:'khaki'}, outline:{color:'darkkhaki', draw:true, width:6}}); mainPlay.setGroup(mainMenu);
var mainPlayText = comp(683, 450, {font:45}, {type:'text', font:'consolas', fill:{color:'darkkhaki'}, text:['Play']}); mainPlayText.setGroup(mainMenu);
var mainCred = comp(200, 400, {width:200, height:75}, {fill:{color:'gainsboro'}, outline:{draw:true, color:'silver', width:3}}); mainCred.setGroup(mainMenu);
var mainCredText = comp(300, 450, {font:45}, {type:'text', font:'consolas', fill:{color:'silver'}, text:['Credits']}); mainCredText.setGroup(mainMenu);
var mainInstruct = comp(683, 550, {font:30}, {type:'text', font:'consolas', text:['Use A & D to navigate the menu', 'Press SPACE to select']}); mainInstruct.setGroup(mainMenu);

var playerChange = group(0, 0); playerChange.opacity = 0;
playerChange.addAnimation('show', [{path:'opacity', value: 1}], 800, 'linear');
playerChange.addAnimation('hide', [{path:'opacity', value: 0}], 1000, 'linear');
var playChangeBox = comp(0, 0, {width:1366, height:657}, {fill:{color:'black',}}); playChangeBox.setGroup(playerChange);
var playChangeText = comp(683, 300, {font:75}, {type:'text', font:'consolas', modifiers:'bold', fill:{color:'white'}, text:['Now playing as:', 'Anton']}); playChangeText.setGroup(playerChange);
playChangeText.addAnimation('show', [{path:'opacity', value:1}], 800, 'linear');
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

var credits = group(0, 0); credits.hide();
var credBack = comp(0, 0, {width:1366, height:657}, {fill:{color:'black'}}); credBack.setGroup(credits);
var credInstructions = comp(120, 50, {font:15}, {type:'text', font:'consolas', fill:{color:'white'}, text:['Press SPACE to return to menu']}); credInstructions.setGroup(credits);
var credText = comp(683, 700, {font:40}, {type:'text', font:'consolas', fill:{color:'white'}, text:[
    'Credits:',
    '',
    'Gameplay:',
    'Movement Controls - Seth Parcell',
    'Dialogue Implementation - Seth Parcell',
    'NPCs - Seth Parcell',
    'Animations - Seth Parcell',
    '',
    'Media:',
    'Menu Composition & Design - Seth Parcell',
    'Character Sprites - Seth Parcell',
    'Map Tile Textures - CazWolf',
    'Tile Map Composition - Seth Parcell',
    '',
    'Music:',
    'Bosanska Artiljerija',
    'Artist - Bekrije',
    'MIDI Transcription - onlinesequencer.net,',
    '#1462284',
    'Instrumentation - Seth Parcell',
    '',
    'Final Battle',
    'Artist - WaterFlame',
    'MIDI Transcription - Diabeto',
    'Instrumentation - Seth Parcell',
    '',
    'The Falling Mysts',
    'Artist - Dimrain47',
    'MIDI Transcription - DeathZman',
    'Instrumentation - Seth Parcell',
    '',
    'Characters, story-line, and dialogue',
    'created by Katy Rose Pool for the book',
    'There Will Come a Darkness',
    '',
    'Note: Some elements of the story',
    'were changed from the original to',
    'save time and keep fluidity',
    'in the game. It is recommended to',
    'read the book in addition to',
    'playing the game.'
]});

credText.addAnimation('scroll', [{path:'y', value:-1250}], 75000, 'linear');

var loading = group(0, 0);
var loadBackground = comp(0, 0, {width:1366, height:657}, {fill:{color:'wheat'}}); loadBackground.setGroup(loading);
var loadQuote = comp(683, 300, {font:40}, {type:'text', fill:{color:'tan'}, font:'consolas', text:quote(['In the social jungle of human existence there is no feeling','of being alive without a sense of identity.'], 'Erik Erikson')}); loadQuote.setGroup(loading);
var loadText = comp(683, 600, {font:28}, {type:'text', font:'consolas', text:['Loading...']}); loadText.setGroup(loading);

loading.addAnimation('hide', [{path:'opacity', value:0,}], 1000, 'linear');
var continueYet = false;
function openMainMenu() {
    loadText.text = ['Loading Complete! Click anywhere to continue'];
    continueYet = true;
}
canvas.element.addEventListener('click', () => {
    if(continueYet){
        bosanska.play();
        continueYet = false;
        loading.animations.hide.run(() => {
            loading.hide();
            mainData.active = true;
            mainData.move = true;
        });
    }
})
