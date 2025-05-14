
export const filterReducer = (state, action) =>{
    const {type, payload} = action;

    switch (type) {
        case "PRODUCT_LIST":
            return {productList: payload.products};
    
        case "SORT-BY":
            return {...state, sortBy: payload};
        
        case "RATINGS":
            return {...state, ratings: payload.ratings};
        
        case "BEST_SELLERS_ONLY":
            return {...state, bestSellerOnly: payload.bestSellerOnly};

        case "ONLY_IN_STOCK":
            return{...state, onlyInStock: payload.onlyInStock};
        
        case "CLEAR_FILTER":
            return{...state,
                onlyInStock: false,
                bestSellerOnly: false,
                sortBy:null,
                ratings:null
            }
           
    }
}