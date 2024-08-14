class Level {
  enemies;
  barriers;
  backgroundObjects;
  levelEnd_x = 3400;

  constructor(enemies, barriers, backgroundObjects) {
    this.enemies = enemies;
    this.barriers = barriers;
    this.backgroundObjects = backgroundObjects;
  }
}
