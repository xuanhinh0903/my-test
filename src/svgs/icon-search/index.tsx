import { IconSearchActive, IconSearchDefault } from "./components";

interface Props {
  active?: boolean;
}

export const IconSearch: React.FC<Props> = ({ active = false }) => {
  const renderIcon = () => {
    return active ? <IconSearchActive /> : <IconSearchDefault />;
  };
  
  return <>{renderIcon()}</>;
};
