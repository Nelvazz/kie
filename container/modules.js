global.path = __dirname.replaceAll("\\", "/").replace("/container", "/");
global.dataPath = path+'data/';
global.jsonsPath = path+'data/jsons/';
global.containerPath = path+'container/';

global.sleep = async function (seconds) {
    await new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
