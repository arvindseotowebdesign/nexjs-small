import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/blogs">
                            Blogs
                        </Link>
                    </li>
                    {/* Add more navigation links here */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
