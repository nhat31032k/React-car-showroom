"use client"
import CustomButton from "@/common/CustomButton";
import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import { useState } from "react";
import { CarDetail } from ".";
interface carCardProps {
    car: CarProps
}
const CarCard = ({ car }: carCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car
    const carRent = calculateCarRent(city_mpg, year)
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="car-card group">
            <div className="car-card-content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>
            <p className="flex mt-6 text-[32px] font-extrabold">
                <span className="self-start text-[14px] font-semibold">
                    $
                </span>
                {carRent}
                <span className="self-end text-[14px] font-medium">
                    /day
                </span>
            </p>
            <div className="relative w-full h-40 my-3 object-contain">
                <Image src={generateCarImageUrl(car)} alt="car modal" fill priority className="object-contain" />
            </div>
            <div className="relative flex w-full mt-2 ">
                <div className="flex  w-full justify-center items-center gap-2 group-hover:invisible">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/steering-wheel.svg" width={20} height={20} alt="steering wheel" />
                        <p className="text-[14px]">{transmission === "a" ? "Automatic" : "manual"}</p>
                    </div>
                    <div className="car-card__icon">
                        <Image src="/tire.svg" width={20} height={20} alt="tire" />
                        <p className="text-[14px]">{drive.toUpperCase()}</p>
                    </div>
                    <div className="car-card__icon">
                        <Image src="/gas.svg" width={20} height={20} alt="steering wheel" />
                        <p className="text-[14px]">{city_mpg} MPG</p>
                    </div>
                </div>
                <div className="car-card__btn-container">
                    <CustomButton title="View more"
                        containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                        rightIcon="/right-arrow.svg"
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>
            <CarDetail isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        </div>
    );
};

export default CarCard;