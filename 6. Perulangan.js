
// Soal 1
// start

var i = 0
console.log ('looping pertama')

while ( i < 20) {
    i++;
    if (i % 2 === 0){
    console.log(i + ' ' + '- I Love Coding')
    }   
}

console.log ('looping kedua')

while ( i > 0) {
    if (i % 2 === 0){
    console.log(i + ' ' + '- I Love Coding')
    }   
    i--;
}

// finish


// // Soal 2
// // start

console.log('looping pertama');

var h = 1

for (h=1 ; h <= 20 ; h++) {
    console.log(h + ' ' + '- I Love Coding' );
}

console.log('looping kedua');

for (h=20 ; h >= 1 ; h--) {
    console.log(h + ' ' + '- I Love Coding' );
}

// // finish


// Soal 3
// start

// 1.

var g = 1
for (g=1 ; g <= 100 ; g++) {
    console.log(g);
}

// 2.

for (g=1 ; g <= 100 ; g++) {
    if ( g % 2 === 0) {
        console.log(g + ' GENAP')
    } else {
        console.log (g + ' GANJIL');
    }
}

// 3.

console.log ('Perulangan 2');

for (g=1 ; g <= 100 ; g+=2) {
    console.log(g);
}  

console.log ('Perulangan 5');

for (g=1 ; g <= 100 ; g+=5) {
    console.log(g);
}  

console.log ('Perulangan 9');

for (g=1 ; g <= 100 ; g+=9) {
    console.log(g);
}  

// // finish




// Soal 4
// start


console.log ('pertambahan 2, kelipatan 3');

for (g=1 ; g <= 100 ; g+=2) {
    if ( g % 3 === 0) {
    console.log(g + ' kelipatan 3');
    }
}


console.log ('pertambahan 5, kelipatan 6');

for (g=1 ; g <= 100 ; g+=5) {
    if ( g % 6 === 0) {
    console.log(g + ' kelipatan 6');
    }
}

console.log ('pertambahan 9, kelipatan 10');

for (g=1 ; g <= 100 ; g+=9) {
    if ( g % 10 === 0) {
    console.log(g + ' kelipatan 10');
    }
}


// // finish