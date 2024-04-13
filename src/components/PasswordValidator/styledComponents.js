import styled from 'styled-components'

export const MainContainer = styled.div`
    background-color:#24263c;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;   

`

export const InputContainer = styled.div`
    background-color:#383a4e;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 55%;   
    border-radius:1rem;
    box-shadow: #434451;

`

export const Heading = styled.h1`
    color: #fff;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 2rem;

    @media( max-width : 700px){
        font-size: 1rem;
        font-weight: 500;
    }
`

export const Para = styled.p`
    color: #fff;
    font-size: 1rem;
    margin-bottom: 2rem;
    @media( max-width : 700px){
        font-size: 0.5rem;
        
    }
`

export const InputElement = styled.input`
    width: 60%;
    height: 3rem;
    padding-left:1rem;
    border-radius: 0.5rem;
    &:focus{
        outline: none;
    }
`

export const ErrorMsg = styled.p`
    color: red;
    font-size: 1rem;
    margin-bottom: 2rem;
    
`