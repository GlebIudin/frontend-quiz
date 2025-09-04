import styles from "./QuizChooseButton.module.css";
import { QuizChooseButtonProps } from "./QuizChooseButton.interface";
import { useNavigate } from "react-router-dom";

const QuizChooseButton = ({
  onClick,
  children,
  topic,
}: QuizChooseButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/quiz/${topic}`);
    console.log(`Ты выбрал ${topic}`);
  };

  return (
    <div>
      <button className={styles.button} onClick={handleClick}>
        {children}
      </button>
    </div>
  );
};

export default QuizChooseButton;
