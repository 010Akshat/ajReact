import React from "react";

function Card(props) {
    console.log("props",props.username)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200">
      <img className="w-full" src= 'https://images.pexels.com/photos/13510517/pexels-photo-13510517.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Akshat</div>
        <p className="text-gray-700 text-base">{props.username}</p>
      </div>
    </div>
  );
}

export default Card;
