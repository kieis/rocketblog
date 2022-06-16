import '../../styles/global.css'
import './styles.css'
import arrowRight from '../../assets/images/arrow-right.svg'

export function TextGroup({ title, comment, linkRef}) {
    return (
        <div className='textGroup'>
            <h1>{title}</h1>
            <p>{comment}</p>
            <a href="">Veja mais <img src={arrowRight} alt="Arrow Right" /></a>
        </div>
    );
}