import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../button/button";
import styles from "./ListItem.css";

const ListItem = (props) => {
    
  localStorage.getItem("token");
  let url = "/";
  if (localStorage.getItem("token")) {
    url = "/quiz/" + props.id;
  }

  return (
    <li className={styles.ListItem}>
      <NavLink to={url}>{props.title}</NavLink>
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
