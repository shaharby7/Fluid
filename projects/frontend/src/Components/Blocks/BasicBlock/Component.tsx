import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { FC } from "react";

export interface BlockProps {
  title: string;
}

const BasicBlock: FC<BlockProps> = (props: BlockProps) => {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: "primary.dark",
        display: "flex",
        flexDirection: "column",
        textAlign:"center",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Typography>{props.title}</Typography>
    </Box>
  );
};

export default BasicBlock;
