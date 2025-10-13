// Task 1 //
function mySetTimeout(delay) {
  return new Promise((resolve, reject) => {
    if (typeof delay !== "number") {
      reject("Error: delay must be a number");
    }

    if (delay < 0) {
      reject("Error: delay cannot be negative");
    }

    setTimeout(() => {
      resolve(`Done waiting for ${delay} milliseconds`);
    }, delay);
  });
}

mySetTimeout(2000)
  .then(message => console.log(message))    
  .catch(error => console.error(error));   


// Task 2.1 //
