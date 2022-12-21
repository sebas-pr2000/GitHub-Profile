// import { Container } from "@mui/system";
import React, { useEffect } from "react";
import Searcher from "./components/Searcher";
import UserCard from "./containers/userCard";
// import { Container } from "@mui/material";
import { Container } from "@mui/material";
import { useState } from "react";
// importamos la funcion de busqueda de usuario
import { GitHubUser } from "./services/user";

const App = () => {

    const [inputUser, setInputUser] = useState("octocat");
    const [userState, setUserState] = useState(inputUser);
    // Estado para saber si el usuario existe
    const [notFound, setNotFound] = useState(false);
    // console.log(inputUser);
    // usando la Funcion de Busqueda
    const getinUser = async (user) => {
        const userResponse = await GitHubUser(user);

        // guarando primera peticion en el localStorage
        if (userState === "octocat") {
            localStorage.setItem("octocat", userResponse)
        }

        // si el usuario ingresado no existe: mostraremos el octocat
        if (userResponse.message === "Not Found") {
            const { octocat } = localStorage;
            setInputUser(octocat);
            setNotFound(true);
        } else {
            setUserState(userResponse);
        }
    }

    console.log(userState);

    useEffect(() => {
        getinUser(inputUser)
    }, [inputUser])

    return (
        <Container sx={
            {
                backgroundColor: "#dee4e7",
                width: "80vw",
                height: "500px",
                borderRadius: "16px",
                marginTop: "40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }
        }>
            <Searcher setInputUser={setInputUser} />
            <UserCard userState={userState} />
        </Container>
    )
}

export default App;