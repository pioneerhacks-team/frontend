/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ObjectID from "bson-objectid";
import { AddPaymentForm } from "./styled/AddPayment.styled";

const updateUserInfos = async (userInfos, payments, isRecurring) => {
    userInfos.data.payments[isRecurring ? "recurrent" : "single"].push(
        payments
    );
    fetch("https://budget101-api.ggbonsai.app/updateUserInfos", {
        method: "POST",
        body: JSON.stringify({
            ...userInfos,
        }),
        headers: {
            "Content-Type": "application/json;",
        },
    }).then((r) => r.json());
};

const AddPayment = ({ setAddingNewPayment, userInfos }) => {
    const currDate = new Date();
    currDate.setDate(currDate.getDate());
    const ISODate = currDate.toISOString().substr(0, 10);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState(ISODate);
    const [frequency, setFrequency] = useState("");
    const [isRecurring, setRecurring] = useState(false);

    function handleClose() {
        setAddingNewPayment(false);
    }

    function handleSubmit() {
        updateUserInfos(
            userInfos,
            { _id: ObjectID(), date, name, frequency, price },
            isRecurring
        );
        handleClose();
    }

    return (
        <AddPaymentForm>
            <div className="holder">
                <form onSubmit={handleSubmit}>
                    <button
                        type="button"
                        className="closeButton"
                        onClick={handleClose}
                    >
                        <FontAwesomeIcon className="icon" icon={faPlus} />
                    </button>

                    <div>
                        <label htmlFor="name">Name of payment</label>
                        <input
                            type="name"
                            id="name"
                            value={name}
                            onChange={(ev) => setName(ev.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(ev) => setPrice(ev.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="date">
                            {isRecurring ? "Starting date" : "Date"}
                        </label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(ev) => setDate(ev.target.value)}
                            required
                        />
                    </div>
                    <div className="checkbox">
                        <label>
                            Reoccurring ?
                            <input
                                type="checkbox"
                                id="recurring"
                                value={isRecurring}
                                onChange={() =>
                                    setRecurring((prevState) => !prevState)
                                }
                            />
                        </label>
                    </div>
                    {isRecurring && (
                        <div>
                            <label htmlFor="days">
                                Reoccurs Every X Days ?
                            </label>
                            <input
                                type="number"
                                id="days"
                                value={frequency}
                                onChange={(ev) => setFrequency(ev.target.value)}
                                required
                            />
                        </div>
                    )}
                    <button type="submit" className="addButton">
                        Add new payment
                    </button>
                </form>
            </div>
        </AddPaymentForm>
    );
};

export default AddPayment;
