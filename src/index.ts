import { createHero } from "./hero";
import { createGame } from "./game";

const game = createGame();

const hero = createHero(game);

game.start();
