import React from 'react';
import { TechContainer, TechType, TechWrapper, 
         TechRow, TechColumn1, TechColumn2, 
         TechColumn3, TechColumn4, TechColumn5,
         ImgWrapper, TechIcon, TechName, TechHeading } from './TechElements';

const TechStack = ({imgStart}) => {
  return (<>
        <TechContainer id="techStack">
            
            <TechWrapper>
                <TechHeading>My Tech Stack</TechHeading>
                <TechType>Languages</TechType>
                <TechRow imgStart ={imgStart}>
                    
                    <TechColumn1>
                        <ImgWrapper>
                            <TechIcon src={require("../../images/javascript-svgrepo-com.svg").default} alt="Javascript Logo"/>
                        </ImgWrapper>
                        <TechName>Javascript</TechName>
                    </TechColumn1>
                    <TechColumn2>
                        <ImgWrapper>
                            <TechIcon src={require("../../images/python-svgrepo-com.svg").default} alt="Python Logo"/>
                        </ImgWrapper>
                        <TechName>Python</TechName>
                    </TechColumn2>
                    <TechColumn3>
                        <ImgWrapper>
                            <TechIcon src={require("../../images/html-svgrepo-com.svg").default} alt="Html Logo"/>
                        </ImgWrapper>
                        <TechName>HTML</TechName>
                    </TechColumn3>
                    <TechColumn4>
                        <ImgWrapper>
                            <TechIcon src={require("../../images/browser-css-svgrepo-com.svg").default} alt="CSS Logo"/>
                        </ImgWrapper>
                        <TechName>CSS</TechName>
                    </TechColumn4>
                    <TechColumn5>
                        <ImgWrapper>
                            <TechIcon src={require("../../images/sql-svgrepo-com.svg").default} alt="SQL Logo"/>
                        </ImgWrapper>
                        <TechName>SQL</TechName>
                    </TechColumn5>
                    
                </TechRow>
                <TechType>Frameworks</TechType>
                <TechRow>
                    <TechColumn1>
                        <ImgWrapper>
                            <TechIcon src={require("../../images/react-svgrepo-com.svg").default} alt="React Logo"/>
                        </ImgWrapper>
                        <TechName>React</TechName>
                    </TechColumn1>
                    <TechColumn2>
                        <ImgWrapper>
                            <TechIcon src={require("../../images/flask-svgrepo-com.svg").default} alt="Flask Logo"/>
                        </ImgWrapper>
                        <TechName>Flask</TechName>
                    </TechColumn2>
                    <TechColumn3>
                        <ImgWrapper>
                            <TechIcon src={require("../../images/bootstrap-svgrepo-com.svg").default} alt="Bootstrap Logo"/>
                        </ImgWrapper>
                        <TechName>Bootstrap</TechName>
                    </TechColumn3>
                    <TechColumn4>
                        <ImgWrapper>
                            <TechIcon src={require("../../images/jinja-svgrepo-com.svg").default} alt="Jinja Logo"/>
                        </ImgWrapper>
                        <TechName>Jinja</TechName>
                    </TechColumn4>
                    <TechColumn5>
                        <ImgWrapper>
                            <TechIcon src={require("../../images/sqlal-svgrepo-com.svg").default} alt="Python Logo"/>
                        </ImgWrapper>
                        <TechName>SQL Alchemy</TechName>
                    </TechColumn5>

                </TechRow>
                <TechType>Database/Tools</TechType>    
                <TechRow>
                    <TechColumn1>
                        <ImgWrapper>
                            <TechIcon src={require("../../images/postgresql-svgrepo-com.svg").default} alt="PostgresQL Logo"/>
                        </ImgWrapper>
                        <TechName>PostgresQL</TechName>
                    </TechColumn1>
                    <TechColumn2>
                        <ImgWrapper>
                            <TechIcon src={require("../../images/git-svgrepo-com.svg").default} alt="Git Logo"/>
                        </ImgWrapper>
                        <TechName>Git</TechName>
                    </TechColumn2>
                    <TechColumn3>
                        <ImgWrapper>
                            <TechIcon src={require("../../images/github-svgrepo-com.svg").default} alt="Github Logo"/>
                        </ImgWrapper>
                        <TechName>Github</TechName>
                    </TechColumn3>
                    <TechColumn4>
                        <ImgWrapper>
                            <TechIcon src={require("../../images/command-line-svgrepo-com.svg").default} alt="Command-Line Image"/>
                        </ImgWrapper>
                        <TechName>Command-Line</TechName>
                    </TechColumn4>
                    <TechColumn5>
                        <ImgWrapper>
                            <TechIcon src={require("../../images/aws-svgrepo-com.svg").default} alt="AWS Logo"/>
                        </ImgWrapper>
                        <TechName>AWS</TechName>
                    </TechColumn5>

                </TechRow>



            </TechWrapper>

        </TechContainer>
  
  
  
  
  
  </>)
};

export default TechStack;
