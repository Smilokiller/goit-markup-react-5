import React from "react";
import Button from "@material-ui/core/Button";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./contactList.module.css";

export function ContactList({ contactsList, onClick }) {
  return (
    <>
      <TransitionGroup component="ul">
        {contactsList.map((el) => (
          <CSSTransition classNames={styles} key={el.id} timeout={250}>
            <li key={el.id} className={styles.listItems}>
              <p className={styles.text}>{el.name}</p>
              <p className={styles.text}>{el.number}</p>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => onClick(el.id)}
              >
                DELETE
              </Button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
}
