/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import { Accordion } from "react-bootstrap";
import { SearchedCharacterNameContext } from "../contexts/SearchedCharacterNameContext";

type Props = {
  propertyValue: string[];
  isCharacterName?: boolean;
  headerName: string;
};

function StringArrayResult(props: Props) {
  const [_, setCharacterName] = useContext(SearchedCharacterNameContext);

  return (
    <Accordion className="mb-1">
      <Accordion.Item eventKey="0" className="p-0">
        <Accordion.Header className="p-0">{props.headerName}</Accordion.Header>
        <Accordion.Body>
          {props.propertyValue.map(item =>
            props.isCharacterName ? (
              <div
                key={item}
                className="character-link"
                onClick={() => {
                  setCharacterName(item);
                }}>
                {item}
              </div>
            ) : (
              <div key={item}>{item}</div>
            )
          )}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default StringArrayResult;
