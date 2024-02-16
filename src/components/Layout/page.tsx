'use client'

import { Navbar, Player } from "./components";

import { Box } from "@mui/material";
import { Container } from "./styles";

export const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Container>
      <Box className="style-layout">
        <Navbar />
        {children}
      </Box>
      <Player />
    </Container>
  );
};
