import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import UserCards from "./UserCards";

const User_list = () => {
  const [users, setUsers] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `https://random-data-api.com/api/v2/users?size=100&page=${page}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const newUsers = await response.json();
      setUsers((prevUsers) => [...prevUsers, ...newUsers]);
      setPage((prevPage) => prevPage + 1);
      if (newUsers.length < 6) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users);

  return (
    <div>
      <InfiniteScroll
        className=" h-[100vh] grid gap-1 grid-cols-1  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 "
        dataLength={users.length}
        next={fetchUsers}
        hasMore={hasMore}
        loader={
          <div class="flex flex-col bg-neutral-300 w-56 h-64 animate-pulse rounded-xl p-2 gap-1">
            <div class="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
            <div class="flex flex-col">
              <div class="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
              <div class="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
              <div class="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
              <div class="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
            </div>
          </div>
        }
      >
        {users.map((user) => {
          return UserCards(user);
        })}
      </InfiniteScroll>
    </div>
  );
};

export default User_list;
