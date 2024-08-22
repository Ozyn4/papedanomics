import type { User } from "@/types/user";
import { DefaultSession } from "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User;
    access_token?: string;
    refresh_token?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends User{
    access_token: string;
    refresh_token: string;
    accessTokenExpires?: number;
  } 
}