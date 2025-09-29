import blogTagsData from '@/data/blog_tags_data'
import Link from 'next/link'
import React from 'react'

const BlogTagsSidebar = () => {
    return (
        <>
            <div className="shadow-1 bg-white rounded-xl mt-7.5">
                <div className="px-4 sm:px-6 py-4.5 border-b border-gray-3">
                    <h2 className="font-medium text-lg text-dark">Tags</h2>
                </div>

                <div className="p-4 sm:p-6">
                    <div className="flex flex-wrap gap-3.5">
                        {blogTagsData?.map((item, index) => (
                            <Link key={index}
                                className="inline-flex hover:text-white border border-gray-3 py-2 px-4 rounded-md ease-out duration-200 hover:bg-blue hover:border-blue"
                                href="#"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogTagsSidebar
