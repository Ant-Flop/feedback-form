import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import Axios from 'axios';


const Grid = styled.div`
display: grid;
padding: 10px
`;

const Title = styled.text`
color: #3E3E3E;
font-size: 24px;
margin: 5px 3px 10px 3px;
`

const InputCommon = styled.input`
  color: #2D2D2D;
  font-size: 15px;
  font-family: unset;
  width: 400px;
  height: 50px;
  margin: 3px;
  padding: 5px 20px 5px 20px;
  border: 1px solid #DCDCDC;
  border-radius: 8px;
`;

const InputMessage = styled.textarea`
  color: #2D2D2D;
  font-size: 15px;
  font-family: unset;
  width: 400px;
  height: 100px;
  margin: 3px;
  padding: 5px 20px 5px 20px;
  border: 1px solid #DCDCDC;
  border-radius: 8px;
  
`;

const Button = styled.button`
width: 150px;
height: 40px;
border-radius: 15px;
font-family: unset;
cursor: pointer;
`


export const FeedbackForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const submitOnClick = () => {
        Axios.post('http://localhost:3001/api/insert', {
            name: name,
            email: email
        }).then(() => {

        })
    }

    return (
        <div>
            <Grid>
                <Title>Reach out to as!</Title>
                <InputCommon
                    placeholder="Your name*"
                    name={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <InputCommon
                    placeholder="Your e-mail*"
                    name={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <InputMessage placeholder="Your message*"/>
                <Button onClick={submitOnClick}>Send message</Button>
            </Grid>
        </div>
    )
}