import { MenuItems, YourLibrary } from "./components";

import { Resizable } from "re-resizable";
import { RootStyled } from "./styles";

export const Navbar = () => {
  return (
    <RootStyled>
      <Resizable
        defaultSize={{
          width: 320,
          height: "100%",
        }}
        // onResizeStop={(e, direction, ref, d) => {}}
        className="style-resizable"
        style={{ position: "fixed", top:"12px", bottom: "75%" }}
        enable={{ right: true }}
        minWidth={250}
        maxWidth={420}
      >
        <MenuItems />
        <div className="your-library-section">
          <YourLibrary />
        </div>
      </Resizable>
    </RootStyled>
  );
};
