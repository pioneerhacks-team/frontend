import styled from "styled-components";

export const BudgetContainer = styled.div`
    display: flex;
    flex-direction: column;

    label {
        text-decoration: underline;

        color: white;
        font-family: "Poppins";
        font-size: 1vw;
        margin-bottom: 0.2em;

        @media screen and (max-width: 480px) {
            font-size: 4vw;
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
                font-size: 1.25rem;
            }
        }

        input {
            width: fit-content;

            padding: 10px 0;
            margin-right: 15px;

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
    }
`;
