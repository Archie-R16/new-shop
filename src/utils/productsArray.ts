
type ProductProps = {
    id:number
    title: string
    desc: string
    type: string
    capasiti: string
    prais: number
}


const productsArray:ProductProps[] = [
    {
        id:1,
        title:'iPhone 14pro',
        desc:'Thes is iPhone 14pro',
        type:'phone',
        capasiti:'256',
        prais:1000
    },
    {
        id:2,
        title:'iPhone 13pro',
        desc:'Thes is iPhone 13',
        type:'phone',
        capasiti:'128',
        prais:500
    },
    {
        id:3,
        title:'iPhone 13',
        desc:'Thes is iPhone 13',
        type:'phone',
        capasiti:'64',
        prais:2000
    },
    {
        id:4,
        title:'iPhone 11pro',
        desc:'Thes is iPhone 11pro',
        type:'phone',
        capasiti:'256',
        prais:1000
    },
    {
        id:5,
        title:'iPhone 13pro Max',
        desc:'Thes is iPhone 13pro Max',
        type:'phone',
        capasiti:'512',
        prais:1500
    },
    {
        id:6,
        title:'iPhone X',
        desc:'Thes is iPhone X',
        type:'phone',
        capasiti:'64',
        prais:500
    },
]

export default productsArray
