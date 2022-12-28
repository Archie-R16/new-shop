import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { Component } from 'react'
import './ProductsListItem.scss'
type Props = {
    title: string
    desc: string
    type: string
    capasiti: string
    prais: number
    image: string
}

class ProductsListItem extends Component<Props> {
    render() {
        return (
            <Card className="product" variant="outlined">
                <CardContent>
                    <div className="product-image">
                        <img src={this.props.image} alt="" />
                    </div>
                    <div className="product-title">{this.props.title}</div>
                    <div className="product-dec">{this.props.desc}</div>
                    <div className="product-features">
                        <span>Type:</span>
                    </div>
                    <div className="product-features">
                        <span>Capasity:</span> {this.props.capasiti}Gb
                    </div>
                    <div className="product-price">
                        <span>Praice:</span>
                        {this.props.prais}$
                    </div>
                    <div className="product-quantity">
                        <Button variant="outlined">-</Button>
                        <TextField value="1" size="small" />
                        <Button variant="outlined">+</Button>
                    </div>
                </CardContent>
                <CardActions className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}
// const ProductsListItems = ({
//     title,
//     desc,
//     type,
//     capasiti,
//     prais,
//     image,
// }: Props) => {

// }

export default ProductsListItem
