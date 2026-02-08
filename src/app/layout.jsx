import "./globals.css";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { config } from "@/lib/authConfig";

export default async function RootLayout({ children }) {
  const session = await getServerSession(config)

  return (
    <html lang="ru">
      <body className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div>
                <Link href="/" className="flex items-center space-x-1">
                  <span className="text-2xl font-bold text-blue-600">Dash</span>
                  <span className="text-2xl font-bold text-gray-800">Board</span>
                </Link>
              </div>

              {/* Search Bar */}
              <div className="flex-1 max-w-md mx-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Поиск..."
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <svg
                    className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center space-x-6">
                {/* Notifications */}
                <Link
                  href="/about"
                  className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </Link>

                {/* Profile */}
                <Link
                  href="/profile"
                  className="flex items-center space-x-2 p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="hidden md:inline">Профиль</span>
                </Link>

                {/* Auth Buttons */}
                <div className="flex items-center space-x-4">
                  {session ? (
                    <form action="/api/auth/signout" method="POST">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        Выйти
                      </button>
                    </form>
                  ) : (
                    <>
                      <Link
                        href="/api/auth/signin"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Войти
                      </Link>
                      <Link
                        href="/register"
                        className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        Регистрация
                      </Link>
                      <Link
                        href="/catalog/createproducts"
                        className="hidden md:inline px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        + Товар
                      </Link>
                      <Link
                        href="/products"
                        className="hidden md:inline px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Каталог товаров
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-auto border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <Link href="/" className="flex items-center space-x-1">
                  <span className="text-xl font-bold text-blue-600">Dash</span>
                  <span className="text-xl font-bold text-gray-800">Board</span>
                </Link>
                <p className="text-gray-600 text-sm mt-2 text-xl">© все стили что вы видеите переписынны (у меня был ужас...)с DeepSeek мне <br />просто было лень делать их да и поздно уже было , а все остально было <br /> написанно моими руками  </p>
              </div>

              <div className="flex space-x-6">
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  О нас
                </Link>
                <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Конфиденциальность
                </Link>
                <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Условия
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Контакты
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}