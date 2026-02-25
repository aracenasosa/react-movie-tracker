import { useState } from 'react';
import './App.css';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import { Search, Nav, Details, People, Footer, CastCrew, Comment, Recommendation, KnowFor } from './components/components';
import ScrollToTop from './helpers/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    const [ search, setSearch ] = useState('');

    return (
        <>
            <Router>
                <ScrollToTop />
                <Nav />
                <Routes>

                    <Route path="/" element={<Search search={ search } setSearch={ setSearch }/>} />

                    <Route path="/details/:id" element={<Details />}/>
                    <Route path="/people/:id" element={<People />}/>
                    <Route path="/cast&crew/:id" element={<CastCrew />}/>
                    <Route path="/knowfor/:id" element={<KnowFor />}/>
                    <Route path="/comment/:id" element={<Comment />}/>
                    <Route path="/recommendation/:id" element={<Recommendation />}/>

                </Routes>
                <Footer/>
            </Router>
        </>
    )
}

export default App
