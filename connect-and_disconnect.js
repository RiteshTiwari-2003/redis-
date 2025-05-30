const Redis=require('ioredis');
async function connectCache(){
    let client=null;
    try{
        client=new Redis({"password":"your_password","host":"localhost","port":6379});
        console.log("connected to redis");
    }
    catch(e){
        console.log("error connecting to redis",e);
    }
    finally{
        client.disconnect();
    }
}
connectCache();