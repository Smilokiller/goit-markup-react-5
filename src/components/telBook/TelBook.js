import React, { useEffect, useState, useRef } from "react";
import { TelInput } from "./telInput/TelInput";
import { ContactList } from "./telInput/ContactList";
import { FindInput } from "./telInput/FindInput";
import { v4 as uuidv4 } from "uuid";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { CSSTransition } from "react-transition-group";

import styles from "./telBook.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "400px",
      display: "flex",
    },
  },
}));

export function TelBook() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [allertShow, setAllertShow] = useState(false);
  const prevCount = usePrevious(contacts);
  const classes = useStyles();

  useEffect(() => {
    const dataFromStorage = localStorage.getItem("contacts");
    const contacts = JSON.parse(dataFromStorage);
    if (contacts) {
      setContacts(contacts);
    }
  }, []);

  function usePrevious(value) {
    const ref = useRef();

    useEffect(() => {
      ref.current = value;
    }, [value]);

    return ref.current;
  }
  useEffect(() => {
    if (contacts !== prevCount) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  });

  function handleChange({ target }) {
    const { name, value } = target;
    if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const lookingFor = contacts.find((el) => el.name === name);
    if (lookingFor) {
      setAllertShow(true);
      setTimeout(() => {
        setAllertShow(false);
      }, 3000);
      setName("");
      setNumber("");
    } else {
      setContacts([...contacts, { id: uuidv4(), name: name, number: number }]);
      setName("");
      setNumber("");
    }
  }

  function handleFilter({ target }) {
    const { value } = target;
    setFilter(value);
  }

  function handleDelete(id) {
    const deleted = contacts.filter((el) => el.id !== id);
    setContacts(deleted);
  }

  function drowContacts() {
    const filterd = contacts.filter((el) => {
      const name = el.name.toLowerCase();
      const filterName = filter.toLowerCase();
      if (name.includes(filterName)) {
        return el;
      }
    });
    return filterd;
  }

  return (
    <div className={styles.body}>
      <CSSTransition timeout={500} classNames={styles} appear unmountOnExit in>
        <div>
          <h2 className={styles.title}>Phonebook</h2>
        </div>
      </CSSTransition>

      <CSSTransition timeout={5000} classNames={styles} in={allertShow}>
        <div className={styles.alert}>
          <Alert variant="filled" severity="error">
            This contact already in phonebook
          </Alert>
        </div>
      </CSSTransition>

      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className={classes.root}
      >
        <TelInput name={"name"} onChange={handleChange} value={name} />
        <TelInput name={"number"} onChange={handleChange} value={number} />
        <Button variant="contained" color="primary" type="input">
          Add contact
        </Button>
      </form>

      <h2 className={styles.title}>Contacts</h2>

      <FindInput onChange={handleFilter} contacts={contacts} />
      <ContactList contactsList={drowContacts()} onClick={handleDelete} />
    </div>
  );
}
