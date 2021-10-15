import { LAYDANHSACHRAP } from "../../utils/settings";

const stateDefault = {
    heThongRap: []
}

export const HeThongRapReducer = (state = stateDefault,action)=>{
    switch (action.type) {

        case LAYDANHSACHRAP : {
            state.heThongRap = [...action.payload];
            return {...state}
        }

        default:
            return {...state};
    }
}