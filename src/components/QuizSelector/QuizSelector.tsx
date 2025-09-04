import styles from "./QuizSelector.module.css";
import QuizChooseButton from "../QuizChooseButton/QuizChooseButton";
import Modal from "../Modal/Modal";

const QuizSelector = () => {
  return (
    <div className={styles.quizSelectorContainer}>
      <QuizChooseButton children="Javascript" topic="Javascript" />
      <QuizChooseButton children="React" topic="React" />
      <QuizChooseButton children="Typescript" topic="Typescript" />
    </div>
  );
};

export default QuizSelector;
