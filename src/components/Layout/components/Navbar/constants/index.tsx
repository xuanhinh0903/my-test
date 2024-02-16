import { IconHome, IconSearch } from "@/svgs";

export type ListMenuNavbar = {
  id: number;
  name: string;
  icon: (active?: boolean) => React.ReactNode;
  path: string;
};

export const listMenuNavBar: ListMenuNavbar[] = [
  {
    id: 0,
    name: "Home",
    icon: (active?: boolean) => <IconHome active={active} />,
    path: "/",
  },
  {
    id: 1,
    name: "Search",
    icon: (active?: boolean) => <IconSearch active={active}/>,
    path: "/search",
  },
];
