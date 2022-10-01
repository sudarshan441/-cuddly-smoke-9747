import {Flex,Box,Image,Spacer, Container,ButtonGroup} from "@chakra-ui/react"
import React from "react"
import { useState } from "react"
import {NavLink} from "react-router-dom"
import styles from "../styles.module.css"

export default function Navbar(){

return (
      <Box bg={"white"} className={styles.nav}><Container  maxWidth={"container.xl"}>
      <Flex minWidth='max-content' alignItems='center' gap='2' p={"4"}>
        <Box p='2'>
         <NavLink to={"/"}><Image width={"150px"} src="https://assets.website-files.com/5e6c01bb5212506d6c119069/5ee401ee1f08215e6dbf0661_color-lettermark.svg" alt="logo"></Image></NavLink>
        </Box>
        <Spacer />
        <ButtonGroup gap='10'>
        <NavLink  className={({ isActive }) => {
                  return isActive ? styles.active : styles.default;
                }} to={'/services'} end>SERVICES</NavLink>
        <NavLink  className={({ isActive }) => {
                  return isActive ? styles.active : styles.default;
                }} to={'/security'} end>SECURITY</NavLink>
        <NavLink  className={({ isActive }) => {
                  return isActive ? styles.active : styles.default;
                }} to={'/team'} end>TEAM</NavLink>
        <NavLink  className={({ isActive }) => {
                  return isActive ? styles.active : styles.default;
                }} to={'/careers'} end>CAREERS</NavLink>
        <NavLink  className={({ isActive }) => {
                  return isActive ? styles.active : styles.default;
                }} to={'/insights'} end>INSIGHTS</NavLink>
        <NavLink  className={({ isActive }) => {
                  return isActive ? styles.active : styles.default;
                }} to={'/contact'} end>CONTACT</NavLink>
        </ButtonGroup>
        {/* <button className="mobile-menu-icon">{ismobile? <i className="fa fa-times"></i>:<i className="fa fa-bars"></i>}</button> */}
        </Flex>
              </Container>
              
              </Box>
              )
}