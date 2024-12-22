import React, { useState } from 'react';
import AuthorSelector from './components/AuthorSelector';
import PostList from './components/PostList';
import { Container, Box, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#616161',
        },
        background: {
            default: '#f0f0f0',
        }
    },
});

const App = () => {
    const [selectedAuthorId, setSelectedAuthorId] = useState(null);

    const handleAuthorSelect = (authorId) => {
        setSelectedAuthorId(authorId);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="sm" sx={{ mt: 4, backgroundColor: theme.palette.background.default, borderRadius: 2 }}>
                <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                    <Typography variant="h4" component="h1" align="center" sx={{ mb: 2, color: theme.palette.primary.main}}>
                        Mui test
                    </Typography>
                    <AuthorSelector onSelectAuthor={handleAuthorSelect} />
                    <PostList authorId={selectedAuthorId} />
                </Box>
            </Container>
        </ThemeProvider>

    );
};

export default App;