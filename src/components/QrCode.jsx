import styles from "../styles/qrCode.module.css";
import codeImage from "../images/image-qr-code.png";


export default function QrCode(){
    return(
        <div className={styles.card}>
            <img src={codeImage} alt="Qr Code to frontend mentor"/>
            <h3>Improve your front-end skills by building projects</h3>
            <p>Scan the QR code to visit Frontend Mentor and 
                take your coding skills to the next level</p>
        </div>
    )
}