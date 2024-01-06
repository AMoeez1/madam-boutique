import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Home() {
	return (
		<Layout>
			Home
			<Link to='/products'>Go to products</Link>
		</Layout>
	)
}
