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
/**lets say jwt tokens when you learning about authentication there si the concept for jwt token how the tokens are saved in cache redis cache 
 * one of the use case real world use case, when after the authentication after login when you login into any system after successful login 
 * during login you need to give the username and password and your backend validate the username and password and it will generate the token
 * if everything is matching ,it will generate the token this token called jwt token and this token shiould be saved in somewhere 
 * this token when backend generate the token after authentication this token is always saved in cache redis cache 
 */