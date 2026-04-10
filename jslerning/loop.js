

 

 //                  for of loop
//const arr= [1,2,3,4,5,6,7,8,9,10,];
 //for (const element of arr) {
  // console.log(`${element}`);
   
// }




 // greeting = "Hello World";
 //for (const separate of greeting) {
   //if (separate === " ") {
     //continue;
   //}
   //console.log(`${separate}`);
// }


//                             Map()
//const map =new Map();
//map.set('india',    'enfi');
//map.set('singapore','600k');
//map.set('malisiya', '3.5M');

//for (const [key, value] of map) console.log(`${key} :- ${value}`);


//                        for in loop
//const user = {
  //name : "John",
  //age : 30,
  //height : "6.8ft"
//}

 //   for (const key in user) {
    
    //const element = user[key];
    //console.log(`the ${key} of user is ${element}`);
    
    
  //} 


  //                             for eachloop

//const arr= [1,2,3,4,5,6,7,8,9,10];
//arr.forEach(function(val) {
  //console.log(`${val}`);                    //arr.forEach((val) => 
   //                                            {
                                            //  console.log(`${val}`);
                                            //}); 
//}) ;

//arr.forEach((val, index,arr) => {
  //console.log(`${val} is at index ${index} in array ${arr}`);
//}) ; 


//                            obj in arrya

//const laptops = [
//  {
//    brand : "asus",
//   price : 50000
//  },
//  {
//    brand : "dell",
//    price : 60000
//   },
//   {
//    brand : "hp",
//    price : 55000   
//  },
//  {
//    brand : "lenovo",
//    price : 45000   
//  }
//]
//laptops.forEach((key) => {
//  console.log(`the brand of ${key.brand} is availableonly`);
//})



//                           .filter()                

//const arr = [1,2,3,4,5,6,7,8,9,10];
//const newarr = arr.filter((val) => {
//  return val % 2 === 0;
//});
//console.log(newarr);      


//          also can be write with for each
//const arr1 = [1,2,3,4,5,6,7,8,9,10];
//const newarr1 = [];
//arr1.forEach ((val) => {
//  if(val%2 ===0){
//    newarr1.push(val);
//  }
//});
//console.log(newarr1); 

