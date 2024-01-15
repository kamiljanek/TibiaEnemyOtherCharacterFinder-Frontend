import { Accordion } from "react-bootstrap";

type Props = {
  propertyValue: string[];
  propertyName: string;
};

function StringArrayResult(props: Props) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0" style={{ padding: 0 }}>
        <Accordion.Header style={{ padding: 0 }}>
          {props.propertyName}
        </Accordion.Header>
        <Accordion.Body>
          {props.propertyValue.map((item) => (
            <div>{item}</div>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default StringArrayResult;
