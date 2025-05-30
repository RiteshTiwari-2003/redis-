### what is redis?
you will say caching layer to cache the data people usually prefer redis 
redis is ike in memory database used primarly for caching 
when you trying to download the redis then you are able to know that there is no official supported version for window but with regard to linux 
it's straightforword , if you want to install the radis cache on linux system then whether it is ubuntu or any flavour 
it's just single command sudo apt-get install redis  ,  then redis will be installed 
when you come to mac also there is straight forward command to install redis -- brew install redis 
but when you come to window there is no any official installer to install it , they inform us to go for docke approach 
there is the consept called docker if you install the docker inside the docker then you can install any service so i have choosen docker approach 
so when you are learning about redis then you can choose any of the app any of this approach based on the local installation of operating system 
you can choose any of this approach so this take time first you set up the docker and withinthe docker how to setup redis 

### our focus in this tutorial 
our focus to understand a bit about redis and how to interact with redis and what is the libarary in node js to interact with redis 
what are the operations the main operation we done with redis 

so i am using windows so i have install a rancher desktop when i install this application rancher desktop internally it will install the kubernates install the docker for me , so here in rancher desktop i have install the redis and i am using window then so there is no straightforward approach 
so i have opted for docker docker based installation 

every database follow client and server architecture and redis also folow client and server architecture , so redis you may ask whether it is databse somepeople use it as a datbase but it is not meant for, using it as a primary databse , it is meant for caching data 
if you have siome data if you want to save in temprary storage or memory storage it can be persistent basically cache reading operation in cache is faster than database , so if you have more frequent accessed data you will save it here and when you are trying to readin 
the redis data it will be faster than db. 
now we will going to learn how redis is being used as cache ,so we got to know that redis is one of the populer cache server and for caching we used it 


### client server architecture 
## server program
it follows client server architecture so when we say client server architecture then we need client program and server program 
so i have installed server program bsically when i install it it run as a service this program will become will run sa a process this server program and it is a spacial process as it run 24 7 .and it is configured to port number so it is called as service so this server program we have download it in mongdb case also in postgres case also we downloaded the executable , which installed the server 
for us here ALSO (in server program we using the docker ) how did i install this using the docker we did not worry about docker now 
using docker i have installed this redis 

## client program:
what about client program we installed the mongo db compass whenit comes to mong db as a client program right? graphical client
and when are learning about postgres we installled pg admin as client program which is graphical client program 

so here i am using redis insight ? client program , i have install the redis insight 
so for client program i ahve install redis insight so one of the populer client program similar to pgadmin mysql work branch or for mongodb use mongodb compass  , for redis we use redis insight 

so when i open redis insight it asked to connect to the background runing redis server so we saw when we are interacting with databASE 
if we used to create a connection and in the connection we used to give the username and password simiar to that i have connected locally , caching is ike you canhave only save key and vae pair , there is no conceot of the database there is no concept of table there is no much complexity 
you have some data you are sving it so that you want to frequently access it , you want to frequently access and you are not done any quireis 
it is simple reading and writing 
so like you set the data name 
name: "ritesh" 
and get the data 
name 
so these two operations is the main operation you goiing to do in redis ike this opertion and other than this operation some more operation you are going to do in redis 
like when it comes to cache you did not try to create schema , you are not trying to create schema you are not trying to create tables its simple key value pair you are saving key value pair 

### what is commnd to instsll redis in my local project in nodejs program in vscode:

npm install ioredis 