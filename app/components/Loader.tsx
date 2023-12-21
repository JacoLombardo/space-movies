import Image from "next/image";
import styles from "../styles/home.module.css";

export default function Loader() {
  return (
    <>
      <div className={styles.planets}>
        <div className={styles.initialPlanet}>
          <Image
            src={"/Media/Icons/earth.png"}
            title="Earth"
            alt="earth"
            width={50}
            height={50}
            sizes="100vw"
            className={styles.loader_planet}
          />
        </div>
        <div className={styles.rocket}>
          {" "}
          <Image
            src={"/Media/Icons/rocket2-rotated.png"}
            title="Rocket"
            alt="rocket"
            width={80}
            height={80}
            sizes="100vw"
            className={styles.loader_planet}
          />
        </div>
        <div className={styles.firstPlanet}>
          <Image
            src={"/Media/Icons/saturn.png"}
            title="Saturn"
            alt="saturn"
            width={50}
            height={50}
            sizes="100vw"
            className={styles.loader_planet}
          />
        </div>
        <div className={styles.secondPlanet}>
          <Image
            src={"/Media/Icons/jupiter.png"}
            title="Jupiter"
            alt="jupiter"
            width={50}
            height={50}
            sizes="100vw"
            className={styles.loader_planet}
          />
        </div>
        <div className={styles.thirdPlanet}>
          <Image
            src={"/Media/Icons/venus.png"}
            title="Venus"
            alt="venus"
            width={50}
            height={50}
            sizes="100vw"
            className={styles.loader_planet}
          />
        </div>
      </div>
    </>
  );
}
