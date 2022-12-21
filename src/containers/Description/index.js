import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { Fragment } from "react";
import PaperInformation from "../PaperInformation";
import LocationInformation from "../LocationInformation";

const Description = ({ userState }) => {
   const { bio } = userState;

   return (
      <Fragment>
         <Stack justifyContent={"center"}>
            {bio !== null ? (
               <Typography variant="body1">{bio}</Typography>
            ) : (
               <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
               </Typography>
            )}
         </Stack>
         <PaperInformation userState={userState} />
         <LocationInformation userState={userState} />
      </Fragment>
   );
};

export default Description;
