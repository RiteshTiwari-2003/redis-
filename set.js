const Redis=require('ioredis');
async function set(){
    let client=null;
    try{
        client=new Redis({"password":"your_password","host":"localhost","port":6379});
        await client.set("name","ritesh");
        await client.set("age",23);
        await client.set("isStudent",true);
        await client.set("subjects","['math','english']");
    }
    catch(e){
        console.log("error while setting");
    }
    finally{
        client.disconnect();
    }
}
set();