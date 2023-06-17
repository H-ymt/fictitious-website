import React from "react";
import styles from "./Button.module.scss";

export const PrimaryButton = ({ text }) => {
  return <button className={`${styles.primaryButton} ${styles.button}`}>{text}</button>;
};

export const SecondaryButton = ({ text }) => {
  return <button className={`${styles.secondaryButton} ${styles.button}`}>{text}</button>;
};
