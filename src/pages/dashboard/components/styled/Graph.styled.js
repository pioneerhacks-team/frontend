import styled from "styled-components";

export const GraphStyle = styled.div`
    width: 100%;
    color: white;

    display: none;

    @media screen and (min-width: 1200px) {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        .bar {
            height: auto;
            max-width: 1200px !important;
            color: white;
        }
    }
`;

export const TextContainer = styled.div`
    margin-top: 100px;
    color: white;
    font-family: "Poppins";
    text-align: center;

    * {
        text-decoration: underline;
    }
`;
