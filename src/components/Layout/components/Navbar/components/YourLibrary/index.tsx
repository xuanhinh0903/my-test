"use client";

import {IconLibDefault} from "@/svgs/icon-library/components";
import {
  IconLibrary,
  RootStyled,
} from "./styles";
import {
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from "react";

interface Props {
  widthResize: number;
  setWidthResize: Dispatch<
    SetStateAction<number>
  >;
}

export const YourLibrary: React.FC<
  Props
> = ({widthResize, setWidthResize}) => {
  console.log(
    "🚀 ~ widthResize:",
    widthResize
  );
  const handleChangeWidth = () => {
    if (widthResize >= 160) {
      setWidthResize(72);
    }
  };

  return (
    <RootStyled>
      <IconLibrary
        active={widthResize <= 160}
      >
        <IconLibDefault
          onClick={handleChangeWidth}
        />
        {widthResize >= 160 && (
          <p className="text">
            YourLibrary
          </p>
        )}
      </IconLibrary>
    </RootStyled>
  );
};

const list = [
  {
    id: 1,
    name: "A",
    isOwnAlbums: true,
    userInfo: "Bùi Xuân Hinh",
    image:
      "http://tapchisaoviet.com/files/contents/11/juun_d_chinh_thuc_tung_poster_cho_du_an_comeback_hop_tac_cung_bien_dao_cua_blackpink_tap-chi-sao-viet-20201008120148.jpg",
  },
  {
    id: 2,
    name: "SPACESPEAKERS",
    isOwnAlbums: false,
    userInfo: "Artist",
    image:
      "http://tapchisaoviet.com/files/contents/11/juun_d_chinh_thuc_tung_poster_cho_du_an_comeback_hop_tac_cung_bien_dao_cua_blackpink_tap-chi-sao-viet-20201008120148.jpg",
  },
  {
    id: 3,
    name: "JUUN D",
    isOwnAlbums: false,
    userInfo: "Artist",
    image:
      "http://tapchisaoviet.com/files/contents/11/juun_d_chinh_thuc_tung_poster_cho_du_an_comeback_hop_tac_cung_bien_dao_cua_blackpink_tap-chi-sao-viet-20201008120148.jpg",
  },
];
