//although with arrow function you won't need to use self anymore
//the only time i did have to use self was google map libary where it is using es5
const person = {
  talk() {
    var self = this;
    setTimeout(function() {
      //if you just console this, you get the window
      //if you console.log self you get the function
      console.log("this", self);
    }, 1000);
  }
};

person.talk();
