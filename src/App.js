import React, { useState } from 'react'
import Header from './Header'
import Post from './Post'
import Button from './Button'
import { ThemeProvider } from './ThemeContext'

export default function App(){
  const [posts, setPosts] = useState([ 
    {id: Math.random(), title:'Title#01', subtitle:'Sub#01', likes: 20, read: false},
    {id: Math.random(), title:'Title#02', subtitle:'Sub#02', likes: 10, read: true},
    {id: Math.random(), title:'Title#03', subtitle:'Sub#03', likes: 50, read: false},
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
          .filter(post => post.id !== postId)
      )
    )
  }
  return (
    <ThemeProvider>
      <Header>
        <h2>
          Post da semana
          <Button onClick={handleRefresh}>Atualizar</Button>
        </h2>
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
