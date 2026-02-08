'use client'
import Chart from 'chart.js/auto';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

import { useEffect, useState } from "react"


export default function MainPage() {
    const data = [
        {
            id: 1,
            name: "Appel Wat,ch Serias 11",
            price: 32000
        },
        {
            id: 2,
            name: "Book",
            price: 700
        },
        {
            id: 3,
            name: "Iphone 17 Pro Max",
            price: 110000
        },
        {
            id: 4,
            name: " Apple Watch Ultra 2",
            price: 90000
        },
        {
            id: 5,
            name: "BCAA",
            price: 1200
        },
        {
            id: 6,
            name: 'Gamer, Mouse',
            price: 10000
        },
        {
            id: 7,
            name: "Knife,",
            price: 3000
        },
        {
            id: 8,
            name: "Keybo,ard Couagr 60%",
            price: 14000
        },
        {
            id: 9,
            name: "IQOS",
            price: 2990
        },
        {
            id: 10,
            name: "Bantly Baytaga",
            price: 114530
        }
    ]
    return (
        <div>
            <div>
                <div>
                    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                </div>
                <div className='flex justify-center '>
                    <div className='w-70 border h-45 rounded-lg items-center mr-10'>
                        <div className='ml-10'>
                            <div className='flex'>
                                <p className='text-xl mt-7'>Total User</p>
                                <img className=' mr-2 mt-4 flex justify-end ml-20' src="icon.svg" alt="картинка" />
                            </div>
                            <p className='text-xl text font-bold'> 40,689 $</p>
                            <div className='flex mt-8'>
                                <img className='mr-3' src="Path.svg" alt="" />
                                <p className='text-green-600'>8.5%</p>
                                <p className=''> Up from yesterday</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-70 border h-45 rounded-lg items-center '>
                        <div className=' items-center'>
                            <div className='flex'>
                                <p className='text-xl mt-7 ml-4'>Total Oreder</p>
                                <img className='flex justify-end ml-20 mt-4' src="icon (1).svg" alt="" />
                            </div>
                            <p className=' ml-4 text-xl text font-bold'>10,293</p>
                            <div className='flex mt-8' >
                                <img className='ml-7' src="Path.svg" alt="" />
                                <p className='text-green-600'>1.3%</p>
                                <p className='ml-4'>Up from past week</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-70 border h-45 rounded-lg items-center ml-10'>
                        <div>
                            <div>
                                <div className='flex'>
                                    <p className='text-xl mt-7 ml-4'>Total Sales</p>
                                    <img className='ml-23 mt-5' src="icon (3).svg" alt="" />
                                </div>
                                <p className='ml-4 text-xl text font-bold'>$89.000</p>
                            </div>
                            <div className='flex'>
                                <img className='ml-4 mt-6' src="Path (1).svg" alt="" />
                                <p className='text-red-500 ml-4 mt-6'>4,3 %</p>
                                <p className='ml-3  mt-6'>Down from yesterday</p>
                            </div>

                        </div>
                    </div>
                    <div className='w-70 border h-45 rounded-lg items-center  ml-10'>
                        <div>
                            <div className='flex'>
                                <p className='ml-4 mt-7 text-xl'>Total Panding</p>
                                <img className='ml-20 mt-4' src="icon (2).svg" alt="" />
                            </div>
                            <div>
                                <p className='ml-4 text-xl text font-bold'>2040</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <img className='mt-9' src=" Path.svg" alt="" />
                            <p className='mt-6 ml-3 text-green-600'> 1.8 %</p>
                            <p className='mt-6 ml-2'>Up from yesterday</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-20 flex justify-center'>
                <LineChart
                    style={{ width: '1000px', aspectRatio: 1.618, maxWidth: 1000 }}
                    responsive
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 5,
                        left: 0,
                    }}
                >
                    <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="price" stroke="purple" strokeWidth={2} name="My data series name" />
                    <XAxis dataKey="name" height={50} />
                    <YAxis width="auto" label={{ value: 'Price', position: 'insideLeft', angle: -90 }} />
                    <Legend align="right" />
                    <Tooltip />
                    <RechartsDevtools />
                </LineChart>
            </div>

        </div >
    )
} 