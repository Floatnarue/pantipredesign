
import React, { useEffect, useState } from "react";
import Container from "../Container";
import CategoryBox from "../CategoryBox";
import { TbBeach } from "react-icons/tb";

interface Category {
    title: string;
    imageUrl: string;
}

export const categories = [
    {
        label : "Cartoon",
        icon : TbBeach , 
    },
    {
        label : "Travel",
        icon : TbBeach , 
    },
    {
        label : "Gossip",
        icon : TbBeach , 
    },
    {
        label : "Politics",
        icon : TbBeach , 
    },
    {
        label : "Living",
        icon : TbBeach , 
    },
    {
        label : "GlobalWarmning",
        icon : TbBeach , 
    },
]

const Categories: React.FC = () => {

    /*
    //const [categories , setCategories] = useState<Category[]>([]);

    const fetchCategories = async () => {
        try {
            const response = await fetch('https://pantip.com');
            const html = await response.text();

            // Parse the HTML content
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            // Extract category data
            const categoryElements = doc.querySelectorAll('.pt-forum-list a');
            const categoriesData: Category[] = Array.from(categoryElements).map(categoryElement => {
                const title = categoryElement.getAttribute('title') || '';
                const style = categoryElement.querySelector('.pt-forum-list__icon')?.getAttribute('style') || '';
                const imageUrl = style ? style.match(/url\("([^"]+)"/)?.[1] || '' : '';
                return { title, imageUrl };
            });
            
            // Update state with the extracted categories data
            setCategories(categoriesData);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);


    */

    
    return (
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
                {categories.map((item)=>(
                    <CategoryBox key={item.label} label ={item.label} icon ={item.icon}/>
                ))}
                
            </div>
        </Container>
    );
};

export default Categories;