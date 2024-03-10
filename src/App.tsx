import "./App.css";
import HeaderContainer from "./components/HeaderContainer";
import { PageContainer } from "./components/PageContainer";
import MainContainer from "./components/MainContainer";
import WelcomeContainer from "./components/WelcomeContainer";

function App() {
  return (
    <PageContainer>
      {/* <WelcomeContainer /> */}
      {/* <HeaderContainer /> */}
      <MainContainer />
    </PageContainer>
  );
}

export default App;
