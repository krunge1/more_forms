import React, { useState } from 'react'
import {validEmail, validPassword} from './Regex'

const Form = (person) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newPerson = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        }
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value === ""){
            setFirstNameError("");
        }else if(e.target.value.length < 2){
            setFirstNameError("First Name must be 2 characters or longer")
        }else{
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value === ""){
            setLastNameError("");
        }else if(e.target.value.length < 2){
            setLastNameError("Last Name must be 2 characters or longer")
        }else{
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value === ""){
            setEmailError("");
        }else if(!validEmail.test(e.target.value)){
            setEmailError("Must have a true email")
        }else{
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value === ""){
            setPasswordError("");
        }else if(!validPassword.test(e.target.value)){
            setPasswordError("Password must be 8 characters or longer")
        }else{
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value === ""){
            setConfirmPasswordError("");
        }else if(e.target.value !== password){
            setConfirmPasswordError("Passwords must match")
        }else{
            setConfirmPasswordError("");
        }
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    {firstNameError?
                    <p>{firstNameError}</p>:
                    ""}
                    <label>First Name:</label>
                    <input 
                        onChange = {handleFirstName}
                        value={firstName}
                        type='text'>
                    </input>
                </div>
                <div>
                    {lastNameError?
                    <p>{lastNameError}</p>:
                    ""}
                    <label>Last Name:</label>
                    <input 
                        onChange = {handleLastName}
                        value={lastName}
                        type='text'>
                    </input>
                </div>
                <div>
                    {emailError?
                    <p>{emailError}</p>:
                    ""}
                    <label>Email:</label>
                    <input 
                        onChange = {handleEmail}
                        value={email}
                        type='email'>
                    </input>                
                </div>     
                <div>
                    {passwordError?
                    <p>{passwordError}</p>:
                    ""}
                    <label>Password:</label>
                    <input 
                        onChange = {handlePassword}
                        value={password}
                        type='password'>
                    </input>                
                </div>           
                <div>
                    {confirmPasswordError?
                    <p>{confirmPasswordError}</p>:
                    ""}
                    <label>Confirm Password:</label>
                    <input 
                        onChange = {handleConfirmPassword}
                        value={confirmPassword}
                        type='password'>
                    </input>
                </div>
            </form>
        </div>
    )
}

export default Form