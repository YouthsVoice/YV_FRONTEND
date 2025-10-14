"use client"
import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { PlayArrow } from '@mui/icons-material';

const VideoSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: 'rgb(240 82 82 / 0.1);',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 0),
  },
}));

const VideoContainer = styled(Paper)(({ theme }) => ({
  borderRadius: '20px',
  overflow: 'hidden',
  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
  background: '#000',
  maxWidth: '1000px',
  margin: '0 auto',
  position: 'relative',
}));

const PlayOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
  cursor: 'pointer',
}));

const ProjectMayaStory = () => {
  const [videoStarted, setVideoStarted] = useState(false);
  const videoId = 'S61HD8nejeA';
  
  // Default URL without autoplay
  const defaultUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;
  
  // Autoplay URL (muted and autoplay)
  const autoplayUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&rel=0&modestbranding=1&playsinline=1`;

  const handlePlayVideo = () => {
    setVideoStarted(true);
  };

  return (
    <VideoSection>
      <Container maxWidth="lg">
        {/* Title Section */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              color: '#424242',
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              background: 'linear-gradient(45deg, #fff, #f0f0f0)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              mb: 2
            }}
          >
            Project Maya Story
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#424242',
              maxWidth: '600px',
              margin: '0 auto',
              fontSize: { xs: '1rem', md: '1.2rem' },
              fontWeight: 500
            }}
          >
            Watch our journey unfold in this captivating story of innovation and creativity
          </Typography>
        </Box>

        {/* Video Player */}
        <VideoContainer>
          <Box
            sx={{
              position: 'relative',
              paddingBottom: '56.25%', // 16:9 aspect ratio
              height: 0,
            }}
          >
            <iframe
              src={videoStarted ? autoplayUrl : defaultUrl}
              title="Project Maya Story Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
            />
            
            {!videoStarted && (
              <PlayOverlay onClick={handlePlayVideo}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<PlayArrow />}
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    color: 'black',
                    '&:hover': {
                      backgroundColor: 'white',
                    },
                    padding: '12px 24px',
                    fontSize: '1.1rem',
                  }}
                >
                  Play Video
                </Button>
              </PlayOverlay>
            )}
          </Box>
        </VideoContainer>
      </Container>
    </VideoSection>
  );
};

export default ProjectMayaStory;