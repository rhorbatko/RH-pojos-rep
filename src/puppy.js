class Puppy {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} says 'arf'`);
  }

  about() {
    console.log(`${this.name} is just a lil pup. He's a ${breed}`);
  }
}

module.exports = Puppy;
