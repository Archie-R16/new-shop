import { Grid } from '@mui/material'
import productsArray from 'utils/productsArray'
import ProductsListItem from './ProductsListItem'

type ProductProps = {
    title: string
    desc: string
    type: string
    capasiti: string
    prais: number
}

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={4}
            >
                {productsArray.map(
                    ({ title, desc, type, capasiti, prais }: ProductProps) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <ProductsListItem
                                title={title}
                                desc={desc}
                                type={type}
                                capasiti={capasiti}
                                prais={prais}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
