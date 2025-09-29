import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import BlogItem from "../Blog/BlogItem";
import blogData from "@/data/blog_data";
import Pagination from "../Common/Pagination";

const BlogList = () => {
    return (
        <>
            <Breadcrumb title={"Blog"} pages={["blog"]} />{" "}
            <section className="overflow-hidden py-20 bg-gray-2">
                <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-7.5">
                        {/* <!-- blog item --> */}
                        {blogData.map((blog, key) => (
                            <BlogItem blog={blog} key={key} />
                        ))}
                    </div>

                    {/* <Pagination /> */}
                </div>
            </section>
        </>
    );
};

export default BlogList;
