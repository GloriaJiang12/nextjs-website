import Link from "next/link";

export default function Header() {

    const navList = [
      {
        id: 1,
        title: "首页",
        url: "/dashboard"
      },
      {
        id: 2,
        title: "产品",
        url: "/product"
      },
      {
        id: 3,
        title: "联系我们",
        url: "/contactUs"
      },
    ];

  return (
    <section>
      <ul className="flex justify-between p-5">
        {navList.map((t) => (
          <Link href={t.url} key={t.id}>
            <li className=" bg-red-400 p-5 rounded-lg">
              {t.title}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
