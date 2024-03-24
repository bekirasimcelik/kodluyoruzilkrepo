let arrayObj = [1, 2, 3];
let object1 = {obj: 1};

console.log("arratObj", typeof(arrayObj));
console.log("object1", typeof(object1));

let item1 = new Object();
let item2 = {};

console.log("item1", typeof(item1));
console.log("item2", typeof(item2));

// Object oluşturmak
let item3 = {};
let item4 = new Object();

console.log("object1", object1);

let laptop1 = {
    brand: "Apple",
    model: "MacBook Pro",
    "2kg": 2,
};

console.log(laptop1);
console.log(laptop1.brand);
console.log(laptop1["2kg"]);

// Anahtar bilgisine yeni değer eklemek
laptop1.brand = "Mac";

console.log(laptop1);

// Yeni bilgi eklemek
laptop1.version = 1.2;


// Anahtar bilgilerine ulaşmak
keys = Object.keys(laptop1);
console.log(keys);

for (const key in laptop1) {
    console.log(key);
}

keys.forEach(element => {
    console.log(element);
    console.log(laptop1[element]);
});

// Değerlere ulaşmak
values = Object.values(laptop1);

values.forEach(element => {
    console.log(element);
});


// Objectlere fonksiyon ve metot eklemek
let user1 = {
    firstName : "Bekir",
    lastName : "Celik",
    shortName : function() {
        return `${this.firstName[0].toUpperCase()} ${this.lastName}`
    }
}

console.log(user1);


// Objenin destructing ile kopyalanması
let user2= {...user1};
user2.firstName = "Asım";
console.log("user1", user1);
console.log("user2", user2);


let score = [100, 200, 300, 400];

let [score1, score2, ...otherScore] = score;
console.log(score1, score2, ...otherScore);