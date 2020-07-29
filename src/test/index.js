function f1 (arg) {
  console.log('f1');
  console.log(arg);
  return arg;
}

function f2 (arg) {
  console.log('f2');
  console.log(arg);
  return arg;
}

f2(f1('omg'));

