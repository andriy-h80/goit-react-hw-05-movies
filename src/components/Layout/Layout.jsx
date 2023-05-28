import { NavLink, Outlet } from 'react-router-dom';
import { Container, Header, Nav, Link, Main } from './Layout.styled';

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
            <Outlet />  
        </Main>
        {/* <Footer></Footer> */}
    </Container>
    )
}


export default Layout;
