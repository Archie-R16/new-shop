
type ProductProps = {
    title: string
    desc: string
    type: string
    capasiti: string
    prais: number
}


const productsArray:ProductProps[] = [
    {
        title:'iPhone 14pro',
        desc:'Thes is iPhone 14pro',
        type:'phone',
        capasiti:'256',
        prais:1000
    },
    {
        title:'iPhone 13pro',
        desc:'Thes is iPhone 13',
        type:'phone',
        capasiti:'128',
        prais:500
    },
    {
        title:'iPhone 13',
        desc:'Thes is iPhone 13',
        type:'phone',
        capasiti:'64',
        prais:2000
    },
    {
        title:'iPhone 11pro',
        desc:'Thes is iPhone 11pro',
        type:'phone',
        capasiti:'256',
        prais:1000
    },
    {
        title:'iPhone 13pro Max',
        desc:'Thes is iPhone 13pro Max',
        type:'phone',
        capasiti:'512',
        prais:1500
    },
    {
        title:'iPhone X',
        desc:'Thes is iPhone X',
        type:'phone',
        capasiti:'64',
        prais:500
    },
]

export default productsArray
