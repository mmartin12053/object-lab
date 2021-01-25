var dog = {
    name:"Pluto",
    numLeg:4,
    sayName: function() {return `this dog has ${dog.numLeg} legs.`;}
};

console.log(dog.name)
console.log(dog.numLeg)
console.log(dog.sayName())

document.getElementById('asdf').innerHTML = `This dogs name is ${dog.name} and he has ${dog.numLeg} legs.`;

dog.numLeg++;
console.log(`this dog has ${dog.numLeg} legs.`)
dog.numLeg++;
console.log(`this dog has ${dog.numLeg} legs.`)
dog.numLeg++;
console.log(`this dog has ${dog.numLeg} legs.`)
dog.numLeg++;
console.log(`this dog has ${dog.numLeg} legs.`)


