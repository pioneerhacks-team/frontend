import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./NotFound.styled";

const NotFound = () => {
    return (
        <Container>
            <h1>Page not found!</h1>
            <Link className="button" to="/">
                Back to home
            </Link>
        </Container>
    );
};

export default NotFound;
