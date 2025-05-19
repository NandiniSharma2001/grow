

import { Container, Row, Col } from 'react-bootstrap';
import { Image } from "./Image";
import {default as JsonData} from "../data/data.json";


export function Gallery()
{
    return(

     <div id='portfolio' className='text-center'>
        <Container>
          <div className='section-title'>
            <h2>Gallery</h2>
            <p>
              Our gallery showcases the vibrant moments, heartfelt interactions, and impactful initiatives led by Growkaren. From community outreach programs to educational workshops and inspiring success stories, each image captures a unique chapter of our journey. We believe every smile, every gathering, and every effort deserves to be remembered and shared. Take a glimpse into the real stories of change and the faces behind our mission
            </p>
          </div>
        
          <div className='portfolio-items'>   
          
            <Row>
            {JsonData
              ? JsonData.Gallery.map((d, i) => (
                <Col sm={6} lg md={4} key={`${d.title}-${i}`}>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                </Col>
              ))
              : 'Loading...'}
           </Row>
         </div>
       </Container>
      </div>

    )
   

}