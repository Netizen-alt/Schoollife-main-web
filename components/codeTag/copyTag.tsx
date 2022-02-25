import { Button, Divider } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useState } from "react";

export default function CopyTag(props: any) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      textBox: {
        backgroundColor: "#f6f8fa",
        borderRadius: "5px",
        minWidth: "10px",
        width: "auto",
        height: "15px",
        display: "flex",
        alignItems: "center",
      },
      longBox: {
        background: "#f4f4f4",
        // border: "1px solid #ddd",
        borderLeft: "3px solid #f36d33",
        color: "#666",
        // pageBreakInside: "avoid",
        fontFamily: "monospace",
        fontSize: "15px",
        maxWidth: "100%",
        overflow: "auto",
        padding: "1em 1em",
        display: "flex",
        justifyContent: "space-between",
        wordWrap: "break-word",
      },
      copyBox: {
        backgroundColor: "#f6f8fa",
        borderRadius: "5px",
        minWidth: "10px",
        width: "auto",
        margin: "-10px",
        height: "auto",
        display: "flex",
        alignContent: "center",
        // zIndex:0,
      },
      commandName: {
        // display: "flex",
        // flexDirection: "column",
        padding: "10px",
        color: "#d9d9d9",
      },
      underInfo: {
        paddingBottom: "10px ",
      },
      check: {
        color: "#31c726",
      },
    })
  );
  const classes = useStyles();
  const [getCopy, setCopy] = useState(false);
  return (
    <details>
      <summary className={classes.commandName}>
        <span className={classes.underInfo}>
          <span>{props.cName}</span>
        </span>
      </summary>
      <div className={classes.longBox}>
        <code key={props.cName} className={classes.textBox}>
          {props.copy}
        </code>
        <CopyToClipboard text={props.copy}>
          <Button
            onClick={() => setCopy(true)}
            key={props.cName}
            className={classes.copyBox}
          >
            {getCopy ? (
              <CheckCircleIcon key={props.cName} className={classes.check} />
            ) : (
              <FileCopyIcon key={props.cName} />
            )}
          </Button>
        </CopyToClipboard>
      </div>
    </details>
  );
}
