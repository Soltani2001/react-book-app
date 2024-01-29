import { IoSearch } from "react-icons/io5";
import styles from './SearchBox.module.css'

function SearchBox({search, setSearch,searchHandeler}) {

    return ( 
        <div className={styles.container}>
            <input 
                value={search}
                onChange={e=>setSearch(e.target.value.toLowerCase())}
                type="text"
                placeholder="Search title" />

            <button onClick={searchHandeler}><IoSearch /></button>
        </div>
     );
}

export default SearchBox;