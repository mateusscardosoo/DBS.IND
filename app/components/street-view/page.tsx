import Image from "next/image";

export function StreetView() {
    return (
    <>
        <section className="mx-auto max-w-[1224px] my-24 flex gap-8">
            <div className="w-[35%] flex flex-col ">
                <h1 className="text-5xl font-bold ">Conheça a Montadora</h1>
                <span className="font-semibold mt-8">
                A DBS convida sua empresa a aproveitar os incentivos fiscais da Zona Franca de Manaus.
                </span>
                <Image
                className="mt-8"
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=116,h=27,fit=crop/AzGrO4Z61Zueln8M/vector-15-YNqJBBrjX7SlLaPl.png"
                width={110}
                height={110}
                alt="Arrow"
                />
                 <Image
                className="mt-8"
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=437,h=219,fit=crop/AzGrO4Z61Zueln8M/planta-baixa-2-m7Vp33Kp8qi7aOr5.png"
                width={600}
                height={400}
                alt="Arrow"
                />
            </div>
            <div className="w-[65%]">
            <iframe src="https://www.google.com/maps/embed?pb=!4v1716386007044!6m8!1m7!1sCAoSLEFGMVFpcE9VU3NDRnVkRF9vaXh3MzN3V25Pek40bzF3UDlYZnVrTXpzbk9x!2m2!1d-25.4542041962133!2d-49.26531109910667!3f189.31293127917394!4f-16.137793964654037!5f0.7820865974627469 " width="100%" height="100%" ></iframe>
            </div>

        </section>
                <section className="mx-auto max-w-[1224px] my-24 flex flex-col">
                <h1 className="text-5xl font-bold ">A Excelência e a Expansão da DBS Indústria:
</h1>
                <p className="font-semibold mt-4 italic">
                Um Compromisso com a Qualidade e a Inovação
                </p>
                <p className="mt-8">Na DBS, nossa trajetória é marcada por um compromisso com a qualidade, eficiência e inovação. Nossa planta industrial de 1.200 m² é equipada com tecnologias avançadas que asseguram a excelência em nossos processos.</p>
                <p className="mt-4">Como líderes no setor de produção de motocicletas elétricas e outros artigos de duas rodas, estamos constantemente aprimorando nossa capacidade produtiva para atender às demandas do mercado.  
</p>
<button className="text-base bg-primary font-semibold h-10 w-72 text-white rounded-full mt-8">Saiba Mais</button>

                </section>

                </>
    )
}