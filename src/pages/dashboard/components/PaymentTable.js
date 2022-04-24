/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Payment from "./Payment";
import { TableContainer } from "./styled/PaymentTable.styled";

const PaymentTable = ({ userInfos }) => {
    const { payments } = userInfos.data;

    return (
        <TableContainer>
            <table style={{ marginRight: "10px" }}>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Every # Days</th>
                        <th>Cost</th>
                        <th>
                            <FontAwesomeIcon icon={faTrash} />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ height: "10px" }} />
                    {payments.recurrent.map((payment) => {
                        return (
                            <React.Fragment key={payment._id}>
                                <Payment
                                    key={payment._id}
                                    userInfos={userInfos}
                                    id={payment._id}
                                    payment={payment}
                                    isRecurring
                                />
                                <tr style={{ height: "10px" }} />
                            </React.Fragment>
                        );
                    })}
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Cost</th>
                        <th>
                            <FontAwesomeIcon icon={faTrash} />
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr style={{ height: "10px" }} />
                    {payments.single.map((payment) => {
                        return (
                            <React.Fragment key={payment._id}>
                                <Payment
                                    key={payment._id}
                                    userInfos={userInfos}
                                    id={payment._id}
                                    payment={payment}
                                />
                                <tr style={{ height: "10px" }} />
                            </React.Fragment>
                        );
                    })}
                </tbody>
            </table>
        </TableContainer>
    );
};

export default PaymentTable;
