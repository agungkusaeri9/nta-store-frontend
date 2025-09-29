import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import SearchForm from "../Blog/SearchForm";
import LatestPosts from "../Blog/LatestPosts";
import Image from "next/image";
import blogData from "@/data/blog_data";
import BlogTagsSidebar from "./BlogTagsSidebar";
import { BlogItem } from "@/types/blogItem";

const BlogDetail = ({ blog }: { blog: BlogItem }) => {
    const { title, date, views, img, slug, content } = blog;
    return (
        <>
            <Breadcrumb
                title={title}
                pages={["blog", title]}
            />
            <section className="overflow-hidden py-20 bg-gray-2">
                <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
                    <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-12.5">
                        {/* <!-- blog details --> */}
                        <div className="lg:max-w-[750px] w-full">
                            <div className="rounded-[10px] overflow-hidden mb-7.5">
                                <Image
                                    className="rounded-[10px]"
                                    src={img}
                                    alt={title}
                                    width={750}
                                    height={477}
                                />
                            </div>

                            <div>
                                <span className="flex items-center gap-3 mb-4">
                                    <a href="#" className="ease-out duration-200 hover:text-blue">
                                        {date}
                                    </a>

                                    {/* <!-- divider -`-> */}
                                    <span className="block w-px h-4 bg-gray-4"></span>

                                    <a href="#" className="ease-out duration-200 hover:text-blue">
                                        {views} Views
                                    </a>
                                </span>

                                {content && (
                                    <div dangerouslySetInnerHTML={{ __html: content }} />
                                )}

                            </div>
                        </div>

                        {/* <!-- blog sidebar --> */}
                        <div className="lg:max-w-[370px] w-full">
                            {/* <!-- search box --> */}
                            <SearchForm />

                            {/* <!-- Recent Posts box --> */}
                            <LatestPosts blogs={blogData} />

                            {/* <!-- Latest Products box --> */}
                            {/* <LatestProducts products={productData} /> */}

                            {/* <!-- Popular Category box --> */}
                            {/* <PopularProductCategory /> */}

                            {/* <!-- Tags box --> */}
                            <BlogTagsSidebar />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetail;
