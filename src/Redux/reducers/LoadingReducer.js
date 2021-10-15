import { DISPLAY_LOADING, HIDE_API } from "../../utils/settings";
import { HIDE_LOADING, LOADING_API } from './../../utils/settings';

const stateDefault = {
    isLoading : false,
    isLoadingApi : true
}

export const LoadingReducer = (state = stateDefault, action) =>{
        switch (action.type) {

            case DISPLAY_LOADING : {
                state.isLoading = true;
                return {...state};
            }
            
            case HIDE_LOADING : {
                state.isLoading = false;
                return {...state};
            }

            case LOADING_API : {
                state.isLoadingApi = true;
                return {...state};
            }

            case HIDE_API : {
                state.isLoadingApi = false;
                return {...state};
            }
            
            default:
                return {...state};
        }
}


