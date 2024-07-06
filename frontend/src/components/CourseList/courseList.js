import React from "react";
import Header from "../../pages/header";

const CourseList = ( { course } ) => (
    <>
        <Header />
        <div className="px-spacing20 md:px-0 w-full 2xl:max-w-7xl mx-auto">

            <div className="grid grid-cols-12 gap-5">

                <div className="col-span-12 md:flex-col">
                    <div
                        className="flex cursor-pointer flex-col justify-start items-start w-full relative gap-8 p-4 rounded-xl bg-white outline outline-1 outline-neutral-200 shadow-neutralShadow">
                        <div className="md:h-36 h-26 w-full flex relative">
                            <img alt="CSM" loading="lazy" decoding="async" data-nimg="fill"
                                 className="rounded-lg object-cover h-full w-full"
                                 src="https://d2o2utebsixu4k.cloudfront.net/Artboard%2049-54e59777cc9d4a60ac1eeef2eeba4132.png"
                                 sizes="100vw" srcSet="" />
                        </div>
                        <div
                            className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative md:gap-8 gap-4">
                            <div className="h-4 justify-start items-center gap-2 inline-flex">
                                <div className="text-xs text-neutral-500">Live Classroom / Classroom</div>
                            </div>
                            <div
                                className="flex h-12 items-center justify-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden w-full">
                                <h5 className="text-lg leading-6 font-bold text-neutral-800 line-clamp-2 text-left">
                                    Course Certified</h5>
                            </div>
                            <div
                                className="self-stretch min-h-11 rounded-xl flex-col justify-center items-start gap-2 flex">
                                <div className="inline-flex items-center gap-2">
                                    <i className="icon-clock text-green-500 text-base leading-4"></i>
                                    <div className="text-xs leading-4.5 text-neutral-600">16 Hrs</div>
                                </div>
                                <div className="inline-flex items-center gap-2">
                                    <i className="icon-users-03 text-green-500 text-base leading-4"></i>
                                    <div className="text-xs leading-4.5 text-neutral-600">144689 Enrolled</div>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-solid border-neutral-200 w-full"></div>
                        <div className="self-stretch justify-between items-center h-11 gap-8 inline-flex">
                            <div className="rounded-xl flex-col justify-center items-start inline-flex">
                                <div className="text-xs leading-4.5 text-neutral-500 font-semibold">Start from</div>
                                <span
                                    className="text-gray-700 text-lg leading-6 font-bold first-letter:text-green-500 first-letter:mr-1">$295</span>
                            </div>
                            <div
                                className="flex justify-center items-center flex-grow-0 flex-shrink-0 md:w-32 w-auto h-11 relative overflow-hidden gap-4 pl-8 pr-4 rounded bg-gray-900 ml-auto">
                                <div className="text-sm text-white font-bold">Enroll</div>
                                <i className="icon-chevron-right text-white text-xl leading-5"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default CourseList;