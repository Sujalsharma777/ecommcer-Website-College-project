const ProductReducer = (states, action) => {
    /* if (action.type === "Loading_Api") {
        return (
            ...states,
            isLoading: true,
        )
    }
    if (action.type === "Api_Error") {
        return (
            ...states,
            isLoading: false,
            isError: true,
        )
    } */
    switch (action.type) {
        case "Loading_Api":
            return {
                ...states,
                isLoading: true,
            }
        case "Set_Api_Data":
            const Arrived = action.payload.filter((curele) => {
                return curele.latestArrived === true;

            })

            return {
                ...states,
                isLoading: true,
                products: action.payload,
                latestArrived: Arrived,

            }



        case "Api_Error":
            return {
                ...states,
                isLoading: false,
                isError: true,
            }

        default:
            return states;

    }

}
export default ProductReducer;