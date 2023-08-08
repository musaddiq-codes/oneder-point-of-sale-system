import * as React from 'react';
// import Button from '@mui/material/Button';
import FormDialog from './FormsDialog';
import styles from './cardscontainer.module.css'
// import { NavLink } from 'react-router-dom';  
// import { Button } from '@mui/material';

import { NavLink } from 'react-router-dom';

export default function BasicCard(props) {
    return (

        <NavLink to='/Dish' className={styles.simplecardmotherdiv} style={{ textDecoration: 'none', backgroundColor: props.bgColor }}>
            <div >

                <div className={styles.simplecardnesteddiv1}>
                    <p>{props.heading}</p>
                    <p className={styles.para2}>x Items</p>
                </div>
                <div>
                    <FormDialog backColor={props.bgColor} />
                </div>
                {/* <div>
                    <NavLink to={props.card}>
                    Card{`: ${props.card}`}
                    </NavLink>
                </div> */}
            </div>
        </NavLink>

    );
}
