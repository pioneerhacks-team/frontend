import React, { useCallback, useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import Budget from "./components/Budget";
import PaymentTable from "./components/PaymentTable";
import AddPayment from "./components/AddPayment";
import Calendar from "./components/CalendarWrapper";
import Graph from "./components/Graph";
import { MainContainer } from "./Dashboard.styled";

const getUser = async (token, setUserInfos) => {
    let error = false;

    await fetch("https://payteach-api.ggbonsai.app/getUser", {
        method: "POST",
        body: JSON.stringify({
            token,
        }),
        headers: {
            "Content-Type": "application/json;",
        },
    })
        .then((r) => r.json())
        .then((r) => {
            if (r.status === 200) {
                setUserInfos(r.data);
                error = false;
            } else {
                error = true;
            }
        });

    return { error };
};

const refreshData = (token, setUserInfos) => {
    getUser(token, setUserInfos);
};

const Dashboard = ({ removeToken }) => {
    const token = localStorage.getItem("token");

    const [userInfos, setUserInfos] = useState("");
    const [isAddingNewPayment, setAddingNewPayment] = useState(false);

    const handleDisconnect = useCallback(() => {
        removeToken();
        window.location.href = "/";
    }, [removeToken]);

    useEffect(() => {
        const fetchDecodedToken = async () => {
            const r = await getUser(token, setUserInfos);
            if (r.error) {
                await handleDisconnect();
            }
        };

        fetchDecodedToken();
    }, [token, handleDisconnect]);

    function handleAddNewPayment() {
        setAddingNewPayment(true);
    }

    return (
        <FadeIn>
            <MainContainer>
                {userInfos && (
                    <div className="center">
                        <header>
                            <h1>
                                Welcome <span>{userInfos.username}</span>!
                            </h1>
                            <button type="button" onClick={handleDisconnect}>
                                Disconnect
                            </button>
                        </header>
                        <Budget userInfos={userInfos} />
                        <button
                            type="button"
                            className="addButton"
                            onClick={handleAddNewPayment}
                        >
                            Add a new payment
                        </button>
                        {isAddingNewPayment && (
                            <AddPayment
                                userInfos={userInfos}
                                setAddingNewPayment={setAddingNewPayment}
                            />
                        )}
                        <PaymentTable
                            refreshData={refreshData}
                            token={token}
                            setUserInfos={setUserInfos}
                            userInfos={userInfos}
                        />
                        {/* <Boxes usersInfos={userInfos.data} budget={userInfos.data.budget}/> */}
                        <Calendar payments={userInfos.data.payments} />
                        <Graph
                            budget={userInfos.data.budget}
                            payments={userInfos.data.payments}
                        />
                    </div>
                )}
            </MainContainer>
        </FadeIn>
    );
};

export default Dashboard;
