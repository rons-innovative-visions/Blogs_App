const navigation = [
    { name: "Blogs", href: "/", current: true, target: "_self" },
    { name: "Projects", href: "https://rons-innovative-visions.github.io/Projects/", current: false, target: "_black" },
    { name: "Contact", href: "https://linktr.ee/rons_innovative_visions", current: false, target: "_black" }
]

const Navbar = () => {
    return (
        <nav className="bg-primary px-2 fonmt-medium">
            <div className="mx-auto max-w-7xl px-2">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center">
                        <div className="flex space-x-4 p-2">
                            {navigation.map((item) => (
                                <a 
                                    key={item.name} 
                                    href={item.href} 
                                    target={item.target} 
                                    className={`px-3 py-2 rounded-md text-xl ${item.current ? 'text-color bg-accent' : 'text-white hover:bg-accent hover:text-color'}`}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar