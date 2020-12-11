/* eslint-disable */
import styled from 'styled-components';

export const FormWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: #FDEFE5;
`

export const FormTitle = styled.h3`
  color: #000;
`
export const MainForm = styled.form`
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
  min-height: 50vh;
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