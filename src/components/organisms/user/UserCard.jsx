import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { user } = props;
  // console.log(user.image);
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      {/* <img
        height={160}
        // width={160}
        // このままでは表示されない↓
        // https://unsplash.com/ja/%E5%86%99%E7%9C%9F/oU6KZTXhuvk
        // src="https://source.unsplash.com/oU6KZTXhuvk"
        src={user.image}
        alt={user.name}
      />
      <p>{user.name}</p> */}
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>Web</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    /* 一行で収まらないときに改行する */
    overflow-wrap: break-word;
  }
`;
