import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/contact/Contact';
import About from './pages/about/AboutSSITM';
import Undergrad from './pages/Courses/Undergraduate';
import PrivacyPolicy from './pages/Privacy-Policy';
import TnC from './pages/Terms-and-Conditions';
import Postgrad from './pages/Courses/Postgraduate';
import AdmissionProcess from './pages/Admission/AdmissionProcess';
import Eligibility from './pages/Admission/Eligibility';
import Diploma from './pages/Courses/Diploma';
import FeeStructure from './pages/Admission/Fee-Structure';
import NotFound from './pages/NotFound';
import AllCourses from './pages/AllCourses';
import FeePaymentPage from './pages/FeePaymentPage';

function App() {
    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about/about-ssitm' element={< About />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/courses/undergraduate' element={< Undergrad />} />
            <Route path='/courses/postgraduate' element={< Postgrad />} />
            <Route path='/courses/diploma' element={< Diploma/>} />
            <Route path='/admission/admission-process' element={< AdmissionProcess />} />
            <Route path='/admission/eligibility' element={< Eligibility />} />
            <Route path='/privacy-policy' element={< PrivacyPolicy />} />
            <Route path='/terms-and-conditions' element={< TnC />} />
            <Route path='/admission/fee-structure' element={< FeeStructure />} />
            <Route path='*'  element ={< NotFound/>} />
            <Route path = 'courses/AllCourses' element ={ < AllCourses /> } />
            <Route path='ssitm/fee-payment' element ={< FeePaymentPage/>} />
        </Routes>

    )
}

export default App;