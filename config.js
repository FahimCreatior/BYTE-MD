
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


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0FIdzVJeTNlWDZTUlErb04xdlVIRENTN25tVklGc1huTnBKNW9KTEYwVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2xlc2NtV3pLRWRMZG9ZOUtZNENKSHVrV24vcmFodnBpMHNWRWxGU2FIYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSDJEeFZDM3cycm5QN2FENmE1Mi9SSkw2MzZickVDZnZUZGVZcjRaWVh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhU0VIOUsxd0NjZHpvUDByUDQxYWVJallFbm1nellMRnhrdHFvclUrNUhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtLTWlFRUtNZWs0bVVyU1BQMFo3b0YxQVladHlNS05OWVRaRWtBbUdYMUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZ4c1hFSXRzUjNsUlQwbnFQUjJVN2E3alRXSm8rVitCLzBUYnVubTlrZ2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUtTUERLRitGM0pXR1hNVDhxYnNNOTQ3MUZWTlNNRGZHMjc4WlFCTTZrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYStTblFVRTZMT3JZdDVUWkhEMTkvMzZwMVpZYi85MmRpOEZoZmhtci96OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQwT0hHZnhYTW92T2I2RHdXYWVYeDVBTzgzd1lsbGl4UGVTN29jalI2eDNLRU5JM0F6Z2lOTmw5THZWdTcvbXF4REZUUjhyN012cy9meUE5VEdIeURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDksImFkdlNlY3JldEtleSI6ImlHYWtyZkNlR1lGS1N0ZVpRTWczTFUxNE9Tby9FZFFsUkxHNWxWdUhaVHM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0Nzk3NjMzNjI2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc1QTE0Q0IwMzU3NkZBOTJBRTBDMjM4QTgzNzU1RDc4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE5MTg1MTV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InBUY0tZenVmVFVxVnZ4a2NDS1U4ZkEiLCJwaG9uZUlkIjoiN2RmNmI1MjAtZWU1MS00MmFmLWE1ZTktNGU2M2NhMjAzMjBjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBtdjBFMlhKWmJ6NnNqSmZXVXNEQmM4Nkh4ST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6V1ZLVkF4UVQrU212SmlaUitZM2YxemhpaWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTFEzUEZQM1EiLCJtZSI6eyJpZCI6IjI1NDc5NzYzMzYyNjoyMkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJEZVBDTWFzdGVyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOS1BxWllHRUtISWliVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKQnh1bGZoa2ErTTM1OWMzOGhRUHBaMEhtZHdhd0YxamYrOHhMR3duRUhjPSIsImFjY291bnRTaWduYXR1cmUiOiJxd1JoUVJmS0QydG5wcHh4SWNoNStvb1ltWHp0Nk8yV0dOOFVvNmEvRDIrYjhTV1JleHlNbVJtZUcrRG93b0l4aWF1Z0ZTS01kUDYxZjhNV3JpTGlBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieVN3bWFCZ1BzNmZCbDJ6Vkt3MG1ZbDFRYVl5WmpFM2RWVE1GcmlRbytER2N2ekZEbnJCaGN3MHBsdmk2YzViK2NNUFdPNTFveCt4SHo2b1NNLzNCQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3OTc2MzM2MjY6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU1FjYnBYNFpHdmpOK2ZYTi9JVUQ2V2RCNW5jR3NCZFkzL3ZNU3hzSnhCMyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTkxODUxMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFNncifQ==" //Make sure session id starts with Byte;;;



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
