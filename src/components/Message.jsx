import React from "react";
import moment from "moment";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useSelector } from "react-redux";
import { selectChannelId } from "../features/channelSlice";

function Message({ id, message, timestamp, name, email, photoURL }) {
  const [user] = useAuthState(auth);
  const channelId = useSelector(selectChannelId);
  return (
    <div
      className="flex items-center p-1 pl-5 my-5 mr-2 hover:bg-[#32353b]
    group"
    >
      <img
        src={photoURL}
        alt=""
        className="h-10 rounded-full cursor-pointer mr-3 hover:shadow-2xl"
      />
      <div className="flex flex-col">
        <h4 className="flex items-center space-x-2 font-medium">
          <span className="hover:underline text-white text-sm cursor-pointer">
            {name}
          </span>
          <span className="text-[#72767d] text-xs">
            {moment(timestamp?.toDate().getTime()).format("LLL")}
          </span>
        </h4>
        <p className="text-sm text-[#dcddde]">{message}</p>
      </div>
      {user?.email === email && (
        <div
          className="hover:bg-[#ed4245] p-1 ml-auto rounded-sm text-[#ed4245]
         hover:text-white cursor-pointer"
          onClick={() => {
            db.collection("channels")
              .doc(channelId)
              .collection("messages")
              .doc(id)
              .delete();
          }}
        >
          <TrashIcon className="h-5 hidden group-hover:inline " />
        </div>
      )}
    </div>
  );
}

export default Message;
