import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'
type Props = {}

const ProductsListItems = (props: Props) => {
    return (
        <Card>
            <CardContent className="product">
                <div className="product-title">iPhone X</div>
                <div className="product-dec">Thes is iPone X</div>
                <div className="product-features">
                    <span>Type:</span> phone
                </div>
                <div className="product-features">
                    <span>Capasity:</span> 64Gb
                </div>
                <div className="product-price">
                    <span>Praice:</span>500$
                </div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItems