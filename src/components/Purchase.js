import { useDispatch, useSelector } from "react-redux"

const Purchase = () => {
    const prods = useSelector(store => store.products);

    const prodItems = prods.map((prod, index) => {
        return (
            <option value={prod.price} key={index}>{prod.pName} - ${prod.price}</option>
        )
    });

    const dispatch = useDispatch();
    
    const prodHandler = (e) => {
        const text = (e.target.options[e.target.selectedIndex].innerHTML);
        const price = parseFloat(e.target.value);
        // console.log(text);
        // console.log(typeof(price));
        const prodObj = {text, price};
        // console.log(prodObj);
        dispatch({type: "ADD", payLoad: prodObj});
    }

    return (
        <div className="col-sm-4 mr-3">
            <div className="card" style={{height: "300px"}}>
                <div className="card-body">
                    <h4 className="card-title">Purchase Component</h4>
                    <hr />
                    <select onChange={prodHandler} className="form-select" aria-label="default select example">
                        {prodItems}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Purchase;