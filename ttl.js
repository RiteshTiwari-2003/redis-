/**like today i logged in session and you have kept the session open for one day next day when you open then it ask about again relogin
 * because the token which is generated for that session got expire same way when you set any key value pair then you can set the expiry date 
 * for that key after that expiry automatically that key willbe deleted the key will be deleted by server 
 * 
 * 
 */
const Redis=require('ioredis');
async function del(){
    let client=null;
    try{
        client=new Redis({"password":"your_password","host":"localhost","port":6379});
        await client.set("phone","12346587575");
        await client.expire("phone",10);//expire in 10 seconds
    }
    catch(e){
        console.log("error while setting expiry",e);
    }
    finally{
        client.disconnect();
    }

}
del();
/** so when aproject require authentication they will be usinfg redis for session management for session management they have a redis caching layer
 * where in they will be set the tokens this is the real usecase
 * so node js is a javascript runtime envoirment on server */
