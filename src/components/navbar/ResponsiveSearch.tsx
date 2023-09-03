import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "~/navbar/responsive-search.module.scss";
export default function ResponsiveSearch() {
  return (
    <div className={`flex justify-end flex-0 ml-3 ${style["search-box"]}`}>
      <button className={style["btn-search"]}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <input
        type="text"
        className={style["input-search"]}
        placeholder="بحث..."
      />
    </div>
  );
}
