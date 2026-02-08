import { Register } from "@/lib/serverActions";

export default function RegistersuerPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    Регистрация
                </h1>
                <p className="text-gray-600 mb-6">
                    Заполните форму для создания аккаунта
                </p>

                <form action={Register} className="space-y-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ваше имя"
                        name="name"
                        type="text"
                        required
                    />

                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Возраст"
                        name="age"
                        type="number"
                        required
                    />

                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email"
                        name="email"
                        type="email"
                        required
                    />

                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Пароль"
                        name="password"
                        type="password"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    )
}