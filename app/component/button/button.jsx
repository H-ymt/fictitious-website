import React from "react";
import styles from "./button.module.scss";
import Link from "next/link";

const Button = ({ href, text }) => {
  return (
    <Link href={href}>
      <button className={styles.primaryButton}>{text}</button>
    </Link>
  );
};

export default Button;
