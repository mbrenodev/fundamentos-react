import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar(){
  return (
    <>
      <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=50"/>

        <div className={styles.profile}>
          <Avatar src="https://github.com/mbrenodev.png"/>
          <strong>Marcio</strong>
          <span>Web developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  )
}