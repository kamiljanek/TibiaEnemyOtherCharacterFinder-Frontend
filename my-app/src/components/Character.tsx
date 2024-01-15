import { CharacterResult } from "../types/CharacterResult";
import { format } from "date-fns";
import CharacterBasicProperty from "./BasicPropertyResult";
import StringArrayResult from "./StringArrayResult";
import CharactersArrayResult from "./CharactersArrayResult";

type Props = {
  propertyValue: CharacterResult;
};

function Character(props: Props) {
  const {
    name,
    world,
    vocation,
    level,
    lastLogin,
    formerNames,
    formerWorlds,
    traded,
    otherVisibleCharacters,
    possibleInvisibleCharacters,
  } = props.propertyValue;

  return (
    <div
      className="d-grid mt-4"
      style={{ minWidth: "500px", maxWidth: "1000px" }}
    >
      <CharacterBasicProperty
        propertyName="Name"
        propertyValue={`${name} ${traded ? "(traded)" : ""}`}
      />
      <CharacterBasicProperty propertyName="World" propertyValue={world} />
      <CharacterBasicProperty
        propertyName="Vocation"
        propertyValue={vocation}
      />
      <CharacterBasicProperty propertyName="Level" propertyValue={level} />
      <CharacterBasicProperty
        propertyName="Last Login"
        propertyValue={format(lastLogin, "dd.MM.yyyy HH:mm:ss")}
      />
      <StringArrayResult
        propertyName="Former Names"
        propertyValue={formerNames}
      />
      <StringArrayResult
        propertyName="Former Worlds"
        propertyValue={formerWorlds}
      />
      <StringArrayResult
        propertyName="Other Visible Characters"
        propertyValue={otherVisibleCharacters}
      />
      <CharactersArrayResult
        propertyName="Possible Other Characters"
        propertyValue={possibleInvisibleCharacters}
      />
    </div>
  );
}

export default Character;
