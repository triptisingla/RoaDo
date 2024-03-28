import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Divider } from "@mui/material";
import RvHookupIcon from "@mui/icons-material/RvHookup";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

function QuickActions() {
  return (
    <div className="quickactions d-flex flex-row justify-content-around text-center">
      <div>
        <LabelImportantIcon/>
        <div>Create Indents</div>
      </div>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ bgcolor: "secondary.light" }}
      />
      <div>
        <LocalShippingOutlinedIcon />
        <div>Add Vehicle</div>
      </div>

      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ bgcolor: "secondary.light" }}
      />
      <div>
        <RvHookupIcon />
        <div>Add Trailer</div>
      </div>

      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ bgcolor: "secondary.light" }}
      />
      <div>
        <PersonOutlinedIcon />
        <div>Add Driver</div>
      </div>

      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ bgcolor: "secondary.light" }}
      />
      <div>
        <LocalShippingOutlinedIcon />
        <div>Add Indents</div>
      </div>
    </div>
  );
}

export default QuickActions;
