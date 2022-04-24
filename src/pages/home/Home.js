import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typing from "react-typing-animation";
import FadeIn from "react-fade-in";
import { MainContainer } from "./Home.styled";

const Home = () => {
    const [isFinished, setFinished] = useState(false);

    const sentences = [
        "Introducing...",
        "Budget101!",
        "We aim to offer teachers the tools...",
        "to manage,",
        "to analyze,",
        "to visualize,",
        "the budget of their class.",
    ];

    const handleFinished = () => {
        setFinished(true);
    };

    return (
        <MainContainer>
            {!isFinished && (
                <div className="notFinished">
                    <Typing
                        className="typing"
                        speed={75}
                        onFinishedTyping={handleFinished}
                        loop
                    >
                        {sentences.map((el) => (
                            <React.Fragment key={el}>
                                <h1>{el}</h1>
                                <Typing.Delay
                                    ms={el === sentences[1] ? 3000 : 1000}
                                />
                                <Typing.Backspace count={el.length} />
                            </React.Fragment>
                        ))}
                    </Typing>
                    <button type="button" onClick={handleFinished}>
                        Skip
                    </button>
                </div>
            )}
            {isFinished && (
                <FadeIn>
                    <div className="finished">
                        <div className="buttons">
                            <Link className="button" to="/login">
                                Login
                            </Link>
                            <br />
                            <Link className="button" to="/register">
                                Register
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            )}
        </MainContainer>
    );
};

export default Home;
