import { connect } from 'react-redux';
import { addPost } from '../../../redux/ProfileReducer';
import Posts from './Posts';

let mapStateToProp = (state) => {
    return{
        profileWallpapers : state.profileState.profileWallpapers, 
        postsData : state.profileState.postsData,
        textareaValue : state.profileState.textareaValue
    }
}

const PostsContainer = connect(mapStateToProp, {addPost})(Posts)

export default PostsContainer
