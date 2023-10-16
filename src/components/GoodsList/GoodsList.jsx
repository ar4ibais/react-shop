import GoodsItem from "../GoodsItem/GoodsItem";

const GoodsList = (props) => {
    const { goods = [], addToBusket = Function.prototype } = props;
    if (!goods.length) {
        return <h3>Nothing here...</h3>
    }
    return (
        <div className="goods">
            {
                goods.map(item => (
                    <GoodsItem key={item.mainId} {...item} addToBusket={addToBusket} />
                ))
            }
        </div>
    )
}

export default GoodsList;