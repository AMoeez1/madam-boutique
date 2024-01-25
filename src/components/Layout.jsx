
import Navbar from './Navbar'
import Footer from './Footer'
// import ProductDetail from '../pages/ProductDetail'

export default function Layout({ children }) {
    return (
        <div className='bg-light'>
            <Navbar/>
            {children}
            <Footer />
        </div>
    )
}
