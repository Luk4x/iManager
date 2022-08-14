import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import CreateProject from './components/pages/CreateProject';
import Home from './components/pages/Home';

import Container from './components/layout/Container';

export default function App() {
    return (
        <Router>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/company">Empresa</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contato</Link>
                        </li>
                        <li>
                            <Link to="/create-project">Criar Projeto</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Switch>
                <Container customClass="minHeight">
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/company">
                        <Company />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/create-project">
                        <CreateProject />
                    </Route>
                </Container>
            </Switch>
            <footer>Footer</footer>
        </Router>
    );
}
