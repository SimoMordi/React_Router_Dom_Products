import { useState } from "react"


const Products = () => {
    const [product, setProduct] = useState([]);
    const [productName, setProductName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState()


    const handleSubmit = (e) => {

        e.preventDefault()

        const newProduct = {
            name: productName,
            describe: description,
            pricing: price
        }
        setProductName("")
        setDescription("")
        setPrice(0)
        setProduct([...product, newProduct])
    }

    const handleName = (e) => setProductName(e.target.value)

    const handleDescription = (e) => setDescription(e.target.value)

    const handlePrice = (e) => setPrice(e.target.value)


    const ProductList = product.map((item) =>
        (
            <li>
                <div>{item.name}</div>
                <div>{item.describe}</div>
                <div>{item.pricing}</div>
            </li>
        )
    )


    return (

        <>
            <form onSubmit={handleSubmit}>

                <input onChange={handleName} value={productName} type="text" placeholder="Product Name" />
                <input onChange={handleDescription} value={description} type="text" placeholder="Description" />
                <input onChange={handlePrice} value={price} type="number" placeholder="$ Price" />
                <button>Submit</button>
            </form>
            <ul>
                {ProductList}
            </ul>
        </>

    )
}

export default Products