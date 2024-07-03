import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadPage from './Components/StartPage/StartPage';
import SearchPage from './Components/SearchPage/SearchPage';
function App() {
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(LoadPage, {}) }), _jsx(Route, { path: '/weather-page', element: _jsx(SearchPage, {}) })] }) }));
}
export default App;
