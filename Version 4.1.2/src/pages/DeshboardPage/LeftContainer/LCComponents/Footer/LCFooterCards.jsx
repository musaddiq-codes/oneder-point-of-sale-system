import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Grid, Paper } from '@mui/material';
// import styles from './LCFooterCards.css'
import styles from './leftcontainerfootercards.module.css'

export default function FooterCards() {
    return (
        <div className={styles.leftcontainerfootercardsmotherdiv}>
            <div style={{padding:'2px'}}>
                <div style={{
                    borderRadius:'5px',
                    paddingLeft:"1px",
                    width: "60px",
                    backgroundColor: '#1E3380',
                }}>
                    <p style={{
                        fontSize:'15px',
                        marginTop: '4px',
                        marginLeft: '2px',
                        padding:'3px'
                    }}>Table 1</p>
                </div>
                <div style={{
                    width: "200px",
                    // display: 'flex',
                    // flexDirection: 'column',
                    marginLeft: '4px'
                }}>
                    {/* <div style={{display:'flex',justifyContent:'space-between'}}>
                        <p style={{ display: 'inline' }}>Amrit R</p>
                        <p style={{
                            display: 'inline',
                            marginLeft: '30px',
                            borderRadius: '8px',
                            backgroundColor: '#439435',
                            padding: '3px'
                        }}>Kitchen </p>
                    </div> */}
                    <div>
                        <p style={{
                            fontSize: '10px',
                            display: 'inline',
                            marginLeft: '2px'

                        }}>3 items --</p>
                        <p style={{
                            fontSize: '10px',
                            display: 'inline',
                            marginLeft: '5px'

                        }}>Kitchen 6:25:23 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
