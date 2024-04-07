import { Actor, Color, Engine, KeyEvent, Keys } from "excalibur";

// Speed stats for hero
enum Speed {
  x = 100,
  y = 100,
}

// Define movement keys for hero
export const Direction = {
  Up: Keys.W,
  Down: Keys.S,
  Left: Keys.A,
  Right: Keys.D,
} as const;

class Hero extends Actor {
  constructor(game: Engine) {
    super({ x: 10, y: 10, color: Color.Red, width: 20, height: 20 });
  }

  public update(game: Engine) {
    if (game.input.keyboard.isHeld(Direction.Up)) {
      this.move(Direction.Up);
    }

    if (game.input.keyboard.isHeld(Direction.Down)) {
      this.move(Direction.Down);
    }

    if (game.input.keyboard.isHeld(Direction.Right)) {
      this.move(Direction.Right);
    }

    if (game.input.keyboard.isHeld(Direction.Left)) {
      this.move(Direction.Left);
    }

    // Stop when keyboard relased
    game.input.keyboard.on("release", () => {
      this.stop();
    });
  }

  // Move functionality
  private move(direction: Keys) {
    switch (direction) {
      case Direction.Up:
        this.vel.y = -Speed.y;
        break;
      case Direction.Down:
        this.vel.y = Speed.y;
        break;
      case Direction.Right:
        this.vel.x = Speed.x;
        break;
      case Direction.Left:
        this.vel.x = -Speed.x;
        break;
    }
  }

  private stop() {
    this.vel.setTo(0, 0);
  }
}

export const createHero = (game: Engine): Hero => {
  const hero = new Hero(game);

  game.add(hero);

  return hero;
};
