import React from "react";
import styles from "./QuestionareTitle.css";
import Button from "../../../components/UI/button/button";
import Select from "../../../components/UI/Select/Select";

const QuestionareTitle = (props) => {
    
  return (
    <form className={styles.QuestionareTitle}>
      <label htmlFor="QuestionareTitle">Ведите название Вашего опроса</label>
      <input
        id="QuestionareTitle"
        onChange={props.QuestionareTitleChange}
      ></input>
      <span className={styles.error}>{props.errorMessage}</span>

      <Select
        label="Здесь можно добавить изображение для карточки теста"
        value={props.questionareImg || 'other'}
        onChange={props.QuestionareImgHandler}
        options={[
          { text: "Биология", value: 'biology' },
          { text: "Химия", value: 'chemistry' },
          { text: "География", value: 'geography' },
          { text: "Другое", value: 'ozerMin' },
        ]}
      />
      <Button type="primary" onClick={props.QuestionareTitle}>
        Подтвердить название
      </Button>
    </form>
  );
};

export default QuestionareTitle;
