import React from "react";
import styled, {css} from 'styled-components';
import Axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {updateFeedbackForm} from "../redux/FeedbackFormReducer";


const Grid = styled.div`
display: grid;
justify-content: center;
padding: 10px;
        
`;

const Title = styled.div`
color: #3E3E3E;
font-size: 24px;
margin: 20px 3px 15px 3px;
`;

const inputStyle = css`
  color: #2D2D2D;
  font-size: 15px;
  font-family: unset;
  width: 400px;
  height: 50px;
  margin: 3px;
  padding: 5px 20px 5px 20px;
  border: 1px solid;
  border-radius: 8px;
`;

const InputName = styled.input`
  ${inputStyle}
  border-color: #DCDCDC;
`;

const InputEmail = styled.input`
  ${inputStyle}
  border-color: #DCDCDC;
`

const InputMessage = styled.textarea`
  ${inputStyle}
  border-color: #DCDCDC;
  width: 400px;
  height: 100px;
`;

const Button = styled.button`
width: 150px;
height: 40px;
border-radius: 15px;
border: 1px solid;
margin: 10px 0 0 5px;
font-family: unset;
cursor: pointer;
background-color: #e4f8ff;
`

const WarningBlock = styled.div`
    display: grid;
    justify-items: center;
    width: 212px;
    height: 25px;
    font-size: 15px;
    font-family: unset;
    margin: 12px 0 0 20px;
    padding: 5px 20px 5px 20px;
    border-radius: 8px;
    background-color: #ffc9c9;
    color: #6a6a6a;
    
`

const Inline = styled.div`
display: flex;
`   


export const FeedbackForm = () => {
    const dispatch = useDispatch();
    const formData = useSelector(state => state.feedbackForm);

    const submitOnClick = () => {
        dispatch(updateFeedbackForm({
            name: formData.name === "",
            email: formData.email === "",
            message: formData.message === "",
            type: "error"
        }))
        if (!(formData.name === "" || formData.email === "" || formData.message === "")) {
            Axios.post('http://localhost:3001/api/insert', {
                name: formData.name,
                email: formData.email,
                message: formData.message
            }).then((response) => {
                console.log("aaaa")
                dispatch(updateFeedbackForm({value: null, type: "error"}))
            })
            dispatch(updateFeedbackForm({name: null, email: null, message: null, type: "error"}));
            dispatch(updateFeedbackForm({value: "", type: "name"}));
            dispatch(updateFeedbackForm({value: "", type: "email"}));
            dispatch(updateFeedbackForm({value: "", type: "message"}));
            dispatch(updateFeedbackForm({value: true, type: "responseSuccess"}))

        }
    }

    const warningVisible = () => {
        if (formData.emptyName === true || formData.emptyEmail === true || formData.emptyMessage === true)
            return (
                <WarningBlock>Some fields are not filled </WarningBlock>
            )
    }

    return (
        <Grid>
            <Title>Reach out to as!</Title>
            <InputName
                placeholder="Your name*"
                key="name"
                name="name"
                value={formData.name}
                onChange={(e) => {
                    dispatch(updateFeedbackForm({value: e.target.value, type: "name"}))
                }}
            />
            <InputEmail
                placeholder="Your e-mail*"
                name="email"
                key="email"
                value={formData.email}
                onChange={(e) => {
                    dispatch(updateFeedbackForm({value: e.target.value, type: "email"}))
                }}
            />
            <InputMessage
                placeholder="Your message*"
                name="message"
                key="message"
                value={formData.message}
                onChange={(e) => {
                    dispatch(updateFeedbackForm({value: e.target.value, type: "message"}))
                }}
            />
            <Inline>
                <Button onClick={submitOnClick}>Send message</Button>

                {warningVisible()}
            </Inline>

        </Grid>
    )
}