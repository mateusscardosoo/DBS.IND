import Image from "next/image";

export function Band(){
    return (
        <section className="bg-secondary">
            <div className="flex items-center gap-2 max-w-[1224px] mx-auto">
                <Image
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=194,h=193,fit=crop/AzGrO4Z61Zueln8M/ativo-3-A0xN3z4l1Ziv5jGM.png"
                width={150}
                height={150}
                alt="IPI Zero"
                />
                <div className="flex flex-col p-24">

                <h2 className="text-white text-5xl font-bold">Isenção Total de IPI</h2>
                <span className="text-white italic text-lg mt-5">Em toda cadeia até o Consumidor final.</span>
                </div>
            <div>
            <Image
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=538,h=162,fit=crop/AzGrO4Z61Zueln8M/ativo-2-m7Vp2QEQLLHy9D6l.png"
                width={700}
                height={700}
                alt="IPI Zero"
                />
            </div>
            </div>
        </section>
    )
}