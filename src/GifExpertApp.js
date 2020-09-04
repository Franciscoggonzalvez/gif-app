import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samuray X', 'Dragon Ball']
    const [categories, setcategories] = useState(['Pokemon'])

    // const handleAdd = () => {
    //     //setcategories([...categories, 'HunterXHunter']);
    //     setcategories(categ => [...categ, 'HunterXHunter'])
    // }
    return (
        <>
            <h2>
                GifExpertApp
            </h2>
            <AddCategory setCategories = {setcategories}/>
            <hr />
           
            <ol>
                {
                    categories.map(category => 
                        <GifGrid 
                        key={category}
                        category= {category} />     
                    )
                }
            </ol>
        </>
    )
}

