/*
 * @Author: wj.jiang
 * @Date: 2023-07-26 15:07:00
 * @LastEditors: wj.jiang
 * @LastEditTime: 2023-07-26 16:24:46
 */
"use client"
import { useSearchParams } from "next/navigation";

export async function generateStaticParams() {
  const posts = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );
  console.log(posts);
  return posts.products.map((t: any) => ({ ids: t.title }));
}

export default function Page({ params }: { params: { ids: any[] } }) {
  const router = useSearchParams();
  console.log(router);

  return <div>多个参数-{params.ids.join('、')}</div>;
}
