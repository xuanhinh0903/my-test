import { IconHome, IconSearch } from "@/svgs";

import { Container } from "./styles";
import Image from "next/image";
import { Resizable } from "re-resizable";

type ListMenuNavbar = {
  id: number;
  name: string;
  url: () => React.ReactNode;
};

export const Navbar = () => {
  const listMenuNavBar: ListMenuNavbar[] = [
    {
      id: 0,
      name: "Home",
      url: () => <IconHome />,
    },
    {
      id: 1,
      name: "Search",
      url: () => <IconSearch />,
    },
  ];

  return (
    <Container>
      <Resizable
        style={{ border: "1px solid" }}
        defaultSize={{
          width: 320,
          height: "100vh",
        }}
        onResizeStop={(e, direction, ref, d) => {
          console.log("🚀 ~ Navbar ~ d:", d);
          console.log("🚀 ~ Navbar ~ ref:", ref);
          console.log("🚀 ~ Navbar ~ direction:", direction);
          console.log("🚀 ~ Navbar ~ e:", e);
        }}
        enable={{ right: true }}
        minWidth={250}
        maxWidth={420}
      >
        {listMenuNavBar.map((item: ListMenuNavbar) => (
          <div className="menu-item" key={item.id}>
            <div className="icon">{item.url()}</div>
            <p>{item.name}</p>
          </div>
        ))}
      </Resizable>
    </Container>
  );
};
