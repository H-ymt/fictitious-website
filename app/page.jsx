import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <h1>Next.js13</h1>
      <Link href="/about">about page</Link>
    </>
  );
}
