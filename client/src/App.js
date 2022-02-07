import './App.css';
import React from "react";
import styled, {css} from 'styled-components'
import {FeedbackForm} from "./Components/FeedbackForm";


const Container = styled.div`
  display: grid;
  width: 800px;
  height: 500px;
  background: #c5b371;
`

function App() {
    return (
        <Container>
            <FeedbackForm />
        </Container>
    );
}

export default App;
