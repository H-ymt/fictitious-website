import React from "react";
import styles from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "../Button/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src="/next.svg" width={140} height={28} className={styles.logo} />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.contactList}>
          <li className={styles.contactTel}>
            <Link href="tel:000-0000-0000">
              <SecondaryButton text="000-0000-0000" />
            </Link>
          </li>
          <li className={styles.contactButton}>
            <Link href="/">
              <PrimaryButton text="Contact" />
            </Link>
          </li>
        </ul>

        <ul className={styles.navList}>
          <Link href="/">
            <li className={styles.navItem}>Top</li>
          </Link>
          <Link href="/about">
            <li className={styles.navItem}>About</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
