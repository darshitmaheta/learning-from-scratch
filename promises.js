const promise = new Promise(function (resolve, reject) {
    setTimeout(function(){
        const success = Math.random() > 0.5;
        
        if (success) {
            resolve("Operation succeeded!");
        } else {
            reject(new Error("Operation failed!"));
        }
    }, 3000)
})

promise
    .then(msg => console.log(msg))
    .catch(error => console.log("Error:", error.message))