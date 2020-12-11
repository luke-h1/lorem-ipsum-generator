/* eslint-disable */
import React, {useState} from 'react';
import {
FormWrapper,
FormTitle,
MainForm,
Input,
FormDiv,
SubmitBtn,
ResultWrapper,
} from './FormElements';

const Form = () => { 
  const [sentences, setSentences] = useState('');
  const [paragraphs, setParagraphs] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => { 
    e.preventDefault();
    if(sentences === '' || paragraphs === null){
      return;
      // show error here
    }else {
      getQuotes();
      setSentences('')
      setParagraphs('')
    }
  }

  const getQuotes = () => { 
    console.log('function is called')
  }

  const onChange = (e) => setSentences(e.target.value)

  const handleParagraphs = (e) => setParagraphs(e.target.value)

  return ( 
    <>
    <FormWrapper>
      <FormDiv>
      <FormTitle>Generate some dummy text by selecting the options below!</FormTitle>
      <MainForm onSubmit={handleSubmit}>
        <Input value='' placeholder='enter max sentences' min='1' type='number' value={sentences} onChange={onChange}/>
        <Input value='' placeholder='enter max paragraphs' min='1' type='number' value={paragraphs} onChange={handleParagraphs} />
        <SubmitBtn >Get Dummy Text</SubmitBtn> 
      </MainForm>
      </FormDiv>
      <ResultWrapper>
        <p>
          {/* results go here */}
        </p>
      </ResultWrapper>
    </FormWrapper>
    </>
  )
}
export default Form;