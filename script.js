//Day 3 Tasks
//Day 1
console.log( "Day 3 Tasks");
console.log("Task 1");
// To compare two JSON Objects without order
console.log("To compare two JSON Objects without order");
//-----------------------------------------!----------------------//
console.log("<--------------------------------------------------------->");
//Method 1 using for in loop
console.log("Method 1 using for in loop");
let obj1={name:"Person 1",
            age:15}

let obj2={age:15,
    name:"Person 1"}

let isEqual=true;
for (let key in obj2) {

    if (obj1[key] !== obj2[key]) {
        isEqual= false;
    }
}
if(isEqual)
{
    console.log("true");
}
else{
    console.log("false");
}


//Method 2 using Objects.key() using for of loop
console.log("Method 2 using Objects.key() using for of loop")

let obj3={name:"Person 1",
            age:15}

let obj4={age:15,
    name:"Person 1"}

let key1=Object.keys(obj3);
let key2=Object.keys(obj4);
let isEqual1=true;

	if (key1.length !== key2.length) {
		isEqual1= false;
	}

	for (let key of key1) {
		if (obj3[key] !== obj4[key]) {
			isEqual1= false;
		}
        isEqual1=true;
	}

    if(isEqual1)
    {
        console.log("true");
    }
    else{
        console.log("false");
    }



// Method 3 using Stringify valid only if the order is same in two JSON 
console.log("Method 3 using Stringify valid only if the order is same in two JSON ");
let obj5={name:"Person 1",
            age:15}

let obj6={age:15,
    name:"Person 1"}

let str1=JSON.stringify(obj1,Object.keys(obj5).sort());
let str2=JSON.stringify(obj2,Object.keys(obj6).sort());

if(str1===str2)
{
    console.log("true");
}
else{
    console.log("false");
}
console.log("<--------------------------------------------------------->");

// Task 2 - Displaying Flags in console from restfull countries API 
console.log("Task 2 ");
console.log("Displaying Flags in console from restfull countries API");
//step 1:- create a XHR object
var request1 = new XMLHttpRequest();

// STEP 2:- Openning a connection to server

request1.open("GET", "https://restcountries.com/v3.1/all", true);

// Step 3:- Initiating a bridge to server / sending request

request1.send();

// step 4:- server response

request1.onload = function () {
  var data1 = request1.response;

  var result1 = JSON.parse(data1);

  for (var i = 0; i < result1.length; i++) {
    console.log("Country-"+i);
    console.log(result1[i].flags.png);
  }
};

console.log("<--------------------------------------------------------->");

// Task 3 - Displaying Countries Name , Sub-region and Population in 
//console from restfull countries API 
console.log("Task 3");
console.log("Displaying Countries Name , Sub-region \n and Population in console from restfull countries API");

//step 1:- create a XHR object
var request = new XMLHttpRequest();

// STEP 2:- Openning a connection to server

request.open("GET", "https://restcountries.com/v3.1/all", true);

// Step 3:- Initiating a bridge to server / sending request

request.send();

// step 4:- server response

request.onload = function () {
  var data = request.response;

  var result = JSON.parse(data);

  for (var i = 0; i < result.length; i++) {
    console.log("Country-"+i);
    console.log("Country Name-->"+" "+result[i].name.official);
    console.log("Region Name-->"+" "+result[i].region);
    console.log("Sub Region Name-->"+" "+result[i].subregion);
    console.log("Population-->"+" "+result[i].population);
    console.log("!---------!");
  }
};
console.log("<--------------------------------------------------------->");