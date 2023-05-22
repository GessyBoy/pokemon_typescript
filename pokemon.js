var Pokemon = /** @class */ (function () {
    function Pokemon(name, number) {
        this.name = name;
        this.number = number;
    }
    Object.defineProperty(Pokemon.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (value) {
            if (value.length < 1 || value.length > 50) {
                throw new Error("Le nom doit comporter entre 1 et 50 caractères.");
            }
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pokemon.prototype, "Number", {
        get: function () {
            return this.number;
        },
        set: function (value) {
            if (value < 1 || value > 151) {
                throw new Error("Le numéro doit être compris entre 1 et 151.");
            }
            this.number = value;
        },
        enumerable: false,
        configurable: true
    });
    Pokemon.prototype.toString = function () {
        return "Pokemon: ".concat(this.name, " - Num\u00E9ro: ").concat(this.number);
    };
    return Pokemon;
}());
var pokemon = new Pokemon("Pikachu", 25);
console.log(pokemon.toString());
pokemon.Name = "Bulbasaur";
pokemon.Number = 1;
console.log(pokemon.toString());
