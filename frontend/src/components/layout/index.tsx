import { ReactNode } from "react";
import { Menu } from "./Menu";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";

interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Menu />
      <Container className="mt-4">
        <Row className="justify-content-center">

          { children }
          
        </Row>
      </Container>
    </>
  )
}