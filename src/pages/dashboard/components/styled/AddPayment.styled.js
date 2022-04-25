import styled from "styled-components";

export const AddPaymentForm = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 135%;

    background-color: rgba(127, 85, 57, 0.95);

    font-family: "Poppins", sans-serif;
    font-size: 1rem;

    .holder {
        z-index: 99;
        position: absolute;
        padding: 40px;
        width: 60vw;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: auto;
        background-color: #ddb892;
        border-radius: 15px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media (min-width: 640px) {
            width: 40vw;
        }

        @media (min-width: 768px) {
            width: 30vw;
        }

        @media (min-width: 1024px) {
            width: 30vw;
        }

        @media (min-width: 1280px) {
            width: 30vw;
        }
    }

    form {
        height: 100%;
        width: 100%;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    .addButton {
        background-color: #7f5539;

        border: none;
        border-radius: 5px;

        font-family: "Poppins";
        font-weight: 400;
        color: white;

        cursor: pointer;

        font-size: 4vw;
        padding: 5px 20px;

        margin: 0;
        margin-top: 35px;

        @media (min-width: 640px) {
            font-size: 2.25vw;
        }

        @media (min-width: 768px) {
            font-size: 1.75vw;
        }

        @media (min-width: 1024px) {
            font-size: 1.5vw;
        }

        @media (min-width: 1280px) {
            font-size: 0.9vw;
            padding: 10px 30px;
        }
    }

    .addButton:hover {
        background-color: rgba(127, 85, 57, 0.75);
        transition: 0.25s;
    }

    label {
        color: white;
        font-family: "Poppins";
        font-size: 3.5vw;
        margin-bottom: 0.2em;

        @media (min-width: 640px) {
            font-size: 2.5vw;
        }

        @media (min-width: 768px) {
            font-size: 2vw;
        }

        @media (min-width: 1024px) {
            font-size: 1.5vw;
        }

        @media (min-width: 1280px) {
            font-size: 1vw;
        }
    }

    input {
        margin-bottom: 1em;

        text-align: center;

        font-family: "Poppins";

        font-size: 2.5vw;
        padding: 8px 10px;

        border: none;

        border-radius: 4px;
        outline-color: #7f5539;

        @media (min-width: 640px) {
            font-size: 2vw;
        }

        @media (min-width: 768px) {
            font-size: 1.5vw;
        }

        @media (min-width: 1024px) {
            font-size: 1.25vw;
        }

        @media (min-width: 1280px) {
            font-size: 1vw;
        }
    }

    .checkbox {
        flex-direction: row;
        align-items: flex-start;

        input {
            margin-left: 15px;
            width: 1.25em;
            height: 1.25em;
        }
    }

    .icon {
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;

        border: 3px solid white;
        color: white;
        border-radius: 100px;
        padding: 2px;
    }

    .closeButton {
        border: none;
        background: none;
        width: fit-content;
    }
`;
