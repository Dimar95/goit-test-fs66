import Card from "../../components/Card/Card";
import css from "./Tweets.module.css";
import { useState } from "react";

import { useGetAllUserApiQuery } from "../../redux/API/mockAPI";

const Tweets = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const { data } = useGetAllUserApiQuery(page);

  const onLoadMore = () => {
    setPage((prevState) => prevState + 1);
  };
  return (
    <div className="App">
      {data &&
        data.map((item) => {
          const { tweets, followers, avatar, id } = item;
          return (
            <Card
              tweets={tweets}
              followers={followers}
              avatar={avatar}
              key={id}
              id={id}
            />
          );
        })}
      <button className={css.button} onClick={onLoadMore}>
        Load More
      </button>
    </div>
  );
};
export default Tweets;
