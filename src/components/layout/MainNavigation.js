import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];


function MainNavigation() {
    return <header className={classes.header}>
        <div className={classes.logo}> React Meetup</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'> All Meetup </Link>
                    </li>
                    <li>
                        <Link to='/favorite'> My Favorite </Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'> New Meetup </Link>
                    </li>
                </ul>
            </nav>

    </header>
}

export default MainNavigation;