import { useParams } from "react-router-dom";

const QuizPage = () => {
  const { topic } = useParams();
  return <div>Тест по теме: {topic}</div>;
};

export default QuizPage;
