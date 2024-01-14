import styles from "./Card.module.scss";

function Card({ img, seri, name, id, FavoritAdd }) {
  const onClickFavorite = () => {
    FavoritAdd({ name, img, seri, id });
  };

  return (
    <div className={styles.anime_card}>
      <img src={img} alt="" />
      <div className={styles.anime_down}>
        <div className="anime_title">
          <p>{name}</p>
          <span>серий: {seri}</span>
        </div>
        <button onClick={onClickFavorite} className={styles.btn}>
          <img src="" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Card;
