import search from '../../assets/images/search.svg'
import '../../styles/global.css'
import './styles.css'

export function SearchInput({ placeholder, inputId }) {
    return (
        <div className="content">
            <input type="search" placeholder={placeholder} name={inputId} id={inputId} />
            <button type='submit'><img src={search} alt="Search Icon" /></button>
        </div>
    );
}