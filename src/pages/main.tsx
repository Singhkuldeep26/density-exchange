import { colors } from "@mui/material";
import MovingBox from "../components/MovingBox";
import Navbar from "../components/Navbar";
import VerticalLinearStepper from "../components/Stepper";
import styles from "./main.module.css";

const Main = () => {

    return <>
    <div id="main" className={styles.main}>
        <div className={styles.leftdiv}>
            <p className={styles.p}> Find talent </p>
            <p className={styles.p}> For designer </p>
            <p className={styles.p}> Inspiration </p>
            <p className={styles.p}> Learn design </p>
            <p className={styles.p}> Go Pro </p>
        </div>
        <div className={styles.rightdiv} style={{paddingLeft:'10px'}}>
            
            <span className={styles.p}>Log in</span>
            <span className={styles.p}>Sign Up</span>
            <span style={{height:'30px',width:'150px',textAlign:'center',padding:'auto',color:'white',borderRadius:'30px' ,background:'black'}} className={styles.span}>Hire Creatives</span>
            
        </div>
    </div>
        <Navbar/>
        <VerticalLinearStepper/>

        <MovingBox/>
    </>

}

export default Main;