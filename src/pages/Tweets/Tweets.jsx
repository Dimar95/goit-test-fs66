import Card from "../../components/Card/Card";
import css from "./Tweets.module.css";
import { useState } from "react";

import { useGetAllUserApiQuery } from "../../redux/API/mockAPI";
import { Link } from "react-router-dom";

const Tweets = () => {
  const [page, setPage] = useState(3);
  const [filterStatus, setFilterStatus] = useState("showAll");
  const { data, error } = useGetAllUserApiQuery(page);

  const onLoadMore = () => {
    setPage((prevState) => prevState + 3);
  };

  const Filter = {
    ALL: "showAll",
    FOLLOW: "follow",
    FOLLOWINGS: "followings",
  };
  const handleChange = (evt) => {
    const { value } = evt.currentTarget;
    setFilterStatus(value);
  };
  return (
    <div className={css.section}>
      <div className={css.container}>
        <div className={css.bar}>
          <Link
            className={css.button}
            style={{ textDecoration: "none", margin: 0 }}
            to={"/"}
          >
            Go Back
          </Link>
          <div>
            <label className={css.label}>
              Show All
              <input
                className={css.radio}
                type="radio"
                checked={filterStatus === Filter.ALL}
                name="status"
                value={Filter.ALL}
                onChange={(evt) => handleChange(evt)}
              />
            </label>
            <label className={css.label}>
              Follow
              <input
                type="radio"
                className={css.radio}
                checked={filterStatus === Filter.FOLLOW}
                name="status"
                value={Filter.FOLLOW}
                onChange={(evt) => handleChange(evt)}
              />
            </label>
            <label className={css.label}>
              Followings
              <input
                className={css.radio}
                type="radio"
                checked={filterStatus === Filter.FOLLOWINGS}
                name="status"
                value={Filter.FOLLOWINGS}
                onChange={(evt) => handleChange(evt)}
              />
            </label>
          </div>
        </div>
        <div className={css.gridContainer}>
          {error && <div>{error.message}</div>}
          {data &&
            data.map((item) => {
              const { tweets, followers, avatar, id } = item;
              return (
                <Card
                  filterStatus={filterStatus}
                  tweets={tweets}
                  followers={followers}
                  avatar={avatar}
                  key={id}
                  id={id}
                />
              );
            })}
        </div>
        <button className={css.button} onClick={onLoadMore}>
          Load More
        </button>
      </div>
    </div>
  );
};
export default Tweets;
