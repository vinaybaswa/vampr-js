class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numOFVamps = 0;
    let curVamp = this;
    while (curVamp.creator) {
      curVamp = curVamp.creator;
      numOFVamps++;
    }
    return numOFVamps;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    // if (this === vampire) {
    //   return vampire;
    // } else if (this.creator === vampire.creator) {
    //   return this.creator;
    // } else if (this.creator === vampire) {
    //   return vampire;
    // } else if (this.offspring = vampire) {
    //   return this;
    // }
  }
}

// const original = new Vampire("Original", 1900);

// //Original
// const ansel = new Vampire("Ansel", 1920);
// const bart = new Vampire("Bart", 1925);
// original.addOffspring(ansel);
// original.addOffspring(bart);

// //Ansel
// const sarah = new Vampire("Sarah", 1940);
// const elgort = new Vampire("Elgort", 1945);
// ansel.addOffspring(sarah);
// ansel.addOffspring(elgort);

// //Elgort
// const andrew = new Vampire("Andrew", 1965);
// elgort.addOffspring(andrew);

// console.log(andrew.closestCommonAncestor(sarah));
// console.log(original.isMoreSeniorThan(ansel));
// console.log(ansel)

module.exports = Vampire;

