import React, { useEffect, useState } from 'react';

// 'use strict';
// const request = require('request');

// // replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
// const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo';

// request.get({
//     url: url,
//     json: true,
//     headers: {'User-Agent': 'request'}
//   }, (err, res, data) => {
//     if (err) {
//       console.log('Error:', err);
//     } else if (res.statusCode !== 200) {
//       console.log('Status:', res.statusCode);
//     } else {
//       // data is successfully parsed as a JSON object:
//       console.log(data);
//     }
// });
const fetchNewsData = async () => {
    // Placeholder data - replace with actual API calls
    return [
        { title: 'Forex Market News 1', description: 'Description of forex market news 1' },
        { title: 'Forex Market News 2', description: 'Description of forex market news 2' },
        // Add more news articles as needed
    ];
};

const NewsPage = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        const loadNews = async () => {
            setNewsData(await fetchNewsData());
        };

        loadNews();
    }, []);

    return (
        <div className="container mx-auto px-6 py-8">
                  

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Forex Market News</h2>
                <div className="bg-white shadow rounded-lg p-6">
                    {newsData.map((news, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="text-xl font-semibold">{news.title}</h3>
                            <p>{news.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
