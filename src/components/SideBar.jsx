import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      {/* по сути тег outlet что-то схожее с children 
      на место этого тега вставляется то что мы вставляем в Route, который вложен в Route */}

      <Outlet />
      <p>List of cities</p>
      <footer className={styles.footer}></footer>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </div>
  );
};

export default Sidebar;
