import { IconHomeActive, IconHomeDefault } from "./components";

interface Props {
  active?: boolean;
}

export const IconHome: React.FC<Props> = ({ active = false }) => {
  const renderIcon = () => {
    return active ? <IconHomeActive /> : <IconHomeDefault />;
  };

  return <>{renderIcon()}</>;
};
