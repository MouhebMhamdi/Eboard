import React, {useState, useEffect, useRef} from 'react'
import AccordionDetails from "@material-ui/core/AccordionDetails";
import quiz from "../../Quiz.json";
import {BiSmile} from "react-icons/bi";
import Accordion from "@material-ui/core/Accordion";
import "./QuestionQuiz.css"

function QuestionQuiz({data , onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep}) {
    const [selected, setSelected]= useState('');
    const [error, setError] = useState('');
    const radioWrapper = useRef();

    useEffect(() => {
        const findCheckedInput = radioWrapper.current.querySelector('input:checked');
        if(findCheckedInput){
            findCheckedInput.checked = false;
        }
    },[data])

    const changeHandler = (e) => {
        setSelected(e.target.value);
        if(error){
            setError('');
        }
    }
    const nextClickHandler = () => {
        if(selected === '') {
            return setError('Please select one option!');
        }
        onAnswerUpdate(prevState => [...prevState, {q: data.questionTitle, a:selected }]);
        setSelected('');
        if(activeQuestion < numberOfQuestions -1){
            onSetActiveQuestion(activeQuestion + 1);
        }
        else {
            onSetStep(3);
        }
  }
  return (
      <Accordion>

        <div className="card-Quiz">
          <AccordionDetails>
            <div className="card-content-Quiz">
                <div className="content-Quiz">
                  <h2 className="mb-5 Questionquiz">{data.questionTitle}</h2>
                  <div className="control-Quiz" ref={radioWrapper}>
                      {data.options.map((option, i ) =>(
                          <label className="radio has-background-light labeloption" key={i}>
                              <input className="inputoption" type="radio" name="option" value={option.IsValid} onChange={changeHandler}/>
                              {option.optionText}

                          </label>
                      ))}
                  </div>
                    {error && <div className="has-text-danger errorquiz">{error}</div>}
                  <button className="btn btn-primary mt-4" onClick={nextClickHandler}>Next</button>
                </div>
            </div>
          </AccordionDetails>
        </div>

      </Accordion>
  )
}

export default QuestionQuiz