import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  const className = clsx(isOnline ? css.online : css.offline);
  return (
    <>
      <div className={css.friendListItem}>
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
        <p className={className}>{isOnline ? "Online" : "Offline"}</p>
      </div>
    </>
  );
};

export default FriendListItem;
