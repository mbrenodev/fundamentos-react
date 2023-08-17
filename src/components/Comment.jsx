import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0)
  
  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }


  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/mbrenodev.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcio Breno</strong>
              <time title='05 do Agosto as 09:25h' dateTime="2023-08-05 09:25:00">Cerca 1h atras</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentario'>
              <Trash size={24} />
            </button>

          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>

    </div>
  )
}