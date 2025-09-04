import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>Что это за сайт?</h1>
      <p className={styles.aboutText}>
        Лягушки – это амфибии с коренастым телом, выпученными глазами и гладкой
        кожей, которые могут прыгать, плавать и лазать благодаря сильным задним
        лапам. Они охотятся с помощью своего длинного, липкого языка, а
        благодаря перепонкам на лапах и слизистой коже хорошо чувствуют себя как
        в воде, так и на суше. Зимой лягушки впадают в спячку, зарываясь в ил на
        дне водоемов.
      </p>
    </div>
  );
};

export default AboutPage;
