export const initialState ={
    user:null,
    playlists: [],
    playing: false,
    item: null,
    //Remove after finished developing... just for the debugging purpose
    // token: "BQD2CmlgELvCtsv9L3r3XWSriR5WnR_1Ggl39Y55heyspOp7NCDqSDhqsB_TFQvcu-ry494bb_tZ_413rhKFlOIkrF7m9HssOdS_oCe-7AkfQXwI9x92-ThK9lS-9TWxcrXsjWWXUJkMfQsQWewmWc0NMq7JMRfcBFv3OzRGgtQQXzb7PDJK",
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            }

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }    
        
        default:
            return state;    
    }
}

export default reducer;