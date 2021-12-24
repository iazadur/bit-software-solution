import Image from 'next/image'
import Header from '../src/components/Shared/Header'


export default function Home() {
  return (
    <>

      {/* <Header /> */}

      


      <div className="container mx-auto flex">
        <div className="w-2/3">
          <Image src="/img/login.png" alt='' layout='responsive' width={"600"} height={"400"} />
        </div>

      </div>

    </>
  )
}
