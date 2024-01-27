
import Navbar from './Navbar'
import Footer from './Footer'
// import ProductDetail from '../pages/ProductDetail'

export default function Layout({ children }) {
    return (
        <div className='bg-[#fcfcfc]'>
            <Navbar/>
            {children}
            <Footer />
        </div>
    )
}
