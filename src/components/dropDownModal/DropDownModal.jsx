/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./DropDownModal.module.css";

const DropDownModal = ({ modalContents, width }) => {
  return (
    <div className={styles.container} style={{ width: width }}>
      {modalContents.map((item, index) => (
        <Link to={item.link} className={styles.anchor} key={index}>
          {item.desc}
        </Link>
      ))}
    </div>
  );
};

export default DropDownModal;
