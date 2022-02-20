import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";
export default function NavBar() {
  //loation에 관한 정보를 얻을 수 있다.
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      {/* using Link! 리로드되는걸 방지한다. style 혹은 className은 a Tag 에서 작업한다. */}
      <Link href="/">
        <a
          className={[
            styles.links,
            router.pathname === "/" ? styles.active : "",
          ].join(" ")}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={`${styles.link}  ${
            router.pathname === "/about" ? styles.active : ""
          }`}
        >
          About
        </a>
      </Link>
    </nav>
  );
}
