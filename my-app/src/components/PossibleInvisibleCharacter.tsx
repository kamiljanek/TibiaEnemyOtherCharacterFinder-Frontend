import { PossibleInvisibleCharacterResult } from "../types/CharacterResult";

type Props = {
  children: PossibleInvisibleCharacterResult;
};

function PossibleInvisibleCharacter(props: Props) {
  return (
    <li>
      {props.children.name}
      {props.children.numberOfMatches}
      {props.children.firstMatchDate.getDate()}
      {props.children.lastMatchDate.getDate()}
    </li>
  );
}

export default PossibleInvisibleCharacter;
