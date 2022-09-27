import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import CreateProject from './components/pages/CreateProject';
import Project from './components/pages/Project';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';

export default function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Container customClass="minHeight">
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/contact">
                        <CustomCursor
                            targets={'.mobileRightButtons'}
                            customClass="customCursor"
                            dimensions={24}
                            fill="#b3679b"
                            smoothness={{
                                movement: 1,
                                scale: 1,
                                opacity: 1
                            }}
                            targetOpacity={1}
                            opacity={0}
                            strokeColor="#b3679b5f"
                            strokeWidth={12}
                            targetScale={1}
                        />
                        <Contact />
                    </Route>
                    <Route path="/create-project">
                        <CreateProject />
                    </Route>
                    <Route path="/project/:id">
                        <Project />
                    </Route>
                    <Route path="/company">
                        <Company />
                    </Route>
                </Container>
            </Switch>
            <Footer />
        </Router>
    );
}
