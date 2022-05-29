const initialState = {
    users: [],
    loadingState: true,
    currentUser: {},
    currentUserId: 0,
    userPosts: [],
    currentPost: {},
    comments: [],
    postId: ''
};

const reducer = (state=initialState, action) => {
    switch ( action.type ) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.payload,
                loadingState: false
            }
        case 'SET_CURRENT_USER':
            function findUser (array, id) {
                const  currentUser = array.find(item => item.id === +id);
                return currentUser
            }
            return {
                ...state,
                currentUserId: +action.payload,
                currentUser: findUser(action.array, action.payload),
                loadingState: false
            }
        case 'GET_POSTS':
            function findPosts (array, id) {
                const  currentUserPosts = array.filter(item => item.userId === id);
                return currentUserPosts
            }
            return {
                ...state,
                userPosts: findPosts(action.payload, state.currentUserId),
            }
        case 'SET_LOADING':
            return {
                ...state,
                loadingState: true
            }
        case 'GET_CURRENT_POST':
            return {
                ...state,
                currentPost: action.payload,
            }
        case 'GET_COMMENTS':
            return {
                ...state,
                comments: action.payload,
                loadingState: false
            }
        case 'PUSH_POST_ID':
            return {
                ...state,
                postId: action.payload
            }
        case 'DROP_ALL':
            return {
                ...initialState
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;