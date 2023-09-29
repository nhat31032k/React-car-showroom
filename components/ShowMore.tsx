"use client"

import CustomButton from "@/common/CustomButton";
import { showMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";

const ShowMore = ({ pageNumber, isNext }: showMoreProps) => {
    const router = useRouter();
    const hanldeNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathName = updateSearchParams("limit", `${newLimit}`);
        router.push(newPathName)
    }
    return (
        <div className="w-full flex-center gap-5 mt-10">
            {
                !isNext && <CustomButton
                    title="Show more"
                    btnType="button"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={hanldeNavigation}
                />
            }
        </div>
    );
};

export default ShowMore;