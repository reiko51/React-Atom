import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  console.log(children);
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  /* 横幅の調整はCardを貼り付ける場所によって違うので
　　呼び出しもとに任せる */
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
