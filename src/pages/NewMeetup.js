import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {

    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch('https://meetup-demo-app-245bb-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(() => {
            navigate("/",{replace: true});
        })
    }

  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetupForm addMeetup={addMeetupHandler}/>
    </div>
  );
}

export default NewMeetupPage;
