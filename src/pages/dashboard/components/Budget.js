/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";
import { BudgetContainer } from "./styled/Budget.styled";

const updateUserInfos = async (userInfos, budget) => {
    fetch("http://localhost:5000/updateUserInfos", {
        method: "POST",
        body: JSON.stringify({
            ...userInfos,
            data: {
                ...userInfos.data,
                budget,
            },
        }),
        headers: {
            "Content-Type": "application/json;",
        },
    })
        .then((r) => r.json())
};

const Budget = ({ userInfos }) => {
    const [isEditing, setEditing] = useState(false);
    const [budget, setBudget] = useState(userInfos.data.budget);

    async function handleEdit() {
        setEditing((prevState) => !prevState);

        if (isEditing) {
            await updateUserInfos(userInfos, parseFloat(budget));
        }
    }

    return (
        <BudgetContainer>
            <label htmlFor="budget">Current budget $</label>
            <div>
                <input
                    type="text"
                    id="budget"
                    required
                    value={budget}
                    onChange={(ev) => setBudget(ev.target.value)}
                    disabled={!isEditing}
                />
                <button type="button" onClick={handleEdit}>
                    <FontAwesomeIcon icon={isEditing ? faCheck : faEdit} />
                </button>
            </div>
        </BudgetContainer>
    );
};

export default Budget;
