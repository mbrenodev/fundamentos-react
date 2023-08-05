import { Post } from './components/Post'
import { Header }  from './components/Header'
import { Sidebar } from './components/Sidebar';

import styles from "./App.module.css"
import './global.css'


export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
              author="Fernanda Cardoso" 
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum architecto facilis mollitia dignissimos corrupti nemo aperiam veritatis. Aperiam magnam sequi obcaecati blanditiis, exercitationem eligendi corrupti repellat numquam natus accusamus nobis." 
          />
        </main>
      </div>
    </>
  );
}


