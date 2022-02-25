import DefaultLayout from "../layouts/defaultLayout/defaultLayout";
import Divider from "@material-ui/core/Divider";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import devInfo from "../data/devInfo.json";
import commandInfo from "../data/commandInfo.json";
import clubInfo from "../data/clubInfo.json";
import Image from "next/image";
import { Button } from "@material-ui/core";
import { color } from "@material-ui/system";
import classes from "./Index.module.scss";
import CopyTag from "../components/codeTag/copyTag";
import React from "react";

export default function Home() {
  // const classes = useStyles();
  return (
    <DefaultLayout>
      {/* ส่วนของครึ่ง Home */}
      <div className={classes.root}>
        <h1 className={classes.Center} id="Home">
          อธิบาย
        </h1>
        <Divider />
        <br />
        <div className={classes.Center}>
          <div className={classes.box}>
            <span className={classes.textHome}> บอทที่มี ระบบแก็ง ระบบสุ่มยศ ที่บัคดีที่สุดในประเทศไทย </span>
          </div>
        </div>
      </div>
      {/* ส่วนของครึ่ง Command */}
      <div>
        <h1 className={classes.Center} id="Command">
          คำสั่ง
        </h1>
        <Divider />
        <br />
        <div className={classes.Center}>
          <div className={classes.box}>
            {clubInfo.clubCommand.map((e) => (
              <div key={e.cName}>

              <CopyTag copy={e.cCommand} cName={e.cName}/>
              <Divider/>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ส่วนของครึ่ง DevInfo */}
      <div>
        <h1 className={classes.Center} id="Developer">
          ทีมงาน และ ผู้พัฒนา
        </h1>
        <Divider />
        <br />
        <div className={classes.Center}>
            <div
              className={
                devInfo.DevInfo.length > 5
                  ? classes.cardAllMore5
                  : classes.cardAll
              }
            >
              {devInfo.DevInfo.map((i) => (
                <div
                  className={
                    devInfo.DevInfo.length > 5
                      ? classes.cardOneMore4
                      : classes.cardOne
                  }
                  key={i.userId}
                >
                  <Image
                    className={classes.cardPic}
                    loader={({ src }) => src}
                    src={i.userPhoto}
                    alt={i.userName}
                    width={100}
                    height={100}
                  />
                  <div className={classes.textInfoDev}>
                    <span className={classes.nameDev} key={i.userId}>
                      {i.userName}
                    </span>
                    <Button href={i.userLink} className={classes.discord}>
                      <a>Discord</a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      <span className={classes.copyright}> Copyright © 2022 School Life All rights reserved.</span>
    </DefaultLayout>
  );
}
