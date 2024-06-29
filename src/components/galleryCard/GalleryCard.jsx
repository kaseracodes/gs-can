/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import styles from "./GalleryCard.module.css";

const VerticalDots = () => {
  return (
    <div className={styles.menuIcon}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
};

const GalleryCard = ({
  imagePath,
  logoPath,
  category,
  date,
  heading,
  description,
}) => {
  const navigate = useNavigate();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.mobileTopDiv}>
          <div className={styles.categoryDiv}>
            <img src={logoPath} alt="logo" />
            <div className={styles.innerDiv}>
              <h5 className={styles.category}>{category}</h5>
              <p className={styles.date}>{date}</p>
            </div>
          </div>

          <VerticalDots />
        </div>

        <div className={styles.imageDiv}>
          <img src={imagePath[0]} alt="image" />
        </div>

        <div className={styles.mobileImageDiv}>
          <Carousel responsive={responsive} showDots={true} arrows={false}>
            {imagePath.map((item, index) => (
              <div key={index} className={styles.image}>
                <img src={item} alt="image" />
              </div>
            ))}
          </Carousel>
        </div>

        <div className={styles.contentDiv}>
          <div className={styles.topDiv}>
            <img src={logoPath} alt="logo" />
            <div className={styles.innerDiv}>
              <h5 className={styles.category}>{category}</h5>
              <p className={styles.date}>{date}</p>
            </div>
          </div>

          <h3 className={styles.heading}>{heading}</h3>
          <p
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>

          <button className={styles.btn} onClick={() => navigate("/gallery")}>
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
