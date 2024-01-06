import { CharacterResult } from "../types/CharacterResult";
import BasicProperty from "./BasicProperty";
import { format } from "date-fns";

type Props = {
  children: CharacterResult;
};

function Character(props: Props) {
  const childEntries = Object.entries(props.children);

  const formattedLastLoginDate = format(
    props.children.lastLogin,
    "dd.MM.yyyy HH:mm:ss"
  );

  return (
    <div>
      <ul className="list-group">
        <BasicProperty title={childEntries[0][0]}>
          {props.children.name}
        </BasicProperty>
        <BasicProperty title={childEntries[1][0]}>
          {props.children.world}
        </BasicProperty>
        <BasicProperty title={childEntries[2][0]}>
          {props.children.vocation}
        </BasicProperty>
        <BasicProperty title={childEntries[3][0]}>
          {props.children.level}
        </BasicProperty>
        <BasicProperty title={childEntries[4][0]}>
          {formattedLastLoginDate}
        </BasicProperty>
      </ul>
    </div>
  );
}

export default Character;
