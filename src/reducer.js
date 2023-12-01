export function Reducer(state, { type, payload }) {
    switch (type) {
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
        default:
            return state
    }
}