import { Suspense } from "react";
import { NavLink, Outlet } from 'react-router-dom';
import { Container, Header, Nav, Link, Main } from './Layout.styled';
import Loader from '../Loader/Loader';

const Layout = () => {
    return (
    <Container>
        <Header>
            <Nav>
                <Link>
                    <NavLink to='/'>Home</NavLink>
                </Link>
                <Link>
                    <NavLink to='/movies'>Movies</NavLink>
                </Link>
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
