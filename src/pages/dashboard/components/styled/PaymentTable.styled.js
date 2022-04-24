import styled from "styled-components";

export const TableContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    height: 50%;

    table {
        border-collapse: collapse;
        border: 2px solid white;
        width: 100%;

        color: white;
        text-align: center;

        margin-bottom: 25px;
    }

    th {
        border: 2px solid white;
        background: #986f51;

        font-family: "Poppins";
        font-weight: 400;
        color: white;

        padding: 8px 16px;
        height: 3em;
    }

    @media screen and (max-width: 1000px) {
        align-items: center;
        flex-direction: column;

        table {
            width: 67%;
        }
    }
`;
