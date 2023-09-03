import Image from 'next/image'
import PRODUCTS from './products'

export default function Home() {
  return (
    <main className="font-sans flex flex-col bg-gradient-to-tl from-emerald-100 to-violet-100 min-h-screen">
      <nav className='bg-emerald-600 text-xl font-semibold text-white lg:px-24 px-16 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>Garage sale Pablo y Paula</nav>
      <div className="sm:max-w-screen-2xl max-w-xs w-full self-center grow grid
      xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2
      lg:p-24 p-16 
      lg:gap-16 gap-8 
      ">
        {PRODUCTS.map(({ title, price, key }, i) =>
          <div className='group flex flex-col justify-center h-64 hover:scale-150 transition relative bg-white rounded overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]' key={i}>
            <div className='grow relative'>
              <Image
                src={`/${key || title}-1.jpg`}
                layout="fill"
                objectFit="cover"
                alt={title}
              />
            </div>
            <p className='text-center font-medium my-1 mx-4'>{title}</p>
            <p className='text-center my-1 mx-4'>$ {price}</p>
            <p className='invisible group-hover:visible transition'>asdasd</p>
          </div>
        )}
      </div>
    </main>
  )
}
