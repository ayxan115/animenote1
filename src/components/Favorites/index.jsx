import { Editor } from "@tinymce/tinymce-react";
import styles from "./Favorites.module.scss";

export default function Favorites({ favItems }) {
  return (
    <div className={styles.Favorites}>
      <h2>Избраные</h2>
      <div className={styles.animeFav}>
        {favItems.length > 0 ? (
          <>
            {favItems.map((item) => (
              <div className={styles.animeFav_card}>
                <div className={styles.animeFav_left}>
                  <img src={item.img} alt="" />
                  <p>{item.name}</p>
                </div>
                <div className={styles.animeFav_right}>
                  <div className={styles.animeFav_interface}>
                    <Editor
                      apiKey="rqu34kolwstonk4z1mqwogs1ysudvvjwtgtctembhkp9kokx"
                      init={{
                        height: 250,
                        width: 700,
                        menubar: "file edit view",
                        toolbar: " blocks fontfamily fontsize ",
                        tinycomments_mode: "embedded",
                        tinycomments_author: "Author name",
                        mergetags_list: [
                          { value: "First.Name", title: "First Name" },
                          { value: "Email", title: "Email" },
                        ],
                        ai_request: (request, respondWith) =>
                          respondWith.string(() =>
                            Promise.reject("See docs to implement AI Assistant")
                          ),
                      }}
                      initialValue="Welcome to TinyMCE!"
                    />
                    <select className={styles.selector_web} name="choice">
                      <option value="jut.su">jut.su</option>
                      <option value="animedeiya.ru" selected>
                        animedeiya.ru
                      </option>
                      <option value="asd1.ru">asd1.ru</option>
                      <option value="asd2.ru">asd2.ru</option>
                      <option value="asd3.ru">asd3.ru</option>
                      <option value="asd4.ru">asd4.ru</option>
                    </select>
                    <span>Серия</span>
                    <select className={styles.selector_seri} name="choice">
                      <option value="first" selected>
                        1
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                  <div className={styles.buttons_fav}>
                    <button className={styles.btnFav_save}>
                      <img src="" alt="" />
                    </button>
                    <button className={styles.btnFav_delet}>
                      <img src="" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className={styles.emptyFav}>
            <h2>Пуста</h2>
          </div>
        )}
      </div>
    </div>
  );
}
