const createInstructor = (firstName, lastName) => {
  firstName, lastName;
};

let favortieNumber = 42;
const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my fovorite",
};

let instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};

function animal(species, verb, noise) {
  return {
    species,
    [verb](){
      return noise;
    },
  };
}
