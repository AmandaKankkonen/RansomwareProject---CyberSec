const encrypt = ((val) => {
    let cipher = crypto.createCipheriv('aes-256-ctr', ENC_KEY, IV);
    let encrypted = cipher.update(val, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
});