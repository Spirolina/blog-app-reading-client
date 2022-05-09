import React , {useEffect} from 'react'
import { Loading } from '../../components/loading/Loading';
import { Post } from '../../components/post/Post';
import { usePosts } from '../../hooks/usePosts';
import '../posts/posts.css';


export const Posts = () => {
  const { getPosts, loading, posts } = usePosts();
    console.log(process.env)
    useEffect(() => {
        getPosts();
    }, [])
    
    if (loading) {
        return (
            <div className='posts'>
            <Loading type='spin' color='#ff8a00' className='posts-loading' />

            </div>
        )
    }

    if(posts)
  return (
      <div className='posts'>
          {posts.map(post => <Post key={post._id} post={post} />)}
    </div>
  )
}
