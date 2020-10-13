import React from "react";
import styles from "./FinishedQuestionnaire.css";
import Button from "../UI/button/button";

const FinishedQuestionnaire = (props) => {
  const rightAnswers = Object.keys(props.results).reduce((accum, key) => {
    if (props.results[key] === "success") {
      accum++;
    }
    return accum;
  }, 0);
  return (
    <div className={styles.FinishedQuestionnaire}>
      <div className={styles.bigInt}>
        <div className={styles.bigInt__success}> Правильно <br/> <span>{rightAnswers}</span></div>
        <div className={styles.bigInt__error}> Не правильно <br/> <span>{props.questions.length - rightAnswers}</span></div>
      </div>
      <ul>
        {props.questions.map((question, index) => {
          const cls = [
            "fa",
            props.results[question.id] === "error" ? "fa-times" : "fa-check",
          ];

          return (
            <li key={index}>
              <strong>{index + 1}.</strong>&nbsp;
              {question.question}
              <i className={cls.join(" ")} />
            </li>
          );
        })}
      </ul>

      <p>
        Правильно {rightAnswers} из {props.questions.length}
      </p>

      <div>
        <Button type="primary" onClick={props.onRetry}>
          {" "}
          Повторить
        </Button>

        <Button type="success" onClick={props.onRepeat}>
          {" "}
          Перейти к списку тестов
        </Button>
      </div>
    </div>
  );
};

export default FinishedQuestionnaire;
