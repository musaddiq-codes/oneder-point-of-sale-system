import * as React from 'react';
// import Button from '@mui/material/Button';
import FormDialog from './FormsDialog';
import styles from './cardscontainer.module.css'
// import { NavLink } from 'react-router-dom';  
// import { Button } from '@mui/material';

import { NavLink } from 'react-router-dom';

const BasicCard = (props) => {

    // const handleClick = (setSelectCard) => {
    //     // setSelectCard(1)
    //     // console.log('button clicked')
    // }
    // console.log(setSelectCard)

    return (
        // <NavLink to='/Dish' className={styles.simplecardmotherdiv} style={{ textDecoration: 'none', backgroundColor: props.bgColor }}>
        <div className={styles.simplecardmotherdiv} style={{ textDecoration: 'none', backgroundColor: props.bgColor }} onClick={() => props.setSelectCard(props.index)}>
            <div className={styles.simplecardnesteddiv1}>
                <p>{props.heading}</p>
                <p className={styles.para2}>x Items</p>
                {/* <button onClick={() => setSelectCard(props.id)}>chang state</button> */}
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
        // </NavLink>

    );
}
export default BasicCard;