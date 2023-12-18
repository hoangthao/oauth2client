import React from 'react'
import { useState } from "react";
import { Input, Button, Flex } from "@mantine/core";

const UserFilter = ({initialValue, setSearch}) => {
    const [searchQuery, setSearchQuery] = useState(initialValue);

    const handleSearchInputChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSearchClick = () => {
      console.log(`Searching for "${searchQuery}"...`);
      setSearch(searchQuery);
    };
  
    return (
      <>
        <Flex
            direction={{ base: "column", sm: "row" }}
            gap="sm"
            align="flex-start"
          >
            <Input
              placeholder="First name"
              value={searchQuery}
              onChange={handleSearchInputChange}
              radius="xl"
            />
            <Button onClick={handleSearchClick}  size="xs" radius="xl">
              Search
            </Button>
          </Flex>
      </>
    );
}

export default UserFilter