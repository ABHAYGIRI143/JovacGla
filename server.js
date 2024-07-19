// QUES 1   >
const express = require('express');
const app = express()

app.use(express.json())

let todos = [{
    id:'01',
    title:'PlayingGames',
    completed:()=>{
        console.log("Completed")
    },
}]

app.get('/Todos', (req, res) =>{
    res.json(todos)
})

app.post('/addTodo', (req, res) =>{
    let newTitle = req.body;
  todos.push({id:`${todos.length+1}`,title:`${newTitle}`, completed:()=>{
    console.log("Completed")
}})
  res.json(todos)
})

app.listen(8000, () =>{
    console.log('server started')
})


// QUES 2  >
The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web
 It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page
The role of dom in js is that  it provides a way to access, manipulate, and interact with the structure and content of an HTML document
There are the severals ways by which we can maniplaute the html document are as follows

1) Selecting Elements
To manipulate elements, you first need to select them. Common methods include:
document.getElementById('id'): Selects an element by its ID.
document.getElementsByClassName('class'): Selects elements by their class name.
document.getElementsByTagName('tag'): Selects elements by their tag name.
document.querySelector('selector'): Selects the first element that matches a CSS selector.
document.querySelectorAll('selector'): Selects all elements that match a CSS selector.

  2) Creating and Appending Elements
You can create new elements and add them to the DOM.

  3)  Modifying Elements
Change the content, attributes, or style of elements.


  4) . Handling User Interaction
a. Event Listeners
Event listeners allow you to execute code in response to user actions like clicks, key presses, or mouse movements.

  5) Common Events
click: User clicks an element.
mouseover: User hovers over an element.
keydown: User presses a key.
submit: User submits a form.


  QUES  3   >
  The sort method is used to sort the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their sequences .
  let fruits = ['banana', 'apple', 'cherry', 'date'];
fruits.sort(); // Sorts alphabetically
console.log(fruits);

The map method used to traverse over the element of the collection 
The map method creates a new array populated with the results of calling a provided function on every element in the calling array
callback: A function that produces an element of the new array, taking three arguments:
currentValue: The current element being processed in the array.
index (optional): The index of the current element being processed in the array.
array (optional): The array map was called upon.

  let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);
console.log(doubled); 
