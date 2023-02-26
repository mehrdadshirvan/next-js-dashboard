import Link from "next/link";

function Header(){
    return (
        <>
            <ul>
                <li>
                    <Link href={`/auth/login`} key={'loginRoute'}>
                        Login
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Header;