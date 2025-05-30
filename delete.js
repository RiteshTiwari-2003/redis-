const Redis=require('ioredis');
async function del(){
    let client=null;
    try{
        client=new Redis({"password":"your_password","host":"localhost","port":6379});
        await client.del("name");
        const name=await client.get("name");//null
        console.log(name);
    }
    catch(e){
        console.log("error while deleting",e);
    }
    finally{
        client.disconnect();
    }
}
del();