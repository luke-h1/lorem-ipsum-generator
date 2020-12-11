/* eslint-disable */
import styled from 'styled-components';

export const FormWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: #FDEFE5;
`

export const FormTitle = styled.h3`
  color: #000;
  margin-bottom: 2rem;
`
export const MainForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const Input = styled.input`
  color: #000;
  padding: 8px;
  margin: 10px 0 10px 0;
`

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
`

export const SubmitBtn = styled.button`
  color: #000;
  background: #F5B451;
  padding: 10px;
  border-radius: 20px;
  outline:0;
  border: 0;
  &:hover { 
    transform: scale(1.05);
    transition: transform 0.2s ease; 
    cursor: pointer;
}
`

export const ResultWrapper = styled.div`  
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #000;
  p { 
    font-size: 25px;
    font-weight: bold;
    width: 50%;
    margin: 0 auto;
  }
`