import "./globals.css"; import Link from "next/link";
import "./globals.css";


export default async function RootLayout({ children }) {

  return (
    <html lang="ru">
      <body className="container mx-auto bg-black-600 ">
        <header className="container mx-auto flex  justify-content  py-5">
          <div className="">
            <Link className="flex" href="/">
              <div className=" text-3xl font-bold text-blue-500">Das</div>
              <div className="text-3xl font-bold">Board</div>
            </Link>
          </div>

          <nav className="flex gap-x-4 justify-content  ">
            <input placeholder="Найти" className="w-80 rounded-2xl border flex justify-content  " type="text" />
            <Link href="/about">Тут должно быть уведомления </Link>
            <Link href="/products"> профиль </Link>
          </nav>
        </header>
        <main>
          {children}
        </main>

        <div className="text-2xl w-30 h-auto -ml-10 mt-10 border-r  ">
          <p className="mt-10">Products</p>
          <Link href="/">
            <p className="mt-10">Prising</p>
          </Link>
          <p className="mt-10">Calendar</p>
          <p className="mt-10">Contact</p>
          <p className="mt-10">Team</p>
          <p className="mt-10">Table</p>


          <div>
            <p className="mt-10" >
              Settings
            </p>
            <p className="mt-10" >LogOut</p>
          </div>
        </div>




        <footer className="mt-10 border-t pt-5 border-t-green-500">

        </footer>

      </body>
    </html>
  );
}
