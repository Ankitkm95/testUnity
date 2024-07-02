import * as types from './actionTypes';

const initState = {
    isLoading: false,
    data: []
}

const reducer = (oldState = initState, action) => {
    const {type, payload} = action;
    switch(type){
        case types.FETCH_DATA_LOADING:{
            return {
                ...oldState,
                isLoading: true,
                data: []
            }
        }
        case types.FETCH_DATA_SUCCESS:{
            return {
                ...oldState,
                isLoading: false,
                data: payload
            }
        }
        case types.FETCH_DATA_ERROR: {

        }
        default:{
            return {
                ...oldState,
                isLoading: false,
                data: payload
            }
        }
    }
};

export default reducer;