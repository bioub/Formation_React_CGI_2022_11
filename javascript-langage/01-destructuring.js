const nbs = [4, 5, 6];

// const quatre = nbs[0];
// const cinq = nbs[1];
// const six = nbs[2];

//    [4     , 5   , 6  ]
const [quatre, cinq, six, sept = 7] = nbs;

// const tmp = "Romain Bohdanowicz".split(' ');
// const prenom = tmp[0];
// const nom = tmp[1];

    //['Rom' , 'B']
const [prenom, nom] = "Romain Bohdanowicz".split(' ');

const coords = { x: 1, y: 2 };

// const x = coords.x;
// const y = coords.y;
// const z = coords.z ?? 3;

//       { x: 1, y: 2 }
// const { x: x, y: y, z: z = 3 } = coords;

// si la clé et la variable ont le même nom :
const { x, y, z = 3 } = coords;
