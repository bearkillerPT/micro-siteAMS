import React, { useContext, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projectos" />
          {projects.map((project) => {
            const { title, info, info2, infoDict, url, repo, img, newLineTitle, id, videoSource } = project;

            return (
              <Container>
                <Row key={id}>
                  <Col lg={4} sm={12}>
                    <Fade
                      left={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={500}
                      distance="30px"
                    >
                      <div className="project-wrapper__text">
                        {newLineTitle && 
                        (<div><p style={{color:  '#B0F2F6'}}>{newLineTitle}</p>
                        <p style={{color:  '#B0F2F6'}}>{newLineTitle}</p></div>)}
                        <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                        <div>
                          <p>
                            {info ||
                              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                          </p>
                          <p className="mb-4">{info2 || ''}</p>

                        </div>
                        {url && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn cta-btn--hero"
                            href={url}
                          >
                            Try Live
                          </a>
                        )}

                        {repo && (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn text-color-main"
                            href={repo}
                          >
                            Source Code
                          </a>
                        )}
                        {infoDict &&
                    Object.entries(infoDict).map((key) =>
                      <div>
                        <p style={{ fontWeight: 'bold' }}>{key[0]}:</p>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={`${key[1]}`}
                          style={{ marginBottom: '1rem'}}
                        >
                          Download
                            </a>
                      </div>)}
                      </div>
                    </Fade>
                  </Col>
                  {img && 
                  <Col lg={6} sm={12}>
                    <Fade
                      right={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={1000}
                      distance="30px"
                    >
                      <div className="project-wrapper__image">
                          <Tilt
                            options={{
                              reverse: false,
                              max: 8,
                              perspective: 1000,
                              scale: 1,
                              speed: 300,
                              transition: true,
                              axis: null,
                              reset: true,
                              easing: 'cubic-bezier(.03,.98,.52,.99)',
                            }}
                          >
                            
                            <div data-tilt className="thumbnail rounded">
                              <ProjectImg alt={title} filename={img}/>
                            </div>
                          </Tilt>
                      </div>
                    </Fade>
                  </Col>}
                  { !img && videoSource && (
                    <Col lg={8} sm={12}>
                      <Fade
                        right={isDesktop}
                        bottom={isMobile}
                        duration={1000}
                        delay={1000}
                        distance="30px"
                      >
                        <div className='player-wrapper'>
                        <ReactPlayer
                          className='react-player'
                          url="https://github.com/bearkillerPT/micro-siteAMS/raw/master/src/video/app.mp4"
                          loop
                          muted
                          playing
                          height='75%'
                        />
                        </div>
                    </Fade>
                  </Col>
                  )}
                </Row>
                <Row key={id}>
                </Row>
              </Container>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
