import React, {useEffect , useState} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import Hero from './hero/Hero'
import Cards from '../components/Cards/Cards'
import Footer from '../components/Footer.jsx'
import Start from '../components/Start'

const  Main = (props) => {

    //const key = "ad3d54cc03bea49bccbddd7b0f7beac02e956eca572e1d8b807a3e2338fdd0dc/stage"
     const [news , setNews] = useState({})

    useEffect(()=>{
        console.log("Useeffect caalllled")
        alanBtn = alanBtn({ 
            key: 'ad3d54cc03bea49bccbddd7b0f7beac02e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({command , savedArticles}) => {
              if (command === 'getNews') {
               console.log(savedArticles)
               setNews(savedArticles)
              }




            }
    }, [])
})





        // const [news , setNews] = useState({
        //     "status": "ok",
        //     "totalResults": 7784,
        //     "articles": [
        //     {
        //     "source": {
        //     "id": "engadget",
        //     "name": "Engadget"
        //     },
        //     "author": "Violet Blue",
        //     "title": "Twitter's Bitcoin hackers had almost limitless access",
        //     "description": "On Wednesday, July 15, Twitter was the target of a very public hack attack that’s still sending shockwaves across the internet. In what is a major security breach for the company, a handful of the most-followed Twitter accounts belonging to some of the world’…",
        //     "url": "https://www.engadget.com/twitter-bitcoin-scam-social-engineering-hack-access-193040357.html",
        //     "urlToImage": "https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-07%2Fca68c900-c85d-11ea-b9df-6238180027a8&client=amp-blogside-v2&signature=9b0fbb183070e467429323ab75f41cbbe1c8dbc3",
        //     "publishedAt": "2020-07-17T19:30:40Z",
        //     "content": "Just hackers burning up 0day like it’s a fire sale"
        //     },
        //     {
        //     "source": {
        //     "id": "engadget",
        //     "name": "Engadget"
        //     },
        //     "author": "Nicole Lee",
        //     "title": "Tampa teenager arrested for Twitter Bitcoin hack",
        //     "description": "Authorities in Tampa, Florida have arrested a 17-year-old for being the alleged “mastermind” behind the Twitter Bitcoin hack that targeted several high-profile accounts on July 15th, 2020. His name has not been revealed due to his underage status. According t…",
        //     "url": "https://www.engadget.com/teenager-arrested-twitter-bitcoin-hack-183302700.html",
        //     "urlToImage": "https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-images%2F2020-07%2F80319ad0-c77f-11ea-adfe-d560f6400e1e&client=amp-blogside-v2&signature=3ae5e1a0ea67905f52a03c1a851c07fc1c61bdbb",
        //     "publishedAt": "2020-07-31T18:33:02Z",
        //     "content": "Authorities in Tampa, Florida have arrested a 17-year-old for being the alleged “mastermind” behind the Twitter Bitcoin hack that targeted several high-profile accounts on July 15th, 2020. His name h… [+463 chars]"
        //     },
        //     {
        //     "source": {
        //     "id": "techcrunch",
        //     "name": "TechCrunch"
        //     },
        //     "author": "Jonathan Shieber",
        //     "title": "Casa pivots to provide self-custody services to secure bitcoin",
        //     "description": "Casa, a Colorado-based provider of bitcoin security services, is launching a managed service allowing customers to buy and hold their own bitcoin, rather than using an external custodian like Coinbase. “With self-custody using Casa it’s impossible to be hacke…",
        //     "url": "http://techcrunch.com/2020/08/06/casa-pivots-to-provide-self-custody-services-to-secure-bitcoin/",
        //     "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/06/GettyImages-1050523528.jpg?w=600",
        //     "publishedAt": "2020-08-06T18:25:29Z",
        //     "content": "Casa, a Colorado-based provider of bitcoin security services, is launching a managed service allowing customers to buy and hold their own bitcoin, rather than using an external custodian like Coinbas… [+1571 chars]"
        //     }]
        // }
        //     )


            console.log(Object.keys(news).length)

    return (
        <div>
            <Hero/>

            {
                Object.keys(news).length > 0  ?   <Cards news={news}/> : <Start/>   
            }
           
            
            <Footer/>
           
            
        </div>
    );
}


export default Main




