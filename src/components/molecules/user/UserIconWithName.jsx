import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;

  return (
    <SContainer>
      <SImg
        height={160}
        // width={160}
        // このままでは表示されない↓
        // https://unsplash.com/ja/%E5%86%99%E7%9C%9F/oU6KZTXhuvk
        // src="https://source.unsplash.com/oU6KZTXhuvk"
        src={image}
        alt={name}
      />
      {/* <p>{image}</p> */}
      <SName>{name}</SName>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
