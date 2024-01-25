import {
  CharacterResponse,
  SimilarCharactersResponse,
} from "../types/CharacterResult";
import { format } from "date-fns";
import CharacterBasicProperty from "./BasicPropertyResult";
import StringArrayResult from "./StringArrayResult";
import CharactersArrayResult from "./CharactersArrayResult";
import { useContext, useState } from "react";
import { SearchedCharacterNameContext } from "../contexts/SearchedCharacterNameContext";

type Props = {
  characterResponse: CharacterResponse;
};

function CharacterResult(props: Props) {
  const [characterName, setCharacterName] = useContext(
    SearchedCharacterNameContext
  );

  const [similarCharacters, setSimilarCharacters] =
    useState<SimilarCharactersResponse | null>(null);
  const [statusCode, setStatusCode] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

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
  } = props.characterResponse;
  // useEffect(() => {
  //   // if (statusCode === 404) {
  //   fetchSimilarCharactersData(characterName, setSimilarCharacters);
  //   // }
  // }, [statusCode]);

  // if ("detail" in props.propertyValue) {
  //   return (
  //     <RenderError
  //       error={props.propertyValue as ErrorResponse}
  //       similarCharacters={similarCharacters}
  //     />
  //   );
  // }
  return (
    <div className="d-grid mt-4">
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
        characterName
      />
      <CharactersArrayResult
        propertyName="Possible Other Characters"
        propertyValue={possibleInvisibleCharacters}
      />
    </div>
  );
}

export default CharacterResult;
