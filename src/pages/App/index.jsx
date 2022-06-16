import { Header } from '../../components/Header';
import { Home } from '../../components/Home';
import { Posts } from '../../components/Posts';
import { Separator } from '../../components/Separator';
import '../../styles/global.css'
import './styles.css'

export function App() {
    return (
        <>
            <Home/>
            <Separator/>
            <Posts/>
        </>
    );
}