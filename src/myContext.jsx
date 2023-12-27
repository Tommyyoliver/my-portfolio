import { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {

    const translations = {
        en: {
            title: "👋 Hi, I'm Tommy",
            description: "Frontend Developer with experience in React. I'm good at HTML and CSS, as well as JavaScript. Love learning new things and experimenting with different technologies. I have a good eye for details and always put all for my work.",
            language: "EN",
            projects: {
                title: "Projects",
                description: "Here you can find some of my projects."
            },
            courses: "Certificate Courses Learned",
            projectpage: {
                title: "PROJECTS",
                project6: {
                    title: 'Angular E-commerce',
                    description:'E-commerce template project',
                },
                project5: {
                    title: 'TaskList',
                    description: 'Functional TaskList with data persistence'
                },
                project1: {
                    title: "Password Generador",
                    description: "Customizable random password generator",
                },
                project2: {
                    title: "Calculator",
                    description: "Modern functional calculator"
                },
                project3: {
                    title: "Shopping Page",
                    description: "Shopping page template"
                },
                project4: {
                    title: "Rick and Morty API",
                    description: "Use of API"
                }
            }
        },
        es: {
            title: "👋 Hola, soy Tommy",
            description: "Desarrollador Frontend con experiencia en React. Manejo HTML y CSS, así como JavaScript. Me encanta aprender cosas nuevas y experimentar con diferentes tecnologías. Tengo buen ojo para los detalles y siempre pongo todo por mi trabajo.",
            language: "ES",
            projects: {
                title: "Proyectos",
                description: "Aquí puedes encontrar alguno de mis proyectos"
            },
            courses: "Certificado cursos aprendidos",
            projectpage: {
                title: "PROYECTOS",
                project6: {
                    title: 'Angular E-commerce',
                    description:'Proyecto de plantilla de comercio electrónico',
                },
                project5: {
                    title: 'Lista de Tareas',
                    description: 'Lista de tareas funcional con persistencia de datos'
                },
                project1: {
                    title: "Generador de Contraseñas",
                    description: "Generador de contraseñas aleatorias personalizables",
                },
                project2: {
                    title: "Calculadora",
                    description: "Calculadora funcional moderna"
                },
                project3: {
                    title: "Página de Compras",
                    description: "Plantilla de páginas de compras"
                },
                // project4: {
                //     title: "Rick and Morty API",
                //     description: "Uso de API"
                // }
            }
        }
    }

    const initialTheme = 'body dark';
    const initialLanguage = 'en';
    const [theme, setTheme] = useState(initialTheme);
    const [language, setLanguage] = useState(initialLanguage);
    const [text, setText] = useState(translations[language]);

    const handleLanguage = () => {
        if (language == 'en') {
            setLanguage('es');
            setText(translations.es);
        } else {
            setLanguage('en');
            setText(translations.en)
        }
    }

    const handleTheme = () => {
        if (theme === 'body dark') {
            setTheme('body light');
        } else {
            setTheme('body dark');
        }
    }

    const data = {
        translations,
        theme,
        setTheme,
        language,
        setLanguage,
        text,
        setText,
        handleLanguage,
        handleTheme,
    }

    return <MyContext.Provider value={data}>{children}</MyContext.Provider>
}

export { MyContext };
export { MyProvider };
