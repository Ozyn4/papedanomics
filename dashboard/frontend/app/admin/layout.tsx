import { NavbarNested } from "@/components/Admin/NavbarNested/NavbarNested";

export const metadata = {
  title: 'Dashboard | Admin - HAISSTIS',
  description: 'Dashboard | Admin - HAISSTIS',
};

export default async function CoreLayout({ children }: { children: any }) {
  
  return (
    <>
      <NavbarNested/>
      {children}
    </>
  );
}
