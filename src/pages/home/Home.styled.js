import styled from "styled-components";

export const MainContainer = styled.div`
    height: 100vh;
    background-color: #b08968;

    .notFinished {
        .typing {
            height: 100vh;

            display: flex;
            justify-content: center;
            align-items: center;

            text-align: center;

            * {
                margin: 0;
                padding: 0;
                color: white;

                font-family: "Poppins";
                font-weight: 400;
                font-size: 5vw;
            }
        }

        button {
            position: absolute;
            bottom: 30px;
            right: 50px;

            font-family: "Poppins";
            font-size: 1.5vw;

            @media screen and (max-width: 480px) {
                font-size: 4vw;
            }

            color: white;
            text-decoration: underline;

            background: none;
            border: none;

            cursor: pointer;
        }
    }

    .finished {
        height: 100vh;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1 {
            margin: 0;
            padding: 0;

            font-family: "Poppins";
            font-weight: 400;
            font-size: 5vw;
            color: white;
        }

        .buttons {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .button {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            text-decoration: none;

            max-height: 45vh;
            max-width: 100vw;
            min-height: 40vh;
            min-width: 80vw;

            font-family: "Poppins";
            font-size: 1.5vw;

            @media screen and (max-width: 480px) {
                font-size: 4vw;
            }

            color: white;

            background: none;
            border: 4px solid white;
            border-radius: 5px;

            cursor: pointer;
        }
    }
`;
