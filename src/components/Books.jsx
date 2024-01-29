import { useState } from 'react';
import {books as bookData} from '../constants/mockData'
import BookCard from './BoohCard';
import SideCard from './SideCard';
import styles from './Books.module.css'
import SearchBox from './SearchBox';



function Book() {
    const [books, setBooks ] = useState(bookData)
    const [liked, setLiked]= useState([])
    const [search, setSearch]= useState([])


    const handelLikedList =(book , status)=>{
        // console.log({book, status});
        if(status){
            const newLikedList = liked.filter(i=> i.id !== book.id);
            setLiked(newLikedList)
            // console.log(liked);
        }else{
            setLiked(liked=>[...liked, book])
            // console.log(liked);
        }
    }

    const searchHandeler =()=>{
        if (search){
            const newBooks = bookData.filter(book => book.title.toLocaleLowerCase().includes(search))
            setBooks(newBooks)
        }else{
            setBooks(bookData)
        }
    }

    return ( <>
    <SearchBox search={search} setSearch={setSearch} searchHandeler={searchHandeler} />
    <div className={styles.container}>
        <div className={styles.cards}>
            {books.map(book => (
            <BookCard 
            key={book.id} 
            data={book} 
            handelLikedList={handelLikedList} 
    />))}
    </div>
        {!!liked.length && 
            <div className={styles.favorite}>
                <h4>Favorites</h4>
                {liked.map(book=> <SideCard key={book.id} data={book} />)}</div>}
            </div>

    </> );
}

export default Book;