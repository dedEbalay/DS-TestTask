const setUsers = ( users ) => {
    return {
        type: 'SET_USERS',
        payload: users
    }
}

const getPosts = (posts) => {
    return {
        type: 'GET_POSTS',
        payload: posts
    }
}

const setCurrentUser = (array, id) => {
    return {
        type: 'SET_CURRENT_USER',
        payload: id,
        array
    }
}

const getUser = (id) => {
    return {
        type: 'GET_USER',
        payload: id
    }
}

const setLoading = () => {
    return {
        type: 'SET_LOADING'
    }
}

const getCurrentPost = (post) => {
    return {
        type: 'GET_CURRENT_POST',
        payload: post
    }
}

const getComments = (comments) => {
    return {
        type: 'GET_COMMENTS',
        payload: comments
    }
}

const pushPostId = (id) => {
    return {
        type: 'PUSH_POST_ID',
        payload: id
    }
}

const dropAll = () => {
    return {
        type: 'DROP_ALL'
    }
}

export {
    setUsers,
    getPosts,
    setCurrentUser,
    getUser,
    setLoading,
    getCurrentPost,
    getComments,
    pushPostId,
    dropAll
}