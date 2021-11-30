import React from 'react';
import { Route, Routes } from "react-router-dom";
import NotFound from './routes/NotFound';
import Dashboard from './routes/Dashboard';
import StoryNew from './routes/StoryNew';
import PlayDeck from './routes/PlayDeck';

const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="new" element={<StoryNew />} />
            <Route path="play/:deckID" element={<PlayDeck />} />
            {/* <Route path="play/:deckID/:cardID" element={<playing cards one at a time />} /> */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Router