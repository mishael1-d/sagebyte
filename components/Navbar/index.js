import styles from "../../styles/Navbar.module.css";
import Image from "next/image";
import Buttons from "../Buttons";
function index() {
  return (
    <div className="navbar-wrapper">
      <div className={styles.navbarContainer}>
        <div className="logo">
          <Image src="/assets/logo1.png" alt="Peabox" width="182" height="42" />
        </div>
        <Buttons variant="small" text="START" />
      </div>
    </div>
  );
}

export default index;