//                           .map()






  const javascript_books = [
    {
      "id": 1,
      "title": "Eloquent JavaScript, 3rd Edition",
      "author": "Marijn Haverbeke",
      "isbn": "978-1593279509",
      "pages": 472,
      "categories": ["Programming", "JavaScript", "Web Development", "Beginner"],
      "description": "A modern introduction to programming and JavaScript, covering language fundamentals and browser-based development."
    },
    {
      "id": 2,
      "title": "JavaScript: The Good Parts",
      "author": "Douglas Crockford",
      "isbn": "978-0596517747",
      "pages": 176,
      "categories": ["Programming", "JavaScript", "Best Practices", "Core Concepts"],
      "description": "An essential guide focusing on the elegant and powerful parts of JavaScript while avoiding the pitfalls."
    },
    {
      "id": 3,
      "title": "You Don't Know JS Yet: Get Started",
      "author": "Kyle Simpson",
      "isbn": "978-1633430495",
      "pages": 143,
      "categories": ["Programming", "JavaScript", "Deep Dive", "Language Fundamentals"],
      "description": "Part of a deep-dive series that explores the core mechanisms of the JavaScript language."
    },
    {
      "id": 4,
      "title": "JavaScript: The Definitive Guide",
      "author": "David Flanagan",
      "isbn": "978-1491952023",
      "pages": 1096,
      "categories": ["Reference", "JavaScript", "API"],
      "description": "Often referred to as the 'Rhino Book', it is a comprehensive guide to the language and its APIs."
    },
    {
      "id": 5,
      "title": "Learning JavaScript Design Patterns",
      "author": "Addy Osmani",
      "isbn": "978-1449331818",
      "pages": 254,
      "categories": ["Programming", "JavaScript", "Design Patterns", "Architecture"],
      "description": "A practical guide to modern JavaScript design patterns and best practices."
    },
    {
      "id": 6,
      "title": "Secrets of the JavaScript Ninja",
      "author": "John Resig",
      "isbn": "978-1617292859",
      "pages": 344,
      "categories": ["Programming", "JavaScript", "Performance", "Advanced"],
      "description": "Advanced techniques for mastering JavaScript and building high-performance web applications."
    },
    {
      "id": 7,
      "title": "JavaScript: The New Toys",
      "author": "T.J. Crowder",
      "isbn": "978-1492095083",
      "pages": 288,
      "categories": ["Programming", "JavaScript", "ES2020", "Modern Features"],
      "description": "A guide to the latest ECMAScript features introduced in modern JavaScript."
    },
    {
      "id": 8,
      "title": "Effective JavaScript",
      "author": "David Herman",
      "isbn": "978-0321812186",
      "pages": 240,
      "categories": ["Programming", "JavaScript", "Best Practices", "Code Quality"],
      "description": "Sixty specific ways to improve your JavaScript code and better understand the language."
    },
    {
      "id": 9,
      "title": "Programming JavaScript Applications",
      "author": "Eric Elliott",
      "isbn": "978-1491950296",
      "pages": 306,
      "categories": ["Programming", "JavaScript", "Applications", "Scalability"],
      "description": "Building scalable and maintainable JavaScript applications for the browser and server."
    },
    {
      "id": 10,
      "title": "JavaScript Patterns",
      "author": "Stoyan Stefanov",
      "isbn": "978-0596806750",
      "pages": 256,
      "categories": ["Programming", "JavaScript", "Patterns", "Architecture"],
      "description": "A collection of coding patterns, best practices, and techniques for writing robust JavaScript."
    },
    {
      "id": 11,
      "title": "Speaking JavaScript",
      "author": "Axel Rauschmayer",
      "isbn": "978-1449365035",
      "pages": 450,
      "categories": ["Programming", "JavaScript", "Reference", "Language Guide"],
      "description": "A comprehensive guide to JavaScript for experienced programmers coming from other languages."
    },
    {
      "id": 12,
      "title": "Professional JavaScript for Web Developers",
      "author": "Nicholas C. Zakas",
      "isbn": "978-1119366447",
      "pages": 1040,
      "categories": ["Programming", "JavaScript", "Web Development", "Advanced"],
      "description": "An in-depth resource for advanced JavaScript concepts and browser-based development."
    },
    {
      "id": 13,
      "title": "JavaScript Allongé",
      "author": "Reginald Braithwaite",
      "isbn": "978-1593275341",
      "pages": 246,
      "categories": ["Programming", "JavaScript", "Functional Programming", "Style"],
      "description": "A deep dive into functional programming techniques using JavaScript."
    },
    {
      "id": 14,
      "title": "Modern JavaScript Explained for Dinosaurs",
      "author": "Chris Ferdinandi",
      "isbn": "978-1733289452",
      "pages": 250,
      "categories": ["Programming", "JavaScript", "ES6+", "Beginner"],
      "description": "A clear introduction to modern JavaScript features and idioms for developers of all levels."
    },
    {
      "id": 15,
      "title": "Understanding ECMAScript 6",
      "author": "Nicholas C. Zakas",
      "isbn": "978-1593277574",
      "pages": 352,
      "categories": ["Programming", "JavaScript", "ES6", "New Features"],
      "description": "A practical explanation of the new features introduced in ECMAScript 6."
    },
    {
      "id": 16,
      "title": "Functional-Light JavaScript",
      "author": "Kyle Simpson",
      "isbn": "978-1491960358",
      "pages": 232,
      "categories": ["Programming", "JavaScript", "Functional Programming", "Pragmatic"],
      "description": "A pragmatic approach to applying functional techniques in JavaScript code."
    },
    {
      "id": 17,
      "title": "JavaScript & jQuery: Interactive Front-End Web Development",
      "author": "Jon Duckett",
      "isbn": "978-1118531648",
      "pages": 608,
      "categories": ["Programming", "JavaScript", "Web Development", "UI"],
      "description": "A visual and accessible guide to using JavaScript and jQuery for front-end development."
    },
    {
      "id": 18,
      "title": "Learning React",
      "author": "Alex Banks and Eve Porcello",
      "isbn": "978-1492051725",
      "pages": 350,
      "categories": ["Programming", "JavaScript", "React", "Frontend"],
      "description": "A hands-on introduction to building modern user interfaces with React."
    },
    {
      "id": 19,
      "title": "Test-Driven JavaScript Development",
      "author": "Christian Johansen",
      "isbn": "978-1933988698",
      "pages": 308,
      "categories": ["Programming", "JavaScript", "Testing", "Quality"],
      "description": "A practical guide to writing unit tests and designing testable JavaScript code."
    }
  ];
  const forme = javascript_books
    .filter((book) => book.pages > 350)
    .filter((book) => book.categories.includes("Programming") && book.categories.includes("UI"));
   console.log(forme);


  const totalPages =javascript_books.reduce(function (acc , book){ 
    
          console.log(`the total pages are : ${book.pages} & acc is : ${acc}`);

    return acc + book.pages;

    },0);
 const pagesperDay = 15;
const daysNeeded = Math.ceil(totalPages / pagesPerDay);
console.log(daysNeeded);
  