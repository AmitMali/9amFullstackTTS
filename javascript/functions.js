function hello(name = "user") {
  console.log("hello " + name);
}

// hello("amit");
// hello("Dipali");
// hello("Rohit");
// hello("Rupali");
// hello("Harshwardhan");
// hello("Jay");
// hello();

function add(no1, no2) {
  return no1 + no2;
}

// console.log(add(10, 20) + 40);

function addAll(...nums) {
  var total = 0;
  for (var i = 0; i < nums.length; i++) {
    total = total + nums[i];
  }
  return total;
}

console.log(addAll(23, 445, 67, 88, 96, 45, 67));

var [no1, no2] = [23, 45];
// console.log(no1, no2);

var [no3, no4, ...rem] = [23, 56, 78, 98, 99, 75, 34];
console.log(no3, no4, rem);
