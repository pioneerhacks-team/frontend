/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import { FormContainer } from "../register/Register.styled";

const loginUser = async (email, password, setToken, setError) => {
    let error = false;

    await fetch("https://budget101-api.ggbonsai.app/login", {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
        }),
        headers: {
            "Content-Type": "application/json;",
        },
    })
        .then((r) => r.json())
        .then((r) => {
            if (r.status === 200) {
                setToken(r.token);
                error = false;
            } else {
                setError(true);
                error = true;
            }
        });

    return { error };
};

const Login = ({ setToken }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(event) {
        setError(false);
        event.preventDefault();

        const r = await loginUser(email, password, setToken, setError);
        if (!r.error) {
            window.location.href = "/dashboard";
        }
    }

    return (
        <FadeIn>
            <FormContainer error={error}>
                <h1>Connect to your account!</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            placeholder="email@example.com"
                            type="email"
                            id="email"
                            className="errorCase"
                            required
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="errorCase"
                            required
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                        />
                    </div>

                    <div className="buttons">
                        <button type="submit">Login</button>
                        <Link className="link" to="/">
                            Back to home
                        </Link>
                    </div>
                </form>
            </FormContainer>
        </FadeIn>
    );
};

export default Login;
