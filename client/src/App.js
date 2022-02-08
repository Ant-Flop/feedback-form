import './App.css';
import React from "react";
import styled, {css} from 'styled-components'
import {FeedbackForm} from "./Components/FeedbackForm";
import {Footer} from  "./Components/Footer";

const Container = styled.div`
  display: grid;
  justify-content: center;
  margin: 100px 0 0 0;
  width: 800px;
  height: 500px;
  background: #f5f5f5;
  border-radius: 10px
}
`

const Divider = styled.hr`
width: 798px;
height: 2px;
`

function App() {
    return (
        <Container>
            <FeedbackForm />
            <Divider/>

        </Container>
    );
}

export default App;
