/*
 * @Author: wj.jiang
 * @Date: 2023-07-26 15:14:38
 * @LastEditors: wj.jiang
 * @LastEditTime: 2023-07-26 15:16:27
 */
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div>
        {children}
      </div>
  );
}
