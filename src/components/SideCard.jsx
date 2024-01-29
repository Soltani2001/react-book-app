import styles from './SideCard.module.css'


function SideCard({data: {image, title}}) {
    return (<>
        <div className={styles.card} >
            <img src={image} alt="cover" />
            <h3>{title}</h3>
        </div>
        </>
    
    );
}

export default SideCard;