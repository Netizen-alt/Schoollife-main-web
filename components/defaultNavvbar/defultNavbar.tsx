// import Button from "@material-ui/core/Button";
import { ButtonGroup, Button, Divider } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Image from "next/image";
import classes from "./DefultNavbar.module.scss";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";


export default function DefualtNavbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.nav}>
      <style jsx global>
        {`
          .MuiPaper-root {
            background-color: rgba(24, 47, 56, 0.8) !important;
          }
          .MuiList-padding {
            padding-top: 0px !important;
            padding-bottom: 0px !important;
          }
          .MuiPopover-paper {
            top: 0px !important;
            left: calc(100vw - 150px) !important;
            max-width: 150px !important;
          }
        `}
      </style>
      <div className={classes.logo}>
        <h1 className={classes.logoText}>School Life#1822</h1>
      </div>
      <ButtonGroup variant="text" className={classes.btnGroup}>
        <Button className={classes.btn} href="#Home">
          หน้าแรก
        </Button>
        <Button className={classes.btn} href="#Command">
          คำสั่ง
        </Button>
        <Button className={classes.btn} href="#Developer">
          ทีมงาน และ ผู้พัฒนา
        </Button>
        <Button
          className={classes.btn}
          href="https://schoollifebot.xyz/invite"
        >
          ชวนบอท
        </Button>
        <Button className={classes.btn} href="https://discord.gg/HhYDzjjpK6">
          ซํบพอร์ต
        </Button>
      </ButtonGroup>
      <Button className={classes.hamburger}>
        <Button onClick={handleClick}>
          <MenuIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className={classes.tabbar}
        >
          <MenuItem onClick={handleClose}>
            <Button className={classes.btn} href="#Home">
              หน้าแรก
            </Button>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <Button className={classes.btn} href="#Command">
              คำสั่ง
            </Button>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <Button className={classes.btn} href="#Developer">
              ทีม และ นักพัฒนา
            </Button>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <Button
              className={classes.btn}
              href="https://discord.com/api/oauth2/authorize?client_id=859072074530029616&permissions=8&scope=bot%20applications.commands"
            >
              ชวนบอท
            </Button>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Button className={classes.btn} href="https://discord.gg/HhYDzjjpK6">
              ซับพอร์ต
            </Button>
          </MenuItem>
        </Menu>
      </Button>
    </div>
  );
}
