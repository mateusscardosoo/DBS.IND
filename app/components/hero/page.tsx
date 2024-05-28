import Image from "next/image";

export function Hero() {
  return (
    <section className="max-w-[1224px] flex mx-auto relative mt-16">
      <div className=" z-10">
        <h1 className="text-5xl font-bold text-white w-[60%] leading-[63px]">
          Montadora Compartilhada no Polo Industrial de Manaus
        </h1>
        <p className="mt-5 text-2xl text-white w-[40%] leading-8">
          Todos podem usufruir dos Benefícios Fiscais da Zona Franca de Manaus!
        </p>

        <p className="mt-4  text-2xl text-white w-[35%] leading-8">Sem burocracia, sem investimento e AGORA!</p>

        <div className="mt-14 flex gap-3">
            <button className="text-base bg-primary font-semibold h-10 w-48 text-white rounded-full">Saiba Mais</button>
            <button className="text-base bg-transparent font-semibold h-10 w-48 text-white border border-white rounded-full">Fale Conosco</button>
        </div>
      </div>

      <div>
        <Image
        className="absolute inset-x-1/2 bottom-[-50px] z-0"
        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=574,fit=crop/AzGrO4Z61Zueln8M/arte-do-banner-AVLJ8vW1JqfqlVWD.png"
        alt="hero"
        width={700}
        height={574}
        />
        
      </div>
    </section>
  );
}
