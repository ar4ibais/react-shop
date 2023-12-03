export function Reducer(state, { type, payload }) {
    switch (type) {
        case "SET_GOODS":
            return {
                ...state,
                goods: payload || [],
                loading: false
            }
        case "CLOSE_ALERT":
            return {
                ...state,
                alertName: ''
            }
        case "REMOVE_FROM_BUSKET":
            return {
                ...state,
                order: state.order.filter(item => item.mainId !== payload.id)
            }
        case "TOGGLE_BUSKET":
            return {
                ...state,
                isBusketShow: !state.isBusketShow
            }
        case "INCREMENT_QUANTITY":
            return {
                ...state,
                order: state.order.map(el => {
                    if (el.mainId === payload.id) {
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
            }
        case "DECREMENT_QUANTITY":
            return {
                ...state,
                order: state.order.map(el => {
                    if (el.mainId === payload.id) {
                        const newQuantity = el.quantity - 1
                        return {
                            ...el,
                            quantity: newQuantity >= 1 ? newQuantity : 1
                        }
                    } else {
                        return el;
                    }
                })
            }
        case "ADD_TO_BUSKET": {
            const itemIndex = state.order.findIndex(orderItem => orderItem.mainId === payload.mainId);

            let newOrder = null
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1
                }
                newOrder = [...state.order, newItem]
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1
                        }
                    } else {
                        return orderItem;
                    }
                })
            }

            return {
                ...state,
                order: newOrder,
                alertName: payload.displayName
            }
        }
        default:
            return state
    }
}