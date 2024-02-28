import './App.css';
import {Route, Routes,} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import ChatsContainer from "./components/Chats/ChatsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
    return (
        <div>
            <Header/>
            <main>
                <Navbar />
                <div className='page-wrapper'>
                    <Routes>
                        <Route path='/profile' element={<ProfileContainer />}/>
                        <Route path='/chats/*' element={<ChatsContainer />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </main>
        </div>
    );
}

export default App;
