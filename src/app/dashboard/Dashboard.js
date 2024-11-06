import Navbar from "../components/navbar/Navbar"
import Container from "../components/container/Container"
import Footer from "../components/footer/Footer"

const Dashboard = () => {
    return(
        <>
        <Navbar />
        <div className="w-full h-px bg-black"></div>  
        <Container/>
        <Footer />
        </>
    )
}

export default Dashboard
