import css from "./Home.module.css";
import prew from "../../images/prew.jpg";
import { BsLinkedin, BsGithub } from "react-icons/bs";
const Home = () => {
  return (
    <div className={css.mainPage}>
      <div className={css.infoContainer}>
        <h1 className={css.textHeader}>
          Test task of junior front-end developer <br /> Dmytro Kornilov
        </h1>
        <p className={css.description}>
          The web application works with the user database and draws user cards.{" "}
          <br />
          Allows you to subscribe to a specific user.
          <br /> Retains state after page reload.
          <br /> Filter user cards on the page
        </p>
        <ul className={css.contactUl}>
          <li className={css.contactLi}>
            <a
              target="_blank"
              rel="noreferrer"
              className={css.contactLink}
              href="https://www.linkedin.com/in/dmytro-kornilov/"
            >
              <BsLinkedin className={css.icon} />
              <span>Linkedin</span>
            </a>
          </li>
          <li className={css.contactLi}>
            <a
              className={css.contactLink}
              href="https://github.com/Dimar95"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className={css.icon} /> <span>GitHub</span>
            </a>
          </li>
        </ul>
      </div>
      <div className={css.preview}>
        <img src={prew} alt="preview card" />
      </div>
    </div>
  );
};
export default Home;
