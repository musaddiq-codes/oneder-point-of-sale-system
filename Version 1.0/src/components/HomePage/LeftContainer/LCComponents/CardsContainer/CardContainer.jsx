import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import BasicCard from './SimpleCards';
import UpDownCards from './UpDownCards';
import { Stack } from '@mui/system'





export default function CardContainer() {

    const cardProperties = [
        {
            id: '1',
            heading: 'Table X',
            color: 'white',
            bgColor: '#AB2F3E'
        },
        {
            id: '2',
            heading: 'Table X',
            color: 'white',
            bgColor: '#583AAB'
        },
        {
            id: '3',
            heading: 'Table X',
            color: 'white',
            bgColor: '#77037A'
        },
        {
            id: '4',
            heading: 'Table X',
            color: 'white',
            bgColor: '#1E1F66'
        },
        {
            id: '',
            heading: 'Table X',
            color: 'white',
            bgColor: '#3D51B7'
        },
        {
            id: '',
            heading: 'Table X',
            color: 'white',
            bgColor: '#705E32'
        },
        {
            id: '',
            heading: 'Table X',
            color: 'white',
            bgColor: '#92154B'
        },
        {
            id: '',
            heading: 'Table X',
            color: 'white',
            bgColor: '#2B5A31'
        },
    ]

    return (
        <Box flex={2}>
            <Grid paddingY={1} container spacing={0.5}>
                {cardProperties.map((cardProp) =>
                    <BasicCard key={cardProp.id} heading={cardProp.heading} bgColor={cardProp.bgColor} discription={cardProp.discription} />
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

