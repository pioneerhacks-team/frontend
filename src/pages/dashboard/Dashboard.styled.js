import styled from "styled-components";

export const MainContainer = styled.div`
    height: max-content;

    padding: 0 25px 0 25px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;

        h1 {
            margin: 50px 0px;
            padding: 0;

            font-size: 6vw;
            font-family: "Poppins";
            font-weight: 400;

            text-align: center;

            @media (min-width: 640px) {
                font-size: 4.5vw;
                margin: 50px 25px;
            }

            @media (min-width: 768px) {
                font-size: 3.5vw;
                margin: 50px 25px;
            }

            @media (min-width: 1024px) {
                font-size: 2.5vw;
                margin: 50px 25px;
            }

            @media (min-width: 1280px) {
                font-size: 2.25vw;
                margin: 50px 25px;
            }

            color: white;

            span {
                text-decoration: underline;
            }
        }

        button {
            background-color: #7f5539;

            border: none;
            border-radius: 5px;

            font-family: "Poppins";
            font-weight: 400;
            color: white;

            cursor: pointer;

            font-size: 2.2vw;
            border: 3px solid #7f5539;
            padding: 5px 20px;
            margin: 50px 0px;

            @media (min-width: 768px) {
                font-size: 1.9vw;
            }

            @media (min-width: 1024px) {
                font-size: 1.5vw;
            }

            @media (min-width: 1280px) {
                font-size: 0.9vw;
                padding: 10px 30px;
                margin: 50px 25px;
            }
        }

        button:hover {
            background-color: rgba(127, 85, 57, 0.75);
            transition: 0.25s;
        }
    }

    .addButton {
        margin: 50px 0 50px 0;

        background-color: #7f5539;

        width: 100%;

        border: none;
        border-radius: 5px;

        font-family: "Poppins";
        font-weight: 400;
        color: white;

        cursor: pointer;

        font-size: 3vw;
        border: 3px solid #7f5539;
        padding: 5px 20px;

        @media (min-width: 640px) {
            font-size: 2.75vw;
        }

        @media (min-width: 768px) {
            font-size: 2.25vw;
        }

        @media (min-width: 1024px) {
            font-size: 2vw;
        }

        @media (min-width: 1280px) {
            font-size: 1.25vw;
        }
    }
`;
