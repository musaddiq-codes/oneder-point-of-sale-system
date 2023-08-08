import React, { useState } from 'react'
import styles from './cardscontainer.module.css'

export default function UpDownCards(props) {
    const [count, setCount] = useState(0)
    return (
        <div className={styles.updownmotherdiv} key={props.id} style={{ backgroundColor: props.bgColor, }} color={props.bgColor}>
            <div>
                <p>{props.heading}</p>
                <p>{props.heading}</p>
            </div>
            <div>
                <button onClick={() => setCount(count + 1)} style={{ width: '25px' }}>+</button>
                <p sx={{ paddingX: .5 }}>{count}</p>
                <button onClick={() => setCount(count - 1)} style={{ width: '25px' }}>-</button>
            </div>
        </div>
    );
}

