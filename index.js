const {generateHash, verifyHash} = require('./utils');

const payload = {
    firstname: 'Quanton',
    lastname: 'Lipsync',
    email: 'quanton@lipsync.com'
};

// const payloadHash = generateHash({ payload });
// const result = verifyHash({ payload, compareHash: 'af20a6b7c0fe7353cccf1148e852998ca79614139c70cc1a68987b566f958eed'});
// console.log(result);