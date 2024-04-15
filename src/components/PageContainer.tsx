import { CSSProperties, ReactNode } from "react";
import { Container } from "react-bootstrap";

type Props = {
  children?: ReactNode;
};

export const PageContainer = (props: Props) => {
  const containerStyle: CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Container fluid style={containerStyle} className="p-2">
      {props.children}
    </Container>
  );
};
