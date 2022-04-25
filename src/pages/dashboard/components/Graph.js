/* eslint-disable no-unused-vars */
import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { GraphStyle, TextContainer } from "./styled/Graph.styled";

const Graph = ({ budget, payments }) => {
    const curDate = Date.now();
    const { recurrent, single } = payments;
    const allDates = [];

    function calcRecur() {
        let cost = 0;
        recurrent.forEach((a) => {
            if (curDate > Date.parse(a.date))
                cost +=
                    Math.floor(
                        (curDate - Date.parse(a.date)) /
                            86400000.0 /
                            parseInt(a.frequency, 10)
                    ) * a.price;
            allDates.push(Date.parse(a.date));
        });
        return cost;
    }

    function calcSingle() {
        let cost = 0;
        single.forEach((a) => {
            if (curDate > Date.parse(a.date)) cost += a.price;
            allDates.push(Date.parse(a.date));
        });
        return cost;
    }

    const recurCost = calcRecur();
    const singleCost = calcSingle();
    const totalCost = recurCost + singleCost;

    function calcPercent() {
        return (totalCost + 0.0) / budget;
    }

    function calcMonths() {
        const lowestDate = Math.min(...allDates);
        if (Math.floor((curDate - lowestDate) / 86400000) !== 0) {
            const dailyCost =
                totalCost / Math.floor((curDate - lowestDate) / 86400000);
            return (budget - totalCost) / dailyCost / 30;
        } else {
            return false;
        }
    }

    return (
        <>
            <GraphStyle>
                <Bar
                    className="bar"
                    data={{
                        labels: [
                            "Amount Spent This Year So Far",
                            "Budget",
                            "Amount from Recursive Payments",
                            "Amount from Single Payments",
                        ],
                        datasets: [
                            {
                                label: "Dollars",
                                data: [
                                    totalCost,
                                    budget,
                                    recurCost,
                                    singleCost,
                                ],
                                backgroundColor: [
                                    "#7F5539",
                                    "#7F5539",
                                    "#7F5539",
                                    "#7F5539",
                                ],
                                borderWidth: 10,
                            },
                        ],
                    }}
                    height={0.1}
                    width={0.1}
                    options={{
                        maintainAspectRatio: true,
                        scales: {
                            yAxes: [
                                {
                                    gridLines: {
                                        color: "magenta",
                                    },
                                },
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        color: "magenta",
                                    },
                                },
                            ],
                        },
                    }}
                />
            </GraphStyle>
            <TextContainer>
                <p>You have spent {calcPercent() * 100}% of your budget so far.</p>
            </TextContainer>
        </>
    );
};

export default Graph;
