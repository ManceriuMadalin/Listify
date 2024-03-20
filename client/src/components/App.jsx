import React from 'react';
import Main from './Main';
import Profile from './Profile';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            route: window.location.pathname
        };
    }

    componentDidMount() {
        window.onpopstate = () => {
            this.setState({ route: window.location.pathname });
        };
    }

    render() {
        const { route } = this.state;

        let currentPage;
        switch (route) {
            case '/':
                currentPage = <Main />;
                break;
            case '/profile':
                currentPage = <Profile />;
                break;
            default:
                currentPage = <div>404 Not Found</div>;
        }

        return (
            <div>
                {currentPage}
            </div>
        );
    }
}

export default App;
