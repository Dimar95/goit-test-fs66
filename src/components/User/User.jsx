import css from "./User.module.css";

const User = ({ tweets, followers, avatar }) => {
  const onFornatingFollowers = (followers) => {
    const followersToStrint = followers.toString();
    if (followersToStrint.length < 3) {
      return followersToStrint;
    }
    return `${followersToStrint.slice(0, 2)},${followersToStrint.slice(
      3,
      followers.toString().length
    )}`;
  };

  return (
    <>
      <div className={css.avatarContainer}>
        <img className={css.avatar} alt="avatar" src={avatar} />
      </div>

      <p className={css.userDesc}>{`${tweets} TWEETS`}</p>
      <p className={css.userDesc}>{`${onFornatingFollowers(
        followers
      )} FOLLOWERS`}</p>
    </>
  );
};
export default User;
