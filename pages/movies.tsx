import Loader from "@/app/components/Loader";
import styles from "../app/styles/home.module.css";

export default function Movies() {
  return (
    <>
      <div className={styles.stars1}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
      <Loader />
    </>
  );
}
