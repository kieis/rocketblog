import { useRef } from 'react';
import { useEffect } from 'react';
import '../../styles/global.css'
import './styles.css'
export const PostTypes = {
    type1: 'with-image',
    type2: 'no-image'
};

export function Post({ type, image, date, title, comment}) {
    return (
        <div className="postContent">
            {
                type === PostTypes.type1 ? (
                    <>
                        <img src={image} alt="Post Image" />
                        <span>{date}</span>
                        <h2>{title}</h2>
                        <p>{comment}</p>
                    </>

                ): (
                    <>
                        <p>{date}</p>
                        <h2>{title}</h2>
                        <p>{comment}</p>
                    </>
                )
            }

        </div>
    );
}