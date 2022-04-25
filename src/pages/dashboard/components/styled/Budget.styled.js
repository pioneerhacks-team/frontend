import styled from "styled-components";

export const BudgetContainer = styled.div`
    display: flex;
    flex-direction: column;

    label {
        text-decoration: underline;

        color: white;
        font-family: "Poppins";
        font-size: 3.5vw;
        margin-bottom: 0.2em;

        @media (min-width: 640px) {
            font-size: 2.25vw;
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

    div {
        display: flex;
        flex-direction: row;

        button {
            width: 50px;
            border: none;
            border-radius: 5px;

            * {
                color: black;
                font-size: 1.25rem;
            }
        }

        input {
            width: fit-content;

            margin-right: 15px;

            text-align: center;
            font-family: "Poppins";
            font-size: 3.5vw;
            
            padding: 5px 10px;

            border: none;

            border-radius: 4px;
            outline-color: #7f5539;

            @media (min-width: 640px) {
                font-size: 2.25vw;
            }

            @media (min-width: 768px) {
                font-size: 2vw;
            }

            @media (min-width: 1024px) {
                font-size: 1.5vw;
            }

            @media (min-width: 1280px) {
                font-size: 1vw;
                padding: 10px 0;
            }
        }
    }
`;
