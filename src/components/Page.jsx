function Page({heading, className, children, fullLineHeading = true}) {
    return (
        <div className={`page ${className || ''}`}>
            <h2 className={`heading-page ${fullLineHeading ? 'span-all-columns': ''}`}>{heading}</h2>
            {children}
        </div>
    )
}

export default Page;