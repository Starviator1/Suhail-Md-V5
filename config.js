const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ogemdidavid1@gmail.com"
global.location="Imo, Nigeria"


global.mongodb= process.env.MONGODB_URI || "null"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Dartondave/Suhail-Md-V5";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "`ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻`" 


global.devs = "2347038336733" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347038336733";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_34_01_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDcxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNixcbiAgICAgICAgNTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NSxcbiAgICAgICAgMCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgODYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDg3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIsXG4gICAgICAgIDYsXG4gICAgICAgIDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk4LFxuICAgICAgICA4OCxcbiAgICAgICAgNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MCxcbiAgICAgICAgNjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNixcbiAgICAgICAgOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDcxLFxuICAgICAgICA5OSxcbiAgICAgICAgODcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzAsXG4gICAgICAgIDcxLFxuICAgICAgICA3MixcbiAgICAgICAgODEsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgsXG4gICAgICAgIDc2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDU2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA5NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjEsXG4gICAgICAgIDksXG4gICAgICAgIDI1MixcbiAgICAgICAgODksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJlbThFTU8zL2swSXJ2bHpyS2hHU251RFIzN05sT01XeVA3L2l3SlhEMTBBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpN3U2dHNKLVFwdTRLZXNLNjA1UW9BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhiZWJkNGMzLTEwZDAtNGQ1OS05ZjljLTkxNDM1MjE5NGYwMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MixcbiAgICAgIDI1MyxcbiAgICAgIDE5LFxuICAgICAgMjAsXG4gICAgICAyMzIsXG4gICAgICAxMDYsXG4gICAgICAyNyxcbiAgICAgIDU0LFxuICAgICAgMTM1LFxuICAgICAgMSxcbiAgICAgIDI1MixcbiAgICAgIDc4LFxuICAgICAgMTY5LFxuICAgICAgMTQ2LFxuICAgICAgMTk2LFxuICAgICAgMTg3LFxuICAgICAgMTY0LFxuICAgICAgODMsXG4gICAgICAyMTcsXG4gICAgICAyNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgMTMsXG4gICAgICAxMDQsXG4gICAgICAxMzgsXG4gICAgICAxMjAsXG4gICAgICA2MSxcbiAgICAgIDUwLFxuICAgICAgMTA4LFxuICAgICAgMzcsXG4gICAgICAxNixcbiAgICAgIDI1MyxcbiAgICAgIDE3MCxcbiAgICAgIDE5LFxuICAgICAgMTQ0LFxuICAgICAgMjEzLFxuICAgICAgMjIwLFxuICAgICAgOTksXG4gICAgICAxNTMsXG4gICAgICA5NSxcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4WEJHOTdNMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA1MTA4NzY1NTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQXMgSG93d3cgQ2VudHJhbFwiLFxuICAgIFwibGlkXCI6IFwiMTI3MTAxNTU0NDA1NTU3OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT25ud1VvUXZKL1l2QVlZQkNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyZUx0bkl6bXBDWmxEQ29VclJZNTJ5eDFJRy83NUdNV0krODRGOUhlWWxnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJtVnRUSnk2Q01DeU9XakUzalNpYkdhZ2ltL0k5MmtYQTJrdERnOFFVWm1MbjhNMWhXalk2UHVDR2ZMSVY3NVMva251aVdIZ1BVRTZuREtkQkVHTkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkx0Z0FEenBkdUM4NFhvUzN0MWJqM08zZXRxdzNXWFV0Q1gwV2dPc21RYzU4SGM4NkNzSUw4OE1BUWtScDBuZmRadTF6YU5PR04xSEttZ1B6eUE2d2dnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNTEwODc2NTU6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNzg4NzY3OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVvaVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRW9pLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZThrTjVBQ2F3VFQrUEhKYnpVQWdTbTdDTmxSZWZUUTNlL2pZTk5RbForYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTYyNjc0OTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNzA2NjAxODY2M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • 𝔻𝔸ℝ𝕋𝕆ℕ 𝕋𝔼ℂℍ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝔻𝔸ℝ𝕋𝕆ℕ",
  packname: process.env.PACK_NAME || "𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻",
  botname : process.env.BOT_NAME  || "`𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻`",
  ownername:process.env.OWNER_NAME|| "`𝔻𝔸ℝ𝕋𝕆ℕ`",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝔻𝔸ℝ𝕋𝕆ℕ"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
