export class PlayerClass {
  currentHp: number;
  maxHp: number;
  gold: number;
  experience: number;
  currentLevel: number;

  constructor(
    currentHp: number,
    maxHp: number,
    gold: number,
    experience: number,
    currentLevel: number
  ) {
    this.currentHp = currentHp;
    this.maxHp = maxHp;
    this.gold = gold;
    this.experience = experience;
    this.currentLevel = currentLevel;
  }
}
