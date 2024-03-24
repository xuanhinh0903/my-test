import {
  MenuItems,
  YourLibrary,
} from "./components";

import {Resizable} from "re-resizable";
import {RootStyled} from "./styles";
import {useRef, useState} from "react";

interface Props {}

export const Navbar: React.FC<
  Props
> = ({}) => {
  const [widthResize, setWidthResize] =
    useState<number>(381);

  const resizableRef =
    useRef<Resizable>(null);

  const handleResizeStop = () => {
    if (resizableRef.current) {
      const resizableElement =
        resizableRef.current?.resizable;

      if (resizableElement) {
        const width =
          resizableElement.clientWidth;
        setWidthResize(width);
        console.log("Width:", width);
      }
    }
  };
  console.log(
    "🚀 ~ widthReâcscsize:",
    widthResize
  );
  return (
    <RootStyled>
      <Resizable
        ref={resizableRef}
        defaultSize={{
          width: widthResize,
          height: "100%",
        }}
        size={{
          width: widthResize,
          height: "100%",
        }}
        className="style-resizable"
        style={{
          position: "fixed",
          top: "12px",
          bottom: "75%",
        }}
        onResize={handleResizeStop}
        enable={{right: true}}
        minWidth={72}
        maxWidth={420}
      >
        <MenuItems />
        <div className="your-library-section">
          <YourLibrary
            widthResize={widthResize}
            setWidthResize={
              setWidthResize
            }
          />
        </div>
      </Resizable>
    </RootStyled>
  );
};
