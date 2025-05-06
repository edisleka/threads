import { User, Post } from '../types/types'

export const users: User[] = [
  {
    id: '1',
    username: 'johndoe',
    name: 'John Doe',
    image: 'https://i.pravatar.cc/150?img=1',
    bio: 'Software engineer and coffee enthusiast ☕',
  },
  {
    id: '2',
    username: 'sarahsmith',
    name: 'Sarah Smith',
    image: 'https://i.pravatar.cc/150?img=2',
    bio: 'Digital artist | Nature lover 🌿',
  },
  {
    id: '3',
    username: 'mike_wilson',
    name: 'Mike Wilson',
    image: 'https://i.pravatar.cc/150?img=3',
    bio: 'Photography | Travel | Food',
  },
  {
    id: '4',
    username: 'emily_chen',
    name: 'Emily Chen',
    image: 'https://i.pravatar.cc/150?img=4',
    bio: 'UX Designer | Bookworm 📚',
  },
  {
    id: '5',
    username: 'alex_turner',
    name: 'Alex Turner',
    image: 'https://i.pravatar.cc/150?img=5',
    bio: 'Music producer | Guitar player 🎸',
  },
]

export const posts: Post[] = [
  {
    id: '1',
    createdAt: '2024-03-15T10:00:00Z',
    content:
      'Just launched my new website! Check it out and let me know what you think. #webdev #coding',
    user_id: '1',
    user: users[0],
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: '2',
    createdAt: '2024-03-15T10:30:00Z',
    content: 'Beautiful morning for a hike! 🏃‍♂️ #nature #outdoors',
    user_id: '2',
    user: users[1],
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: '3',
    createdAt: '2024-03-15T11:00:00Z',
    content:
      'Just finished editing this amazing sunset photo from yesterday. Nature is truly breathtaking!',
    user_id: '3',
    user: users[2],
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: '4',
    createdAt: '2024-03-15T11:15:00Z',
    content:
      'Currently reading "The Design of Everyday Things" by Don Norman. Highly recommend!',
    user_id: '4',
    user: users[3],
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: '5',
    createdAt: '2024-03-15T11:30:00Z',
    content:
      'Working on some new riffs in the studio today. New album coming soon! 🎸',
    user_id: '5',
    user: users[4],
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: '6',
    createdAt: '2024-03-15T12:00:00Z',
    content: 'That website looks amazing! What tech stack did you use?',
    user_id: '4',
    user: users[3],
    parent_id: '1',
    parent: null,
    replies: [],
  },
  {
    id: '7',
    createdAt: '2024-03-15T12:15:00Z',
    content: 'Thanks! I used React with TypeScript and Tailwind CSS.',
    user_id: '1',
    user: users[0],
    parent_id: '6',
    parent: null,
    replies: [],
  },
  {
    id: '8',
    createdAt: '2024-03-15T12:30:00Z',
    content: 'That sunset photo is incredible! Where was this taken?',
    user_id: '2',
    user: users[1],
    parent_id: '3',
    parent: null,
    replies: [],
  },
  {
    id: '9',
    createdAt: '2024-03-15T12:45:00Z',
    content: 'Thanks! It was taken at Malibu Beach during golden hour.',
    user_id: '3',
    user: users[2],
    parent_id: '8',
    parent: null,
    replies: [],
  },
  {
    id: '10',
    createdAt: '2024-03-15T13:00:00Z',
    content:
      "Can't wait to hear the new album! Any hints about the sound direction?",
    user_id: '1',
    user: users[0],
    parent_id: '5',
    parent: null,
    replies: [],
  },
  {
    id: '11',
    createdAt: '2024-03-15T13:15:00Z',
    content: "I've been meaning to read that book! How is it so far?",
    user_id: '5',
    user: users[4],
    parent_id: '4',
    parent: null,
    replies: [],
  },
  {
    id: '12',
    createdAt: '2024-03-15T13:30:00Z',
    content:
      "It's really insightful! The way it explains design principles is fascinating.",
    user_id: '4',
    user: users[3],
    parent_id: '11',
    parent: null,
    replies: [],
  },
  {
    id: '13',
    createdAt: '2024-03-15T13:45:00Z',
    content:
      'Going for a more experimental sound this time around. Mixing electronic elements with live instruments.',
    user_id: '5',
    user: users[4],
    parent_id: '10',
    parent: null,
    replies: [],
  },
  {
    id: '14',
    createdAt: '2024-03-15T14:00:00Z',
    content: 'That sounds amazing! Looking forward to it.',
    user_id: '2',
    user: users[1],
    parent_id: '13',
    parent: null,
    replies: [],
  },
  {
    id: '15',
    createdAt: '2024-03-15T14:15:00Z',
    content: 'Just finished a new digital art piece. What do you think?',
    user_id: '2',
    user: users[1],
    parent_id: null,
    parent: null,
    replies: [],
  },
]

// // Helper function to populate the replies arrays
// export function populateReplies() {
//   posts.forEach((post) => {
//     if (post.parent_id) {
//       const parentPost = posts.find((p) => p.id === post.parent_id)
//       if (parentPost) {
//         parentPost.replies.push(post)
//         post.parent = parentPost
//       }
//     }
//   })
// }

// // Populate the replies arrays
// populateReplies()
