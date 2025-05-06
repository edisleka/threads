import { FlatList } from 'react-native'
import { posts } from '@/data/data'
import PostListItem from '@/components/PostListItem'

export default function HomeScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
    />
  )
}
