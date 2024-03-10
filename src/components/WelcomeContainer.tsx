import { Container, Row } from "react-bootstrap";
import { LOGO_SIZE } from "../utils/constants";
import TibiaLogo2Full from "./logos/TibiaLogo2Full";
import { useState } from "react";

function HeaderContainer() {
  const [fadeOut, setFadeOut] = useState(false);

  const handlePathClick = () => {
    setFadeOut(true); // Ustaw stan na true po kliknięciu
  };

  return (
    <Container fluid>
      <Row className="justify-content-center m-3">
        <div onClick={handlePathClick}>
          <TibiaLogo2Full size={LOGO_SIZE * 2.5} clicked={fadeOut} />
        </div>
      </Row>
    </Container>
  );
}

export default HeaderContainer;
