// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import { Grid, Paper } from '@mui/material';
import React, { useState } from 'react'
import HeaderAppBarB from './HeaderContainerB/HeaderAppBarB';

import HomePageB from './HomePageB/HomePageB';
// import styled from '@emotion/styled';
// import Button from '@mui/material/Button';
// import styles from './sectioncontainer.module.css'

// import { Outlet } from "react-router-dom"

// const MainGrid = styled(Grid)({
//     display: 'flex',
//     justifyContent: 'space-between',
//     backgroundColor: 'pink'
// })
export default function SectionContainer(props) {

    return (<>
        {/*  <div key={props.id} style={{ width: '75%', height: '90vh', backgroundColor: 'black' }}> */}
        <HeaderAppBarB />
        <HomePageB />
        {/* <Outlet /> */}

        {/* <div key={props.id} className={styles.leftcontainers}> */}
        {/* <div style={{ backgroundColor: props.bgColor, display: 'flex', justifyContent: 'space-between', padding: '15px', margin: '2px', borderRadius: '5px' }} color={props.bgColor} key={props.id} >
                <div style={{ paddingLeft: '10px', display: "flex", flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Typography color='white' variant='body2' component="p">{props.heading}</Typography>
                    <Typography color='white' variant='body2' component="p">{props.heading}</Typography>
                    </div>
                    
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingRight: '5px' }}>
                    <div>
                    <button onClick={() => setCount(count + 1)} style={{ width: '25px' }}>+</button>
                    </div>
                    <div>
                    <Typography sx={{ paddingX: .5 }} variant='h6' component='body2' className="count">{count}</Typography>
                    </div>
                    <div>
                    <button onClick={() => setCount(count - 1)} style={{ width: '25px' }}>-</button>
                    </div>
                    </div>
                </div> */}
        {/* </div> */}
    </>
    );
}


// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Grid, Paper } from '@mui/material';
// import React, { useState } from 'react'
// import styled from '@emotion/styled';

                        // const MainGrid = styled(Grid)({
                        //     display: 'flex',
                        //     justifyContent: 'space-between',
                        //     // padding: '0 10px'
                        //     backgroundColor: 'pink'
                        // })




// export default function UpDownCards(props) {
//     const [count, setCount] = useState(0)
//     return (

//         <MainGrid item xs={3} key={props.id} spacing={0.5}>

//             <Box>
//                 <Typography variant='h6' component="h4">X- Times</Typography>
//             </Box>


//             <Box>
//                 <Box>
//                     <Button onClick={() => setCount(count + 1)}>Up</Button>
//                 </Box>
//                 <Box>
//                     <Typography variant='h6' component='h4' className="count">{count}</Typography>
//                 </Box>
//                 <Box>
//                     <Button onClick={() => setCount(count - 1)}>Down</Button>
//                 </Box>
//             </Box>

//         </MainGrid>
//     );
// }
