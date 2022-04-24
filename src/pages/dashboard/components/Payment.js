/* eslint-disable no-underscore-dangle */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const updateUserInfos = async (userInfos, isRecurring, id) => {
    userInfos.data.payments[isRecurring ? "recurrent" : "single"].forEach(
        (el, index, object) => {
            if (el._id === id) {
                object.splice(index, 1);
            }
        }
    );

    fetch("http://localhost:5000/updateUserInfos", {
        method: "POST",
        body: JSON.stringify({
            ...userInfos,
        }),
        headers: {
            "Content-Type": "application/json;",
        },
    }).then((r) => r.json());
};

const Payment = ({ userInfos, payment, isRecurring, id, setUserInfos }) => {
    function handleClick() {
        updateUserInfos(userInfos, isRecurring, id, setUserInfos);
        window.location.reload(false);
    }

    return (
        <tr style={{ padding: "10px 0 10px 0" }}>
            <td>{payment.name}</td>
            {isRecurring && <td>{payment.frequency}</td>}
            <td>${payment.price}</td>
            <td>
                <button
                    style={{
                        border: "none",
                        background: "none",
                        cursor: "pointer",
                    }}
                    type="button"
                    onClick={handleClick}
                >
                    <FontAwesomeIcon
                        style={{ color: "white" }}
                        icon={faTrash}
                    />
                </button>
            </td>
        </tr>
    );
};

export default Payment;
