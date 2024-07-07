//Nteej code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkJXc2oraWtnZTB5bzYxMUZDQ2wyQ29GeHY2QlhXTHR0OFRHaVN1RXAwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOU5oZyt6cFM5bTRnSFVqL3Vrc1dnUjNGdmFTcUxqSmtHc2kvakVTUGNpWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSmh4Q2tvMEROVUlLQllQdHRWY3NlNERHQWVpMlEzQXFNUlV1VDQwa0dRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJycjBtQlVKZXM1dVc3VExLK2hkOEpMWU00K2ZHZVhraklFMWVCS1JvUzNFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNQaWZHZm1PZ2JwRFN3cWdsU2tEUWlDY2FpeFZuYXJJQ3VMR2dPaU1NMkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJQUFNCTWRiZUVsNHd1c1UzUWV1OHBiLzdyaUV4UHZEcGhqMVBqeklGVFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0R6VmRob0ZCZWltUzBxMjhTak5hNGZ4bjNNNXp1bUh6QmdlVlRsY3hIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3hjT0NsbG55QmkxN0N4RzB1ayszRXNkNnp5Z2o3S29KU2tGb1hSSlNoUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9MZHpsemtyRkIvdStKWHcyYlZybVJJdDl4aTg5Z0NJZHN2amlPNmthUHhvNnZ5dW5aRkFlMmhLYmg5TmV5aVFPM1ptdWdaUUJnQlZzSWJUNVZ5WkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI0LCJhZHZTZWNyZXRLZXkiOiJFZ29mdGEzVkYxbWdWOEN5TUlGM01jVDZZUDB3SDlWYkNzaDJVNFVmc3UwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc5ODUxNTA1MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDQjM5QTQyRjYxNDcyQUQ5Qjc0N0I2QkNEQTNBNUM3QiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMzY4MDA5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPNWIyQ0lRcFJFaVc2WFhSbm51UnlnIiwicGhvbmVJZCI6IjQ2NmRhMDc2LTlmMTEtNDNjYi1hZTQ3LWZjZTQwNDE5YjQ2ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDNmEyenJaUTZhMnBGdWdEN1RzZjVyWElXQ0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ3NQRm1idWxBMS9pdFIvRTh3aDVDTjRwdFNRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpTV0E2QURIIiwibWUiOnsiaWQiOiIyNTQ3OTg1MTUwNTI6MjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiflByaW5jZSByb2NreSB3cnkgLMK/wr8/PyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGlKcWRnSEVQWDJxclFHR0M0Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidnJ6SnN6MjY1cG4zYWtSUmpPaDFFMGVwQkE2VHF4SXpTQVo3anF1bXJROD0iLCJhY2NvdW50U2lnbmF0dXJlIjoidTRySXNGbVA1OVZpZmtaNTZCOXZEdHhRdUhPSTREL0FYRjZDSUJzRFNEYkFldkN1S1hVTlo5Z01uVkhZRXRpNHZkcXlLejVOcng0L0dKS3NOa2I3QkE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik03eVAzbFBUVEVhZXFaWFdMVzNjL3Q0MnhlK0l1U2RsaTVQRlh2MitkeitlN3ZoM0xER2JJRjFvRVRUK3JwbEVqTjdvOVhSbzZ1RTJGdjJuaDJPRURnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0Nzk4NTE1MDUyOjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmI2OHliTTl1dWFaOTJwRVVZem9kUk5IcVFRT2s2c1NNMGdHZTQ2cnBxMFAifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAzNjgwMDMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQStIIn0=";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "263714497545";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "'",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NTEEJ-MD`",
  author: process.env.PACK_AUTHER || "NTEEJ-MD",
  packname: process.env.PACK_NAME || "NTEEJ-MD",
  botname: process.env.BOT_NAME || "NTEEJ-MD",
  ownername: process.env.OWNER_NAME || "Nteej",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Ntee-j01/NTEEJ-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vae3GZF9Bb658QgSCl1I";
global.website = process.env.GURL || "https://chat.whatsapp.com/Er6RNNNVWV5LORN9Nr6hL7";
global.devs = "263714497545";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
