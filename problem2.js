var sum = 0;
var count = 0;

var x = 1;
var y = 2;

while (x < 4000000) {
    if (x % 2 === 0) {
        count += x;
    }
    sum = x + y;
    x = y;
    y = sum;
}

console.log(count);

