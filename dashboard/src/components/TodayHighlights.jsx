import React from "react";
import { Card } from "@mui/material";
// import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/400.css";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";

const TodayHighlights = () => {
  return (
    <div>
      <h5 className="todayHigh py-3">Today's Highlights (14)</h5>
      <p className="todayDate">19 Mar 2024</p>

      <div className="d-flex flex-row">
        <Card className="highlight-card-1">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Income
            </Typography>
            <Typography sx={{ mb: 1.5 }} className="cad">
              100000 CAD
            </Typography>
            <Typography sx={{ fontSize: 12 }} className="payments">
              2 payments received
            </Typography>
          </CardContent>
        </Card>
        <Card className="highlight-card-2">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Income
            </Typography>
            <Typography sx={{ mb: 1.5 }} className="cad">
              100000 CAD
            </Typography>
            <Typography sx={{ fontSize: 12 }} className="payments">
              2 payments received
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div className="mt-2 d-flex flex-row justify-content-between mt-3 mb-2">
        <Typography className="completed-title" gutterBottom>
          Completed Activites (14)
        </Typography>
        <Typography className="completed-viewall" gutterBottom>
          <a href="#">View All</a>
        </Typography>
      </div>

      <List
        variant="outlined"
        sx={{
          minWidth: 240,
          borderRadius: "sm",
        }}
      >
        <ListItem className="listitem">
          Gurpreet Singh (Dispatch team) has created Load No. I-I-AAA-1325
        </ListItem>
        <ListDivider inset="default" />
        <ListItem className="listitem">
          Aman (Driver) Picked Up goods at Location_Name for Load No.
          I-I-AAA-1325
        </ListItem>
        <ListDivider inset="default" />
        <ListItem className="listitem">
          Gurpreet Singh (Dispatch team) has created Load No. I-I-AAA-1325
        </ListItem>
        <ListDivider inset="default" />
        <ListItem className="listitem">
          Load No. I-I-AAA-1325 will start added by Gurpreet Singh
        </ListItem>
      </List>

      <div className="mt-2 d-flex flex-row justify-content-between mt-3 mb-2">
        <Typography className="completed-title" gutterBottom>
          Scheduled Activites (14)
        </Typography>
        <Typography className="completed-viewall" gutterBottom>
          <a href="#">View All</a>
        </Typography>
      </div>

      <List
        variant="outlined"
        sx={{
          minWidth: 240,
          borderRadius: "sm",
        }}
      >
        <ListItem className="listitem">
          Load No. I-I-AAA-1325 will be delivered by Aman (Driver)
        </ListItem>
        <ListDivider inset="default" />
        <ListItem className="listitem">
          Aman (Driver) will Picked Up goods at Location_Name for Load No.
          I-I-AAA-1325
        </ListItem>
        <ListDivider inset="default" />
        <ListItem className="listitem">
          Load No. I-I-AAA-1325 will start added by Gurpreet Singh
        </ListItem>
        <ListDivider inset="default" />
        <ListItem className="listitem">
          Load No. I-I-AAA-1325 will start added by Gurpreet Singh
        </ListItem>
      </List>
    </div>
  );
};

export default TodayHighlights;
