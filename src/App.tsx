import React, {useEffect} from 'react';
import './App.css';
import QuestionsList from './components/QuestionsList';
import Question from "./models/question";
import contentfulService from "./services/contentful";

function App() {
    const [questions, setQuestions] = React.useState<Question[]>([]);

    useEffect(() => {
        loadQuestions();
    }, []);

    const loadQuestions = async () => {
        const response = await contentfulService.getEntries({
            content_type: "accordion",
            include: 2,
        });
        const accordionItems= response['accordionItems'] ?? [];

        // @ts-ignore
        setQuestions(accordionItems.map((item: any) => {
            return {
                id: item.sys.id,
                title: item.fields.name,
                text: item.fields.text,
                internalTitle: item.fields.internalTitle
            }
        }));
    }

    return (
    <div className="App">
        <div className="container">
          <QuestionsList items={questions} />
        </div>
    </div>
  );
}

export default App;
