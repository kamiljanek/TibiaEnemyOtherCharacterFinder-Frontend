import { CharacterResponse } from "../types/CharacterResult";
import { format } from "date-fns";
import CharacterBasicProperty from "./BasicPropertyResult";
import StringArrayResult from "./StringArrayResult";
import CharactersArrayResult from "./CharactersArrayResult";

type Props = {
  character: CharacterResponse;
};

function CharacterResult(props: Props) {
  const { name, world, vocation, level, lastLogin, formerNames, formerWorlds, traded, otherVisibleCharacters, possibleInvisibleCharacters } = props.character;

  return (
    <div className="d-grid mt-1">
      <CharacterBasicProperty propertyName="Name" propertyValue={`${name} ${traded ? "(traded)" : ""}`} />
      <CharacterBasicProperty propertyName="World" propertyValue={world} />
      <CharacterBasicProperty propertyName="Vocation" propertyValue={vocation} />
      <CharacterBasicProperty propertyName="Level" propertyValue={level} />
      <CharacterBasicProperty propertyName="Last Login" propertyValue={format(lastLogin, "dd.MM.yyyy HH:mm:ss")} />
      {formerNames.length > 0 && <StringArrayResult headerName="Former Names" propertyValue={formerNames} />}
      {formerWorlds.length > 0 && <StringArrayResult headerName="Former Worlds" propertyValue={formerWorlds} />}
      {otherVisibleCharacters.length > 0 && <StringArrayResult headerName="Other Visible Characters" propertyValue={otherVisibleCharacters} isCharacterName />}
      {possibleInvisibleCharacters.length > 0 && <CharactersArrayResult propertyName="Possible Other Characters" propertyValue={possibleInvisibleCharacters} />}
    </div>
  );
}

export default CharacterResult;
