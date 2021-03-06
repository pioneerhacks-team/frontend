/* eslint-disable no-underscore-dangle */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const updateUserInfos = async (
    userInfos,
    isRecurring,
    id,
    setUserInfos,
    refreshData,
    token
) => {
    userInfos.data.payments[isRecurring ? "recurrent" : "single"].forEach(
        (el, index, object) => {
            if (el._id === id) {
                object.splice(index, 1);
            }
        }
    );

    fetch("https://payteach-api.ggbonsai.app/updateUserInfos", {
        method: "POST",
        body: JSON.stringify({
            ...userInfos,
        }),
        headers: {
            "Content-Type": "application/json;",
        },
    })
        .then((r) => r.json())
        .then(() => {
            setUserInfos(userInfos);
            refreshData(token, setUserInfos);
        });
};

const Payment = ({
    payment,
    isRecurring,
    id,
    userInfos,
    setUserInfos,
    refreshData,
    token,
}) => {
    async function handleClick(e) {
        e.preventDefault();

        await updateUserInfos(
            userInfos,
            isRecurring,
            id,
            setUserInfos,
            refreshData,
            token
        );
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
