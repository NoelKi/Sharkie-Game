class Level {
  enemies;
  barriers;
  backgroundObjects;
  coins;
  levelEnd_x = 3400;

  constructor(enemies, barriers, backgroundObjects, coins) {
    this.enemies = enemies;
    this.barriers = barriers;
    this.backgroundObjects = backgroundObjects;
    this.coins = coins;
  }
}
