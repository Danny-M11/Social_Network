import React from 'react';
import AddPostForm from './AddPostForm/AddPostForm';
import Post from './Post/Post';
import cls from './Posts.module.css'

const Posts = React.memo((props) => {
    
    let PostsElements = props.postsData.map(m => <Post message={m.message} likes={m.likesCount} reposts={m.repostsCount} avaAdress={m.avaAdress} />)

    return (
        <div className={cls.posts__wrapper}>
            {PostsElements}
            <AddPostForm textareaValue={props.textareaValue} addPost={props.addPost} />
        </div>
    )
})

export default Posts