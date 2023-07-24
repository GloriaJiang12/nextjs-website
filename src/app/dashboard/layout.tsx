/*
 * @Author: jwj
 * @Date: 2023-07-24 21:49:39
 * @LastEditors: jwj
 * @LastEditTime: 2023-07-24 22:47:15
 */
import Image from "next/image"
export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  return (
    <section>
      <div className=" bg-blue-300">
        <Image width={600} height={500} src="/next.svg" alt="banner" />
      </div>
      {children}
    </section>
  );
}