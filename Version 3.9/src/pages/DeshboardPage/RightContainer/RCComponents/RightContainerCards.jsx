import React, { useState } from 'react'
// import { Button, Typography } from '@mui/material'
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import rightinnercards from './rightinner.module.css'
 
const RightContainerCards = () => {
    const [count, setCount] = useState(0)

    return (
        <div className={rightinnercards.rccardsmotherdiv}>
            <div className={rightinnercards.cardsnesteddiv1}>
                <div className={rightinnercards.cardsnesteddiv1nesteddiv1}>
                    <p className={rightinnercards.nesteddiv1nesteddiv1p1}>1</p>
                    <p className={rightinnercards.nesteddiv1nesteddiv1p2}>Allo Chat</p>
                    {/* <h5 style={{ marginLeft: '10px', backgroundColor: '#6A0646', fontSize: 'small' }}>O</h5> */}
                </div>
                <div className={rightinnercards.nesteddiv1nesteddiv2}>
                    <button onClick={() => setCount(count + 1)} className={rightinnercards.cardsbutton} >+</button>
                    <p >{count}</p>
                    <button onClick={() => setCount(count - 1)} className={rightinnercards.cardsbutton}>-</button>
                    {/* <div >
                        <button>
                            <DeleteOutlineOutlinedIcon sx={{ backgroundColor: '#0D1026', color: 'black', fontSize: "15px" }} />
                        </button>
                    </div> */}
                </div>
            </div>
            <div className={rightinnercards.nesteddiv2}>
                $ 150
            </div>
        </div>
    )
}

export default RightContainerCards


// import React, { useState } from 'react'
// import { Typography } from '@mui/material'
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


// const RightContainerCards = () => {
//     const [count, setCount] = useState(0)

//     return (
//         <div style={{ height: '80px', backgroundColor: '#0D1026', display: "flex", justifyContent: 'space-between' }}>
//             <div>
//                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                     <h6 style={{ marginLeft: '10px' }}>1</h6>
//                     <h5 style={{ marginLeft: '10px' }}>Allo Chat</h5>
//                     <h5 style={{ marginLeft: '10px', backgroundColor: '#6A0646', fontSize: 'small' }}>O</h5>
//                 </div>
//                 <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px', paddingRight: '10px' }}>
//                     <div style={{ marginLeft: '15px' }}>
//                         <button onClick={() => setCount(count + 1)} style={{ width: '20px', backgroundColor: '#212240' }} >+</button>
//                     </div>
//                     <div style={{ marginLeft: '20px' }}>
//                         <Typography sx={{ padding: 0 }} variant='h6' component='body2' className="count">{count}</Typography>
//                     </div>
//                     <div style={{ marginLeft: '20px' }}>
//                         <button onClick={() => setCount(count - 1)} style={{ width: '20px', backgroundColor: '#212240' }}>-</button>
//                     </div>
//                     <div style={{ marginLeft: '20px' }} >
//                         <button>
//                             <DeleteOutlineOutlinedIcon sx={{ backgroundColor: '#0D1026', color: 'black', fontSize: "15px" }} />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 $ 150
//             </div>
//         </div>
//     )
// }

// export default RightContainerCards;
