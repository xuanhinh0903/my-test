import { MusicOption, MusicPlayerControls, SongDetail } from "./components";

import { RootStyled } from "./styles";

export const Player = () => {
  return (
    <RootStyled>
      <MusicOption />
      <MusicPlayerControls />
      <SongDetail />
    </RootStyled>
  );
};
