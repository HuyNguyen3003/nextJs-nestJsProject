import React, { useRef } from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

export default function NewMeetupFrom() {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandle = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAdress = addressInputRef.current.value;
    const enteredDecription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      address: enteredAdress,
      image: enteredImage,
      description: enteredDecription,
    };
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandle}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="url" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea type="text" required rows="5" ref={descriptionInputRef} />
        </div>
        <div className={classes.actions}>
          <button type="button">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
