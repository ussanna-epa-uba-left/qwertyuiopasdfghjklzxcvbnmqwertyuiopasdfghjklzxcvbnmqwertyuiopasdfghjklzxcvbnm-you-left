/*Coded by Nico*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const GM = "It sends random english proverbs"
const GN = "It sends random english proverbs"
const Config = require('../config');



if (Config.WORKTYPE == 'private') {
Asena.addCommand({pattern: 'prob1', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] = "An apple a day keeps the docktor away";
    r_text[2] ="Absence makes the heart grow fonder";
    r_text[3] ="Beauty is but skin deep";
    r_text[4] ="Blood is thicker than water";
    r_text[5] ="Everybody's business is nobody's business";
    r_text[6] ="Birds of festher flock together";
    r_text[7] ="A bird in the hand is worth two in the brush";
  

    var i = Math.floor(8*Math.random())

    await message.client.sendMessage(
        message.jid,(r_text[i]), MessageType.text);

    }));


Asena.addCommand({pattern: 'prob2', fromMe: true, deleteCommand: true, desc: GN,}, (async (message, match) => {

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
        Asena.addCommand({pattern: 'prob1', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {
        
            var r_text = new Array ();
        
            r_text[1] = "An apple a day keeps the docktor away";
            r_text[2] ="Absence makes the heart grow fonder";
            r_text[3] ="Beauty is but skin deep";
            r_text[4] ="Blood is thicker than water";
            r_text[5] ="Everybody's business is nobody's business";
            r_text[6] ="Birds of festher flock together";
            r_text[7] ="A bird in the hand is worth two in the brush";
          
        
            var i = Math.floor(8*Math.random())
        
            await message.client.sendMessage(
                message.jid,(r_text[i]), MessageType.text);
        
            }));
        
        
        Asena.addCommand({pattern: 'prob2', fromMe: false, deleteCommand: true, desc: GN,}, (async (message, match) => {
        
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
                Asena.addCommand({pattern: 'prob1', fromMe: true, deleteCommand: true,dontAddCommandList: true }, (async (message, match) => {
        
                    var r_text = new Array ();
                
                    r_text[1] = "An apple a day keeps the docktor away";
                    r_text[2] ="Absence makes the heart grow fonder";
                    r_text[3] ="Beauty is but skin deep";
                    r_text[4] ="Blood is thicker than water";
                    r_text[5] ="Everybody's business is nobody's business";
                    r_text[6] ="Birds of festher flock together";
                    r_text[7] ="A bird in the hand is worth two in the brush";
                  
                
                    var i = Math.floor(8*Math.random())
                
                    await message.client.sendMessage(
                        message.jid,(r_text[i]), MessageType.text);
                
                    }));
                
                
                Asena.addCommand({pattern: 'prob2', fromMe: true, deleteCommand: true,dontAddCommandList: true }, (async (message, match) => {
                
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
