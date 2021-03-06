import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from '../actions/types'

const initalState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
}
export default(state = initalState, action) => {
  const {type, payload} = action

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      }
    case GET_POST:

      return {
        ...state,
        post: payload,
        loading: false
      }
    case ADD_POST:
      console.log('reducer add post payload', payload)
      return {
        ...state,
        posts: [
          payload, ...state.posts
        ],
        loading: false
      }
    case DELETE_POST:
      console.log('reducer deletepost posts', state.posts, 'post', state.post, 'payload', payload)
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== payload),
        loading: false
      }
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    case UPDATE_LIKES:
      console.log('updatelikes state.posts', state.posts)
      return {
        ...state,
        posts: state.posts.map(post => post._id === payload.id ? {
              ...post,
              likes: payload.likes
            }: post),
        loading: false
      }
    case ADD_COMMENT:
      console.log('state.post', state.post)
      return {
        ...state,
        post: {
          ...state.post,
          comments: payload
        },
        loading: false
      }
    case REMOVE_COMMENT:
        console.log('removecomment state.post.comments',state.post)
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(comment => comment._id !== payload)
        },
        loading: false,
        
      };
    default:
      return state
  }
}