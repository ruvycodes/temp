import { Box, Card, CardMedia } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

// Image URLs for the carousel
const images = [
  'https://images.unsplash.com/photo-1730282510151-1badef457abb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1695605713801-a20f41a27779?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1695615517039-6de1512909cd?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1730282744365-ea4cc254ea6c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const CarouselComponent = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Card sx={{ width: '95%',height:'120%', borderRadius: 3, boxShadow: 5 }}>
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={4000}
          transitionTime={700}
          showStatus={false}
          showIndicators={false}
        >
          {images.map((image, index) => (
            <Box key={index} sx={{ width: '100%', height: '100%' }}>
              <CardMedia
                component="img"
                width="100%"
                height="100%"
                image={image}
                alt={`Image ${index + 1}`}
                sx={{ objectFit: 'cover' }}
              />
            </Box>
          ))}
        </Carousel>
      </Card>
    </Box>
  );
};

export default CarouselComponent;