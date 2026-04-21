const promise = new Promise(function(resolve, reject){
           
    console.log("Promise is created");

    setTimeout(function(){

        let error = false;
        if(!error){
             resolve({username:"darsh",email:"darsh@gmail.com",age:25});
        }else{
            reject("error: something went wrong");
        }
    },3000)
    
})
promise
.then((user)=> {
    console.log(user);
    return user.username;
})

.then((username) =>{
    console.log(username);
})

.catch((error) => {
    console.log(error);

})
.finally( () => {
    console.log("Promise is either resolved or rejected");
}); 
    console.log("Promise is either resolved or rejected");
