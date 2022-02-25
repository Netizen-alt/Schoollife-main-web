/* eslint-disable react-hooks/rules-of-hooks */
import DefualtNavbar from "../../components/defaultNavvbar/defultNavbar";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      backgroundImage: `url('bg_code.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    },
  })
);

export default function DefaultLayout({ children }: any) {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <DefualtNavbar />
      {children}
    </div>
  );
}
