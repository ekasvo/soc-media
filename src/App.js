import './App.css';
import {Route, Routes,} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import ChatsContainer from "./components/Chats/ChatsContainer";

function App({store}) {
    return (
        <div>
            <Header/>
            <main>
                <Navbar avatars={store.getState().sideBar.friendsList}/>
                <div className='page-wrapper'>
                    <Routes>
                        <Route path='/profile'
                               element={<Profile store={store}/>}/>
                        <Route path='/chats/*'
                               element={<ChatsContainer store={store}/>}/>
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
