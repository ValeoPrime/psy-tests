import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../button/button";
import styles from "./ListItem.css";
import biology from '../../../../../images/tests-category/biology-min.jpg'
import geography from '../../../../../images/tests-category/geography-min.jpg'
import chemistry from '../../../../../images/tests-category/chemistry-min.png'
import ozerMin from '../../../../../images/tests-category/ozer-min.jpeg'

const ListItem = (props) => {

    let src = {
      biology: biology,
      geography: geography,
      chemistry: chemistry,
      ozerMin: ozerMin
    }

  localStorage.getItem("token");
  let url = "/";
  if (localStorage.getItem("token")) {
    url = "/quiz/" + props.id;
  }

  return (
    <li className={styles.ListItem}>
      <NavLink to={url}>{props.title}</NavLink>
      
      <img className={styles.image} src={src[props.questionareImg] || src.ozerMin} alt='Картинка'/>
      <Button
        type="delete"
        disabled={props.disabled || false}
        onClick={() => props.delete(props.id) || null}
      >
        Х
      </Button>
      <Button
        type="entry"
        disabled={props.disabled || false}
        onClick={() => props.startTest(props.id) || null}
      >
        Начать
      </Button>
    </li>
  );
};

export default ListItem;
