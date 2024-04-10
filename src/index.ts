import { createHero } from "./hero";
import { createGame } from "./game";
import { showInfo } from "./info";
import { initPlayground } from "./playground";

const game = createGame();

const hero = createHero(game);

initPlayground();

setTimeout(() => {
  const info = {
    heading: "LEVEL 1: What is an Algorithm?",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet culpa,
            eaque reprehenderit, aperiam maxime sapiente in officiis beatae adipisci
            tempora repudiandae incidunt earum recusandae assumenda fugiat! Corporis
            hic corrupti non minima ut eveniet sunt nemo odit, possimus, et
            assumenda atque?`,
  };

  // showInfo(info);
}, 2000);

game.start();
