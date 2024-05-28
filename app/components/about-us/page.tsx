import Image from "next/image";

export function AboutUs() {
  return (
    <section className="mx-auto max-w-[1224px] py-24 flex flex-col gap-24">
      <div>
        <Image
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=548,h=424,fit=crop/AzGrO4Z61Zueln8M/fa-brica-dbs--montagem-motos-26-YanBQKZOLzcpQ6Vg.jpg"
          width={548}
          height={424}
          alt="Produção"
        />
      </div>
      <div className="w-[50%]">
        <h1 className="font-bold text-5xl">Quem Somos</h1>
        <p className="mt-8 font-bold">
          DBS, a primeira montadora de Patinete Elétrico do Brasil!
        </p>
        <p className="mt-6">
          O Grupo DBS atua desde 2003 na Distribuição de Veículos para
          Mobilidade Elétrica no mercado Consumidor e Corporativo, através das
          marcas próprias DROP, TWO DOGS e BRMOBILITY.
        </p>
        <p className="mt-6">
          A primeira marca de Patinetes Elétricos do Brasil tornou-se também
          pioneira na sua industrialização em 2019 com a inauguração da planta
          no Polo Industrial de Manaus.
        </p>
        <p className="mt-6">
          Junte-se à DBS Indústria e Faça Parte da Revolução da Mobilidade!
        </p>
        <Image 
        className="mt-8"
        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=311,h=45,fit=crop/AzGrO4Z61Zueln8M/ativo-1-m5KvPJla6jHZ0yJV.png"
        width={311}
        height={45}
        alt="Icones"
        />
      </div>

      <div>
      <h1 className="font-bold text-5xl">Nossa Trajetoria</h1>
     


  <ul className="timeline">
  <li>
    <div className="direction-r">
      <div className="flag-wrapper">
        <span className="hexa"></span>
        <span className="time-wrapper"><span className="time">2003</span></span>
      </div>
      <div className="desc">Inicio da Produção</div>
    </div>
  </li>

  <li>
    <div className="direction-l">
      <div className="flag-wrapper">
        <span className="hexa"></span>
        <span className="time-wrapper"><span className="time">2005</span></span>
      </div>
      <div className="desc">1.000 Skates Carveboard Vendidos</div>
    </div>
  </li>
  

  <li>
    <div className="direction-r">
      <div className="flag-wrapper">
        <span className="hexa"></span>
        <span className="time-wrapper"><span className="time">2009</span></span>
      </div>
      <div className="desc"> 1° Patinete Elétrico do Brasil</div>
    </div>
  </li>

  <li>
    <div className="direction-l">
      <div className="flag-wrapper">
        <span className="hexa"></span>
        <span className="time-wrapper"><span className="time">2011</span></span>
      </div>
      <div className="desc">1.000 Pontos de Vendas</div>
    </div>
  </li>

  <li>
    <div className="direction-r">
      <div className="flag-wrapper">
        <span className="hexa"></span>
        <span className="time-wrapper"><span className="time">2012</span></span>
      </div>
      <div className="desc">Assistências Técnicas em todas as cidades com 150 mil habitantes</div>
    </div>
  </li>

  <li>
    <div className="direction-l">
      <div className="flag-wrapper">
        <span className="hexa"></span>
        <span className="time-wrapper"><span className="time">2015</span></span>
      </div>
      <div className="desc">Distribuidor exclusivo Ninebot, líder mundial em patinetes elétricos</div>
    </div>
  </li>

  <li>
    <div className="direction-r">
      <div className="flag-wrapper">
        <span className="hexa"></span>
        <span className="time-wrapper"><span className="time">2017</span></span>
      </div>
      <div className="desc">Líder em Mobilidade Elétrica, Segurança Pública / Privada (BRMobility)</div>
    </div>
  </li>

  <li>
    <div className="direction-l">
      <div className="flag-wrapper">
        <span className="hexa"></span>
        <span className="time-wrapper"><span className="time">2018</span></span>
      </div>
      <div className="desc">20.000 Patinetes Vendidos</div>
    </div>
  </li>
  
  <li>
    <div className="direction-r">
      <div className="flag-wrapper">
        <span className="hexa"></span>
        <span className="time-wrapper"><span className="time">2019</span></span>
      </div>
      <div className="desc">Inauguração Planta Manaus, 1° Patinete Elétrico made in Brazil </div>
    </div>
  </li>

  <li>
    <div className="direction-l">
      <div className="flag-wrapper">
        <span className="hexa"></span>
        <span className="time-wrapper"><span className="time">2021</span></span>
      </div>
      <div className="desc">Entre as 100 empresas mais influentes em mobilidade pelo ESTADÃO</div>
    </div>
  </li>

  <li>
    <div className="direction-r">
      <div className="flag-wrapper">
        <span className="hexa"></span>
        <span className="time-wrapper"><span className="time">2022</span></span>
      </div>
      <div className="desc">Certificação ISO 9001 para produção de veículos elétricos</div>
    </div>
  </li>

  <li>
    <div className="direction-l">
      <div className="flag-wrapper">
        <span className="hexa"></span>
        <span className="time-wrapper"><span className="time">2023</span></span>
      </div>
      <div className="desc">Maior fabricante de produtos Oxelo Decatlhon no Brasil</div>
    </div>
  </li>

  </ul>
  



      </div>
    </section>
  );
}
