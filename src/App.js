import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/atoms/templates/HeaderOnly";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./components/atoms/templates/DefaultLayout";

const user = {
  name: "じゃけえ",
  image: "https://source.unsplash.com/oU6KZTXhuvk",
  email: "12345@example.com",
  phone: "090-9999-1111",
  company: {
    name: "わんこ会社"
  },
  // Website: "https://wan2.biz"
  website: "https://google.com"
};
export default function App() {
  return (
    <BrowserRouter>
      {/* <div className="App"> */}
      {/* <HeaderOnly> */}
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
        {/* </div> */}
        {/* </HeaderOnly> */}
      </DefaultLayout>
    </BrowserRouter>
  );
}
