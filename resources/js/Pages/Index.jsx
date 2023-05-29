import Dropdown from "@/Components/Dropdown";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth?.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index
                </h2>
            }
        >
            <Head title="Dashboard" />

            {/* Filters */}
            <div className="filters flex items-center gap-3">
                <div className="w-1/3">
                    <select
                        name="category"
                        id="category"
                        className="w-full rounded-xl px-4 py-2 border-none"
                    >
                        <option value="Category One">Category One</option>
                        <option value="Category Two">Category Two</option>
                        <option value="Category Three">Category Three</option>
                        <option value="Category Four">Category Four</option>
                    </select>
                </div>

                <div className="w-1/3">
                    <select
                        name="other_filters"
                        id="category"
                        className="w-full rounded-xl px-4 py-2 border-none"
                    >
                        <option value="Filter One">Filter One</option>
                        <option value="Filter Two">Filter Two</option>
                        <option value="Filter Three">Filter Three</option>
                        <option value="Filter Four">Filter Four</option>
                    </select>
                </div>

                <div className="w-2/3 relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-4 flex-shrink-0 absolute top-0 flex items-center h-full ml-2 text-gray-700"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>

                    <input
                        type="search"
                        placeholder="Find an idea"
                        class="w-full rounded-xl bg-white px-4 py-2 pl-8 border-none placeholder:text-gray-900"
                    />
                </div>
            </div>
            {/* End Filters */}

            <div className="ideas-container space-y-6 my-6">
                <div className="idea-container bg-white rounded-xl flex hover:shadow-md transition duration-150 ease-in-out cursor-pointer">
                    <div className="border-r border-gray-100 px-5 py-8">
                        <div className="text-center">
                            <div className="font-semibold text 2xl">12</div>
                            <div className="text-gray-500">votes</div>
                        </div>

                        <div className="mt-8">
                            <button className="w-20 bg-gray-200 border border-gray-200 hover:border-gray-400 font-bold text-xxs uppercase rounded-xl px-4 py-3 transition duration-150 ease-in-out">
                                vote
                            </button>
                        </div>
                    </div>

                    <div className="flex px-2 py-6">
                        <a href="#" className="flex-none">
                            <img
                                src="https://source.unsplash.com/200x200/?face&crop=face&v=1"
                                alt="avatar"
                                className="w-14 h-14 rounded-xl"
                            />
                        </a>
                        <div className="mx-4">
                            <h4 className="text-xl font-semibold">
                                <a href="#" className="hover:underline">
                                    A random title here
                                </a>
                            </h4>
                            <div className="text-gray-600 mt-3 line-clamp-3">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Aspernatur unde aliquid
                                molestias ullam voluptates, illo tempora, ex
                                dignissimos voluptatibus quaerat esse? Provident
                                magni voluptatum, fugit iste error at iusto
                                sequi!
                            </div>
                            <div className="flex items-center justify-between mt-6">
                                <div className="flex items-center text-xs text-gray-400 font-semibold space-x-2">
                                    <div>10 hours ago</div>
                                    <div>&bull;</div>
                                    <div>Category 1</div>
                                    <div>&bull;</div>
                                    <div className="text-gray-800">
                                        3 comments
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="bg-gray-200 text-xxs font-bold uppercase leading-none rounded-full text-center w-28 h-7 px-4 py-2">
                                        Open
                                    </div>
                                    <button className="relative bg-gray-100 hover:bg-gray-200 rounded-full h-7 transition duration-150 ease-in-out py-2 px-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-three-dots"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />{" "}
                                        </svg>
                                        <ul className="absolute w-44 font-semibold bg-white shadow-lg rounded-xl py-3 ml-3 text-left">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="hover:bg-gray-100 px-5 py-3 block transition duration-150 ease-in-out"
                                                >
                                                    Mark as Spam
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="hover:bg-gray-100 px-5 py-3 block transition duration-150 ease-in-out"
                                                >
                                                    Delete Post
                                                </a>
                                            </li>
                                        </ul>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="idea-container bg-white rounded-xl flex hover:shadow-md transition duration-150 ease-in-out cursor-pointer">
                    <div className="border-r border-gray-100 px-5 py-8">
                        <div className="text-center">
                            <div className="font-semibold text 2xl text-blue">66</div>
                            <div className="text-gray-500">votes</div>
                        </div>

                        <div className="mt-8">
                            <button className="w-20 border border-gray-200 hover:border-gray-400 bg-blue font-bold text-xxs text-white uppercase rounded-xl px-4 py-3 transition duration-150 ease-in-out">
                                voted
                            </button>
                        </div>
                    </div>

                    <div className="flex px-2 py-6">
                        <a href="#" className="flex-none">
                            <img
                                src="https://source.unsplash.com/200x200/?face&crop=face&v=24"
                                alt="avatar"
                                className="w-14 h-14 rounded-xl"
                            />
                        </a>
                        <div className="mx-4">
                            <h4 className="text-xl font-semibold">
                                <a href="#" className="hover:underline">
                                    Another random title here
                                </a>
                            </h4>
                            <div className="text-gray-600 mt-3 line-clamp-3">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Aspernatur unde aliquid
                                molestias ullam voluptates, illo tempora, ex
                                dignissimos voluptatibus quaerat esse? Provident
                                magni voluptatum, fugit iste error at iusto
                                sequi!
                            </div>
                            <div className="flex items-center justify-between mt-6">
                                <div className="flex items-center text-xs text-gray-400 font-semibold space-x-2">
                                    <div>10 hours ago</div>
                                    <div>&bull;</div>
                                    <div>Category 1</div>
                                    <div>&bull;</div>
                                    <div className="text-gray-800">
                                        3 comments
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="bg-yellow text-xxs text-white font-bold uppercase leading-none rounded-full text-center w-28 h-7 px-4 py-2">
                                        in progress
                                    </div>
                                    <button className="relative bg-gray-100 hover:bg-gray-200 rounded-full h-7 transition duration-150 ease-in-out py-2 px-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-three-dots"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />{" "}
                                        </svg>
                                        <ul className="hidden absolute w-44 font-semibold bg-white shadow-lg rounded-xl py-3 ml-3 text-left">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="hover:bg-gray-100 px-5 py-3 block transition duration-150 ease-in-out"
                                                >
                                                    Mark as Spam
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="hover:bg-gray-100 px-5 py-3 block transition duration-150 ease-in-out"
                                                >
                                                    Delete Post
                                                </a>
                                            </li>
                                        </ul>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="idea-container bg-white rounded-xl flex hover:shadow-md transition duration-150 ease-in-out cursor-pointer">
                    <div className="border-r border-gray-100 px-5 py-8">
                        <div className="text-center">
                            <div className="font-semibold text 2xl">12</div>
                            <div className="text-gray-500">votes</div>
                        </div>

                        <div className="mt-8">
                            <button className="w-20 bg-gray-200 border border-gray-200 hover:border-gray-400 font-bold text-xxs uppercase rounded-xl px-4 py-3 transition duration-150 ease-in-out">
                                vote
                            </button>
                        </div>
                    </div>

                    <div className="flex px-2 py-6">
                        <a href="#" className="flex-none">
                            <img
                                src="https://source.unsplash.com/200x200/?face&crop=face&v=37"
                                alt="avatar"
                                className="w-14 h-14 rounded-xl"
                            />
                        </a>
                        <div className="mx-4">
                            <h4 className="text-xl font-semibold">
                                <a href="#" className="hover:underline">
                                    A random title here
                                </a>
                            </h4>
                            <div className="text-gray-600 mt-3 line-clamp-3">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Aspernatur unde aliquid
                                molestias ullam voluptates, illo tempora, ex
                                dignissimos voluptatibus quaerat esse? Provident
                                magni voluptatum, fugit iste error at iusto
                                sequi!
                            </div>
                            <div className="flex items-center justify-between mt-6">
                                <div className="flex items-center text-xs text-gray-400 font-semibold space-x-2">
                                    <div>10 hours ago</div>
                                    <div>&bull;</div>
                                    <div>Category 1</div>
                                    <div>&bull;</div>
                                    <div className="text-gray-800">
                                        3 comments
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="bg-red text-xxs text-white font-bold uppercase leading-none rounded-full text-center w-28 h-7 px-4 py-2">
                                        closed
                                    </div>
                                    <button className="relative bg-gray-100 hover:bg-gray-200 rounded-full h-7 transition duration-150 ease-in-out py-2 px-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-three-dots"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />{" "}
                                        </svg>
                                        <ul className="hidden absolute w-44 font-semibold bg-white shadow-lg rounded-xl py-3 ml-3 text-left">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="hover:bg-gray-100 px-5 py-3 block transition duration-150 ease-in-out"
                                                >
                                                    Mark as Spam
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="hover:bg-gray-100 px-5 py-3 block transition duration-150 ease-in-out"
                                                >
                                                    Delete Post
                                                </a>
                                            </li>
                                        </ul>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="idea-container bg-white rounded-xl flex hover:shadow-md transition duration-150 ease-in-out cursor-pointer">
                    <div className="border-r border-gray-100 px-5 py-8">
                        <div className="text-center">
                            <div className="font-semibold text 2xl">12</div>
                            <div className="text-gray-500">votes</div>
                        </div>

                        <div className="mt-8">
                            <button className="w-20 bg-gray-200 border border-gray-200 hover:border-gray-400 font-bold text-xxs uppercase rounded-xl px-4 py-3 transition duration-150 ease-in-out">
                                vote
                            </button>
                        </div>
                    </div>

                    <div className="flex px-2 py-6">
                        <a href="#" className="flex-none">
                            <img
                                src="https://source.unsplash.com/200x200/?face&crop=face&v=37"
                                alt="avatar"
                                className="w-14 h-14 rounded-xl"
                            />
                        </a>
                        <div className="mx-4">
                            <h4 className="text-xl font-semibold">
                                <a href="#" className="hover:underline">
                                    A random title here
                                </a>
                            </h4>
                            <div className="text-gray-600 mt-3 line-clamp-3">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Aspernatur unde aliquid
                                molestias ullam voluptates, illo tempora, ex
                                dignissimos voluptatibus quaerat esse? Provident
                                magni voluptatum, fugit iste error at iusto
                                sequi!
                            </div>
                            <div className="flex items-center justify-between mt-6">
                                <div className="flex items-center text-xs text-gray-400 font-semibold space-x-2">
                                    <div>10 hours ago</div>
                                    <div>&bull;</div>
                                    <div>Category 1</div>
                                    <div>&bull;</div>
                                    <div className="text-gray-800">
                                        3 comments
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="bg-green text-xxs text-white font-bold uppercase leading-none rounded-full text-center w-28 h-7 px-4 py-2">
                                        implemented
                                    </div>
                                    <button className="relative bg-gray-100 hover:bg-gray-200 rounded-full h-7 transition duration-150 ease-in-out py-2 px-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-three-dots"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />{" "}
                                        </svg>
                                        <ul className="hidden absolute w-44 font-semibold bg-white shadow-lg rounded-xl py-3 ml-3 text-left">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="hover:bg-gray-100 px-5 py-3 block transition duration-150 ease-in-out"
                                                >
                                                    Mark as Spam
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="hover:bg-gray-100 px-5 py-3 block transition duration-150 ease-in-out"
                                                >
                                                    Delete Post
                                                </a>
                                            </li>
                                        </ul>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="idea-container bg-white rounded-xl flex hover:shadow-md transition duration-150 ease-in-out cursor-pointer">
                    <div className="border-r border-gray-100 px-5 py-8">
                        <div className="text-center">
                            <div className="font-semibold text 2xl">12</div>
                            <div className="text-gray-500">votes</div>
                        </div>

                        <div className="mt-8">
                            <button className="w-20 bg-gray-200 border border-gray-200 hover:border-gray-400 font-bold text-xxs uppercase rounded-xl px-4 py-3 transition duration-150 ease-in-out">
                                vote
                            </button>
                        </div>
                    </div>

                    <div className="flex px-2 py-6">
                        <a href="#" className="flex-none">
                            <img
                                src="https://source.unsplash.com/200x200/?face&crop=face&v=37"
                                alt="avatar"
                                className="w-14 h-14 rounded-xl"
                            />
                        </a>
                        <div className="mx-4">
                            <h4 className="text-xl font-semibold">
                                <a href="#" className="hover:underline">
                                    A random title here
                                </a>
                            </h4>
                            <div className="text-gray-600 mt-3 line-clamp-3">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Aspernatur unde aliquid
                                molestias ullam voluptates, illo tempora, ex
                                dignissimos voluptatibus quaerat esse? Provident
                                magni voluptatum, fugit iste error at iusto
                                sequi!
                            </div>
                            <div className="flex items-center justify-between mt-6">
                                <div className="flex items-center text-xs text-gray-400 font-semibold space-x-2">
                                    <div>10 hours ago</div>
                                    <div>&bull;</div>
                                    <div>Category 1</div>
                                    <div>&bull;</div>
                                    <div className="text-gray-800">
                                        3 comments
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="bg-purple text-xxs text-white font-bold uppercase leading-none rounded-full text-center w-28 h-7 px-4 py-2">
                                        considering
                                    </div>
                                    <button className="relative bg-gray-100 hover:bg-gray-200 rounded-full h-7 transition duration-150 ease-in-out py-2 px-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            class="bi bi-three-dots"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />{" "}
                                        </svg>
                                        <ul className="hidden absolute w-44 font-semibold bg-white shadow-lg rounded-xl py-3 ml-3 text-left">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="hover:bg-gray-100 px-5 py-3 block transition duration-150 ease-in-out"
                                                >
                                                    Mark as Spam
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="hover:bg-gray-100 px-5 py-3 block transition duration-150 ease-in-out"
                                                >
                                                    Delete Post
                                                </a>
                                            </li>
                                        </ul>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
