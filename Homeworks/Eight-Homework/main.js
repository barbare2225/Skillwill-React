// TASK 1 (works only on integer powers, and dousnt handle all errors)
function expo(number, power, cb){
    if(power === 0){
        return cb(1, 1);
    }
    if (power > 0) {
            return cb(number, expo(number, power - 1, cb));
    }
    number = 1 / number;
    power = 0 - power;
    return cb(number, expo(number, power - 1, cb));

}

const number = expo(5, -3, (number, left_number) => number * left_number);
console.log(number);







// TASK 2
function make_posts(postsContainer,post){
    const postDiv = document.createElement('div');
      postDiv.classList.add('post');
      postDiv.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;
      postsContainer.appendChild(postDiv);
}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(posts => {
    const postsContainer = document.getElementById('posts');
    posts.forEach(post => make_posts(postsContainer, post));
  })
  .catch(err => { alert('Error fetching posts: ' + err.message); });







  // TASK 3
  function deepCopyAsync(obj) {
  return new Promise((resolve, reject) => {
    if (typeof obj !== 'object' || typeof obj === null) {
      return reject("not an object");
    }

    try {
      const obj1 = JSON.parse( JSON.stringify(obj));
      resolve(obj1);
    } catch (error) {
      reject(error);
    }
  });
}

const human = {
  name: "Barbare",
  details: {
    age: 19,
    hobbies: ["reading", "gaming"]
  }
};

deepCopyAsync(human)
  .then(obj1 => console.log(obj1))
  .catch(err => alert(err));

  human.details.age = 20;
  console.log(human);
