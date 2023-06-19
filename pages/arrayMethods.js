const { typescript } = require("@/next.config")
const { loadComponents } = require("next/dist/server/load-components")
const { Tiro_Tamil, Moon_Dance, Domine, Bodoni_Moda, BioRhyme_Expanded } = require("next/font/google")
const { split } = require("postcss/lib/list")
const { findDOMNode } = require("react-dom")

function Profile() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/profile-data')
      .then((res) => res.json())
      .then((data) => {
          setData(data)
        
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  )
}


view rawuseEffectDataFetch.jsx hosted with ❤ by GitHub

array length() = (get array length)

array push()= (array value add last)
array.unshift = (array value add start) 
array.pop() = (array value remove last)
array.shift() = (array value remove start)

array.splice(position, remove index number) = (array)

let book = [islamiat, urdu, english, math, physics, chemistry];

let position = book.indexOf(english);
console.log(position); // answer is two (forward search no match data return -1)

let positions = book.lastIndexOf(english);
console.log(positions); // answer is two (search value retrun lastindex number, no match data return -1)

let include = book.includes('english');
console.log(inlcude); // return true or false

searching method include, indexof, lastindexif

filtering method find

const number = [100, 200, 300, 400, 555, 685, 885]

let findElem = number.find((value) => {

  return value < 400
});

some and every method

const someNumber = [100, 200, 300, 400, 555, 685, 885];

const some = someNumber.some((value) => {

    return value < 400
});
  
console.log(some); // some method use get all values and only one correct return true

const everyNumber = [100, 200, 300, 400, 555, 685, 885];

const every = everyNumber.every((value) => {

    return value < 400
});
  
console.log(every); // every method use get all values all condition true return true not condition true return false
  

console.log(findElem); // answer is 100 (return first value condition true condtion not match return undefined)

let findElem = number.findIndex((value) => {
  return value < 400
});
console.log(findElem);
// answer is 100 (return first value condition true two difference findIndex return index number not match condition return -1)
 
 

array.sort(); 
// sort method use sorting values



array.length(value);

console.log(Array.isArray(arrayName)) = (return true or false);
console.log();
let spread = ['css', 'html', 'javascript', 'bootstrap', 'react', 'nextJS'];

let text = 'HTML CSS JAVASCRIPT BOOTSTRAP REACT NEXTJS';

let splitText = text.split(' ');  
console.log(splitText); // 'HTML' 'CSS' 'JAVASCRIPT' 'BOOTSTRAP' 'REACT' 'NEXTJS';


let join = book.join(' ');
console.log(join); //  islamiat urdu english math physics chemistry

array.concat = ['concat use for two array merge'];
array.concat(array1, arr2, arr3);

opp (concept)
 
Object Oriented Programming

  < div >
  javascript interaction webkite

  
</div>


userAent:
userAgenta
scheduling
setInterval;
ServiceWorkerstorage
vendor
vendorSub
virtualKeyboard
wakeLock
webdriver
webkitPersistenStroag
webkitpersistenStorage
webkitTemporaryStorage:
windowControlisOverlay:
xr: XRSystem
thisKeyWord();

windowControlvsOverlay:
DeprecatedStorageQuota
WindowControlOverlay

Array Methods

push 
pop
unshift
shift
indexOf
lastIndexOf
length
splice
map
includes
find
filter
reduce
some
every
split
join
concat


String Method

indexOf
lastIndexOf
replace
trim (remove white spaces)
length
slice (1, -5)
substring (not use negative value)
substr(-2)
charAt (return index number)
chatCodeAt (return uni code)
concat 
toUpperCase
toLowerCase
split
reverse

slice(currentValue == ){  }


math.ceil
math.randum
Math.floor
Math.PI
Math.trunc
Math.min
Math.max
Math.sqrt

 

Arrow function
Spread operator
Rest operator

Array Destructuring
Object Destructuring


















const date = new Date(); // Create a new Date object

date.setFullYear(2022); 
date.setMonth(6); 
date.setDate(15);
date.setHours(14, 30, 0); 
date.setMinutes(45);

console.log(date);





Window
Dom
Bom














use strict mood 
hoisting
iterables
reverse
<

Date 

new Date();



const var = "JavaScript"
keyword, variable name, assignemtn operator, value

2 + 3(expression)
2 + 3 = 5(equation)

arithmetic operator

addtion(+)
substraction(-)
division(/)
multiplication (*)
modules(7 % 2) = 1(remainder)
increment ( ++ ) 
decrement (-- )

  ( +=)
  ( -=)
  ( *=)
  ( /= )
    
    Comparison operator
greather then
less then 

  >
  <
 !==
 ==
 >=

  Data type 
  
Bolean (true, false)
string ("alphabets, words")
array(collection of elements)
Object (key: value)
number(any number)
undefined 
null 

  function 
    function () { } 
    functino calling(invocked function)
    
    premetive  (direct (string, number, boolean))
    non premetive

    string Methods

    slice 
    substring()
    slice and substring same but difference is substirng negative value (-2 ) not use and slice positive and negative value use


    substr        
    replace ( replace text)
    toLowerCase(convert upper to toLowerCase)
    toUpperCase (convert lower to upper)
    concat (concat two or more variables strings)
    trim() remove white spaces
    padStart
    padEnd
    split
    indexOf (return index number of string value not match return -1)
    search()
    match()
````includes()(value match return true or false) 
````startWidth()
    endWidth()
    

number

toString() number convert to string
toFixed() decimal value limit set (.)
toPrecision() complete number set limit include dot (.)
valueOf() number 
parseInt() convert string to number
parseFloat(20232 20 50) 
number.isInteger('12') reture true or false number or not a number condition

dialog box 

alert (display any message alert)
prompt (user input value)
confirm (ok or cancel) (are you delete this file)
    



array.
array.length (get array lrength)
array.push() add array last
array.pop() remove array last
array.unshift() add array start
array.shift() remove array end
array.at() index number return index value
array.isArray(array name) find array or not array
array.splice(postion, add and remove exixting array)
array.toString(conver t array to string)
array.join('-') = (return array to string with separator)
array.concat(concat two or more array)
array.flat() flat return nested array values to main array
array.slice() return new array
array.sort(original array changes and values sort in string) 
array.reverse()

for loop 
while loop 
do while loop 
for in loop 
for of loop 
          

regular expression

/string/

/^start/
/end$/

repeating operator *

const str = 'reeeeegex';

another repeating + 
+ one or more
0 or more *
1 or more +
0 or more ?
this position   .

{4,8} 

backslash \ 0 to 9 [\]
 