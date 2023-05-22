class Pokemon {
    private name: string;
    private number: number;
  
    constructor(name: string, number: number) {
      this.name = name;
      this.number = number;
    }
  
    get Name(): string {
      return this.name;
    }
  
    set Name(value: string) {
      if (value.length < 1 || value.length > 50) {
        throw new Error("Le nom doit comporter entre 1 et 50 caractères.");
      }
      this.name = value;
    }
  
    get Number(): number {
      return this.number;
    }
  
    set Number(value: number) {
      if (value < 1 || value > 151) {
        throw new Error("Le numéro doit être compris entre 1 et 151.");
      }
      this.number = value;
    }
  
    public toString(): string {
      return `Pokemon: ${this.name} - Numéro: ${this.number}`;
    }
  }
  
  const pokemon = new Pokemon("Pikachu", 25);
  console.log(pokemon.toString());
  
  pokemon.Name = "Bulbasaur";
  pokemon.Number = 1;
  console.log(pokemon.toString());