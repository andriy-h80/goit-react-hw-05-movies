import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { Container, Header, Nav, Link, Main } from './Layout.styled';
import Loader from '../Loader/Loader';

const Layout = () => {
    return (
    <Container>
        <Header>
            <Nav>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/movies'>Movies</Link>
                </li>
            </Nav>
        </Header>
        <Main>
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>  
        </Main>
        {/* <Footer></Footer> */}
    </Container>
    )
}


export default Layout;
