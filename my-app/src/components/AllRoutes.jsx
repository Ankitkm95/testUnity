import {Route, Routes} from 'react-router-dom';
import All from '../pages/All';
import Fetch from '../pages/Fetch';
import Doc from '../pages/Doc';
import JS from '../pages/JS';
import Font from '../pages/Font';
import Img from '../pages/Img';
import Media from '../pages/Media';
import Manifest from '../pages/Manifest';
import WS from '../pages/WS';
import Wasm from '../pages/Wasm';
import Other from '../pages/Other';
import CSS from '../pages/CSS';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<All />} />
            <Route path='/fetch' element={<Fetch />} />
            <Route path='/doc' element={<Doc />} />
            <Route path='/css' element={<CSS />} />
            <Route path='/js' element={<JS />} />
            <Route path='/font' element={<Font />} />
            <Route path='/img' element={<Img />} /><Route path='/all' element={<All />} />
            <Route path='/media' element={<Media />} />
            <Route path='/manifest' element={<Manifest />} />
            <Route path='/ws' element={<WS />} />
            <Route path='/wasm' element={<Wasm />} />
            <Route path='/other' element={<Other />} />
        </Routes>
    )
};

export default AllRoutes;