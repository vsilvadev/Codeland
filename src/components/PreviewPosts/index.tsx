import styles from"./styles.module.scss";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";

export function PreviewPosts() {
    let postsTemplate = [
        {
            id: 1,
            title: "Titulo 1",
            likeStatus: false,
        },
        {
            id: 2,
            title: "Titulo 2",
            likeStatus: false,
        },
        {
            id: 3,
            title: "Titulo 3",
            likeStatus: false,
        }
    ]

    const [posts, setPosts] = useState(postsTemplate);    
    const {theme} = useTheme();

    function handleLikes(id: number) {
        const newPosts = posts.map(post => {
        if(post.id === id && post.likeStatus === false){
            post.likeStatus = true;
        } else if (post.id === id && post.likeStatus === true) {
            post.likeStatus = false;
        }

        return post;
        })

        setPosts(newPosts);
    }

    return (
        <div id={styles.container} className={theme ==="light" ? styles.light : styles.dark}>
            {posts.map(post => {
                return(
                    <article key={post.id} className={styles.postContainer}>
                        <div className={styles.topContainer}>
                            <span>02 de jul, 2021</span>
                            <button onClick={() => handleLikes(post.id)}>{post.likeStatus ? <AiFillHeart/> : <AiOutlineHeart/>}</button>
                        </div>
                        <h1>{post.title}</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at mauris eleifend fringilla. Cras felis arcu, fermentum eu facilisis nec, dignissim ac odio. Mauris consequat mattis lectus congue tempus. Etiam id mi quis est porttitor luctus. Morbi non pretium metus. Quisque enim metus, blandit id fermentum in, pulvinar a dui. Sed diam arcu, hendrerit fringilla nulla quis, porta dapibus eros. </p>
                    </article>
                )
            })}
        </div>
    );
}