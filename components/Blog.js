import moment from "moment"

const Blog = ({title, content, createdAt}) => {
    const date = moment(createdAt);
    const formattedDate = date.format("MMMM Do, YYYY");

    return(
        <div className="w-full max-w-screen-lg bg-secondary rounded-lg shadow my-4">
        <div className="p-5">
            <div className="mb-3">
            <span className="text-4xl font-bold tracking-tight mb-1 text-background">
                {title}
            </span>
            <span className="text-2xl tracking-tight mb-1 text-accent float-end">
                {formattedDate}
            </span>
            <hr className="border-accent"/>
            </div>
            <p className="mb-3 font-normal text-accent text-2xl">{content.substring(0, 250)}...<a className="underline" href={`/blog/${title.replace(/ /g, "-")}`}>Read more</a></p>
            <a href={`/blog/${title.replace(/ /g, "-")}`} className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-color bg-background rounded-lg hover:bg-primary hover:text-background">
            Read More
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </a>
        </div>
        </div>
    )
}

export default Blog