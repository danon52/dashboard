'use client'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

export default function MainPage() {
    const data = [
        { id: 1, name: "Apple Watch Series 11", price: 32000 },
        { id: 2, name: "Book", price: 700 },
        { id: 3, name: "iPhone 17 Pro Max", price: 110000 },
        { id: 4, name: "Apple Watch Ultra 2", price: 90000 },
        { id: 5, name: "BCAA", price: 1200 },
        { id: 6, name: 'Gamer Mouse', price: 10000 },
        { id: 7, name: "Knife", price: 3000 },
        { id: 8, name: "Keyboard Cougar 60%", price: 14000 },
        { id: 9, name: "IQOS", price: 2990 },
        { id: 10, name: "Bently Bag", price: 114530 }
    ]

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Заголовок */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                <p className="text-gray-600 mt-2">Overview of your business metrics</p>
            </div>

            {/* Карточки статистики */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {/* Карточка 1 */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-gray-600 font-medium">Total Users</p>
                        <div className="p-2 bg-blue-50 rounded-lg">
                            <img className="w-6 h-6" src="icon.svg" alt="Users icon" />
                        </div>
                    </div>
                    <p className="text-2xl font-bold text-gray-800 mb-2">40,689 $</p>
                    <div className="flex items-center">
                        <img className="w-4 h-4 mr-1" src="Path.svg" alt="Up trend" />
                        <span className="text-green-600 font-medium text-sm mr-2">8.5%</span>
                        <span className="text-gray-500 text-sm">Up from yesterday</span>
                    </div>
                </div>

                {/* Карточка 2 */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md hover:border-green-200 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-gray-600 font-medium">Total Orders</p>
                        <div className="p-2 bg-green-50 rounded-lg">
                            <img className="w-6 h-6" src="icon (1).svg" alt="Orders icon" />
                        </div>
                    </div>
                    <p className="text-2xl font-bold text-gray-800 mb-2">10,293</p>
                    <div className="flex items-center">
                        <img className="w-4 h-4 mr-1" src="Path.svg" alt="Up trend" />
                        <span className="text-green-600 font-medium text-sm mr-2">1.3%</span>
                        <span className="text-gray-500 text-sm">Up from past week</span>
                    </div>
                </div>

                {/* Карточка 3 */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md hover:border-purple-200 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-gray-600 font-medium">Total Sales</p>
                        <div className="p-2 bg-purple-50 rounded-lg">
                            <img className="w-6 h-6" src="icon (3).svg" alt="Sales icon" />
                        </div>
                    </div>
                    <p className="text-2xl font-bold text-gray-800 mb-2">$89,000</p>
                    <div className="flex items-center">
                        <img className="w-4 h-4 mr-1" src="Path (1).svg" alt="Down trend" />
                        <span className="text-red-500 font-medium text-sm mr-2">4.3%</span>
                        <span className="text-gray-500 text-sm">Down from yesterday</span>
                    </div>
                </div>

                {/* Карточка 4 */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md hover:border-yellow-200 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-gray-600 font-medium">Total Pending</p>
                        <div className="p-2 bg-yellow-50 rounded-lg">
                            <img className="w-6 h-6" src="icon (2).svg" alt="Pending icon" />
                        </div>
                    </div>
                    <p className="text-2xl font-bold text-gray-800 mb-2">2,040</p>
                    <div className="flex items-center">
                        <img className="w-4 h-4 mr-1" src="Path.svg" alt="Up trend" />
                        <span className="text-green-600 font-medium text-sm mr-2">1.8%</span>
                        <span className="text-gray-500 text-sm">Up from yesterday</span>
                    </div>
                </div>
            </div>

            {/* График */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Product Price Analytics</h2>
                    <p className="text-gray-600">Price distribution across products</p>
                </div>

                <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 40 }}
                        >
                            <CartesianGrid stroke="#f0f0f0" strokeDasharray="3 3" />
                            <XAxis
                                dataKey="name"
                                angle={-45}
                                textAnchor="end"
                                height={80}
                                interval={0}
                                tick={{ fontSize: 12 }}
                            />
                            <YAxis
                                label={{
                                    value: 'Price ($)',
                                    angle: -90,
                                    position: 'insideLeft',
                                    offset: -10
                                }}
                                tickFormatter={(value) => `$${(value / 1000)}k`}
                            />
                            <Tooltip
                                formatter={(value) => [`$${value}`, 'Price']}
                                contentStyle={{
                                    backgroundColor: 'white',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                }}
                            />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="price"
                                stroke="#8b5cf6"
                                strokeWidth={3}
                                dot={{ stroke: '#8b5cf6', strokeWidth: 2, r: 4 }}
                                activeDot={{ r: 6, stroke: '#7c3aed', strokeWidth: 2 }}
                                name="Product Price"
                            />
                            <RechartsDevtools />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Таблица продуктов (опционально) */}
            <div className="mt-8 bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Top Products</h2>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-3 text-gray-600 font-medium">Product</th>
                                <th className="text-left py-3 text-gray-600 font-medium">Price</th>
                                <th className="text-left py-3 text-gray-600 font-medium">Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.slice(0, 5).map((item) => (
                                <tr
                                    key={item.id}
                                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                                >
                                    <td className="py-3 text-gray-800">{item.name}</td>
                                    <td className="py-3">
                                        <span className="font-semibold text-gray-800">
                                            ${item.price.toLocaleString()}
                                        </span>
                                    </td>
                                    <td className="py-3">
                                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                            Product
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}