import { Table } from "react-bootstrap";
import { PossibleInvisibleCharacterResult } from "../types/CharacterResult";
import { format } from "date-fns";

type Props = {
  children: PossibleInvisibleCharacterResult[];
};

function PossibleOtherCharacter(props: Props) {
  let index = 0;
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Points</th>
          <th>First Match</th>
          <th>Last Match</th>
        </tr>
      </thead>
      <tbody>
        {props.children.map((character, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td className="auto-width">{character.otherCharacterName}</td>
            <td className="auto-width">{character.numberOfMatches}</td>
            <td className="auto-width">
              {format(character.firstMatchDateOnly, "yyyy-MM-dd")}
            </td>
            <td className="auto-width">
              {format(character.lastMatchDateOnly, "yyyy-MM-dd")}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default PossibleOtherCharacter;
