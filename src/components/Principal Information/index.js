import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { Fragment } from "react";

const PrincipalInformation = ({ userState }) => {
   const { name, login, created_at } = userState;

   return (
      <Fragment>
         <Stack direction="row" justifyContent={"space-between"}>
            <Typography variant="h4">{name}</Typography>
            <Typography variant="subtitle2">
               {new Date(created_at).toLocaleDateString("en-us")}
            </Typography>
         </Stack>
         <Typography variant="caption">@{login}</Typography>
      </Fragment>
   );
};

export default PrincipalInformation;
