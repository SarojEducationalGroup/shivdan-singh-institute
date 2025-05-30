import Header from './Header'
import Footer from './Footer'
import TopNav from './TopNavBar';
import Modal from '../pages/Modal';
import Chatbot from '../pages/Chatbot';
import TechnologyCTA from '../pages/TechnologyCTA';

function Layout({children}){
    return (
        <div className="flex flex-col min-h-screen">
            <Modal />
            <TopNav/>
            <Header />
            <div className="flex-1 overflow-hidden">
                {children}
            </div>
            < Chatbot />
            <TechnologyCTA />
            <Footer />
        </div>
    );
}

export default Layout;