class CollectableObjects extends DrawableObject {
  coins = 0;
  poison = 0;
  constructor() {
    super();
  }

  collectCoins(coins) {
    this.coins += coins;
  }

  collectPoints(points) {
    this.points = points;
  }
}
