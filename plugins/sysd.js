/*Coded by Nico*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const GM = "It sends random english proverbs"
const GN = "It sends random english proverbs"
const Config = require('../config');



if (Config.WORKTYPE == 'private') {
Asena.addCommand({pattern: 'pro1', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] = "An apple a day keeps the docktor away";
    r_text[2] ="Absence makes the heart grow fonder";
    r_text[3] ="Beauty is but skin deep";
    r_text[4] ="Blood is thicker than water";
    r_text[5] ="Everybody's business is nobody's business";
    r_text[6] ="Birds of festher flock together";
    r_text[7] ="A bird in the hand is worth two in the brush";
    r_text[8] ="Cleanliness is next to godliness";
    r_text[9] ="Do not count your chicken before they are hatched";
    r_text[10] ="If the cap fits wear it";
    r_text[11] ="Too many cooks spoil the broth";
    r_text[12] ="Cowards die many times before their death";
    r_text[13] ="No cross, no crown";
    r_text[14] ="Let sleeping dog lie";
    r_text[15] ="Barking dorks seldom bite";
    r_text[16] ="Every dog has his day";
    r_text[17] ="Old doges bark not for nothing";
    r_text[18] ="Coming events cast their shadow before";
    r_text[19] ="Example is better than precept";

    var i = Math.floor(20*Math.random())

    await message.client.sendMessage(
        message.jid,(r_text[i]), MessageType.text);

    }));


Asena.addCommand({pattern: 'pro2', fromMe: true, deleteCommand: true, desc: GN,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "The early bird catches the worm";
        r_text[2] ="New brooms sweep clean";
        r_text[3] ="Every dark cloud has a silver linning";
        r_text[4] ="God made the country; man made the town";
        r_text[5] ="Courtesy costs nothing";

      
    
        var i = Math.floor(6*Math.random())
    
        await message.client.sendMessage(
            message.jid,(r_text[i]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        Asena.addCommand({pattern: 'pro1', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {
        
            var r_text = new Array ();
        
            r_text[1] = "An apple a day keeps the docktor away";
            r_text[2] ="Absence makes the heart grow fonder";
            r_text[3] ="Beauty is but skin deep";
            r_text[4] ="Blood is thicker than water";
            r_text[5] ="Everybody's business is nobody's business";
            r_text[6] ="Birds of festher flock together";
            r_text[7] ="A bird in the hand is worth two in the brush";
            r_text[8] ="Cleanliness is next to godliness";
            r_text[9] ="Do not count your chicken before they are hatched";
            r_text[10] ="If the cap fits wear it";
            r_text[11] ="Too many cooks spoil the broth";
            r_text[12] ="Cowards die many times before their death";
            r_text[13] ="No cross, no crown";
            r_text[14] ="Let sleeping dog lie";
            r_text[15] ="Barking dorks seldom bite";
            r_text[16] ="Every dog has his day";
            r_text[17] ="Old doges bark not for nothing";
            r_text[18] ="Coming events cast their shadow before";
            r_text[19] ="Example is better than precept";
          
        
            var i = Math.floor(20*Math.random())
        
            await message.client.sendMessage(
                message.jid,(r_text[i]), MessageType.text);
        
            }));
        
        
        Asena.addCommand({pattern: 'pro2', fromMe: false, deleteCommand: true, desc: GN,}, (async (message, match) => {
        
                var r_text = new Array ();
            
                r_text[1] = "The early bird catches the worm";
                r_text[2] ="New brooms sweep clean";
                r_text[3] ="Every dark cloud has a silver linning";
                r_text[4] ="God made the country; man made the town";
                r_text[5] ="Courtesy costs nothing";
        
              
            
                var i = Math.floor(6*Math.random())
            
                await message.client.sendMessage(
                    message.jid,(r_text[i]), MessageType.text);
            
                }));    
                Asena.addCommand({pattern: 'pro1', fromMe: true, deleteCommand: true,dontAddCommandList: true }, (async (message, match) => {
        
                    var r_text = new Array ();
                
                    r_text[1] = "An apple a day keeps the docktor away";
                    r_text[2] ="Absence makes the heart grow fonder";
                    r_text[3] ="Beauty is but skin deep";
                    r_text[4] ="Blood is thicker than water";
                    r_text[5] ="Everybody's business is nobody's business";
                    r_text[6] ="Birds of festher flock together";
                    r_text[7] ="A bird in the hand is worth two in the brush";
                    r_text[8] ="Cleanliness is next to godliness";
                    r_text[9] ="Do not count your chicken before they are hatched";
                    r_text[10] ="If the cap fits wear it";
                    r_text[11] ="Too many cooks spoil the broth";
                    r_text[12] ="Cowards die many times before their death";
                    r_text[13] ="No cross, no crown";
                    r_text[14] ="Let sleeping dog lie";
                    r_text[15] ="Barking dorks seldom bite";
                    r_text[16] ="Every dog has his day";
                    r_text[17] ="Old doges bark not for nothing";
                    r_text[18] ="Coming events cast their shadow before";
                    r_text[19] ="Example is better than precept";
                  
                
                    var i = Math.floor(20*Math.random())
                
                    await message.client.sendMessage(
                        message.jid,(r_text[i]), MessageType.text);
                
                    }));
                
                
                Asena.addCommand({pattern: 'pro2', fromMe: true, deleteCommand: true,dontAddCommandList: true }, (async (message, match) => {
                
                        var r_text = new Array ();
                    
                        r_text[1] = "The early bird catches the worm";
                        r_text[2] ="New brooms sweep clean";
                        r_text[3] ="Every dark cloud has a silver linning";
                        r_text[4] ="God made the country; man made the town";
                        r_text[5] ="Courtesy costs nothing";
                
                      
                    
                        var i = Math.floor(6*Math.random())
                    
                        await message.client.sendMessage(
                            message.jid,(r_text[i]), MessageType.text);
                    
                        }));
}   
