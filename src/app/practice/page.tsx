/*
 * @Author: wj.jiang
 * @Date: 2023-07-26 15:00:25
 * @LastEditors: wj.jiang
 * @LastEditTime: 2023-07-26 16:25:11
 */
import Link from 'next/link'
export default function Page() {

  return (
    <div>
      <div>
        <Link href="/practice/dynamic/2?a=22">动态路由-id</Link>
      </div>
      <div>
        <Link href="/practice/dynamic/d/2">动态路由-ids</Link>
      </div>
      <div>
        <Link href="/practice/list">请求数据</Link>
      </div>
    </div>
  );
}