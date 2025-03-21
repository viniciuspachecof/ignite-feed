import { Header } from './components/Header';
import { Post } from './components/Post';

import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Vinicius Pacheco"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatem maxime vero perspiciatis consectetur. Sint non sunt consequatur, necessitatibus exercitationem laborum itaque labore commodi possimus libero consectetur esse. Dolores, rem."
          />

          <Post
            author="Tiago alegre"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatem maxime vero perspiciatis consectetur. Sint non sunt consequatur, necessitatibus exercitationem laborum itaque labore commodi possimus libero consectetur esse. Dolores, rem."
          />
        </main>
      </div>
    </>
  );
}
