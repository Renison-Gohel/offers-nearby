import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
    return (
        <div className="mb-6 shadow-lg rounded-full">
            <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search for an event"
                    className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none"
                />
            </div>
        </div>
    )
}