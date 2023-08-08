import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import BasicCard from './SimpleCards';

// import Container from '@mui/material/Container';
// import UpDownCards from './UpDownCards';
// import { Stack } from '@mui/system'

import sectionbproperties from '../../../../../../data/mockapis/sectionB'

export default function CardContainer() {

    return (

        <Box flex={2}>
            <Grid paddingY={1} container spacing={0.5}>
                {sectionbproperties.map((cardProp, index) =>
                    <BasicCard key={index} heading={cardProp.heading} bgColor={cardProp.bgColor} discription={cardProp.discription} card={cardProp.card} />
                )}
            </Grid>

            {/* <Grid paddingY={1} container spacing={0.5}>
                {simpleCardProperties.map((cardProp) =>
                    <UpDownCards key={cardProp.id} heading={cardProp.heading} bgColor={cardProp.bgColor} discription={cardProp.discription} />
                )}
            </Grid> */}
        </Box>
    );
}

