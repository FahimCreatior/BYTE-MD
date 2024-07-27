
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Nairobi,Kenya.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "254797633626";
global.owner = process.env.OWNER_NUMBER || "254797992027";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU1NT0N1Rjl6bVp5V21xRjErdjg1NjQvM1JtWEgvc2diR2UwaU10RjhXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlEzZjVuT0VEVnFab2ZBV2ZIRzg0OUNXa25RUTRKTnpLMHNWcjRVVVpoND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRytYb1U4bWJjOEFzSEdxdC81ZjdGOG5Kak9nb3ZHTDVZSU8zbFlJTzNRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoYWZ3WTRjZGRsekJGb3I2RmZNQ3J0N1lFN0QxR09aRFZ2QjlkMHhRR3gwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFIYWVvZUxjNm1LQ0VzRjVWUytCbm5MeEhrdHRGQjdhOWI3dHFLUVhoVlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikl5TmRPdWdFRUszdmE2REhQbDFwak8yd3RMeXNPUnZKNHhUNnc1cGNJV0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUtnVkh4ejlNeVFlRlJNeEdtTWNJMXZkQXAwZTMycU5XcWZHNUEzK0NrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUtMbzAyU28rN284TXB4bjFscVNVZEZsaVFoU2ZTNTVTTTV5YlZYSmN5VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpoWmtSZ3BTM3dKamM3SG56bVRQaGozbE1tZUVnTkZueXdMTjVuOFFSZ1l3T1dXbDd3eXlXSllVcUkwaTF4L3BrUmFWVkxTRGVoYzFXbUpvYzlyMEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIsImFkdlNlY3JldEtleSI6InIwRnNwT1FTbG1NWXdhSWxldUpXT1lNUHVtcFFPWFZBbnlOQkFUb3Focnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0Nzk3NjMzNjI2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjA4QjNCRDNDREUyNEJDRjVGMjUyNENDREJCRTExOUEwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIxMjMwMTd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc5NzYzMzYyNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxNEIxRDk4QkExOUQ2NjIyMUM1NjQ3RjExQzQwQTNFRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMTIzMDE5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFRTdvcm54NFJPLVU2OGtscDNINmtRIiwicGhvbmVJZCI6ImEzMzg3ZmYwLThkNDYtNGZkYy05Y2FhLTMwZjE0ODcyNzI4YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2VVRSbXdYbUNKcVBGb1RzbmNkSHdXVFBXcDg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRE1uemxsNFNiUzlEMEpXQTVaVStjczdLVmY4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjI0VEZTWUFXIiwibWUiOnsiaWQiOiIyNTQ3OTc2MzM2MjY6MjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRGVQQ01hc3RlciJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTk9QcVpZR0VQaUZsclVHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSkJ4dWxmaGthK00zNTljMzhoUVBwWjBIbWR3YXdGMWpmKzh4TEd3bkVIYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiR3BxK0F0aHgxMTVDQy9lRDg4aU5vSVBhWmt0SHBHcDNoZ2o4MUQ4eWtHWjBBMUx3ZlNhYi9mb3NOVHVSTndYdm8ydFZVaG5jQ1JYNVZxZ2hiYzNnQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IjBTVzBkazVSc2JjU29MSmZ5NjRnZTRiWm5VblBQOGNHcUNneW5hRVJaYVlwQ1k5QlprSGR0MmdYcC9Gcm16R1JCVEdJR3BwdzRDY3crR3VpVjJCVEN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0Nzk3NjMzNjI2OjI0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNRY2JwWDRaR3ZqTitmWE4vSVVENldkQjVuY0dzQmRZMy92TVN4c0p4QjMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIxMjMwMTQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRTZ3In0=" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FAHEEM-BOT",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "sk-proj-kUGGDreMNnr3e1dOq1LaT3BlbkFJsZuZDyle9uXm3vev8pz3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
