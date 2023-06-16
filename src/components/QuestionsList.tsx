import React from 'react';
import Question from "../models/question";
import QuestionAccordion from "./QuestionAccordion";

export interface QuestionsListProps {
    title: string,
    items: Question[]
}

const QuestionsList = (props: QuestionsListProps) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <div className="accordion" id="accordionPanelsStayOpenExample">
            {props.items.map((question: Question) => {
                return <QuestionAccordion question={question} key={question.id}/>
            })}
            </div>
        </div>
    );
}
export default QuestionsList;
