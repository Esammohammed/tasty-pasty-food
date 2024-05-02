
export default function Product({img, name, price, description, id}) {
    console.log(img)
    return  (
        <div className="meal-item">
            <article>
                <img src={`http://localhost:3000/${img}`} alt="meal" />
                <h3>{name}</h3>
                <h2 className="meal-item-price"> {price}</h2>
                <p className="meal-item-description" >{description} </p>
                <button className="button">Add to Cart</button>
            </article>
        </div>

    )
}