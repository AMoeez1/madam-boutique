import { BiSolidErrorCircle } from "react-icons/bi";
import { Link } from 'react-router-dom'
import Layout from "../components/Layout";

export default function Error() {
  return (
    <Layout>
    <div className='text-center'><br /><br /><br /><br />
      <h1 className="h1"> This site can't be reached</h1>
      <h4 className="h4">Given link not found or maybe broken</h4>
      <Link to='/' className="nav-link">Click here to go to Home page again</Link>
    </div>
    </Layout>
  )
}
