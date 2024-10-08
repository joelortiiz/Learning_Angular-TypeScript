let skills = ['fireball', 'heal', 'lightning'];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometwon?: string;
}

const strider: Character = {
  name: 'Strider',
  hp: 100,
  skills: ['fireball', 'heal', 'lightning'],
  hometwon: 'Gondor',
}

strider.hometwon='Minas Tirith';

console.table(strider);

export {}
