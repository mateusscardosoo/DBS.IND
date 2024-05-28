export function Media() {
  return (
    <section className="mx-auto max-w-[1224px] my-24 flex items-center gap-16">
      <div>
        <iframe
          height={416}
          width={572}
          src="https://www.youtube.com/embed/Qh73EoSXI4M?list=TLGGFaPygMUv4C4yNzA1MjAyNA"
        ></iframe>
      </div>
      <div>
        <h2 className="text-5xl font-bold">Sua empresa importa veículos motorizados?</h2>
        <p className="mt-8">
          Transferindo sua operação para o Polo Industrial de Manaus (PIM), você
          acessa um regime tributário vantajoso. O PIM é um hub de livre
          comércio que impulsiona setores como eletroeletrônicos, informática e
          veículos de duas rodas, atraindo cerca de 600 indústrias graças aos
          benefícios fiscais prorrogados até 2073.
        </p>
        <p className="mt-8">
          Nossa estrutura fiscal é projetada para maximizar a eficiência
          operacional e otimizar custos, ajudando seu negócio a alcançar seu
          pleno potencial no mercado, da importação à venda.
        </p>
        <button className="text-base bg-primary font-semibold h-10 w-72 text-white rounded-full mt-8">Solicite uma Proposta</button>

      </div>
    </section>
  );
}
