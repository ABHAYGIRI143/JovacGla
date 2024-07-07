1. (b) using <link> tag

2. (b) using p tag

3. (b) false

4. (b) false

5. (c) 10000000000

6.A.) 
const people = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Bob', age: 40 },
  ];
  const names = people.map((person) =>{ 
   return  person.name;}
  
6.B.) 
  const people = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Bob', age: 40 },
  ];
  
  const salarypeople = people.map((person) => {
    return ...person,  salary: 50000,
  });

  console.log(salarypeople);
  6.C.) 
  const people = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 40 },
];

const peopleAbove30 = people
  .filter(person => person.age > 30)
  .map(person => ({
    name: person.name,
    age: person.age,
  }));
console.log(peopleAbove30);

7.
function cb1(x, y) {
  return x + y;
}

function cb2(x, y) {
  return x - y;
}

function main(cb1, cb2, x, y) {
  const sum = cb1(x, y);
  const diff = cb2(x, y);
  console.log(sum);
  console.log(diff);
}
const x = 11;
const y = 4;

main(cb1, cb2, x, y);

8. (C) map function

10. (c) []

11. (B) display : none removes the element from the dom
while visibility : hidden just hides the element.

12. (A) 4 10 18

13. (A) [1,2,3,4]
