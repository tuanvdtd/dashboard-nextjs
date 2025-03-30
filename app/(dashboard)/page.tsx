import MyCard from "@/components/ui/card";
import dataUser from "@/lib/data";
import { Carousel } from "antd";
export default function Home() {
    return (
        <>
            <div className="rounded-xl overflow-hidden">
                <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={2000} arrows infinite={true} dots={true} dotPosition="bottom" className="mt-4 mx-14" >
                    <div className="intro bg-gradient-to-l from-[#578cff] to-[#5b41e0]   ">
                        <div className="my-13 mx-10">
                            <h1 className="text-3xl font-bold">HustLMS Web Project2</h1>
                            <p className="text-[16px] my-3">
                                LMS được nhắc tới ở mọi nơi, ở đâu có nhu cầu học tập cho những
                                con người yêu thích lập trình LMS sẽ ở đó. Bla Bla Bla Bla Bla Bla Bla Bla.
                            </p>
                            <button className=" px-6 py-2  font-semibold rounded-full border-2 border-white cursor-pointer hover:bg-white hover:text-[#5b41e0]">
                                XEM KHÓA HỌC MIỄN PHÍ
                            </button>
                        </div>
                    </div>
                    <div className=" intro bg-gradient-to-l from-[#F09819] to-[#FF512F]  ">
                        <div className="my-13 mx-10">
                            <h1 className="text-3xl font-bold">Khóa Học NextJS Miễn PHí!</h1>
                            <p className="text-[16px] my-3">
                                LMS được nhắc tới ở mọi nơi, ở đâu có nhu cầu học tập cho những
                                con người yêu thích lập trình LMS sẽ ở đó. Bla Bla Bla Bla Bla Bla Bla Bla.
                            </p>
                            <button className=" px-6 py-2  font-semibold rounded-full border-2 border-white cursor-pointer hover:bg-white hover:text-[#5b41e0]">
                                ĐĂNG KÝ NGAY
                            </button>
                        </div>
                    </div>
                    <div className="intro bg-gradient-to-l from-[#F098CF] to-[#6A4FF6]  ">
                        <div className="my-13 mx-10">
                            <h1 className="text-3xl font-bold">HustLMS Web Project2</h1>
                            <p className="text-[16px] my-3">
                                LMS được nhắc tới ở mọi nơi, ở đâu có nhu cầu học tập cho những
                                con người yêu thích lập trình LMS sẽ ở đó. Bla Bla Bla Bla Bla Bla Bla Bla.
                            </p>
                            <button className=" px-6 py-2  font-semibold rounded-full border-2 border-white cursor-pointer hover:bg-white hover:text-[#5b41e0]">
                                XEM KHÓA HỌC MIỄN PHÍ
                            </button>
                        </div>
                    </div>
                </Carousel>
            </div>
            <div className="ourCourse">
                <div className="text-4xl flex justify-center font-bold font-serif text-gray-700 pt-10">
                    Our Courses
                </div>
                <div className="text-4xl flex flex-row gap-x-5 gap-y-4 pt-5 justify-center flex-wrap ">
                    {dataUser.map((course, index) => (
                        <MyCard key={index} title={course.title}
                            url={course.url}
                            progress={course.progress}
                            tag={course.tag}
                            chapter={course.chapter} />
                    ))}
                </div>
            </div>
        </>

    );
}
