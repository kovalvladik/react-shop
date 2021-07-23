
export function reducer (state,{type,payload}){
    switch (type){
        case 'TRANSFORM_BUTTON':
        return {
            ...state,
            order: state.order.map((el)=> {
                if (el.id === payload.id) {
                    if (el.quantity > 0 ){
                        return {
                            ...el,
                            buttonShow: false
                        }
                    } else {
                        return el
                    }

                } else {
                    return el
                }
            })


        }
        case 'GET_ITEM':
            return {
                ...state,
                items: payload || [],
                loading:false,
            }

        case 'ADD_TO_BASKET':
             {
                 const goodIndex = state.order.findIndex((orderGood) => orderGood.id === payload.id)
                 let newOrder = null
                if (goodIndex < 0) {
            const newGood = {
                ...payload,
                quantity: 1,
            }
            newOrder = [...state.order,newGood]
        } else {
            newOrder = state.order.map((orderGood, index) => {
                if (index === goodIndex) {
                    return {
                        ...orderGood,
                        quantity: orderGood.quantity + 1,
                    }
                } else {
                    return orderGood
                }
            })
        }
                return {
                    ...state,
                    order: newOrder,
                    alertName: payload.name
                }
            }

        case 'REMOVE_ELEMENT':
            return {
                ...state,
                order: state.order.map((el)=>{
                    if (el.id === payload.id) {
                        const newQantity = el.quantity - 1;
                        return{
                            ...el,
                            quantity : newQantity >= 0 ? newQantity : 0,
                        }
                    }else{
                        return el
                    }
                })
            }

        case 'ADD_ELEMENT':
            return {
                ...state,
                order: state.order.map((el)=> {
                    if (el.id === payload.id) {
                        const newQantity = el.quantity + 1;
                        return {
                            ...el,
                            quantity: newQantity
                        }
                    } else {
                        return el
                    }
                })
            }

        case 'HANDLE_BASKET_SHOW':
            return {
                ...state,
                basketShow: !state.basketShow
            }

        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter((el)=> el.id !== payload.id)
            }

        case 'CLOSE_ALERT':
            return{
                ...state,
                alertName:''
            }

        default:
            return state
    }
}