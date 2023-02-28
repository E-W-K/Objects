//Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
/*Handle of author
content, 
An image link posted by the author of the post
Number of views, 
Number of likes, */


function InstagramPost(author, content, imageLink, views, likes) {
    this.author = author;
    this.content = content;
    this.imageLink = imageLink;
    this.views = views;
    this.likes = likes;
  }
  
  // Creating 2 Instagram post objects
  const post1 = new InstagramPost('JohnDoe', 'Amazing sunset!', 'https://image.com/sunset.jpg', 500, 50);
  const post2 = new InstagramPost('JaneSmith', 'Throwback to last summer', 'https://image.com/summer.jpg', 1000, 200);
  
  // Create 2 Instagram post objects from the constructor function you created above
  function createPerson(name, age, location) {
    return { name, age, location };
  }
  
  const musa = createPerson('Musa Dawodu', 19, 'Lekki, Lagos State');
  
  function createJambScores(eng, govt, lit, crk) {
    return { eng, govt, lit, crk };
  }
  
  const musaJambScores = createJambScores(70, 85, 82, 94);
  musa.jambScores = musaJambScores;
  console.log(musa); // { name: 'Musa Dawodu', age: 19, location: 'Lekki, Lagos State', jambScores: { eng: 70, govt: 85, lit: 82, crk: 94 } }
  
 // What are the different ways you can clone an object? Give examples for each of them.
 // 1. Javascript
 
  const obj1 = { a: 1, b: 2 };
  const obj2 = Object.assign({}, obj1);
  console.log(obj2); // { a: 1, b: 2 }
  
  //2. Spread operator
  const obj1 = { a: 1, b: 2 };
  const obj2 = { ...obj1, c: 3 };
  console.log(obj2); // { a: 1, b: 2, c: 3 }
 // 3.   JSON.stringify()
 const obj1 = { a: 1, b: 2 };
const obj2 = JSON.parse(JSON.stringify(obj1));
console.log(obj2); // { a: 1, b: 2 }


// Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
	/* ’Omoyele Sowore is the presidential candidate of AAC’ */
  for (const party in presidentialCandidates) {
      console.log(`${presidentialCandidates[party]} is the presidential candidate of ${party}`);
    }
    