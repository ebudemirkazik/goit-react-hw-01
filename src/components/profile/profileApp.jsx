import styles from './profile.module.css'

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles['profile-card']}>
      <div className={styles['profile-top']}>
        <img src={image} alt="User avatar" width="100" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={styles['profile-stats']}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
