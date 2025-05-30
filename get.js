const Redis=require('ioredis');
async function get(){
    let client=null;
    try{
        client=new Redis({"password":"your_password","host":"localhost","port":6387});
        const name=await client.get("name");
        const age=await client.get("age");
        const isStudent=await client.get("isStudent");
        const subjects=await client.get("subjects");
        console.log(name,age,isStudent,subjects);
    }
    catch(e){
        console.log("error while getting",e);
    }
    finally{
        client.disconnect();
    }
}
get();