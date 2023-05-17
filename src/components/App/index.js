import React, { useState } from 'react'
import Header from '../Header'
import Post from '../Post'
import Button from '../Button'
import { ThemeProvider } from '../../context/ThemeContext'
import { Subtitle } from './styles';


export default function App(){
  const [posts, setPosts] = useState([ 
    {id: Math.random(), title:'Title#01', subtitle:'Sub#01', likes: 20, read: false, removed: false },
    {id: Math.random(), title:'Title#02', subtitle:'Sub#02', likes: 10, read: true, removed: false },
    {id: Math.random(), title:'Title#03', subtitle:'Sub#03', likes: 50, read: false, removed: false },
  ])
  function handleRefresh(){
    setPosts(prevState => [...prevState, {
        id: Math.random(),
        title:`Title#0${prevState.length + 1}`,
        subtitle:`Sub#${prevState.length + 1}`,
        likes: 50
    }])
  }
  function handleRemovePost(postId){
    setPosts(prevState => (
        prevState
          .map(post => 
          post.id === postId 
          ? {  
            ...post, 
            removed: post.removed === true 
            ? false 
            : true 
          } 
          : post )
      )
    )
  }
  // return(
  //   <ThemeProvider>
  //   <h1>Hello</h1>
  //   </ThemeProvider>
  // );
  return (
    <ThemeProvider>
      <Header>
        <Subtitle as="h2">
          Post da semana
          <Button onClick={handleRefresh}>Atualizar</Button>
        </Subtitle>
      </Header> 

      <hr/>

      {posts.map(post => (
        <Post
        key={post.id}
        onRemove={handleRemovePost}
        post={post} 
        />
      ))}

    </ThemeProvider>
  )
}
