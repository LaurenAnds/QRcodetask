var QRCode = require('qrcode')

let channelNames = ["codeorg",
"CoderbyteDevelopers",
"Codesmith",
"craigndave",
"decomplexify",
"Fireship",
"freecodecamp",
"funfunfunction",
"KevinPowell",
"NetNinja",
"TraversyMedia",
"WesBos"]

function codeToFile(ytLink, chName){
QRCode.toFile(`src/outputImages/QRcode_` + chName + '.png', ytLink, {
    color: {
      dark: '#FFF',  // Blue dots
      light: '#0000' // Transparent background
    }
  }, function (err) {
    if (err) throw err
    console.log('done')
  })
  console.log(ytLink)
};

  //links 
  const youtubeLinks = [
    "https://www.youtube.com/@codeorg",
    "https://www.youtube.com/@CoderbyteDevelopers",
    "https://www.youtube.com/@Codesmith",
    "https://www.youtube.com/@craigndave",
    "https://www.youtube.com/@decomplexify",
    "https://www.youtube.com/@Fireship",
    "https://www.youtube.com/@freecodecamp",
    "https://www.youtube.com/@funfunfunction",
    "https://www.youtube.com/@KevinPowell",
    "https://www.youtube.com/@NetNinja",
    "https://www.youtube.com/@TraversyMedia",
    "https://www.youtube.com/@WesBos"
]

async function createCode(inputArray){
    let i = 0;
    console.log("Start process");
    for(let element of inputArray){
        let chName = channelNames[i];
        await codeToFile(element, chName);
        i++;
        
    }
}

createCode(youtubeLinks);
