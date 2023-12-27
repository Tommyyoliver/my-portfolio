import './styles/Projects.scss';
import arrow from '../../assets/right-arrow.png';
import password from '../../assets/page-password.png'
import calculator from '../../assets/calculator.png';
import shop from '../../assets/page-shop.png'
// import api from '../../assets/page-api.png'
import tasklist from '../../assets/tasklist.png'
import angularEcommerce from "../../assets/angular-ecommerce.png"
import close from '../../assets/close.png';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { MyContext } from '../../myContext';

function Projects() {

    const { theme, text } = useContext(MyContext);

    const initialStatePortal = {
        show: false,
        text: {
            title: "",
            description: "",
            tag: "",
        }
    }
    const [showPortal, setShowPortal] = useState(initialStatePortal);

    const handleShowPortal = (id) => {
        if (id == 1) {
            setShowPortal({
                show: !showPortal.show,
                text: {
                    title: text.projectpage.project1.title,
                    description: text.projectpage.project1.description,
                    tag: ["React"],
                    website: "https://tommyyoliver.github.io/generate-password/",
                    github: "https://github.com/tommyyoliver/generate-password",
                }
            });
        } else if (id == 2) {
            setShowPortal({
                show: !showPortal.show,
                text: {
                    title: text.projectpage.project2.title,
                    description: text.projectpage.project2.description,
                    tag: ["React", "TypeScript"],
                    website: "https://tommyyoliver.github.io/calculator/",
                    github: "https://github.com/tommyyoliver/calculator/",
                }
            });
        } else if (id == 3) {
            setShowPortal({
                show: !showPortal.show,
                text: {
                    title: text.projectpage.project3.title,
                    description: text.projectpage.project3.description,
                    tag: ["React", "Sass"],
                    website: "https://tommyyoliver.github.io/shopping-page/",
                    github: "https://github.com/tommyyoliver/shopping-page/",
                }
            });
        } else if (id == 4) {
            setShowPortal({
                show: !showPortal.show,
                text: {
                    title: text.projectpage.project4.title,
                    description: text.projectpage.project4.description,
                    tag: ["React"],
                    website: "https://tommyyoliver.github.io/rick-and-morty-api/",
                    github: "https://github.com/tommyyoliver/rick-and-morty-api/",
                }
            });
        } else if (id == 5) {
            setShowPortal({
                show: !showPortal.show,
                text: {
                    title: text.projectpage.project5.title,
                    description: text.projectpage.project5.description,
                    tag: ["React"],
                    website: "https://tommyyoliver-tasklist.netlify.app/",
                    github: "https://github.com/tommyyoliver/tasklist/",
                }
            });
        } else if (id == 6) {
            setShowPortal({
                show: !showPortal.show,
                text: {
                    title: text.projectpage.project6.title,
                    description: text.projectpage.project6.description,
                    tag: ["Angular"],
                    website: "https://tommyyoliver-angular-ecommerce.netlify.app/",
                    github: "https://github.com/tommyyoliver/angular-ecommerce/",
                }
            });
        }
    }

    return (
        <div className={theme}>
            {/* background gif */}
            <div className='noise-gif'></div>

            {/* modal project */}
            {showPortal.show && (
                <div className='project-portal'>
                    <div className='project-portal-close'>
                        <img onClick={() => { handleShowPortal(1) }} src={close} alt='close' />
                    </div>
                    <div className='project-portal-header'>
                        <h3>{showPortal.text.title}</h3>
                        <p>{showPortal.text.description}</p>
                        <div className='project-portal-header-tag'>
                            {showPortal.text.tag.map(tag => (
                                <p key={tag}>{tag}</p>
                            ))}
                        </div>
                    </div>
                    <div className='project-portal-link'>
                        <div>
                            <p>Website:</p>
                            <a href={showPortal.text.website} target='_blank'>{showPortal.text.website}</a>
                        </div>
                        <div>
                            <p>Github:</p>
                            <a href={showPortal.text.github} target='_blank'>{showPortal.text.github}</a>
                        </div>
                    </div>
                </div>
            )}

            {/* project page */}
            <div className="projectpage-contain">
                <div className="projectpage-header">
                    <div>
                        <Link to='/' className='projectpage-header-img'>
                            <img src={arrow} alt='back' />
                        </Link>
                        <div className='projectpage-header-title'>{text.projectpage.title}</div>
                    </div>
                </div>

                {/* projects cards */}
                <div className="projectpage-section">

                    <div onClick={() => handleShowPortal(6)} className="projectpage-section-6">
                        <div className='projectpage-section-6-img'>
                            <img src={angularEcommerce} alt='angular-ecommerce' />
                        </div>
                        <div className='projectpage-text'>
                            <p className='projectpage-text-title'>{text.projectpage.project6.title}</p>
                            <p className='projectpage-text-description'>{text.projectpage.project6.description}</p>
                            <div className='projectpage-tag'>
                                <p>Angular</p>
                            </div>
                        </div>
                    </div>

                    <div onClick={() => handleShowPortal(5)} className="projectpage-section-5">
                        <div className='projectpage-section-5-img'>
                            <img src={tasklist} alt='password' />
                        </div>
                        <div className='projectpage-text'>
                            <p className='projectpage-text-title'>{text.projectpage.project5.title}</p>
                            <p className='projectpage-text-description'>{text.projectpage.project5.description}</p>
                            <div className='projectpage-tag'>
                                <p>React</p>
                            </div>
                        </div>
                    </div>

                    <div onClick={() => handleShowPortal(1)} className="projectpage-section-1">
                        <div className='projectpage-section-1-img'>
                            <img src={password} alt='password' />
                        </div>
                        <div className='projectpage-text'>
                            <p className='projectpage-text-title'>{text.projectpage.project1.title}</p>
                            <p className='projectpage-text-description'>{text.projectpage.project1.description}</p>
                            <div className='projectpage-tag'>
                                <p>React</p>
                            </div>
                        </div>
                    </div>

                    <div onClick={() => handleShowPortal(2)} className="projectpage-section-2">
                        <div className='projectpage-section-2-img'>
                            <img src={calculator} alt='password' />
                        </div>
                        <div className='projectpage-text'>
                            <p className='projectpage-text-title'>{text.projectpage.project2.title}</p>
                            <p className='projectpage-text-description'>{text.projectpage.project2.description}</p>
                            <div className='projectpage-tag'>
                                <p>React</p>
                                <p>TypeScript</p>
                            </div>
                        </div>
                    </div>

                    <div onClick={() => handleShowPortal(3)} className="projectpage-section-3">
                        <div className='projectpage-section-3-img'>
                            <img src={shop} alt='shop' />
                        </div>
                        <div className='projectpage-text'>
                            <p className='projectpage-text-title'>{text.projectpage.project3.title}</p>
                            <p className='projectpage-text-description'>{text.projectpage.project3.description}</p>
                            <div className='projectpage-tag'>
                                <p>React</p>
                                <p>Sass</p>
                            </div>
                        </div>
                    </div>
                    {/* <div onClick={() => handleShowPortal(4)} className="projectpage-section-4"> */}
                    {/*     <div className='projectpage-section-4-img'> */}
                    {/*         <img src={api} alt='api' /> */}
                    {/*     </div> */}
                    {/*     <div className='projectpage-text'> */}
                    {/*         <p className='projectpage-text-title'>{text.projectpage.project4.title}</p> */}
                    {/*         <p className='projectpage-text-description'>{text.projectpage.project4.description}</p> */}
                    {/*         <div className='projectpage-tag'> */}
                    {/*             <p>React</p> */}
                    {/*         </div> */}
                    {/*     </div> */}
                    {/* </div> */}
                    
                </div>
            </div>
        </div>
    )
}

export { Projects };
