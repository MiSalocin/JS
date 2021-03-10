/* operators
    Binary: x + y
    Unary: ++x
    Ternary: bool ? x : y (if do else)
*/

/* new: create new object
let name = new String('Humberto')
name.surname = "Gessinger"
let age = Number(57)
console.log(name + name.surname + age)
*/

/*Unary operators
    delete: delete an object
    typeof: show the type of the object

const person = {
    name: "Humberto",
    surname: "Gessinger",
    age: 57,
    sex: "male",
    height: 1.81,
    isDead: false
}
console.log(typeof person)
delete person.sex
console.log(person)
*/

let n1 = 7
let n2 = 2
let n3 = true

/*Arithmetic operators
console.log(n1 * n2) // multiply
console.log(n1 / n2) // division
console.log(n1 + n2) // sum
console.log(n1 - n2) // subtraction
console.log(n1 % n2) // remainder (decimal part of the division)

console.log(++n1)    // increment before use
console.log(n1++)    // increment after use
console.log(n1--)    // decrement after use
console.log(--n1)    // decrement before use

console.log(n1 ** n2) // exponent
*/

/* Comparison operators
console.log(n1 == n2)  // equals                    //false
console.log(n1 != n2)  // not equals                //true
console.log(n1 === n2) // equals && same type       //false
console.log(n1 !== n2) // diferrent && same type    //true
console.log(n1 > n2)   // bigger than               //true
console.log(n1 >= n2)  // bigger or equal than      //true
console.log(n1 < n2)   // smaller than              //false
console.log(n1 <= n2)  // smaller or equal than     //false
*/

/* Assignment operators
n1 = n2         //equals to
console.log(n1)

n1 += n2        // n1 = n1 + n2
console.log(n1)

n1 -= n2        // n1 = n1 - n2
console.log(n1)

n1 *= n2        // n1 = n1 * n2
console.log(n1)

n1 /= n2        // n1 = n1 / n2
console.log(n1)

n1 %= n2        // n1 = n1 % n2
console.log(n1)

n1 **= n2       // n1 = n1 ** n2
console.log(n1)
*/

/* Logic operators
console.log(true && false)  // send true when both are true
console.log(true || false)  // send true when only one is true
console.log(!true)          // invert the boolean
*/

/* Conditional operators
n3 = n1 == n2 ? true : false
console.log(n3)
*/

/*falsy and truthy
// the following statemants are seen as false
false;
0;      // zero/null/undefined/NaN numbers
"";     // null strings
// the following statemants are seen as true
true
{}
[]
1; 3.23 // non zero numbers
"0";    // non null strings
*/

/* operators precedence
Group               ()
Negation/increment  ! ++ --
Multiply/division   * /
Sum/subtraction     + -
Relation            < <= > >=
Iquality            == != === !==
AND                 &&
OR                  ||
Conditional         ?:
Assignment          = += -= *= /= **= %=
*/
