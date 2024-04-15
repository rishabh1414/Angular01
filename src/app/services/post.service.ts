import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postData = [
    {
      id: 1,
      title: 'First Post',
      description: 'This is the description of the first post.',
      authors: ['Rishabh', 'John Doe'],
      createdDate: new Date('2024-04-15'),
    },
    {
      id: 2,
      title: 'Second Post',
      description: 'Description for the second post goes here.',
      authors: ['Rishabh'],
      createdDate: new Date('2024-04-10'),
    },
    {
      id: 3,
      title: 'Third Post',
      description: 'Description for the third post is included.',
      authors: ['Jane Smith', 'Rishabh'],
      createdDate: new Date('2024-04-05'),
    },
    {
      id: 4,
      title: 'Fourth Post',
      description: 'Adding another post with a different set of authors.',
      authors: ['Alice Wonderland', 'Bob Johnson', 'Rishabh'],
      createdDate: new Date('2024-03-28'),
    },
    {
      id: 5,
      title: 'Fifth Post',
      description: 'A post by a single author with a longer description.',
      authors: ['Eve Adams'],
      createdDate: new Date('2024-03-20'),
    },
    {
      id: 6,
      title: 'Sixth Post',
      description: 'A post with a unique description and author.',
      authors: ['Peter Parker'],
      createdDate: new Date('2024-03-15'),
    },
    {
      id: 7,
      title: 'Seventh Post',
      description: 'Description for the seventh post goes here.',
      authors: ['Clark Kent', 'Bruce Wayne'],
      createdDate: new Date('2024-03-10'),
    },
    {
      id: 8,
      title: 'Eighth Post',
      description: 'Adding another post with multiple authors.',
      authors: ['Diana Prince', 'Steve Rogers', 'Tony Stark'],
      createdDate: new Date('2024-03-05'),
    },
    {
      id: 9,
      title: 'Ninth Post',
      description: 'Another post with a short description.',
      authors: ['Natasha Romanoff'],
      createdDate: new Date('2024-03-01'),
    },
    {
      id: 10,
      title: 'Tenth Post',
      description: 'Last post in the array with a different author.',
      authors: ['Thor Odinson'],
      createdDate: new Date('2024-02-25'),
    },
  ];

  getAllPost() {
    return this.postData;
  }
}
