import React from "react";

import { themeClass } from "./theme.css";
import * as css from "./App.css";
import classNames from "classnames";

const FRONT_COVER_INTRO = "Introducing";
const FRONT_COVER_TEXT = "A New Platform";
const FRONT_COVER_TEXT2 = "for Home Chefs";
const FRONT_COVER_SUBTEXT =
  "Finally, a digital platform optimized for home chefs to share and collaborate.";

const App = () => {
  return (
    <div className={classNames(themeClass, css.app)}>
      <header className={css.title}>
        <h1>FindMyChef</h1>
      </header>
      <body>
        <div id="front-cover" className={css.frontCover}>
          <div className={css.frontCoverText}>{FRONT_COVER_INTRO}</div>
          <div className={css.breakRow} />
          <div className={css.frontCoverText}>{FRONT_COVER_TEXT}</div>
          <div className={css.breakRow} />
          <div className={css.frontCoverText}>{FRONT_COVER_TEXT2}</div>
          <div className={css.breakRow} />
          <div className={css.spacer} />
          <div className={css.frontCoverSubtext}>{FRONT_COVER_SUBTEXT}</div>
        </div>
      </body>
    </div>
  );
};

export default App;
