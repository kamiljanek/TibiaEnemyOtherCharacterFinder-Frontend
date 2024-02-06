import "./App.css";
import HeaderContainer from "./components/HeaderContainer";
import { PageContainer } from "./components/PageContainer";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <PageContainer>
      <HeaderContainer />

      <MainContainer />
      {/* <SearchBar></SearchBar> */}
      {/* <Main /> */}
      {/* <Character>{result}</Character> */}
      {/* <Footer /> */}
    </PageContainer>
  );
}

export default App;
