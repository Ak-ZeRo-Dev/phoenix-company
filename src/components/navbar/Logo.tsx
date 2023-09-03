import Image from "next/image";
import Link from "next/link";
import style from "~/navbar/logo.module.scss";
import logo from "#/images/logo/logo.png";

export default function Logo() {
  return (
    <Link href="/" id={style["logo"]}>
      <Image
        id={style["logo-img"]}
        width={50}
        height={50}
        src={logo}
        alt="شركة فينكس"
      />
    </Link>
  );
}
