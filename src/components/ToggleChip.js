import { Avatar, Chip } from "@mui/material";
import React from "react";

const ToggleChip = ({ name, image }) => {
    return (
        <div>
            <Chip
                avatar={<Avatar src={require("../img/user.png")} />}
                label={name}
                variant="outlined"
                onDelete={() => {}}
            />
        </div>
    );
};

export default ToggleChip;
