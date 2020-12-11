/* eslint-disable */
import React, {useState} from 'react';
import {
FormWrapper,
FormTitle,
MainForm,
Input,
FormDiv,
SubmitBtn,
} from './FormElements';

const Form = () => { 
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  return ( 
    <>
    <FormWrapper>
      <FormDiv>
      <FormTitle>Generate some dummy text by selecting the options below!</FormTitle>
      <MainForm>
        <Input value='' placeholder='enter max sentences' min='1' type='number'/>
        <Input value='' placeholder='enter max paragraphs' min='1' type='number'  />
        <SubmitBtn>Get Dummy Text</SubmitBtn> 
      </MainForm>
      </FormDiv>
    </FormWrapper>
    </>
  )
}
export default Form;