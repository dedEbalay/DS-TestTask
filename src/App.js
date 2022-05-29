import { connect } from 'react-redux';
import './App.css';
import MainPage from './components/MainPage';
import UserList from './components/UserList/UserList';
import { setUsers } from './redux/actions';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserProfilePage from './components/UserProfilePage';
import PostsPage from './components/PostsPage';
import CurrentPostPage from './components/CurrentPostPage';
import AddCommentPage from './components/AddCommentPage/AddCommentPage';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';


function App(props) {

  return (
    <Router>
      <MainPage />
      <Routes>
        <Route exact path="" element={<UserList />} />
        <Route path="/users/:id" element={<UserProfilePage />} />
        <Route path="/users/:id/posts" element={<PostsPage />} />
        <Route path="/users/:id/posts/:postId" element={<CurrentPostPage />} />
        <Route path='/addcomment' element={<AddCommentPage />} />
        <Route path='*' element={<ErrorMessage />} />
      </Routes>
    </Router>
  );
}

const mapStateToProps = ( store ) => {
  return {

  }
}

const mapDispatchToProps = {
  setUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
