import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Giphy = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try{
                const result = await axios('https://api.giphy.com/v1/gifs/random', {
                    params: {
                        api_key: '2hKKBBfQ0kpHu1uYIDpWd0wXP1iW7vC6',
                        tag: 'interesting'
                    }
                })
                console.log('LOOK HERE', result)
                setData(result.data.data.images.fixed_height.url)
            } catch (err) {
                return 'Loading...'
            }
            setLoading(false);
        }
        fetchData();
    }, [])


    
    const handleClick = async () => {
        
    }
 
        return (
            <>
            <h1>Test</h1>
            <div className="gifButton">
                <button
                onClick={handleClick}
                type='submit'
                >
                    SHOW MY GIF
                </button>
            </div>        
            </>
        )
};


export default Giphy;