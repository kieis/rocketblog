import { Header } from '../../components/Header';
import '../../styles/global.css'
import { TextGroup } from '../TextGroup';
import './styles.css'
import featuredImg from '../../assets/images/featured-image.png'

export function Home() {
    return (
        <div className="homeContainer">
            <Header/>
            <div className="grid homeContent">
                <TextGroup 
                    title={'Veja o guia definitivo para conquistar seus objetivos como DEV em 2022'} 
                    comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique placerat hac.'} 
                    linkRef={'http://localhost:3000/saiba-mais'}
                />
                <div className="homeImage">
                     <img className='featuredImg' src={featuredImg} alt="Featured Image" />
                </div>
            </div>
        </div>
    );
}