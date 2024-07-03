import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';



const fetchRealTimeForexData = async () => {
    // Placeholder data - replace with actual API calls
    return [
        { pair: 'USD/EUR', rate: 1.12 },
        { pair: 'GBP/USD', rate: 1.30 },
        // Add more currency pairs as needed
    ];
};

const fetchTrendData = async () => {
    // Placeholder data - replace with actual API calls
    return {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [{
            label: 'USD/EUR',
            data: [1.10, 1.12, 1.11, 1.13],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };
};

const fetchHistoricalData = async () => {
    // Placeholder data - replace with actual API calls
    return {
        labels: ['2023-01-01', '2023-02-01', '2023-03-01', '2023-04-01'],
        datasets: [{
            label: 'GBP/USD',
            data: [1.28, 1.29, 1.30, 1.31],
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    };
};

const ForexDataPage = () => {
    const [forexData, setForexData] = useState([]);
    const [trendData, setTrendData] = useState({});
    const [historicalData, setHistoricalData] = useState({});

    useEffect(() => {
        const loadData = async () => {
            setForexData(await fetchRealTimeForexData());
            setTrendData(await fetchTrendData());
            setHistoricalData(await fetchHistoricalData());
        };

        loadData();
    }, []);

    useEffect(() => {
        if (Object.keys(trendData).length > 0) {
            const trendCtx = document.getElementById('trendChart').getContext('2d');
            new Chart(trendCtx, {
                type: 'line',
                data: trendData,
                options: {
                    responsive: true,
                    scales: {
                        x: { beginAtZero: true },
                        y: { beginAtZero: true }
                    }
                }
            });
        }
    }, [trendData]);

    useEffect(() => {
        if (Object.keys(historicalData).length > 0) {
            const historicalCtx = document.getElementById('historicalDataChart').getContext('2d');
            new Chart(historicalCtx, {
                type: 'line',
                data: historicalData,
                options: {
                    responsive: true,
                    scales: {
                        x: { beginAtZero: true },
                        y: { beginAtZero: true }
                    }
                }
            });
        }
    }, [historicalData]);

    return (
        <div className="container mx-auto px-6 py-32">

            <div className="mb-8">
                <input type="text" placeholder="Select Currency Pair" className="w-full p-4 rounded border border-gray-300" />
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Real-time Forex Data</h2>
                <div className="bg-white shadow rounded-lg p-6">
                    <table className="w-full table-auto">
                        <thead>
                            <tr>
                                <th className="text-left py-2">Currency Pair</th>
                                <th className="text-left py-2">Exchange Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {forexData.map((data, index) => (
                                <tr key={index}>
                                    <td className="py-2">{data.pair}</td>
                                    <td className="py-2">{data.rate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Trend Charts</h2>
                <div className="bg-white shadow rounded-lg p-6">
                    <canvas id="trendChart"></canvas>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-4">Historical Data</h2>
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="mb-4">
                        <label htmlFor="startDate" className="block text-gray-700">Start Date</label>
                        <input type="date" id="startDate" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="endDate" className="block text-gray-700">End Date</label>
                        <input type="date" id="endDate" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <canvas id="historicalDataChart"></canvas>
                </div>
            </div>
        </div>
    );
};

export default ForexDataPage;
