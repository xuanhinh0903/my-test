import styled from "@emotion/styled";

export const RootStyled = styled.div`
  background-color: #121212;
  border-radius: 10px;
  padding: 8px 12px;
  height: calc(100% - 72px);
  user-select: none;

  .text {
    font-size: 1.4rem;
  }
`;

export const IconLibrary = styled.div<{
  active: boolean;
}>`
  transition: 0.5s;
  color: #b3b3b3;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 8px 12px;
  justify-content: ${(props) =>
    props.active ? "center" : "start"};

  &:hover {
    color: #fff;
    transition: 0.5s;
  }
`;
