function konversiMenit(n) {
    var hours = Math.floor (n / 60);
    var minutes = n % 60
    return hours +' : '+ minutes
}
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00