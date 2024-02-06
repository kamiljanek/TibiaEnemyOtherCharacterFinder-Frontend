import { Button, ButtonGroup } from "react-bootstrap";

type Props = {
  propertyValue: string | number;
  propertyName: string;
};

function CharacterBasicProperty(props: Props) {
  return (
    <ButtonGroup size="sm" className="mb-1">
      <Button variant="success" style={{ maxWidth: "100px" }}>
        {props.propertyName}:
      </Button>
      <Button variant="outline-success">
        {props.propertyValue as string | number}
      </Button>
    </ButtonGroup>
  );
}

export default CharacterBasicProperty;
