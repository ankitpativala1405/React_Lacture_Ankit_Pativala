import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, Container } from "react-bootstrap";
import { toggleTheme } from "./Themeslice";

const Theme = () => {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const isLight = mode === "light";

  return (
    <Container
      fluid
      className={`d-flex flex-column align-items-center justify-content-center min-vh-100 ${
        !isLight ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <Card
        className={`p-4 shadow ${
          isLight ? "bg-white text-dark" : "bg-secondary text-light"
        }`}
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <Card.Body className="text-center">
          <Card.Title className="mb-3">
            {!isLight ? "Dark Mode" : "Light Mode"}
          </Card.Title>
          <Card.Text>
            This is a simple theme switcher. Click below to change the mode.
          </Card.Text>
          <Button
            variant={isLight ? "dark" : "light"}
            onClick={() => dispatch(toggleTheme())}
          >
            Switch to {isLight ? "Dark" : "Light"} Mode
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Theme;
