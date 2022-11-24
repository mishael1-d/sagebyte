import Image from "next/image";
import styles from "../../styles/Footer.module.css";
function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.services}>
          <p>recruit.</p>
          <p>sell.</p>
          <p>nuture.</p>
          <p>educate.</p>
          <p>help.</p>
          <p>capture info.</p>
          <p>gather feedback.</p>
          <p>a/b test.</p>
        </div>
        <div className={styles.servicesDown}>
          <p>brand page.</p>
          <p>broadcast pod.</p>
          <p>hero stats.</p>
          <p>mission maps.</p>
          <p>pea armoury.</p>
          <p>power labeus.</p>
        </div>
        <div className={styles.footerBottomContent}>
          <div className={styles.img}>
            <Image src="/assets/logo2.png" alt width="36" height="36" />
          </div>
          <ul>
            <h3>PRODUCT.</h3>
            <li>Peabox.tv</li>
            <li>
              Workday Guide <sup>New</sup>
            </li>
            <li>Power-up / Pricing</li>
          </ul>
          <ul>
            <h3>
              ARM YOUR PEAS! <br />
              (from templates)
            </h3>
            <li>
              Peabox (owned):
              <p>- Notion</p>
              <p>- Evernote</p>
            </li>
            <li>Typeform (owned)</li>
            <li>SurveyMoneky (owned)</li>
            <li>Landbot (owned)</li>
          </ul>
          <ul>
            <h3>INTEGRATIONS.</h3>
            <li>
              Chrome Extentions:
              <p>- For Linkedin</p>
              <p>- For Gmail</p>
            </li>
          </ul>
          <ul>
            <h3>RESOURCES.</h3>
            <li>Our Pea Story</li>
            <li>How-to-Heroes!</li>
            <li>Pea Vlog</li>
            <li>Peabox Originals</li>
            <li>Pea Community</li>
            <li>Pea Merch</li>
            <li>FAQs</li>
            <li>System Status</li>
            <li>Developers / APO</li>
          </ul>
          <ul>
            <h3>GET TO KNOW US.</h3>
            <li>About US</li>
            <li>
              Career Heros <sup>We are Hiring!</sup>
            </li>
            <li>Contact Us</li>
            <li>News in Peas</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomLinks}>
            <div>
              <Image
                src="/assets/location-icon.png"
                alt=""
                width="16"
                height="16"
              />
              <p style={{ marginLeft: "10px", textDecoration: "underline" }}>
                With love, from London
              </p>
            </div>
            <div>
              <Image src="/assets/web-icon.png" alt width="16" height="16" />
              <p style={{ marginLeft: "10px", marginRight: "10px" }}>English</p>
              <Image src="/assets/arrow-down.png" alt width="8" height="6" />
            </div>
            <p style={{ textDecoration: "underline" }}>Cookie Settings</p>
          </div>
          <p>&copy; peabox</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
