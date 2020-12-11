/* eslint-disable no-unneeded-ternary */
import React, { useState } from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import {
  FormWrapper,
  FormTitle,
  MainForm,
  FormDiv,
  SubmitBtn,
  ResultWrapper,
} from './FormElements';

const Form = () => {
  const [result, setResult] = useState('');

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 20,
      min: 1,
    },
    wordsPerSentence: {
      max: 20,
      min: 1,
    },
  });

  const getQuotes = () => {
    const quotes = lorem.generateParagraphs(1);
    setResult(quotes);
  };
  return (
    <>
      <FormWrapper>
        <FormDiv>
          <FormTitle>
            Generate some dummy text by clicking the button below!
          </FormTitle>
          <MainForm>
            <SubmitBtn onClick={getQuotes}>Get Dummy Text</SubmitBtn>
          </MainForm>
        </FormDiv>
        <ResultWrapper>
          <p>
            {result ? result : null}
          </p>
        </ResultWrapper>
      </FormWrapper>
    </>
  );
};
export default Form;
