import React, { useState } from "react";

import GameBanner from 'modules/Game/GameBanner';
import Game from 'modules/Game';
import Layout from "components/Layout"

const GamePage = () => {
  const [sidebarToggler, setSidebarToggler] = useState(false)
  return (
    <Layout
      sidebarToggler={sidebarToggler}
      banner={<GameBanner />}
      onClick={() => setSidebarToggler(!sidebarToggler)}
    >
      <Game />
    </Layout>
  );
}

export default GamePage;