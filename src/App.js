import './App.css';
import {Route, Routes,} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Chats from "./components/Chats/Chats";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";

function App({appState, dispatch }) {
    return (
        <div>
            <Header/>
            <main>
                <Navbar avatars={appState.sideBar.friendsList}/>
                <div className='page-wrapper'>
                    <Routes>
                        <Route path='/profile'
                               element={<Profile profilePageState={appState.profilePage}
                                                 dispatch={dispatch}
                               />}
                        />
                        <Route path='/chats/*' element={<Chats chatsPageState={appState.chatsPage}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </main>
        </div>
    );
}

export default App;
