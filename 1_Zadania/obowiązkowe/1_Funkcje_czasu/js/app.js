function countHello(num) {
    var counter = 1;
    var intervalId = setInterval(()=>{
        console.log("Hello " + counter);
        if (counter == num) {
            clearInterval(intervalId);
        }
        counter++;
    }, 500);
}

countHello(4);