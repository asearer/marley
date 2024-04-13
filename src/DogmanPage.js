import React from 'react';

// Dogman Book Component
function DogmanBook({ title, image, summary }) {
  return (
    <div className="book">
      <h2>{title}</h2>
      <img src={image} alt={`${title} Cover`} />
      <p>{summary}</p>
    </div>
  );
}

// Dogman Page Component
function DogmanPage() {
  // Define book data
  const books = [
    {
      title: "Dogman: The Adventures of Dogman",
      image: "dogman1.jpg",
      summary: "In this first book, Dogman faces off against his nemesis, Petey the Cat, in a series of hilarious and action-packed adventures."
    },
    {
      title: "Dogman Unleashed: The Wrath of Petey",
      image: "dogman2.jpg",
      summary: "Petey the Cat is back and causing trouble once again! Dogman must unleash his inner hero to stop Petey's evil plans."
    },
    {
      title: "Dogman: A Tale of Two Kitties",
      image: "dogman3.jpg",
      summary: "When Dogman's city is threatened by a new villain, he teams up with a new ally, Cat Kid, to save the day in this exciting installment."
    },
    {
      title: "Dogman and Cat Kid",
      image: "dogman4.jpg",
      summary: "In this heartwarming story, Dogman and his friend Cat Kid embark on a new adventure filled with friendship, courage, and humor."
    },
    // Add more books as needed
  ];

  return (
    <div>
      <h1>Dogman Book Series</h1>
      <p>Dogman is a popular children's graphic novel series written and illustrated by Dav Pilkey. It follows the adventures of a part-dog, part-human hero named Dogman, who battles villains and saves the day.</p>
      <h2>Books in the Series</h2>
      <div className="books-container">
        {books.map((book, index) => (
          <DogmanBook key={index} title={book.title} image={book.image} summary={book.summary} />
        ))}
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
