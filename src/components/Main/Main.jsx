import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../../config'
import Preloader from '../Preloader/Preloader';
import GoodsList from '../GoodsList/GoodsList';
import Cart from '../Cart/Cart';
import BusketList from '../BusketList/BusketList';


const Main = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBusketShow, setBusketShow] = useState(false);

    useEffect(function getGoogs() {
        fetch(API_URL, {
            headers: {
                'Authorization': '76fe549f-c8db3a8f-ad8380b5-222d3cfd'
            }
        })
            .then(res => res.json())
            .then(json => {
                json.shop && setGoods(json.shop.slice(0, 10));
                setLoading(false);
            })
    }, []);

    const addToBusket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.mainId === item.mainId);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })

            setOrder(newOrder);
        }
    }

    const handleBusketShow = () => {
        setBusketShow(!isBusketShow)
    }

    return (
        <main className="main container">
            <Cart quantity={order} handleBusketShow={handleBusketShow} />
            {
                loading ? <Preloader /> : <GoodsList goods={goods} addToBusket={addToBusket} />
            }
            {
                isBusketShow && <BusketList order={order} handleBusketShow={handleBusketShow} />
            }
        </main>
    );
}

export default Main;