import { GiphyFetch } from '@giphy/js-fetch-api'
import { FC, useEffect } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface TopNavbarProps {
}

const TopNavbar:FC<TopNavbarProps> = ({})=> {

    const gif = new GiphyFetch(import.meta.env.VITE_APP_GIPHY_API_KEY);

   const fetchTrending = async() => {
    const { data: gifs } = await gif.trending({ limit: 10 })
    console.log('gifts',gifs);
   }
   const categores = () => {
    new Promise((resolve,reject) => {
        const gifCategories = gif.categories();
        if(gifCategories) {
            resolve(gifCategories);
        } else {
            reject('Failed in fetching data');
        }
    }).then((data) => console.log('data',data));
   }

   useEffect(()=> {
        fetchTrending();
        categores();
   },[])


 return (
    <nav>
        <ul>
            <li>Reactions</li>
            <li>Entertainment</li>
            <li>Sports</li>
            <li>Stickers</li>
        </ul>
    </nav>
 )
}

export default TopNavbar