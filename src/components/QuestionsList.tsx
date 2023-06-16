import React, {useEffect, useState} from 'react';
import contentfulApi from "../services/contentful-api";
import {EntryCollection} from "contentful";
import Question from "../models/question";
import QuestionAccordion from "./QuestionAccordion";

export interface QuestionsListProps {
    items: Question[]
}

const QuestionsList = (props: QuestionsListProps) => {
    return (
        <div>
            <h1>FAQ</h1>
            <div className="accordion" id="accordionPanelsStayOpenExample">
            {props.items.map((question: Question) => {
                return <QuestionAccordion question={question} key={question.id}/>
            })}
            </div>
        </div>
    );
}
export default QuestionsList;
