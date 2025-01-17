import { useDispatch } from 'react-redux'
import { setToken } from '../redux/slice/authSlice'

export default function Login() {
    const dispatch = useDispatch()

    const handleCasheerAppNavigate = () => {
        dispatch(setToken({
            token: 'true'
        }))
    }

    return (
        <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] min-h-screen">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative rounded-lg shadow-2xl">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Sign in to our platform
                        </h3>
                        {/* <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="authentication-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button> */}
                    </div>
                    <div className="p-4 md:p-5">
                        <form className="space-y-4" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                                    </div>
                                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">Remember me</label>
                                </div>
                                <a href="#" className="text-sm text-blue-700 hover:underline">Lost Password?</a>
                            </div>
                            <button onClick={handleCasheerAppNavigate} className="w-full text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to casheer app</button>
                            {/* <div class="text-sm font-medium text-gray-500">
                                Not registered? <a href="#" class="text-blue-700 hover:underline">Create account</a>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
