import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import SurveyList from './components/Surveys/SurveyList';
import CreateSurvey from './components/CreateSurvey/CreateSurvey';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/surveys' element={<SurveyList/>}/>
        <Route path='/create' element={<CreateSurvey/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
