import { useSelector } from "react-redux"

const Purchase = () => {
    const prods = useSelector(store => store.products);

    const prodItems = prods.map((prod, index) => {
        return (
            <option key={index}>{prod.pName} - ${prod.price}</option>
        )
    })

    return (
        <div className="col-sm-4 mr-3">
            <div className="card" style={{height: "300px"}}>
                <div className="card-body">
                    <h4 className="card-title">Purchase Component</h4>
                    <hr />
                    <select className="form-select" aria-label="default select example">
                        {prodItems}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Purchase;