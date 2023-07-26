/*
 * @Author: wj.jiang
 * @Date: 2023-07-26 15:03:57
 * @LastEditors: wj.jiang
 * @LastEditTime: 2023-07-26 15:28:10
 */
"use client"
import { useSearchParams } from "next/navigation";

export default function Page({ params }: { params: { id: number } }) {
  const router = useSearchParams();
  console.log(router.get('a'), params);

  return <div>单个参数-{params.id}</div>;
}
