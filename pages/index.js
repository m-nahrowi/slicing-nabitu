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
      <nav className="flex justify-between px-24 bg-gre align-center shadow-md py-1">
        <div>
          <Image src={logo} alt="logo" className="h-5 w-5" width="90" height="45" />
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
        <p className="text-2xl font-bold text-green-800">
          Daftar Proyek
        </p>
        <p className='text-lg'>
          Temukan proyek untuk didanai !
        </p>
      </div>
      <div className='flex justify-between mx-48 mt-10'>
        <div className='flex'>
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
        <div className='flex'>
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

        <div className='bg-white w-1/3 flex flex-col shadow-2xl rounded-xl border'>
          {/* <div>
            <img src='image/kasur.jpg' className='relative' alt="data " />
          </div> */}
          <div className='py-7 px-5'>
            <div className='flex justify-center'>
              <div className='flex flex-col w-full'>
                <img src='image/kasur.jpg' className='relative' alt="data " />
                <div className='rounded-lg py-3 mt-[-150px] z-20 px-9'>
                  <div className='bg-white text-center w-full border border-green-300 rounded-md'>
                    <p>
                      Akan Di Mulai
                    </p>
                    <p>
                      00:28:00
                    </p>
                  </div>
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
        <div className='mt-32 flex justify-between mx-20'>
          <div>
            <h1 className='text-4xl font-bold text-green-700'>
              Jadi Member Dan Dapatkan <br /> Peluang Investasi Tanpa Riba
            </h1>
            <div className='flex justify-between mt-10'>
              <p className='text-xl text-green-800 font-bold'>
                #TumbuhTanpaRiba
              </p>
              <div className='bg-amber-500 rounded-md'>
                <p className=' text-white font-bold p-2'>
                  Ayo Mulai
                </p>
              </div>

            </div>
          </div>
          <div>
            <img src="image/saham.png" alt="saham" className='w-48 h-48' />
          </div>

        </div>
      </div>

      <footer className=''>

        <div className='bg-[#195A32] text-white'>
          <div className=' mx-32 mt-14'>
            <div className='flex justify-between'>
              <div >
                <h1>
                  PT Nabitu Teknologi Islami
                </h1>
                <p className='w-52'>
                  Jalan Uranus Blok CIII No. 11
                  Komp. Margahayu Raya Barat
                  Buah Batu, Bandung 40286
                </p>
                <div>
                  <p>Socila Media</p>
                </div>
              </div>
              <div>
                <h1>
                  Informasi Layanan
                </h1>
                <p>
                  Daftarkan Proyek Investasi
                </p>
                <p>
                  Ikut Investasi
                </p>
                <p>
                  Akad - akad Investasi
                </p>
                <p>
                  Workflow Investasi
                </p>
                <p>
                  Ketentuan Pengguna
                </p>
                <div>
                  <p>Dalam Proses</p>
                </div>
              </div>
              <div>
                <h1>
                  Tentang Kami
                </h1>
                <p>
                  Tentang Nabitu
                </p>
                <p>
                  Latar Belakang Nabitu
                </p>
                <p>
                  Our Vision and Values
                </p>
                <p>
                  Partners
                </p>
                <p>
                  Portofolio
                </p>
                <div>
                  <p>Terdaftar di :</p>
                </div>
              </div>

              <div>
                <h1>
                  Kontak
                </h1>
                <p>
                  admin@nabitu.id
                </p>
                <p>
                  +62 882 1111 2275
                </p>

                <div>
                  <p>Didukung Oleh :</p>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className='mx-48'>
          <h1>
            DISCLAIMER
          </h1>
          <p>
            OTORITAS JASA KEUANGAN TIDAK MEMBERIKAN PERSETUJUAN TERHADAP PENERBIT DAN TiDAK MEMBERIKAN PERNYATAAN MENYETUJUI ATAU TIDAK MENYETUJUI EFEK INI, TIDAK JUGAMENYATAKAN KEBENARAN ATAU KECUKUPAN INFORMASI DALAM LAYANAN URUN DANA INI. SETIAP PERNYATAAN YANG BERTENTANGAN DENGAN HAL TERSEBUT ADALAH PERBUATAN MELANGGAR HUKUM
          </p>
          <p>
            INFORMASI DALAM LAYANAN URUN DANA INI PENTING DAN PERLU MENDAPAT PERHATIAN SEGERA. APABILA TERDAPAT KERAGUAN PADA TINDAKAN YANG AKAN DIAMBIL, SEBAIKNYA BERKONSULTASI DENGAN PENYELENGGARA
          </p>
          <p>
            PENERBIT DAN PENYELENGGARA, BAIK SENDIRI SENDIRI MAUPUN BERSAMA-SAMA, BERTANGGUNG JAWAB SEPENUHNYA ATAS KEBENARAN SEMUA INFORMASI YANG TERCANTUM DALAM LAYANAN URUN DANA INI
          </p>
          <p>
            Nabitu Website ver 1.1.0 | Copyright 2022, All Rights Reserved
          </p>
        </div>



      </footer>


    </div>
  )
}
