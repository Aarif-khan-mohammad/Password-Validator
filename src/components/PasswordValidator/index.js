import React from 'react'
import { useState } from 'react'
import { MainContainer ,InputContainer , Heading ,Para, InputElement, ErrorMsg } from './styledComponents'

const PasswordValidator = () => {
    let [password , setPassword] = useState('')

    
    let onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    
    


  return (
    <MainContainer>
      <InputContainer>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password </Para>
        <InputElement type='password' placeholder='Enter Your Password' onChange={onChangePassword} />
        {(password.length>8) ? "" : <ErrorMsg>Your password must be at least 8 characters</ErrorMsg> }    
      </InputContainer>
    </MainContainer>
  )
}

export default PasswordValidator
