import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import logo from "../public/image/nabitu.png"
import hijau from "../public/image/kotak-hijau.png"
import search from '../public/image/search.png'
import seru from '../public/image/tanda-seru.png'
import kasur from "../public/image/kasur.jpg"

export default function Home() {
  return (
    <div className="">
      <nav className="flex justify-between px-24 bg-gre align-center shadow-md py-">
        <div>
          <Image src={logo} alt="logo" className="h-5 w-5" width="100" height="60" />
        </div>
        <div className="flex justify-evenly items-center">
          <p className='px-5'>
            Investasi
          </p>
          <p className="px-5">
            Pendanaan
          </p>
          <p className="px-5">
            Tentang Kami
          </p>
          <p className="px-5">
            Edukasi
          </p>
          <p className='px-5'>
            ID
          </p>
          <p className="px-5 border-2 border-green-300 py-1 rounded-md">
            Masuk
          </p>
        </div>
      </nav>

      <div className="text-center mt-10">
        <p className="text-xl font-bold text-green-600">
          Daftar Proyek
        </p>
        <p>
          Temukan proyek untuk didanai !
        </p>
      </div>
      <div className='flex justify-between mx-48 mt-10 bg-green-400'>
        <div className='flex bg-red-300'>
          <div className='bg-white mr-9'>
            <select name="choice" className='bg-white border-2 rounded-md w-40 py-1'>
              <option value="first">First Value</option>
              <option value="second" selected>Status</option>
              <option value="third">Third Value</option>
            </select>
          </div>
          <div className='bg-white'>
            <select name="choice" className='bg-white border-2 rounded-md w-40 py-1'>
              <option value="first">First Value</option>
              <option value="second" selected>Bidang Usaha</option>
              <option value="third">Third Value</option>
            </select>
          </div>
        </div>
        <div className='flex bg-yellow-400'>
          <div className='bg-white items-center flex'>
            <Image src={hijau} alt="kotak" width={32} height={35} />
          </div>
          <div className='flex bg-white ml-3 items-center border border-black rounded-xl px-1'>
            <input type="text" className='bg-white m-1' outline="none" />
            <Image src={search} alt="search" width={23} height={23} />
          </div>
        </div>
      </div>

      <div className="mx-48 mt-10">

        <div className='bg-yellow-300 w-1/3 flex flex-col'>
          <div>
            <img src='image/kasur.jpg' className='relative' alt="data " />
          </div>
          <div className='py-7 px-5'>
            <div className='flex justify-center'>
              <div className='flex flex-col w-full'>
                <div className='bg-green-300 text-center w-full rounded-lg py-3'>
                  <p>
                    Akan Di Mulai
                  </p>
                  <p>
                    00:28:00
                  </p>
                </div>
                <div className='flex mt-3 text-xs items-center'>
                  <p className=' mr-2'>
                    SYIRKAH MUDHOROBAH
                  </p>
                  <div className='border-2 border-black rounded-full text-[5px] px-1'>
                    <p className='text-xs'>
                      !
                    </p>
                  </div>

                  {/* <Image src={seru} alt="tanda seru" width={5} height={5} /> */}
                </div>

                <p className='text-green-700 font-bold'>
                  AMK-02 RETAIL LEBARAN CHINO 2000 PCS
                </p>
                <p>
                  Ammar Kids
                </p>

                <div className='w-full  bg-green-700 rounded-full shadow-2xl mt-2'>
                  <p className='text-center text-white'>
                    100%
                  </p>
                </div>

                <div className='text-xs'>
                  <div className='flex justify-between font-bold'>
                    <p>
                      Kebutuhan
                    </p>
                    <p>
                      Terkumpul
                    </p>
                  </div>
                  <div className='flex justify-between font-bold'>
                    <p className='text-green-800'>
                      Rp. 298.000.000
                    </p>
                    <p className='text-green-800'>
                      Rp. 144.000.000
                    </p>
                  </div>
                  <div className='flex justify-between my-3'>
                    <p>
                      Periode
                    </p>
                    <p className='font-bold'>
                      Dec 2021 - May 2022
                    </p>
                  </div>
                  <div className='flex justify-between my-3'>
                    <p>
                      Durasi
                    </p>
                    <p className='font-bold'>
                      4.9 Bulan
                    </p>
                  </div>
                  <div className='flex justify-between'>
                    <p>
                      Proyeksi
                    </p>
                    <p className='font-bold'>
                      ROI 10.00%
                    </p>
                  </div>
                  <div className='flex justify-end  '>
                    <p className='text-lg mt-7 border-2 border-green-800 px-3 rounded-md bg-green-800 text-white'>Detail</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}
