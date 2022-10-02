import { Router } from "./router/Router";
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
  return <Router />;
}
