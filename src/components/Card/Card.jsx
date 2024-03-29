import css from "./Card.module.css";
import Logo from "../../images/Logo.png";
import User from "../User/User";
import { useDispatch, useSelector } from "react-redux";
import { addFollow, removeFollow } from "../../redux/slice/sliceUser";
import { userFollowingSelector } from "../../redux/selector/selector";
import { useState } from "react";
import { useUpdateUserMutation } from "../../redux/API/mockAPI";

const Card = ({ tweets, followers, avatar, id, filterStatus }) => {
  const userFollowing = useSelector(userFollowingSelector);
  const dispatch = useDispatch();
  const [updateFollow] = useUpdateUserMutation(id);

  const [followStatus, setFollowStatus] = useState(() => {
    const item = userFollowing.indexOf(id);
    if (item === -1) {
      return false;
    } else {
      return true;
    }
  });

  const onFollow = () => {
    const item = userFollowing.indexOf(id);
    if (item === -1) {
      dispatch(addFollow(id));
      updateFollow({ id, followers: followers + 1 });
      setFollowStatus(true);
    } else {
      dispatch(removeFollow(item));
      setFollowStatus(false);
      updateFollow({ id, followers: followers - 1 });
    }
  };

  if (filterStatus === "showAll") {
    return (
      <div className={css.cardContainer}>
        <div className={css.backgroundImageContainer}>
          <img className={css.logo} alt="logo" src={Logo} />
        </div>
        <div className={css.border}></div>
        <div className={css.bottomContainer}>
          <User tweets={tweets} followers={followers} avatar={avatar} />
          <button
            type="button"
            className={css.button}
            onClick={onFollow}
            style={{ backgroundColor: followStatus ? "#5CD3A8" : "#EBD8FF" }}
          >
            {followStatus ? "FOLLOWING" : "FOLLOW"}
          </button>
        </div>
      </div>
    );
  } else if (filterStatus === "follow") {
    if (!followStatus) {
      return (
        <div className={css.cardContainer}>
          <div className={css.backgroundImageContainer}>
            <img className={css.logo} alt="logo" src={Logo} />
          </div>
          <div className={css.border}></div>
          <div className={css.bottomContainer}>
            <User tweets={tweets} followers={followers} avatar={avatar} />
            <button
              type="button"
              className={css.button}
              onClick={onFollow}
              style={{ backgroundColor: followStatus ? "#5CD3A8" : "#EBD8FF" }}
            >
              {followStatus ? "FOLLOWING" : "FOLLOW"}
            </button>
          </div>
        </div>
      );
    }
    return;
  } else if (filterStatus === "followings") {
    if (followStatus) {
      return (
        <div className={css.cardContainer}>
          <div className={css.backgroundImageContainer}>
            <img className={css.logo} alt="logo" src={Logo} />
          </div>
          <div className={css.border}></div>
          <div className={css.bottomContainer}>
            <User tweets={tweets} followers={followers} avatar={avatar} />
            <button
              type="button"
              className={css.button}
              onClick={onFollow}
              style={{ backgroundColor: followStatus ? "#5CD3A8" : "#EBD8FF" }}
            >
              {followStatus ? "FOLLOWING" : "FOLLOW"}
            </button>
          </div>
        </div>
      );
    }
  } else {
    return;
  }
};
export default Card;
