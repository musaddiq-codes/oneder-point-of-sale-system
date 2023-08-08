import BasicCard from './SimpleCards';
import UpDownCards from './UpDownCards';
import simpleCardProperties from '../../../../../data/mockapis/deshboardcards'
import stylesforcontainers from './cardscontainer.module.css'
import { useState } from 'react';

export default function CardContainer() {
    const [selectCard, setSelectCard] = useState('2')
    return (
        <>
            <div className={stylesforcontainers.nesteddiv1aftermother}>
                {simpleCardProperties.map((cardProp, index) =>
                    <BasicCard setSelectCard={setSelectCard} key={index} heading={cardProp.heading} bgColor={cardProp.bgColor} discription={cardProp.discription} card={cardProp.card} index={index} />
                )}

                {/* <p>{cardProp.chaildCards.map(prop => prop.heading)}</p> */}

                {/* <p>{simpleCardProperties[1].chaildCards[0].heading}</p> */}
                {simpleCardProperties[selectCard].chaildCards.map(prop =>
                    <UpDownCards cardProp={prop.heading} />
                )

                    // {simpleCardProperties.map((cardProp) =>
                    //     cardProp.chaildCards.map(prop =>
                    //         <UpDownCards cardProp={prop.heading} />
                    //     )
                    // <p>{cardProp.chaildCards[0].heading}</p>
                    // <UpDownCards cardProp={cardProp} />


                }

                {/* {simpleCardProperties.map((cardProp) => (
                    <UpDownCards key={cardProp.id} heading={cardProp.heading} bgColor={cardProp.bgColor} discription={cardProp.discription} />
                ))} */}
            </div>
        </>
    );
}



// import BasicCard from './SimpleCards';
// import UpDownCards from './UpDownCards';
// import simpleCardProperties from '../../../../../data/mockapis/deshboardcards'
// import stylesforcontainers from './cardscontainer.module.css'

// export default function CardContainer() {
//     return (
//         <>

//             <div className={stylesforcontainers.nesteddiv1aftermother}>
//                 {simpleCardProperties.map((cardProp, index) =>
//                     <BasicCard key={index} heading={cardProp.heading} bgColor={cardProp.bgColor} discription={cardProp.discription} card={cardProp.card} />
//                 )}

//                 {/* <p>{simpleCardProperties[1].chaildCards[0].heading}</p> */}
//                 {simpleCardProperties.map((cardProp) =>

//                     // <p>{cardProp.chaildCards.map(prop => prop.heading)}</p>
//                     cardProp.chaildCards.map(prop =>
//                         <UpDownCards cardProp={prop.heading} />
//                     )

//                     // <p>{cardProp.chaildCards[0].heading}</p>
//                     // <UpDownCards cardProp={cardProp} />
//                 )}



//                 {/* {simpleCardProperties.map((cardProp) => (
//                     <UpDownCards key={cardProp.id} heading={cardProp.heading} bgColor={cardProp.bgColor} discription={cardProp.discription} />
//                 ))} */}
//             </div>
//         </>
//     );
// }

