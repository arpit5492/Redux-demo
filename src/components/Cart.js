import { useSelector } from "react-redux";

const Cart = () => {
    const prods = useSelector(store => store.cart);
    return (
        <div className="col-sm-4 mr-3">
            <div className="card" style={{height: "300px"}}>
                <div className="card-body">
                    <h4 className="card-title">Cart Component</h4>
                    <hr />
                    {prods.map((prod, index) => {
                        return (
                            <li key={index}>{prod}</li>
                        )  
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cart;