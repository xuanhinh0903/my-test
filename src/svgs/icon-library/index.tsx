import {
  IconLibActive,
  IconLibDefault,
} from "./components";

interface Props {
  active?: boolean;
}

export const IconLibrary: React.FC<
  Props
> = ({active = false}) => {
  const renderIcon = () => {
    return active ? (
      <IconLibActive />
    ) : (
      <IconLibDefault />
    );
  };

  return <>{renderIcon()}</>;
};
