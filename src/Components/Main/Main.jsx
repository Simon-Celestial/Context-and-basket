import React, { useEffect, useState } from 'react';
import { getData } from '../../API/Data.js';
import './Main.scss';
import { Products } from "../Common/Poducts.jsx";

export const Main = () => {
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData();
                setFetchedData(data);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="app-main">
            <div className="app-main-content">
                {fetchedData.map((product) => (
                    <Products key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};
