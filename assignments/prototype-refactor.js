/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


// function GameObject(attributes) {
//     this.createdAt = attributes.createdAt,
//       this.name = attributes.name,
//       this.dimensions = attributes.dimensions;
//   }

//   GameObject.prototype.destroy = function () {
//     return `${this.name} was removed from the game.`
//   };


class GameObject {
    constructor(attrs) {
        this.createdAt = attrs.CharacterStats,
            this.name = attrs.name,
            this.dimensions = attrs.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`
    }
}


// function CharacterStats(charStatAttrs) {
//     GameObject.call(this, charStatAttrs);
//     this.healthPoints = charStatAttrs.healthPoints;
// };

// CharacterStats.prototype = Object.create(GameObject.prototype);
// CharacterStats.prototype.takeDamage = function () {
//     return `${this.name} took damage.`;
// };

class CharacterStats extends GameObject {
    constructor(charStatAttrs) {
        super(charStatAttrs);
        this.healthPoints = charStatAttrs.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}


// function Humanoid(humanoidAttrs) {
//     CharacterStats.call(this, humanoidAttrs);
//     this.team = humanoidAttrs.team,
//         this.weapons = humanoidAttrs.weapons,
//         this.language = humanoidAttrs.language;
// }

// Humanoid.prototype = Object.create(CharacterStats.prototype);
// Humanoid.prototype.greet = function () {
//     return `${this.name} offers a greeting in ${this.language}.`
// }

class Humanoid extends CharacterStats {
    constructor(humanoidAttrs) {
        super(humanoidAttrs);
        this.weapons = humanoidAttrs.weapons,
            this.language = humanoidAttrs.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`
    }
}

// function Hero(heroAttrs) {
//     Humanoid.call(this, heroAttrs);
// }

// Hero.prototype = Object.create(Humanoid.prototype);
// Hero.prototype.damage = function (hurtObject) {
//     hurtObject.healthPoints = hurtObject.healthPoints - 20;
//     console.log(hurtObject.takeDamage());
//     if (hurtObject.healthPoints < 0) {
//         console.log(hurtObject.destroy());
//     };
// }

class Hero extends Humanoid {
    constructor(heroAttrs) {
        super(heroAttrs);
    }
        damage(hurtObject) {
            hurtObject.healthPoints = hurtObject.healthPoints - 20;
            console.log(hurtObject.takeDamage());
            if (hurtObject.healthPoints < 0) {
                console.log(hurtObject.destroy());
            }
        }
    }


// function Villain(badAttrs) {
//     Hero.call(this, badAttrs);
// }

// Villain.prototype = Object.create(Hero.prototype);

class Villain extends Hero {
    constructor(villainAttrs) {
        super(villainAttrs);
    }
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

const superHeroine = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 3,
        width: 3,
        height: 3,
    },
    healthPoints: 10,
    name: 'Good Amy',
    team: 'Forest Treehuggers',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

const superVillainess = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 6,
        width: 6,
        height: 6,
    },
    healthPoints: 10,
    name: 'Bad Amy',
    team: 'Forest Burners',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Orc',
});


console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


console.log(superHeroine.greet());
superHeroine.damage(archer);

console.log(superVillainess.greet());
superVillainess.damage(superHeroine);





