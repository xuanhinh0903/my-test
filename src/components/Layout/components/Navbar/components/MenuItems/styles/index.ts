import Link from "next/link";
import styled from "@emotion/styled";

export const RootStyled = styled.div`
  background-color: #121212;
  border-radius: 10px;
  padding: 8px 12px;
`;

export const MenuItem = styled(Link)<{ active: string }>`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 8px 12px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  color: ${(props) => (props.active === "true" ? "#fff" : "#b3b3b3")};
  transition: 0.5s;

  :hover {
    color: #fff;
    transition: 0.5s;
  }

  .icon {
    width: 24px;
    height: 24px;
  }
`;
