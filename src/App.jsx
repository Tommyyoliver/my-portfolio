import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Projects } from './components/projects/Projects';
import { MyProvider } from './myContext';

function App() {

    return (
        <MyProvider>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </MyProvider>
    )
}

export { App };