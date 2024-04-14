import React from 'react';
import DogmanBook1 from './components/DogmanBooks/DogmanBook1';
import DogmanBook2 from './components/DogmanBooks/DogmanBook2';
import DogmanBook3 from './components/DogmanBooks/DogmanBook3';
import DogmanBook4 from './components/DogmanBooks/DogmanBook4';

function DogmanPage() {
  return (
    <div>
      <h1>Dogman Book Series</h1>
      <p>Dogman is a popular children's graphic novel series written and illustrated by Dav Pilkey. It follows the adventures of a part-dog, part-human hero named Dogman, who battles villains and saves the day.</p>
      <h2>Books in the Series</h2>
      <div className="books-container">
        <DogmanBook1 />
        <DogmanBook2 />
        <DogmanBook3 />
        <DogmanBook4 />
      </div>
      <h2>About the Author</h2>
      <p>Dav Pilkey is a renowned author and illustrator known for creating popular children's book series such as Captain Underpants and Dogman. He is celebrated for his humorous writing style and engaging illustrations.</p>
      <h2>Illustrations</h2>
      <p>The Dogman series features colorful and dynamic illustrations that bring the characters and their adventures to life. Dav Pilkey's distinctive art style adds to the charm and appeal of the books.</p>
      <h2>Reviews</h2>
      <p>Here are some reviews from readers:</p>
      <ul>
        <li>"My kids can't get enough of Dogman! They love the action-packed stories and hilarious characters." - Parent</li>
        <li>"As a teacher, I've seen reluctant readers become avid bookworms thanks to Dogman. It's a fantastic series that gets kids excited about reading." - Educator</li>
      </ul>
    </div>
  );
}

export default DogmanPage;

