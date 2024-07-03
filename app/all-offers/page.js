import MyCard from "@/components/MyCard";
import SearchBar from "@/components/SearchBar";
import { Card, Flex } from "@radix-ui/themes";
import Image from "next/image";

export default function AllOffers() {
    return (
        <main className="px-4">
            <SearchBar />
            <div className="flex flex-col justify-end items-center space-y-5">
                <MyCard />
                <MyCard />
                <MyCard />
                <MyCard />

            </div>

            <div className="h-14">
                <p className="font-extrabold h-14"></p>
            </div>
        </main>
    )
}