import Link from "next/link";
import { useRouter } from "next/router";
export default function NavBar() {
  //loation에 관한 정보를 얻을 수 있다.
  const router = useRouter();
  return (
    <nav>
      {/* using Link! 리로드되는걸 방지한다. style 혹은 className은 a Tag 에서 작업한다. */}
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: #d8005a;
        }
      `}</style>
    </nav>
  );
}
