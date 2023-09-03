import { socialItems } from "@/store/social";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import style from "~/navbar/social.module.scss";

export default function NavSocial() {
  const socialList = socialItems.filter(
    (ele) => ele.title === "facebook" || ele.title === "youtube"
  );
  const contactItems = socialList.map((item) => {
    return (
      <li key={item.id}>
        <Link href={item.link} target="blank">
          {item.title === "facebook" ? (
            <FontAwesomeIcon icon={faFacebook} id={style["facebook-icon"]} />
          ) : (
            <FontAwesomeIcon icon={faYoutube} id={style["youtube-icon"]} />
          )}
        </Link>
      </li>
    );
  });
  return <ul id={style["social-items"]}>{contactItems}</ul>;
}
