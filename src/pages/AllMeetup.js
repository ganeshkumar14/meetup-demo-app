import { useState, useEffect } from 'react';
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupPage() {
  const [isLoading, setLoading] = useState(true);
  const [loadedMeetup, setLoadedMeetup] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://meetup-demo-app-245bb-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json')
    .then(response => {
      return response.json()
    })
    .then(data => {
      const meetups = [];

      for(const key in data) {
        const meetup = {
          id: key,
          ...data[key],
        }
        meetups.push(meetup);
      }
      setLoading(false)
      setLoadedMeetup(meetups)
    })
  }, [])

  if(isLoading) {
    return <section>Loading....</section>
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetup} />
    </section>
  );
}

export default AllMeetupPage;
