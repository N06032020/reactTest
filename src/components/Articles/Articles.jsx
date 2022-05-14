import React from 'react'

import styles from '../Articles/Articles.module.scss'

export const Articles = () => {
    const [posts, setPosts] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await response.json()
                
                setPosts(data)
            } catch (error) {
              console.log(error)  
            }
            setLoading(false)
        }
        
        fetchData()
    }, [])
    
  return (
    <div>
        <h1>Articles</h1>

        {loading && 'Загрузка...'}

    <div className="wrapper">
        {posts.map(post => (
            <div key={post.id} className={styles.card}>
                <img src="" alt="" />
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <a href="/">Read now</a>
            </div>
        ))}

    </div>


    </div>
  )
}
