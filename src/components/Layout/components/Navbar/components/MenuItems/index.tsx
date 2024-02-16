import { ListMenuNavbar, listMenuNavBar } from "../../constants";
import { MenuItem, RootStyled } from "./styles";

import { usePathname } from "next/navigation";

export const MenuItems = () => {
  const pathname = usePathname();
  return (
    <RootStyled>
      {listMenuNavBar.map((item: ListMenuNavbar) => (
        <MenuItem
          active={(item.path === pathname).toString()}
          key={item.id}
          href={item.path}
        >
          <div className="icon">{item.icon(item.path === pathname)}</div>
          <p>{item.name}</p>
        </MenuItem>
      ))}
    </RootStyled>
  );
};
