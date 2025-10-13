// Task 1 //
function mySetTimeout(delay) {
  return new Promise((resolve, reject) => {
    if (typeof delay !== "number") {
      reject("Error");
    }

    if (delay < 0) {
      reject("Error");
    }

    setTimeout(() => {
      resolve(`${delay} milliseconds`);
    }, delay);
  });
}

mySetTimeout(2000)
  .then(message => console.log(message))    
  .catch(error => console.error(error));   


// Task 2.1 then/catch //
function makeToys(time) {
  return mySetTimeout(time)
    .then((message) => console.log("2.1 toys were made in "+message))    
}

function deliverToys(time) {
  return mySetTimeout(time)
    .then((message) => console.log("2.1 toys weere delivered in "+message))    
}

function sellToys(time) {
  return mySetTimeout(time)
  .then((message) => console.log("2.1 toys sold in "+message))    
}

makeToys(3000)
  .then(() => deliverToys(2000))
  .then(() => sellToys(1000))
  .catch(error => console.error("2.1 Error:", error));


// Task 2.2 async/await
async function toyShop() {
  try {
    await mySetTimeout(3000);
    console.log("2.2 toys were made");

    await mySetTimeout(2000);
    console.log("2.2 toys weere delivered");

    await mySetTimeout(1000);
    console.log("2.2 toys sold");

  } catch (error) {
    console.error("2.2 error", error);
  }
}
// async/await and promise starats working at the same time
toyShop();
