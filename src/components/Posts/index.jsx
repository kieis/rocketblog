import '../../styles/global.css'
import './styles.css'
import { PostTypes, Post } from '../Post';
import post1Img from '../../assets/images/post-1.png'
import post2Img from '../../assets/images/post-2.png'
import post3Img from '../../assets/images/post-3.png'
import post4Img from '../../assets/images/post-4.png'

export function Posts() {
    return (
        <div className="postContainer">
            <div className="grid post-grid-gap">
                <Post 
                    type={PostTypes.type1}
                    image={post1Img}
                    date={'Janeiro 04, 2022'}
                    title={'Começando no ReactJS em 2022'} 
                    comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.'}
                />
                <div className="postSideContent">
                    <Post 
                        type={PostTypes.type2}
                        date={'Janeiro 04, 2022'}
                        title={'Conheça as principais técnicas para conseguir uma vaga internacional em programação'} 
                        comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.'}
                    />
                    <hr />
                    <Post 
                        type={PostTypes.type2}
                        date={'Janeiro 04, 2022'}
                        title={'Veja a evolução do Front-end na prática'} 
                        comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque.'}
                    />
                </div>
            </div>
            <div className="grid grid-col-3 post-side-grid-gap">
                <Post 
                    type={PostTypes.type1}
                    image={post2Img}
                    date={'Janeiro 04, 2022'}
                    title={'10 dicas para conseguir a vaga desejada'} 
                    comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.'}
                />
                <Post 
                    type={PostTypes.type1}
                    image={post3Img}
                    date={'Janeiro 04, 2022'}
                    title={'Deixe seu código mais semântico com essas dicas'} 
                    comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.'}
                />
                <Post 
                    type={PostTypes.type1}
                    image={post4Img}
                    date={'Janeiro 04, 2022'}
                    title={'Use essas dicas nas suas aplicações mobile'} 
                    comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.'}
                />
            </div>
        </div>
    );
}