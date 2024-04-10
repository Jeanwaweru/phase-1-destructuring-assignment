const farmAnimals = 'cow horse sheep pig chicken';
const [cowSound, horseSound, sheepSound, pigSound, chickenSound] = farmAnimals.split(' ');
console.log(cowSound, horseSound, sheepSound, pigSound, chickenSound); 

const [bessie, , , dolly, babe, little] = farmAnimals.split(' ');
console.log(bessie, dolly, babe, little); 

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' , 'blackAndWhite','black', 'pink'];
const [] = farmAnimals.split(' ').slice(0, 3);
console.log(blackAndWhite, black, pink); 

const [blackAndWhite, black, white, green] = farmAnimals.split(' ').map(animal => {
  switch (animal) {
    case 'cow':
      return 'blackAndWhite';
    case 'horse':
      return 'black';
    case 'sheep':
      return 'white';
    case 'pig':
      return 'pink';
    default:
      return animal;
  }
});
console.log(blackAndWhite, black, white, green); 
const [c, h, s, p] = farmAnimals.split(' ');
console.log(c, h, s, p); 

const [b, d, ba, l, , , indg] = 'red orange yellow green blue indigo violet'.split(' ');
console.log(c, h, s, p, indg); 
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const { muppetName, color, song, job, partner } = muppet;
console.log(muppetName, color, song, job, partner);

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner