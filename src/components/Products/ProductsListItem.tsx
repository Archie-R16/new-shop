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
type State = {
    count: number
}

class ProductsListItem extends Component<Props, State> {
    state = {
        count: 1,
    }

    onIncrement = () => {
        this.setState((prevState: State) => ({
            count: prevState.count + 1,
        }))
    }
    render() {
        const { title, desc, type, capasiti, prais, image } = this.props
        return (
            <Card className="product" variant="outlined">
                <CardContent>
                    <div className="product-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="product-title">{title}</div>
                    <div className="product-dec">{desc}</div>
                    <div className="product-features">
                        <span>Type:</span>
                        {type}
                    </div>
                    <div className="product-features">
                        <span>Capasity:</span> {capasiti}Gb
                    </div>
                    <div className="product-price">
                        <span>Praice:</span>
                        {prais}$
                    </div>
                    <div className="product-quantity">
                        <Button variant="outlined">-</Button>
                        <TextField value={this.state.count} size="small" />
                        <Button
                            variant="outlined"
                            onClick={() => this.onIncrement()}
                        >
                            +
                        </Button>
                    </div>
                </CardContent>
                <CardActions className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}

export default ProductsListItem
