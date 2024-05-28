import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <header className="flex between max-w-[1224px] items-center mx-auto justify-between py-[50px] px-4">
            <div className="">
                <Image
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=284,fit=crop,q=95/AzGrO4Z61Zueln8M/dbs-industria-quadrado-branco-YrDa3bnvNDhRxGLl.png"
                alt="Logo"
                width={142}
                height={99}
                />
            </div>

            <div>
                <ul>
                    <li className="flex gap-14">
                        <Link className="text-base font-semibold text-white" href="">Quem Somos</Link>
                        <Link className="text-base font-semibold text-white" href="">Como Funciona</Link>
                        <Link className="text-base font-semibold text-white" href="">Contato</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}