import Container from '@mui/material/Container'
import Home from 'container/pages/Home/Home'

type Props = {}

const Main = (props: Props) => {
    return (
        <Container maxWidth="lg">
            <Home />
        </Container>
    )
}

export default Main
