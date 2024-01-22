import { CharacterResponse, ErrorResponse } from "../types/CharacterResult";
import { format } from "date-fns";
import CharacterBasicProperty from "./BasicPropertyResult";
import StringArrayResult from "./StringArrayResult";
import CharactersArrayResult from "./CharactersArrayResult";
import { Alert } from "react-bootstrap";

type Props = {
  propertyValue: CharacterResponse | ErrorResponse;
};

function CharacterResult(props: Props) {
  return (
    <div className="d-grid mt-4">
      {"detail" in props.propertyValue
        ? renderError(props.propertyValue as ErrorResponse)
        : renderResponse(props.propertyValue as CharacterResponse)}
    </div>
  );
}

function renderError(error: ErrorResponse) {
  return (
    <Alert key="danger" variant="danger">
      {error.detail}
    </Alert>
  );
}

function renderResponse(response: CharacterResponse) {
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
  } = response;

  return (
    <>
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
    </>
  );
}

export default CharacterResult;
