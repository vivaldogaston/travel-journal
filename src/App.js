import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { travels } from "./travels";
import worldIcon from "./images/world-icon.png";
import Card from "./Card";

const App = () => {
  //console.log(travels);
  return (
    <div>
      <Header>
        <img src={worldIcon} />
        <span>my travel journal</span>
      </Header>
      <Container>
        {travels?.map((travel) => (
          <Card key={travel.title} {...travel} />
        ))}
      </Container>
    </div>
  );
};

export default App;
const Header = styled.header`
  background: #f55a5a;
  width: 100%;
  heigth: 30px;
  padding: 15px 0px;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  span {
    margin-left: 8px;
  }
`;

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
