import { Post } from './Post';

export function App() {
  return (
    <>
      <h1>hello world</h1>
      <Post
        author="Vinicius Pacheco"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatem maxime vero perspiciatis consectetur. Sint non sunt consequatur, necessitatibus exercitationem laborum itaque labore commodi possimus libero consectetur esse. Dolores, rem."
      />

      <Post
        author="Tiago alegre"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatem maxime vero perspiciatis consectetur. Sint non sunt consequatur, necessitatibus exercitationem laborum itaque labore commodi possimus libero consectetur esse. Dolores, rem."
      />
    </>
  );
}
