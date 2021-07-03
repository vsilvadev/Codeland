import styles from"./styles.module.scss";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";

export function PreviewPosts() {
    return (
        <div className={styles.container}>
            <article className={styles.postContainer}>
                <div className={styles.topContainer}>
                    <span>02 de jul, 2021</span>
                    <p><AiFillHeart/></p>
                </div>
                <h1>Agora é oficial: O Windows 11 está vindo</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at mauris eleifend fringilla. Cras felis arcu, fermentum eu facilisis nec, dignissim ac odio. Mauris consequat mattis lectus congue tempus. Etiam id mi quis est porttitor luctus. Morbi non pretium metus. Quisque enim metus, blandit id fermentum in, pulvinar a dui. Sed diam arcu, hendrerit fringilla nulla quis, porta dapibus eros. </p>
            </article>

            <article className={styles.postContainer}>
                <div className={styles.topContainer}>
                    <span>02 de jul, 2021</span>
                    <p><AiFillHeart/></p>
                </div>
                <h1>Agora é oficial: O Windows 11 está vindo</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at mauris eleifend fringilla. Cras felis arcu, fermentum eu facilisis nec, dignissim ac odio. Mauris consequat mattis lectus congue tempus. Etiam id mi quis est porttitor luctus. Morbi non pretium metus. Quisque enim metus, blandit id fermentum in, pulvinar a dui. Sed diam arcu, hendrerit fringilla nulla quis, porta dapibus eros. </p>
            </article>

            <article className={styles.postContainer}>
                <div className={styles.topContainer}>
                    <span>02 de jul, 2021</span>
                    <p><AiFillHeart/></p>
                </div>
                <h1>Agora é oficial: O Windows 11 está vindo</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at mauris eleifend fringilla. Cras felis arcu, fermentum eu facilisis nec, dignissim ac odio. Mauris consequat mattis lectus congue tempus. Etiam id mi quis est porttitor luctus. Morbi non pretium metus. Quisque enim metus, blandit id fermentum in, pulvinar a dui. Sed diam arcu, hendrerit fringilla nulla quis, porta dapibus eros. </p>
            </article>
        </div>
    );
}