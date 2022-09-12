import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

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
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
