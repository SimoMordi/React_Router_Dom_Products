import { useState } from "react"


const Products = () => {
    const [products, setProducts] = useState([
        { id: 11, name: 'Laptop', price: 2000 },
        { id: 22, name: 'Iphone', price: 1000 },
        { id: 33, name: 'AirPods', price: 200 }
        ])

    const addProduct = (e) => {
        e.preventDefault()

    }

    return (
        <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button>Submit</button>
        </div>
    )
}

export default Products