function sayHello() {
  for (var i = 0; i < 5; i++) {
    // if we use const or let it will only be define in this block
  }

  //var is defined in this function not just in the block
  console.log("var", i);
}

sayHello();
