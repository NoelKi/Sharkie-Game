class Level {
  enemies;
  barriers;
  backgroundObjects;
  coins;
  poisons;
  levelEnd_x = 3400;

  constructor(enemies, barriers, backgroundObjects, coins, poisons) {
    this.enemies = enemies;
    this.barriers = barriers;
    this.backgroundObjects = backgroundObjects;
    this.coins = coins;
    this.poisons = poisons;
  }
}
