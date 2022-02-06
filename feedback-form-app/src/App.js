import './App.css';
import React from "react";
import styled, {css} from 'styled-components'

const Input = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "1em",
}))`
  color: #2D2D2D;
  font-size: 1em;
  border: 1px solid #DCDCDC;
  border-radius: 10px;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

const Grid = styled.div`
  display: grid;
`

function App() {
    return (
        <div className="App">
            <Grid>
                <Input placeholder="Your name*"/>
                <Input placeholder="Your e-mail*"/>
                <Input placeholder="Your message*"/>
            </Grid>
        </div>
    );
}

export default App;
