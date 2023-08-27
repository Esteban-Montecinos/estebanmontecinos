"use client";
import {
    Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  User,
} from "@nextui-org/react";
import UserAvatar from "./user-avatar";

export default function Nav() {
  return (
    <Navbar>
      <NavbarBrand className="hidden sm:flex">
        <p className="font-bold text-inherit">Esteban Montecinos</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <UserAvatar/>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
