import Card from "./../Card";
import { useState } from "react";
import styles from "./Home.module.scss";

function Home({
  items,
  FavoritAdd,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
}) {
  const [category, setCategory] = useState(null);

  const filteredItems = category
    ? items.filter((item) => item.category === category)
    : items;

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  return (
    <div className={styles.home}>
      <div className={styles.home_header}>
        <h2>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все Аниме"}
        </h2>
        <div className={styles.search_block}>
          <img src="/img/search.svg" alt="search" />
          {searchValue && (
            <img
              className={styles.removeBtn}
              onClick={() => setSearchValue("")}
              src="/img/btn-remove.svg"
              alt="remove"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.anime_items}>
          {filteredItems
            .filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.img}
                seri={item.seri}
                FavoritAdd={(obj) => FavoritAdd(obj)}
              />
            ))}
        </div>
        <ul className={styles.catigori}>
          <li onClick={() => handleCategoryClick(null)}>All</li>
          <li onClick={() => handleCategoryClick("Приключения")}>
            Приключения
          </li>
          <li onClick={() => handleCategoryClick("Экшин")}>Экшин</li>
          <li onClick={() => handleCategoryClick("тшлыфв")}>тшлыфв</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
