import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";
import { useContext } from "react";

function MeetupItem(props) {
   
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavoriteHandler(props.id);

  function favoriteHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavoriteHandler(props.id);
    } else {
      favoritesCtx.addFavoriteHandler({
        id: props.id,
        title: props.title,
        image: props.image,
        description: props.description,
        address: props.address
      })
    }
    
  }

  const { title, address, description, image } = props;
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address> {address} </address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={favoriteHandler}> {itemIsFavorite ? 'Remove Favorite' : 'To Favorite'} </button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
