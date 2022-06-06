
function makeRequest(location){
    return new Promise((resolve,reject)=>{
        console.log(`Making request to ${location}`);
        if(location=='Google')
            resolve('Google says Hi!');
        else
            reject('We can talk only with Google');
    });
}

function processRequest(response){
    return new Promise((resolve,reject)=>{
        console.log('processing response');
        return resolve(`Extra information + ${response}`);
    });
}

async function doWork(location){
    try{
        const response = await makeRequest(location);
        console.log('Response recieved');
        const processReq = await processRequest(response);
        console.log(processReq);
    }catch(reason){
        console.log(reason);
    }
}

// doWork('Google'); // right
doWork('Facebook'); // it triggers error
