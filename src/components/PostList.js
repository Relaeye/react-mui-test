import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import axios from 'axios';

const PostList = ({ authorId }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (!authorId) {
            setPosts([]);
            return;
        }
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${authorId}`)
            .then(response => setPosts(response.data))
            .catch(error => console.error('Error fetching posts:', error));
    }, [authorId]);

    return (
        <Box sx={{ backgroundColor: '#f0f0f0', p: 2, mt: 2 }}>
            {posts.length > 0 ? (
                <List sx={{ width: '100%', maxWidth: 500 }}>
                    {posts.map((post) => (
                        <ListItem key={post.id} sx={{ borderRadius: 2, backgroundColor: 'white', mb: 1, boxShadow: 2 }}>
                            <ListItemText
                                primary={<Typography variant="h6" color="#333">{post.title}</Typography>}
                                secondary={<Typography variant="body2" color="#666">{post.body}</Typography>}
                            />
                        </ListItem>
                    ))}
                </List>
            ) : (
                <Typography variant="h6" color="#666">Выберите автора, чтобы увидеть посты</Typography>
            )}
        </Box>
    );
};

export default PostList;