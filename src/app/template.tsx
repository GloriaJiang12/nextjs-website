/*
 * @Author: jwj
 * @Date: 2023-07-24 22:54:51
 * @LastEditors: jwj
 * @LastEditTime: 2023-07-24 23:21:54
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className=" animate-banner-animate">
      {children}
    </div>
  );
}