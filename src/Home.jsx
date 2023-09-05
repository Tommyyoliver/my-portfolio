import { useContext } from "react"
import { Link } from 'react-router-dom'
import './Home.scss'
import arrow from './assets/right-arrow.png'
import redirect from './assets/maximize.png'
import github from './assets/github.png'
import html from './assets/html.png'
import css from './assets/css.png'
import javascript from './assets/js.png'
import react from './assets/react.png'
import typescript from './assets/typescript.png'
import sass from './assets/sass.png'
import git from './assets/git.png'
import redux from './assets/redux.png'
import courses from './assets/courses.png'
import mail from './assets/mail.png'
import me from './assets/me-portfolio.png'
import { MyContext } from "./myContext"

function Home() {

    const { theme, text, handleLanguage, handleTheme } = useContext(MyContext)

    return (
        <div className={theme}>
            <div className="noise-gif"></div>
            <div className='main'>
                <div className='title'>
                    <div>
                        <p>
                        {text.title}
                        </p>
                        <p className='description'>
                        {text.description}
                        </p>
                    </div>
                    <div className="title-me">
                        <img src={me} alt="" />
                    </div>
                </div>
                <div onClick={handleLanguage} className='language'>
                    <p>{text.language}</p>
                    <div className='language-description'>
                        <p>EN</p>
                        <p>ES</p>
                    </div>
                </div>
                <div className='theme'>
                    <div className='switch'>
                        <input id="light" type='checkbox' className='checkbox' onClick={handleTheme}/>
                        <label htmlFor='light' className='slider'></label>
                    </div>
                </div>
                <a href="https://github.com/tommyyoliver" target="_blank" className='github'>
                    <div>
                        <div>
                            <img src={redirect} alt='redirect' />
                        </div>
                        <img src={github} alt='github' />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/tommy-oliver-937827252/" target="_blank" className='linkedin'>
                    <div>
                        <div>
                            <img src={redirect} alt='redirect' />
                        </div>
                        <p>in</p>
                    </div>
                </a>
                <Link to='/projects' className='projects'>
                    <div>
                        <div>
                            <div className='project-title'>
                                <p>{text.projects.title}</p>
                            </div>
                            <div className='project-description'>
                                <p>{text.projects.description}</p>
                            </div>
                        </div>
                        <div className='project-img'>
                            <img src={arrow} alt='arrow' />
                        </div>
                    </div>
                </Link>
                <div className='skills'>
                    <div>
                        <div className='skills-html'>
                            <img src={html} alt="" />
                        </div>
                        <div className='skills-css'>
                            <img src={css} alt="" />
                        </div>
                        <div className='skills-javascript'>
                            <img src={javascript} alt="" />
                        </div>
                        <div className='skills-react'>
                            <img src={react} alt="" />
                        </div>
                        <div className='skills-redux'>
                            <img src={redux} alt="" />
                        </div>
                        <div className='skills-typescript'>
                            <img src={typescript} alt="" />
                        </div>
                        <div className='skills-sass'>
                            <img src={sass} alt="" />
                        </div>
                        <div className='skills-git'>
                            <img src={git} alt="" />
                        </div>
                    </div>
                </div>
                <a href="https://platzi.com/p/tommyyoliver/" target="_blank" className='courses'>
                    <div>
                        <div className="courses-img">
                            <img src={courses} alt="courses" />
                        </div>
                        <div className="courses-title">
                            <p>{text.courses}</p>
                            <span>2022-2023</span>
                        </div>
                        <div className="courses-redirect">
                            <img src={redirect} alt='redirect' />
                        </div>
                    </div>
                </a>
                <a href="mailto:tommyolivr@gmail.com" className='mail'>
                    <div>
                        <div className="mail-redirect">
                            <img src={redirect} alt='redirect' />
                        </div>
                        <img src={mail} alt="mail" />
                    </div>
                </a>
            </div>
        </div>
    )
}

export { Home };