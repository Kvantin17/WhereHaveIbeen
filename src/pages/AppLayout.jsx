import Map from "../components/Map";
import Sidebar from "../components/SideBar";
import User from "../components/User";
import styles from "./AppLayout.module.css";

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <User />
      <Map />
    </div>
  );
};
export default AppLayout;
