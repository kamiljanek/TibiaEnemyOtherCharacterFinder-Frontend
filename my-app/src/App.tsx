import React from "react";
import "./App.css";
import Logo from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { CharacterResult } from "./types/CharacterResult";
import Character from "./components/Character";
import { SearchBar } from "./components/SearchBar";

function App() {
  const result: CharacterResult = {
    name: "Bobeek",
    world: "Bona",
    vocation: "Elder Druid",
    level: 2482,
    lastLogin: new Date("2024-01-04 13:05:41"),
    formerNames: [],
    formerWorlds: [],
    traded: false,
    otherVisibleCharacters: ["Bobeek", "Bobekx", "Lidera Bobek"],
    possibleInvisibleCharacters: [
      {
        name: "lidera bobek",
        numberOfMatches: 271,
        firstMatchDate: new Date("2022-12-06"),
        lastMatchDate: new Date("2024-01-03"),
      },
      {
        name: "bobek here",
        numberOfMatches: 22,
        firstMatchDate: new Date("2023-05-10"),
        lastMatchDate: new Date("2023-12-29"),
      },
      {
        name: "elzena lisy",
        numberOfMatches: 12,
        firstMatchDate: new Date("2022-12-06"),
        lastMatchDate: new Date("2023-02-08"),
      },
    ],
  };

  return (
    <div className="page">
      <Logo />
      <div>
        <SearchBar></SearchBar>
      </div>
      <Main />
      <Character>{result}</Character>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
