import { useState, useEffect, useContext } from 'react';
import { API_URL } from '../../config'
import Preloader from '../Preloader/Preloader';
import GoodsList from '../GoodsList/GoodsList';
import Cart from '../Cart/Cart';
import BusketList from '../BusketList/BusketList';
import Alert from '../Alert/Alert';

import { ShopContext } from '../../context';


const Main = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBusketShow, setBusketShow] = useState(false);
    const [alertName, setAlertName] = useState('');


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

        setAlertName(item.displayName)
    }

    const removeFromBusket = (itemId) => {
        const newOrder = order.filter(item => item.mainId !== itemId);
        setOrder(newOrder);
    }

    const handleBusketShow = () => {
        setBusketShow(!isBusketShow)
    }

    const incQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.mainId === itemId) {
                // console.log(newOrder);
                const newQuantity = el.quantity + 1
                return {
                    ...el,
                    quantity: newQuantity
                }
            } else {
                return el;
            }
        })

        setOrder(newOrder)
    };

    const decQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.mainId === itemId) {
                const newQuantity = el.quantity - 1
                return {
                    ...el,
                    quantity: newQuantity >= 1 ? newQuantity : 1
                }
            } else {
                return el;
            }
        });
        setOrder(newOrder)
    };

    const closeAlert = () => {
        setAlertName('')
    }

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

    return (
        <main className="main container">
            <Cart quantity={order} handleBusketShow={handleBusketShow} />
            {
                loading ? <Preloader /> : <GoodsList goods={goods} addToBusket={addToBusket} />
            }
            {
                isBusketShow && <BusketList
                    order={order}
                    handleBusketShow={handleBusketShow}
                    removeFromBusket={removeFromBusket}
                    decQuantity={decQuantity}
                    incQuantity={incQuantity}
                />
            }
            {
                alertName && <Alert name={alertName} closeAlert={closeAlert} />
            }
        </main>
    );
}

export default Main;