import React from "react";
import NewMeetupFrom from "../components/meetups/NewMeetupFrom";
import { useHistory } from "react-router-dom";

export default function NewMeetup() {
  const hitory = useHistory();
  const addMeetupHandle = (meetupData) => {
    fetch("api", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      hitory.replace("/");
    });
  };
  return (
    <section>
      <div>Add New Meetup</div>
      <NewMeetupFrom onAddMeetup={addMeetupHandle} />
    </section>
  );
}
