import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Product = () => {

    const [data, setdata] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/posts").then((res) => {
            setdata(res.data);
            console.log(res);
        });
    }, []);

    const DeleteData = (id) => {
        axios.delete(`http://localhost:4000/posts/${id}`).then((res) => {
            setdata(data.filter(dele => dele.id !== id));
            console.log(res.data);
        })
    };


    return (
        <div>

            <Navbar />


            <div>
                <label>Product Name:- </label>
                <input type="text" />
                <label>dites:- </label>
                <input type="text" />
                <label>price:- </label>
                <input type="text" />
            </div>
            <div className='mt-4'>
                <button className='btn btn-danger'>Add</button>
            </div>

            {data.map((e, ind) => {
                return (
                    <>
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body" key={ind}>
                                <a href="#" className="card-link">{e.Product_Name}</a>
                                <a href="#" className="card-link">{e.dites}</a>
                                <a href="#" className="card-link">{e.price}</a>
                            </div>
                            <div>
                                <button className='btn btn-danger' onClick={() => DeleteData(e.id)}>delete</button>
                            </div>
                        </div>
                        <br/>
                    </>
                );
            })}

        </div>
    )
}

export default Product