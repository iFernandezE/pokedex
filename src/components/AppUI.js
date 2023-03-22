import '../App.css';
import Pokedex from './pokedex';
import SignInComponent from './SignInComponent';
import { Routes, Route } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function AppUI() {
    const data = useContext(ThemeContext);

    return (
        <div className={data.theme === 'light' ? 'lightApp' : 'darkApp'}>

            <div>
                <Header />
            </div>
            <div>

                <Routes>
                    <Route path='/' element={<></>} />
                    <Route path='/login' element={<SignInComponent />} />
                    <Route path='/pokedex' element={<Pokedex />} />
                </Routes>
            </div>
            <div className='footerNav'>
                <Footer />
            </div>

        </div>
    );
}

export default AppUI;