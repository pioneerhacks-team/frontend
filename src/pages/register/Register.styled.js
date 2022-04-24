import styled from "styled-components";

export const FormContainer = styled.div`
    height: 100vh;

    background-color: #b08968;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-size: 2.25vw;

        font-family: "Poppins";
        font-weight: 500;

        margin-bottom: 50px;

        border: 4px solid #7f5539;
        border-radius: 10px;

        padding: 10px 50px;

        @media screen and (max-width: 480px) {
            font-size: 6vw;
            border: 3px solid #7f5539;
            padding: 10px 20px;
        }

        color: white;
    }

    div {
        display: inline-block;

        display: flex;
        flex-direction: column;
    }

    label {
        color: white;
        font-family: "Poppins";
        font-size: 1vw;
        margin-bottom: 0.2em;

        @media screen and (max-width: 480px) {
            font-size: 4vw;
        }
    }

    input {
        margin-bottom: 1em;
        padding: 10px 50px;

        text-align: center;

        font-size: 0.75vw;
        font-family: "Poppins";

        border: none;

        border-radius: 4px;
        outline-color: #7f5539;

        @media screen and (max-width: 480px) {
            font-size: 4vw;
            padding: 5px 10px;
        }
    }

    .buttons {
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
    }

    button {
        background-color: #7f5539;

        border: none;
        border-radius: 5px;

        font-family: "Poppins";
        font-weight: 400;
        color: white;

        cursor: pointer;
        margin-top: 2em;

        font-size: 0.9vw;
        padding: 10px 30px;

        @media screen and (max-width: 480px) {
            font-size: 3vw;
            border: 3px solid #7f5539;
            padding: 5px 20px;
        }
    }

    button:hover {
        background-color: rgba(127, 85, 57, 0.75);
        transition: 0.25s;
    }

    .link {
        color: white;
        font-family: "Poppins";
        text-decoration: underline;

        font-size: 0.75vw;

        @media screen and (max-width: 480px) {
            font-size: 3vw;
        }
    }
`;
