import React, { useEffect, useState } from 'react'
import './Orders.css'
import {toast} from "react-toastify"
import axios from "axios"
import {assets} from "../../assets/assets"

const Orders = ({url}) => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async() => {
    const response = await axios.get(url+"/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    }
    else{
      toast.error("Error");
    }
  }

  useEffect(()=>{
    fetchAllOrders();
  },[])

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {
          orders.map((order,index)=>{
            <div key={index} className="order-item">
              <img src={assets.parcel_icon} alt="" />
              <div>
                <p className="order-item-food">
                  {
                    order.items.map((item,index)=>{
                      if(index===order.item.length-1){
                        return item.name + " X " + item.quantity
                      }
                      else{
                        return item.name + " X " + item.quantity + ", "
                      }
                    })
                  }
                </p>
                <p className="order-item-name">
                  {
                    order.address.firstName+" "+order.address.lastName
                  }
                </p>
                <p className="order-item-address">
                  <p>
                    {
                      order.address.street+", "
                    }
                  </p>
                  <p>
                    {
                      order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode
                    }
                  </p>
                </p>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Orders
