setTimeout(function(){
    setInterval(function(){
const pms = new Promise(function(resolve, reject){

        Err = false;
    if (!Err){
        resolve("user = 1 , password = 1234, username = darsh, email = darsh@example.com, age = 25"); 
    }
        reject ('there is an err');
    })
    async function consumepms (){
        try{
        const response = await pms;
        console.log(response);
    } catch (error) {
        console.error(error);
    }
    }
    consumepms();

async function getData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
   console.log(response);

}
getData()


    },1000)

},5000)
