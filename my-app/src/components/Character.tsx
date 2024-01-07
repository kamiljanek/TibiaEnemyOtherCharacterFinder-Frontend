import { CharacterResult } from "../types/CharacterResult";
import { format } from "date-fns";
import { Button, ButtonGroup, OverlayTrigger, Popover } from "react-bootstrap";
import PossibleOtherCharacter from "./PossibleOtherCharacter";

type Props = {
  children: CharacterResult;
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
  } = props.children;

  return (
    <>
      <div className="d-grid mt-4">
        <ButtonGroup size="sm">
          <Button variant="danger">Name:</Button>
          <Button variant="outline-danger">
            {name} {traded ? "(traded)" : ""}
          </Button>
        </ButtonGroup>
        <br />
        <ButtonGroup size="sm">
          <Button variant="success">World:</Button>
          <Button variant="outline-success">{world}</Button>
        </ButtonGroup>
        <br />
        <ButtonGroup size="sm">
          <Button variant="success">Vocation:</Button>
          <Button variant="outline-success">{vocation}</Button>
        </ButtonGroup>
        <br />
        <ButtonGroup size="sm">
          <Button variant="success">Level:</Button>
          <Button variant="outline-success">{level}</Button>
        </ButtonGroup>
        <br />
        <ButtonGroup size="sm">
          <Button variant="success">Last Login:</Button>
          <Button variant="outline-success">
            {format(lastLogin, "dd.MM.yyyy HH:mm:ss")}
          </Button>
        </ButtonGroup>
        <br />
        <ButtonGroup size="sm">
          <OverlayTrigger
            trigger="click"
            key="Former Names"
            placement="right"
            overlay={
              <Popover id={`popover-positioned-right`}>
                <Popover.Body>
                  {formerNames.map((name) => (
                    <p>
                      <strong>{name}</strong>
                    </p>
                  ))}
                </Popover.Body>
              </Popover>
            }
          >
            <Button variant="outline-success">Former Names</Button>
          </OverlayTrigger>
        </ButtonGroup>
        <br />
        <ButtonGroup size="sm">
          <OverlayTrigger
            trigger="click"
            key="Former Worlds"
            placement="right"
            overlay={
              <Popover id={`popover-positioned-right`}>
                <Popover.Body>
                  {formerWorlds.map((world) => (
                    <p>
                      <strong>{world}</strong>
                    </p>
                  ))}
                </Popover.Body>
              </Popover>
            }
          >
            <Button variant="outline-success">Former Worlds</Button>
          </OverlayTrigger>
        </ButtonGroup>
        <br />
        <ButtonGroup size="sm">
          <OverlayTrigger
            trigger="click"
            key="Other Visible Characters"
            placement="right"
            overlay={
              <Popover id={`popover-positioned-right`}>
                <Popover.Body>
                  {otherVisibleCharacters.map((characterName) => (
                    <p>
                      <strong>{characterName}</strong>
                    </p>
                  ))}
                </Popover.Body>
              </Popover>
            }
          >
            <Button variant="outline-success">Other Visible Characters</Button>
          </OverlayTrigger>
        </ButtonGroup>
        <br />
        <ButtonGroup size="sm">
          <OverlayTrigger
            trigger="click"
            key="Possible Other Characters"
            placement="right"
            overlay={
              <Popover
                id={`popover-positioned-right`}
                style={{ maxWidth: "600px" }}
              >
                <PossibleOtherCharacter>
                  {possibleInvisibleCharacters}
                </PossibleOtherCharacter>
              </Popover>
            }
          >
            <Button variant="outline-success">Possible Other Characters</Button>
          </OverlayTrigger>
        </ButtonGroup>
      </div>
    </>
  );
}

export default Character;
