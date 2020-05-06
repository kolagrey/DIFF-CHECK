const SHA256 = require('crypto-js/sha256');

const generateHash = ({payload}) => {
    try {
        if(!payload) throw new Error('Payload is required');
        return SHA256(JSON.stringify(payload)).toString();
    } catch (error) {
        console.log(error);
    }
   
};

const verifyHash = ({payload, compareHash}) => {
    try {
        if(!payload) throw new Error('Payload is required');
        if(!compareHash) throw new Error('compareHash is required');
        const payloadHash = generateHash({payload});
        if(payloadHash === compareHash){
            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    generateHash,
    verifyHash
};