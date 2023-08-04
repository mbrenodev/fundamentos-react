import {Post} from './Post'
import { Header }  from './components/Header'
import './global.css'


export function App() {
  return (
    <>
      <Header />
      <Post 
          author="Fernanda Cardoso" 
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum architecto facilis mollitia dignissimos corrupti nemo aperiam veritatis. Aperiam magnam sequi obcaecati blanditiis, exercitationem eligendi corrupti repellat numquam natus accusamus nobis." 
      />
    </>
  );
}


