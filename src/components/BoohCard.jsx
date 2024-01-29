import { useState } from "react";
import { IoIosHeart } from "react-icons/io";

import styles from './BookCard.module.css'

function BookCard({data , handelLikedList} ) {
    const {author,country,image, language, link, pages, title, year}= data;
    const [like, setLike]= useState(false)
    const likeHandeler =()=>{

        handelLikedList( data, like)
        // console.log(liked);
        setLike((like)=> !like)   
    }
    return ( <>
    <div className={styles.card}>
    <img src={image} alt="cover" />
        <div className={styles.info}>
            <h3>{title}</h3>
            <p>{author}</p>
            <div>
                <span>{language} </span>
                <span>{pages} pages </span>
                
            </div>
        </div>
        <button onClick={likeHandeler}><IoIosHeart color={like? "red" : "#e0e0e0"} fontSize="1.8rem" /></button>
    </div>
    {/* <div border ="red">sss</div> */}
     
    </> );
}

export default BookCard;