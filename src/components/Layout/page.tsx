"use client";

import {
  Navbar,
  Player,
} from "./components";

import {Box} from "@mui/material";
import {RootStyled} from "./styles";

export const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <RootStyled>
      <Box className="style-layout">
        <Navbar />
        {children}
      </Box>
      <Player />
    </RootStyled>
  );
};
