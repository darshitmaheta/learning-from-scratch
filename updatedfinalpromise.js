const p = new Promise((resolve, reject) => {
    if(true){
        resolve("Promise resolved successfully");
    } else {
        reject("Promise rejected");
    }
});
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())  //                          .then(response =>{
                                      //                                  return response.json()
.then(data => console.log(data))   //                               })         
.catch(error => console.error(error));