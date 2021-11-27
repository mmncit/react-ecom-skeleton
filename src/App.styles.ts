import { createStyles, makeStyles } from "@material-ui/core";

const styles = () =>
  createStyles({
    tooltipStyle: {
      textTransform: "uppercase",
      border: `1px solid white`,
      boxShadow: "2px 2px 2px 0 rgba(0, 0,0,0.1)",
      whiteSpace: "nowrap",
      /* position of tooltip */
      position: "absolute",
      top: "100%",
      right: "150%",
      marginTop: "-4px",
    },
  });

export const useStyles = makeStyles(styles);
