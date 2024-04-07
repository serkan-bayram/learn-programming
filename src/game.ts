import { DisplayMode, Engine, KeyEvent } from "excalibur";

class Game extends Engine {
  constructor() {
    super({
      width: 1200,
      height: 800,
      displayMode: DisplayMode.FillScreen,
    });
  }
}

export const createGame = (): Game => {
  const game = new Game();

  return game;
};
