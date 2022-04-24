import styled from "styled-components";

export const CalendarFormat = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 40vh;

    .react-calendar {
        width: 60vw;
        max-width: 60%;
        background-color: #ddb892;
        color: #7f5539;
        border-radius: 12px;
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
        font-family: "Poppins", sans-serif;
        line-height: 2em;
    }
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        .react-calendar {
            width: 90vw;
            max-width: 90vw;
        }
    }

    .react-calendar__navigation button {
        color: black;
        min-width: 44px;
        background: none;
        font-size: 16px;
        margin-top: 8px;
        text-transform: uppercase;
    }
    .react-calendar__navigation button:enabled:hover,
    .react-calendar__navigation button:enabled:focus {
        background-color: #c7a17d;
    }
    .react-calendar__navigation button[disabled] {
        background-color: #c7a17d;
    }
    abbr[title] {
        text-decoration: none;
    }
    .react-calendar__month-view__days__day--weekend {
        color: black;
    }
    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
        background: #c7a17d;
        // color: #6f48eb;
        border-radius: 6px;
        // color: #7f5539;
    }
    .react-calendar__tile--now {
        background: #b4795533;
        border-radius: 6px;
        font-weight: bold;
        color: #7f5539;
    }
    .react-calendar__tile--now:enabled:hover,
    .react-calendar__tile--now:enabled:focus {
        background: #b4795533;
        border-radius: 6px;
        font-weight: bold;
        color: #7f5539;
    }
    .react-calendar__tile--hasActive:enabled:hover,
    .react-calendar__tile--hasActive:enabled:focus {
        background: #f8f8fa;
    }
    // .react-calendar__tile--active {
    //     background: #6f48eb;
    //     border-radius: 6px;
    //     font-weight: bold;
    //     color: white;
    // }
    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
        background: #c7a17d;
        color: white;
    }
    .react-calendar--selectRange .react-calendar__tile--hover {
        background-color: #f8f8fa;
    }

    /* COMMENTED OUT!!!
   .react-calendar__tile--range {
    background: #f8f8fa;
    color: #6f48eb;
    border-radius: 0;
   }
   .react-calendar__tile--rangeStart {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background: #6f48eb;
    color: white;
   }
   .react-calendar__tile--rangeEnd {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background: #6f48eb;
    color: white;
   }

    }
     .react-calendar--selectRange .react-calendar__tile--hover {
        background-color: #f8f8fa;
    }
    .react-calendar__tile--range {
        background: #f8f8fa;
        color: #6f48eb;
        border-radius: 0;
    }
    .react-calendar__tile--rangeStart {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        background: #6f48eb;
        color: white;
    }
    .react-calendar__tile--rangeEnd {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        background: #6f48eb;
        color: white;
     }
    */
`;
