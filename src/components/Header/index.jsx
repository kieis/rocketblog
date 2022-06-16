import './styles.css'
import logo from '../../assets/images/logo.svg'
import { SearchInput } from '../SearchInput';

export function Header() {
    return (
        <div className='header'>
            <img src={logo} alt="Image Logo" />
            <div className="navigation">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Categorias</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </div>
            <div className="search">
                <SearchInput placeholder={'Buscar'} inputId={'searchInput'}/>
            </div>
        </div>
    );
}