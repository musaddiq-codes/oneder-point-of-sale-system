import * as React from 'react';
// import Button from '@mui/material/Button';
// import FormDialog from './FormsDialog';
import styles from './cardscontainer.module.css'
// import { NavLink } from 'react-router-dom';

export default function BasicCard(props) {
    return (
        <div className={styles.simplecardmotherdiv} style={{ backgroundColor: props.bgColor, }} color={props.bgColor} key={props.title}>
            <div className={styles.nesteddiv1}>
                <p>{props.heading}</p>
                <p className={styles.para2}>x Items</p>
            </div>
            {/* <div>
                    <FormDialog backColor={props.bgColor} />
                </div> */}
            {/* <div>
                    <NavLink to={props.card}>
                        Card{`: ${props.card}`}
                    </NavLink>
                </div> */}
        </div>
    );
}
