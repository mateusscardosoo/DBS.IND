import Image from "next/image";
import Link from "next/link";

export function Customers() {


    const customers = [
        { id: 1, image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=164,fit=crop/AzGrO4Z61Zueln8M/decathlon-A85pV7P2q1SobZeN.png', link: '#' },
        { id: 2, image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=164,fit=crop/AzGrO4Z61Zueln8M/twodogs_03-mv0jJMNbM2uWMMle.png', link: '#' },
        { id: 3, image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=164,fit=crop/AzGrO4Z61Zueln8M/logo-fundo-cinza-06-1-m5KvnOoXpVIRjpwN.jpg', link: '#' },
        { id: 4, image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=164,fit=crop/AzGrO4Z61Zueln8M/bee-1-YNqJ2z64W1IrG5nr.png', link: '#' },
        { id: 5, image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=164,fit=crop/AzGrO4Z61Zueln8M/flipon-Awvr9070nZfeKNoj.png', link: '#' },
        { id: 6, image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=164,fit=crop/AzGrO4Z61Zueln8M/lev-A85pV7okJkt0pKGx.png', link: '#' },
        { id: 7, image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=164,fit=crop/AzGrO4Z61Zueln8M/brmobility_v02-AQEJZ6NVWxU5zKjo.png', link: '#' },
        { id: 8, image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=297,h=164,fit=crop/AzGrO4Z61Zueln8M/muuv-Yg2lyE01vpu1RgM0.png', link: '#' },
    ];


    return (
        <section className="bg-secondary py-24">
        <div className="flex  max-w-[1224px] mx-auto py-12  gap-6 flex-col
        ">
        <h1 className="text-5xl font-bold text-white ">
        Nossos Clientes

          </h1>
          <span className="font-semibold  text-white mt-4">
          Parcerias que já se beneficiam dos incentivos fiscais
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {customers.map(customer => (
        <div key={customer.id} className="flex flex-col items-center">
          <Link href={customer.link}>
              <Image src={customer.image} alt={`Customer ${customer.id}`} width={297} height={165} className="mb-2 cursor-pointer" />
          </Link>
        </div>
      ))}
    </div>
        </div>
        </section>
    )
}