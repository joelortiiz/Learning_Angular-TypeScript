function addNumbers(a:number, b:number) {

return `${a} + ${b}`;
}

function multiply(firstNumber:number, secondNumber?:number, base:number = 2 ) {
  return firstNumber * base;
}

const multiplyResult = multiply(5);

interface Character {
  name: string;
  pv: number;
  showHp: () => void;
}

const healCharacter = (character:Character, amount:number) => {

  character.pv += amount;
}

const strider:Character = {

  name: 'Strider',
  pv: 50,
  showHp() {
    console.log(`Puntos de vida: ${this.pv}`);
  }
}

healCharacter(strider, 20);

strider.showHp();
export {}

