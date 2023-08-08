
import React, { useState } from 'react'
import styles from './cardscontainer.module.css'

export default function UpDownCards(props) {
    const [count, setCount] = useState(0)
    return (

        <div className={styles.updownmotherdiv} key={props.id} style={{ backgroundColor: props.bgColor, }} color={props.bgColor}>
            <div className={styles.nesteddiv1}>
                <p style={{ backgroundColor: 'red' }}>{props.chaildCards}</p>
                <p>{props.cardProp}</p>
            </div>
            <div className={styles.nesteddiv2}>
                <button onClick={() => setCount(count + 1)} className={styles.buttonStyles}>+</button>
                <p className={styles.paragraphStyles}>{count}</p>
                <button onClick={() => setCount(count - 1)} className={styles.buttonStyles}>-</button>
            </div>
        </div>
    );
}

