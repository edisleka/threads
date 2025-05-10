import { FlatList } from 'react-native'
import { posts } from '@/data/data'
import PostListItem from '@/components/PostListItem'
import { Link } from 'expo-router'

export default function HomeScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      ListHeaderComponent={() => (
        <>
          <Link href='/new' className='text-blue-500 p-4 text-center text-3xl'>
            New Post
          </Link>
        </>
      )}
    />
  )
}
