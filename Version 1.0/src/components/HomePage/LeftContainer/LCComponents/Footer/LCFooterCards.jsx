import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Paper } from '@mui/material';

export default function FooterCards() {
    return (
        <div style={{
            width: '260px',
            backgroundColor: '#0D1026',
            paddingLeft: '5px',
            paddingRight: '5px',
            borderRadius: '10',
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <div style={{
                width: "60px",
                backgroundColor: '#1E3380',
            }}>
                <h4 style={{
                    marginTop: '8px',
                    marginLeft: '2px'
                }}>Table 1</h4>
            </div>
            <div style={{
                width: "200px",
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '4px'
            }}>
                <div >
                    <p style={{ display: 'inline' }}>Amrit R</p>
                    <p style={{
                        display: 'inline',
                        marginLeft: '30px',
                        borderRadius: '8px',
                        backgroundColor: '#439435',
                        padding: '3px'
                    }}>Kitchen </p>
                </div>
                <div>
                    <p style={{
                        fontSize: '10px',
                        display: 'inline',
                        marginLeft: '5px'

                    }}>3 items --</p>
                    <p style={{
                        fontSize: '10px',
                        display: 'inline',
                        marginLeft: '5px'

                    }}>Kitchen 6:25:23 PM</p>
                </div>
            </div>
        </div>
    );
}
