import React from "react";

import { themeClass } from "./theme.css";
import * as css from "./App.css";
import classNames from "classnames";

const App = () => {
  return (
    <div className={classNames(themeClass, css.app)}>
      <header className={css.title}>
        <h1>Deburgger</h1>
      </header>
      <body>
        <div id="front-cover" className={css.frontCover}>
          Hi I am Deburgger
        </div>
      </body>
    </div>
  );
};

export default App;
