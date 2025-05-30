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
/**localhosr address is this that 127.0.0.1 this is also called loop back address so how can we write in your privae ip address */