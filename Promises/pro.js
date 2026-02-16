const promiseOne= new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Asyns is Completed");
    },10000)
})


promiseOne.then(function() {
    console.log("Promise consumed");
    
})