import React, { useEffect, useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar, Legend, BarChart } from 'recharts';
import './index.css'

const apiResponseContent = {
    initally: "INITIAL",
    inProgress: "INPROGRESS",
    success: "SUCCESS",
    isFailed: "ISFAILED"
}

function Charts() {
    const [response, setResponse] = useState({
        status: apiResponseContent.initally,
        verificatiobData: null
      })
    
      const getApiverificationData = async () => {
        const response = await fetch("https://creditsea-server.onrender.com")
        const data = await response.json()
        if (response.ok){
            setResponse({verificatiobData: data, status: apiResponseContent.success})
        }else {
            setResponse({status: apiResponseContent.isFailed})
        }
      }
    
      useEffect (() =>{
        setResponse({status: apiResponseContent.inProgress})
        getApiverificationData()
      },[])

    const loadingview = () => (
        <div className='loader'>
            <p>Loading........</p>
        </div>
    )

    const isfailedView = () => {
        <div className='loader'>
            <p>Failed to load......</p>
        </div>
    }

    const successView = () => {

        const DataFormatter = (number) => {
            if (number > 1000) {
            return `${(number / 1000).toString()}k`
            }
            return number.toString()
        }

        const data = [
            {
                name: '1',
                uv: 4000,
                pv: 2400,
                amt: 2400,
            },
            {
                name: '2',
                uv: 3000,
                pv: 1398,
                amt: 2210,
            },
            {
                name: '3',
                uv: 2000,
                pv: 9800,
                amt: 2290,
            },
            {
                name: '4',
                uv: 2780,
                pv: 3908,
                amt: 2000,
            },
            {
                name: '5',
                uv: 1890,
                pv: 4800,
                amt: 2181,
            },
            {
                name: '6',
                uv: 2390,
                pv: 3800,
                amt: 2500,
            },
            {
                name: '7',
                uv: 3490,
                pv: 4300,
                amt: 2100,
            },
            {
                name: '8',
                uv: 2690,
                pv: 3800,
                amt: 2500,
            },
            {
                name: '9',
                uv: 2590,
                pv: 3800,
                amt: 2500,
            },
            {
                name: '10',
                uv: 2190,
                pv: 3800,
                amt: 2500,
            },
            {
                name: '11',
                uv: 2990,
                pv: 3800,
                amt: 2500,
            },
            {
                name: '12',
                uv: 3390,
                pv: 3800,
                amt: 2500,
            },
    
        ];

        return (
            <div>
                <div className='Area-g'>
                    <h1 className='h1'>Loans Released Monthly</h1>
                    <ResponsiveContainer width="95%" height={300}>
                        <AreaChart
                        width={500}
                        height={50}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className='bar-g'>
                    <h1 className='h1'>Total Outstanding Open Loans - Monthly</h1>
                    <ResponsiveContainer width="95%" height={300}>
                        <BarChart
                            data={data}
                            margin={{
                            top: 5,
                            }}
                        >
                            <XAxis
                            dataKey="name"
                            tick={{
                                stroke: "gray",
                                strokeWidth: 1,
                            }}
                            />
                            <YAxis
                            tickFormatter={DataFormatter}
                            tick={{
                                stroke: "gray",
                                strokeWidth: 0,
                            }}
                            />
                            <Legend
                            wrapperStyle={{
                                padding: 30,
                            }}
                            />
                            <Bar dataKey="uv" name="months" fill="#1f77b4" barSize="20%" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className='bar-g2'>
                    <h1 className='h1'>Number of Repayments Collected - Monthly</h1>
                    <ResponsiveContainer width="95%" height={300}>
                        <BarChart
                            data={data}
                            margin={{
                            top: 5,
                            }}
                        >
                            <XAxis
                            dataKey="name"
                            tick={{
                                stroke: "gray",
                                strokeWidth: 1,
                            }}
                            />
                            <YAxis
                            tickFormatter={DataFormatter}
                            tick={{
                                stroke: "gray",
                                strokeWidth: 0,
                            }}
                            />
                            <Legend
                            wrapperStyle={{
                                padding: 30,
                            }}
                            />
                            <Bar dataKey="uv" name="months" fill="red" barSize="20%" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        )
    }

    const renderResponse = () => {
        const {status} = response
        switch (status) {
            case apiResponseContent.inProgress:
                return loadingview()
            case apiResponseContent.isFailed:
                return isfailedView()
            case apiResponseContent.success:
                return successView()
            default:
                return loadingview()
        }
    }


  return (
    <>
    {renderResponse()}
    </>
    
  )
}

export default Charts
