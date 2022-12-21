import React, { useState } from "react";
// import { Stack } from "@mui/system";
import { Stack, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searcher = (props) => {
   const { setInputUser } = props;

   const [valueInput, setValueInput] = useState("");

   const onSearchValueChange = (e) => {
      setValueInput(e.target.value);
   };

   const handleSubmit = () => {
      setInputUser(valueInput);
   };

   return (
      <Stack
         direction="row"
         sx={{
            marginTop: "30px",
            width: "80%",
         }}
      >
         {console.log(valueInput)}
         <TextField
            id="outlined-basic"
            label="GitHub USer"
            placeholder="Octocat"
            variant="outlined"
            size="small"
            value={valueInput}
            onChange={onSearchValueChange}
            sx={{
               width: "90%",
            }}
         />
         <IconButton
            onClick={handleSubmit}
            size="small"
            sx={{
               left: "-45px",
            }}
         >
            <SearchIcon />
         </IconButton>
      </Stack>
   );
};

export default Searcher;
