import { Grid, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";
import React from "react";

const LocationInformation = ({ userState }) => {
   const { location, twitter_username, blog, company } = userState;

   return (
      <Grid container spacing={2} marginTop={"15px"}>
         {/* con xs={} separamos la grilla la grilla se divide en 12 siempre */}
         <Grid item xs={6}>
            <Stack direction={"row"} spacing={2}>
               <LocationOnIcon
                  sx={{
                     color: "#f5625b",
                  }}
               />
               {location !== null ? (
                  <Typography>{location}</Typography>
               ) : (
                  <Typography>Not Avaliable</Typography>
               )}
            </Stack>
         </Grid>
         <Grid item xs={6}>
            <Stack direction={"row"} spacing={2}>
               <TwitterIcon
                  sx={{
                     color: "#1da1f2",
                  }}
               />
               {twitter_username !== null ? (
                  <Typography>@{twitter_username}</Typography>
               ) : (
                  <Typography>Not Avaliable</Typography>
               )}
            </Stack>
         </Grid>
         <Grid item xs={6}>
            <Stack direction={"row"} spacing={2}>
               <LanguageIcon
                  sx={{
                     color: "#2a74f5",
                  }}
               />
               {blog !== null ? (
                  <a href={blog} target={"_blank"} rel={"noopener noreferrer"}>
                     <Typography>{blog}</Typography>
                  </a>
               ) : (
                  <Typography>Not Avaliable</Typography>
               )}
            </Stack>
         </Grid>
         <Grid item xs={6}>
            <Stack direction={"row"} spacing={2}>
               <BusinessIcon />
               {company !== null ? (
                  <Typography>{company}</Typography>
               ) : (
                  <Typography>Not Avaliable</Typography>
               )}
            </Stack>
         </Grid>
      </Grid>
   );
};

export default LocationInformation;
