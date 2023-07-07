import { Plus } from 'phosphor-react';
import YouTube from 'react-youtube';
import { 
  AboutContainer, 
  GridItem, 
  Number, 
  AboutIntroduction, 
  GridContainer, 
  VideoContent, 
  AboutContent
} from './styles';

export function About() {

  const opts =  {
    height: '500',
    width: '700',
  };

  const videoId = 'gjTKmwjGats';

  return (
    <AboutContainer>
            
      <VideoContent>
        {/* <YouTube videoId={videoId} opts={opts} /> */}
      </VideoContent>

      <AboutContent>

        <AboutIntroduction>
          <p>about us</p>
          <h1>Who we are</h1>
          <p>At LearnU, we are passionate about empowering learners worldwide and transforming the way education is accessed and experienced.</p>
        </AboutIntroduction>
        
        <GridContainer>

          <GridItem>
            <Number>
              <h1>14k</h1>
              <Plus size={32} color='blue'/>
            </Number>
            <strong>learners</strong>
          </GridItem>

          <GridItem>
            <p>We are dedicated to providing each learner with the tools and resources they need to succeed.</p>
          </GridItem>
    
          <GridItem>
            <Number>
              <h1>2k</h1>
              <Plus size={32} color='blue'/>
            </Number>
            <strong>courses</strong>
          </GridItem>

          <GridItem>
            <p>From academic subjects to professional development, learners can choose from an extensive array of courses.</p>
          </GridItem>
    
          <GridItem>
            <Number>
              <h1>20k</h1>
              <Plus size={32} color='blue'/>
            </Number>
            <strong>graduates</strong>
          </GridItem>  

          <GridItem>
            <p>Our graduates are making a positive impact in various industries through their expertise and accomplishments.</p>
          </GridItem>

        </GridContainer>
        
      </AboutContent>
    </AboutContainer>
  );
}