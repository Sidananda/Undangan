import React from 'react';
import { FaRegEnvelope, FaShoppingCart, FaMoneyBillAlt, FaUserFriends } from 'react-icons/fa';

const Summary = ({ title, value, bgColor, icon }) => {
  return (
    <div className={`p-4 rounded-lg shadow ${bgColor} w-full relative`}>
      <div className="absolute top-4 right-4 opacity-10 text-4xl"> 
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3> 
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default Summary;
