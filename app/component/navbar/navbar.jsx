import React from "react";
import styles from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import Button from "../button/button";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src="/next.svg" width={100} height={20} />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.contactList}>
          <li className={styles.contactTel}>
            <Link href="/">000-0000-0000</Link>
          </li>
          <li className={styles.contactButton}>
            <Button href="/" text="Contact" />
          </li>
        </ul>

        <ul className={styles.gnavList}>
          <Link href="/">
            <li className={styles.gnavItem}>Top</li>
          </Link>
          <Link href="/about">
            <li className={styles.gnavItem}>About</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
