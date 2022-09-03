import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => {
        return (
          <MeetupItem
            key={meetup.id}
            image={meetup.image}
            address={meetup.address}
            description={meetup.description}
            action={meetup.acction}
            id={meetup.id}
            title={meetup.title}
          />
        );
      })}
    </ul>
  );
}

export default MeetupList;
