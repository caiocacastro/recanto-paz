import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './MainPage';

type Props = {};

class SystemRoute extends React.Component<Props> {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <MainPage />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default SystemRoute;
