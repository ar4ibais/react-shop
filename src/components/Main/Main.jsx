import { useEffect, useContext } from 'react';

import { API_URL } from '../../config'
import { ShopContext } from '../../context';

import Preloader from '../Preloader/Preloader';
import GoodsList from '../GoodsList/GoodsList';
import Cart from '../Cart/Cart';
import BusketList from '../BusketList/BusketList';
import Alert from '../Alert/Alert';



const Main = () => {
    const {
        goods,
        setGoods,
        loading,
        order,
        isBusketShow,
        alertName
    } = useContext(ShopContext);

    useEffect(function getGoogs() {
        fetch(API_URL, {
            headers: {
                'Authorization': '76fe549f-c8db3a8f-ad8380b5-222d3cfd'
            }
        })
            .then(res => res.json())
            .then(json => {
                setGoods(json.shop.slice(0, 10));
            })
    }, []);

    return (
        <main className="main container">
            <Cart quantity={order} />
            {
                loading ? <Preloader /> : <GoodsList />
            }
            {
                isBusketShow && <BusketList />
            }
            {
                alertName && <Alert />
            }
        </main>
    );
}

export default Main;