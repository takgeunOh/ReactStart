import "./styles.css";

const SaramTitle = () => {
  return (
    <>
      <h1>길동 반점 메뉴 목록</h1>
      <h2>길동 반점 여름 특별식</h2>
    </>
  );
};

const Saram = () => {
  return <h3>홍길동</h3>;
};

const Menu = (props) => {
  return <h3>{props.data}</h3>;
};

const MenuItems = ["짜장면", "짬뽕", "팔보채", "마파두부", "탕수육", "볶음밥"];

export default function App() {
  return (
    <div className="App">
      <SaramTitle />
      <Saram />
      {MenuItems.map((item) => {
        return <Menu data={item} />;
      })}
    </div>
  );
}
