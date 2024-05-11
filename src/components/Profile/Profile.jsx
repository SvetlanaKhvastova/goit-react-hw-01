import css from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <>
      <div className={css.profileWrapper}>
        <div className={css.profileInfo}>
          <img src={image} alt="User avatar" />
          <p className={css.profileName}>{name}</p>
          <p className={css.profileTag}>@{tag}</p>
          <p className={css.profileLocation}>{location}</p>
        </div>

        <ul className={css.profileList}>
          <li>
            <span>Followers</span> <span>{stats.followers}</span>
          </li>
          <li>
            <span>Views</span> <span>{stats.views}</span>
          </li>
          <li>
            <span>Likes</span> <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
