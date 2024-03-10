import { ReactNode } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { LOGO_SIZE } from "../utils/constants";

type Props = {
  children?: ReactNode;
};

export const PageContainer = (props: Props) => {
  const containerStyle = {
    minHeight: "100vh",
    // maxHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // overflowY: "scroll" as any,
    // scrollbarWidth: "thin" as any,
  };

  return (
    <Container fluid style={containerStyle}>
      <Row>
        <Col>{props.children}</Col>
      </Row>
    </Container>
  );
};
