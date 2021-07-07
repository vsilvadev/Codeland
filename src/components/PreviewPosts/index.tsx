import styles from"./styles.module.scss";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import { useState } from "react";

/*
  function handleToggleTaskCompletion(id: number) {
    // Altere entre `true` ou `false` o campo `isComplete` de uma task com dado ID
    const newTasks = tasks.map(task => {
      if(task.id === id && task.isComplete === false){
        task.isComplete = true;
      } else if (task.id === id && task.isComplete === true) {
        task.isComplete = false;
      }

      return task;
    })
 */

export function PreviewPosts() {
    const [like, setLike] = useState(false);

    //criar id pra cada um, handle percorrendo o array pelo id e substituindo o valor de likeStatus
    let templateData = [
        {
            title: "Titulo 1",
            likeStatus: like,
        },
        {
            title: "Titulo 2",
            likeStatus: like,
        },
        {
            title: "Titulo 3",
            likeStatus: like,
        }
    ]

    function handleLikes() {
        if (like) {
            setLike(false);
        } else {
            setLike(true);
        }
    }

    return (
        <div className={styles.container}>
            {templateData.map(template => {
                return(
                    <article className={styles.postContainer}>
                        <div className={styles.topContainer}>
                            <span>02 de jul, 2021</span>
                            <button onClick={handleLikes}>{template.likeStatus ? <AiFillHeart/> : <AiOutlineHeart/>}</button>
                        </div>
                        <h1>{template.title}</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at mauris eleifend fringilla. Cras felis arcu, fermentum eu facilisis nec, dignissim ac odio. Mauris consequat mattis lectus congue tempus. Etiam id mi quis est porttitor luctus. Morbi non pretium metus. Quisque enim metus, blandit id fermentum in, pulvinar a dui. Sed diam arcu, hendrerit fringilla nulla quis, porta dapibus eros. </p>
                    </article>
                )
            })}
            {/* <article className={styles.postContainer}>
                <div className={styles.topContainer}>
                    <span>02 de jul, 2021</span>
                    <button onClick={handleLikes}>{like ? <AiFillHeart/> : <AiOutlineHeart/>}</button>
                </div>
                <h1>Agora é oficial: O Windows 11 está vindo</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at mauris eleifend fringilla. Cras felis arcu, fermentum eu facilisis nec, dignissim ac odio. Mauris consequat mattis lectus congue tempus. Etiam id mi quis est porttitor luctus. Morbi non pretium metus. Quisque enim metus, blandit id fermentum in, pulvinar a dui. Sed diam arcu, hendrerit fringilla nulla quis, porta dapibus eros. </p>
            </article> */}

            {/* <article className={styles.postContainer}>
                <div className={styles.topContainer}>
                    <span>02 de jul, 2021</span>
                    <button onClick={handleLikes}>{like ? <AiFillHeart/> : <AiOutlineHeart/>}</button>
                </div>
                <h1>Agora é oficial: O Windows 11 está vindo</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at mauris eleifend fringilla. Cras felis arcu, fermentum eu facilisis nec, dignissim ac odio. Mauris consequat mattis lectus congue tempus. Etiam id mi quis est porttitor luctus. Morbi non pretium metus. Quisque enim metus, blandit id fermentum in, pulvinar a dui. Sed diam arcu, hendrerit fringilla nulla quis, porta dapibus eros. </p>
            </article>

            <article className={styles.postContainer}>
                <div className={styles.topContainer}>
                    <span>02 de jul, 2021</span>
                    <button onClick={handleLikes}>{like ? <AiFillHeart/> : <AiOutlineHeart/>}</button>
                </div>
                <h1>Agora é oficial: O Windows 11 está vindo</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at mauris eleifend fringilla. Cras felis arcu, fermentum eu facilisis nec, dignissim ac odio. Mauris consequat mattis lectus congue tempus. Etiam id mi quis est porttitor luctus. Morbi non pretium metus. Quisque enim metus, blandit id fermentum in, pulvinar a dui. Sed diam arcu, hendrerit fringilla nulla quis, porta dapibus eros. </p>
            </article> */}
        </div>
    );
}