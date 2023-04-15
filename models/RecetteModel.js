class Recette {
    #id;
    #intitule;
    #nbCouverts;
    #deroule;
    #tabIng;
  
    constructor(id, int, nbC, deroule, tabI) {
      this.#id = id;
      this.#intitule = int;
      this.#nbCouverts = nbC;
      this.#deroule = deroule;
      this.#tabIng = tabI;
    }
  
    getIntitule() {
      return this.#intitule;
    }
  
    getNbCouverts() {
      return this.#nbCouverts;
    }
  
    getDeroule() {
      return this.#deroule;
    }
  
    getTabIng() {
      return this.#tabIng;
    }
  
    getId() {
      return this.#id;
    }
  }