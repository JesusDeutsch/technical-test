import { Mail, Phone } from "lucide-react";
import React from "react";

const UserCards = ({ first_name, last_name, email, phone_number, id }) => {
  return (
    <div
      className="
     box-border w-[300px] h-[370px] m-4 shadow-[0px_0px_30px_rgba(0,0,0,0.123)] flex flex-col items-center justify-start duration-[0.5s] rounded-xl bg-[#5C677D]"
    >
      <img
        src={`https://robohash.org/${id}?set=set5`}
        alt={`${first_name}`}
        className="w-[170px] h-[170px] shadow-[5px_10px_20px_rgba(0,0,0,0.329)] mt-5 rounded-full bg-gradient-to-r from-[rgb(54,54,54)] to-[rgb(32,32,32)] shadow-custom "
      />
      <div className=" w-full text-left flex flex-col gap-2.5 p-5">
        <div className="   text-[20px] font-semibold text-white tracking-[0.5px]">{`${first_name} ${last_name}`}</div>
        <div className="flex text-[0.84em] text-[rgb(194,194,194)] tracking-[0.2px] gap-1">
          <Mail /> {`${email}`}
        </div>
        <div className="flex text-[0.84em] text-[rgb(194,194,194)] tracking-[0.2px] gap-1">
          <Phone />
          {` ${phone_number}`}
        </div>
      </div>
    </div>
  );
};

export default UserCards;

// first_name, last_name, email, phone_number, id
