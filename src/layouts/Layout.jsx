import styles from './Layout.module.css';

function Layout({children}) {
    return ( <>
        <header className={styles.header}>
            <h1>Book App</h1>
        </header>
        {children}
        <footer  className={styles.footer}>
            <h1>Developed by Morteza</h1>
        </footer>
    </> );
}

export default Layout;