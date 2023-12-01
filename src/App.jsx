import "./App.scss";
import {Header} from "./Components/Header/Header.jsx";
import {Main} from "./Components/Main/Main.jsx";

export const App = () => {
    return(
        <div className="app-wrapper">
            <Header />
            <Main />

        </div>
    )
};
