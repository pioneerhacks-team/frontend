/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Payment from "./Payment";
import { TableContainer } from "./styled/PaymentTable.styled";

const PaymentTable = ({ userInfos, token, refreshData, setUserInfos }) => {
    const { payments } = userInfos.data;

    return (
        <TableContainer>
            {payments.recurrent.length > 0 && (
                <table style={{ marginRight: "10px" }}>
                    <thead>
                        <tr>
                            <th colSpan="4">Recurring Payments</th>
                        </tr>
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
                                        refreshData={refreshData}
                                        token={token}
                                        setUserInfos={setUserInfos}
                                        isRecurring
                                    />
                                    <tr style={{ height: "10px" }} />
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </table>
            )}
            {payments.single.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th colSpan="4">Single Payments</th>
                        </tr>
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
                                        setUserInfos={setUserInfos}
                                        refreshData={refreshData}
                                        token={token}
                                        payment={payment}
                                    />
                                    <tr style={{ height: "10px" }} />
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </TableContainer>
    );
};

export default PaymentTable;
