import styled from "styled-components";

export const MainContainer = styled.div`
    height: 100vh;
    background-color: #b08968;

    padding: 0 25px 0 25px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        h1 {
            margin: 50px 25px;
            padding: 0;

            font-size: 2.25vw;
            font-family: "Poppins";
            font-weight: 400;

            text-align: center;

            @media screen and (max-width: 480px) {
                font-size: 6vw;
                margin: 50px 0px;
            }

            color: white;

            span {
                text-decoration: underline;
            }
        }

        button {
            margin: 50px 25px;

            background-color: #7f5539;

            border: none;
            border-radius: 5px;

            font-family: "Poppins";
            font-weight: 400;
            color: white;

            cursor: pointer;

            font-size: 0.9vw;
            padding: 10px 30px;

            @media screen and (max-width: 480px) {
                font-size: 3vw;
                border: 3px solid #7f5539;
                padding: 5px 20px;
                margin: 50px 0px;
            }
        }

        button:hover {
            background-color: rgba(127, 85, 57, 0.75);
            transition: 0.25s;
        }
    }

    .addButton {
        margin: 50px 0 75px 0;

        background-color: #7f5539;

        width: 100%;

        border: none;
        border-radius: 5px;

        font-family: "Poppins";
        font-weight: 400;
        color: white;

        cursor: pointer;

        font-size: 0.9vw;
        padding: 8px 30px;

        @media screen and (max-width: 480px) {
            font-size: 4vw;
            border: 3px solid #7f5539;
            padding: 5px 20px;
        }
    }
`;
