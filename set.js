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
/**so whatever i said whether it key and value both key and value will be string only internally in radius it is saved as a string it will be 
 * stringify then it will be saved , even when i give 23 it will be saved in the form of string but we dont care when we save something in redis we dont care
 * 
 * we are not much into data types or other things the requirement is when we will save the most frequent accessed the result or data 
 * in the cache we will set it we will get it 
 * if you want to convert into integer you will do it you will be write extra operation inthe node js but setting and getting will be in the form of strig only
 */