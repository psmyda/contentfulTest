import React, {useEffect} from 'react';
import './App.css';
import QuestionsList from './components/QuestionsList';
import Question from "./models/question";
import contentfulService from "./services/contentful";
import AccordionSkeleton from "./components/AccordionSkeleton";

function App() {
    const [questions, setQuestions] = React.useState<Question[]>([]);
    const[title, setTitle] = React.useState<string>("");
    const[isLoading, setLoading] = React.useState<boolean>(false);

    useEffect(() => {
        setLoading(true)
        loadQuestions();

    }, []);

    const loadQuestions = async () => {
        const response = await contentfulService.getEntries();
        const accordionItems= response['accordionItems'] ?? [];

        setTitle(response["title"]?.toString() ?? "");

        // @ts-ignore
        setQuestions(accordionItems.map((item: any) => {
            return {
                id: item.sys.id,
                title: item.fields.name,
                text: item.fields.text,
                internalTitle: item.fields.internalTitle
            }
        }));

        setLoading(false)
    }

    return (
    <div className="App">
        <div className="container">
            {isLoading && <AccordionSkeleton /> }
            {!isLoading && <QuestionsList items={questions} title={title} />}
        </div>
    </div>
  );
}

export default App;
