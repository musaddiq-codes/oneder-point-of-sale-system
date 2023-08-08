import { Grid } from '@mui/material';
// import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import BasicCard from './SimpleCards';
// import UpDownCards from './UpDownCards';
// import { Stack } from '@mui/system'
import simpleCardProperties from '../../../../../data/mockapis/simpleCards'




export default function CardContainer() {

    return (
        <Box flex={2}>
            <Grid paddingY={1} container spacing={0.5}>
                {simpleCardProperties.map((cardProp, index) =>
                    <BasicCard key={index} heading={cardProp.heading} bgColor={cardProp.bgColor} discription={cardProp.discription} card={cardProp.card} />
                )}
            </Grid>

            {/* <Grid paddingY={1} container spacing={0.5}>
                {cardProperties.map((cardProp) =>
                    <UpDownCards key={cardProp.id} heading={cardProp.heading} bgColor={cardProp.bgColor} discription={cardProp.discription} />
                )}
            </Grid> */}
        </Box>
    );
}

