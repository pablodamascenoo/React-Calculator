import { Container } from "./style"
import Reset from "../assets/global_styles/Reset"

import React from "react"
export default function App(){

    return(
        <>
            <Reset/>
            <Container>
                <h1>Hello World!</h1>
            </Container>
        </>
    )
}