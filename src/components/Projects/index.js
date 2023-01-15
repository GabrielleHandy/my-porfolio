import React from 'react';
import { ProjectContainer, ProjectRow, ProjectWrapper, 
         Column1, TextWrapper, TopLine, Heading, 
         Subtitle, Img, Column2, ProjectLink, ProjectHeading } from './ProjectElements';


const Projects = () => {
  return (<>
            <ProjectContainer id='projects'>
                <ProjectWrapper> 
                    <ProjectHeading >Projects</ProjectHeading>
                    <ProjectRow >
                       
                        <Column1>
                         <TextWrapper>
                             <Heading>Travel Buddy</Heading>
                             <Img src={require("../../images/TravelBuddyGif.gif")} alt='Travel Buddy Demo Gif' />
                             <TopLine>Tech Used: SQL, JS, HTML, CSS, PostgreSQL, Bootstrap, SQLAlchemy, Jinja2, Flask, AWS </TopLine>
                             <ProjectLink target="_blank" rel="noreferrer" href='http://travelbuddy.top'>www.travelbuddy.top</ProjectLink><Subtitle>user: jtest@test.com pass: test</Subtitle>
                             <ProjectLink target="_blank"  rel="noreferrer" href='https://github.com/GabrielleHandy/Travel-Buddy'>Github Link</ProjectLink>
                             <Subtitle>Traveling can be unpredictable, especially now during the time of Covid-19.  Travel Buddy was created to help people while traveling to feel safe and secure knowing that emergency information can be found in a centralized place.</Subtitle>
                            <Subtitle>Travel Buddy is a web app where users can create a travel planner with destinations they plan to go to. Once created they can find pertinent travel advisory information about embassy locations, emergency numbers, weather, currency, and hotel recommendations for each destination. The profile page also offers news and a translator that also translates text from an image. All links providing more information go to reputable government websites.</Subtitle>        
                         </TextWrapper>  
                        </Column1>
                        <Column2>
                            <TextWrapper>
                                <Heading>Inventory and Shipments</Heading>
                               
                                <Img src={require("../../images/Inventory-ShipGif.gif")} alt="Inventory and Shpments Demo Gif"/>
                                
                                <TopLine>Tech Used: Flask, SQLAlchemy, Postgresql, Bootstrap, Javascript </TopLine>
                                <ProjectLink target="_blank" href='https://github.com/GabrielleHandy/Shopify-Backend-Developer-Intern-Challenge'>Github Link</ProjectLink>
                             <Subtitle>This project was a take home challenge to see my ability to create a simple app that has an inventory where you can add, edit and delete items.
                                       They also wanted shipments, where you can add items to shipments and inventory quantity would reflect that change.</Subtitle>        
                            </TextWrapper>


                            
                        </Column2>
                    </ProjectRow>
                </ProjectWrapper>
            </ProjectContainer>
  
        </>)
};

export default Projects;
