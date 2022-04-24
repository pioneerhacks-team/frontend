import React, { useState } from "react";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import { FormContainer } from "./Register.styled";

const registerUser = async (email, username, password, setToken, setError) => {
    let error = false;

    await fetch("https://budget101-api.ggbonsai.app/register", {
        method: "POST",
        body: JSON.stringify({
            email,
            username,
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

const Register = ({ setToken }) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(event) {
        setError(false);
        event.preventDefault();

        if (password === confirmPassword) {
            await registerUser(
                email,
                username,
                password,
                setToken,
                setError
            ).then((r) => {
                if (!r.error) {
                    window.location.href = "/dashboard";
                }
            });
        } else {
            setError(true);
        }
    }

    return (
        <FadeIn>
            <FormContainer error={error}>
                <h1>Create an account!</h1>

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
                        <label htmlFor="username">Username</label>
                        <input
                            type="username"
                            id="username"
                            required
                            value={username}
                            onChange={(ev) => setUsername(ev.target.value)}
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
                    <div>
                        <label htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="errorCase"
                            required
                            value={confirmPassword}
                            onChange={(ev) =>
                                setConfirmPassword(ev.target.value)
                            }
                        />
                    </div>

                    <div className="buttons">
                        <button type="submit">Register</button>
                        <Link className="link" to="/">
                            Back to home
                        </Link>
                    </div>
                </form>
            </FormContainer>
        </FadeIn>
    );
};

export default Register;
