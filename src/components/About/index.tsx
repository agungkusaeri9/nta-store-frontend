"use client";
import React from "react";
import Breadcrumb from "../Common/Breadcrumb";

const About = () => {
  return (
    <>
      <Breadcrumb title={"About Us"} pages={["About Us"]} />

      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col xl:flex-row gap-7.5">
            {/* Left Card: Info Singkat */}
            <div className="xl:max-w-[370px] w-full bg-white rounded-xl shadow-1">
              <div className="py-5 px-4 sm:px-7.5 border-b border-gray-3">
                <p className="font-medium text-xl text-dark">Tentang Kami</p>
              </div>

              <div className="p-4 sm:p-7.5">
                <p className="text-dark-4 leading-relaxed">
                  Kami adalah toko online yang berkomitmen menyediakan produk
                  elektronik, gadget, dan kebutuhan teknologi dengan kualitas
                  terbaik dan harga terjangkau.
                </p>
              </div>
            </div>

            {/* Right Content: Story */}
            <div className="xl:max-w-[770px] w-full bg-white rounded-xl shadow-1 p-4 sm:p-7.5 xl:p-10">
              <h2 className="text-2xl font-semibold text-dark mb-4">
                Siapa Kami
              </h2>
              <p className="text-dark-4 leading-relaxed mb-6">
                Berdiri sejak 2024, toko online kami hadir untuk mempermudah
                masyarakat mendapatkan produk teknologi terbaru tanpa ribet.
                Dengan sistem belanja online yang aman, cepat, dan praktis, kami
                berharap bisa menjadi partner terbaik untuk kebutuhan digital
                Anda.
              </p>

              <h2 className="text-2xl font-semibold text-dark mb-4">
                Visi & Misi
              </h2>
              <ul className="list-disc pl-5 text-dark-4 leading-relaxed mb-6">
                <li>Menyediakan produk berkualitas dengan harga kompetitif.</li>
                <li>Mengutamakan kepuasan pelanggan dengan layanan terbaik.</li>
                <li>Menjadi toko online terpercaya di Indonesia.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-dark mb-4">
                Kenapa Belanja di Kami?
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="bg-gray-1 rounded-lg p-5">
                  <h3 className="font-medium text-lg mb-2">Produk Original</h3>
                  <p className="text-dark-4 text-sm leading-relaxed">
                    Semua produk dijamin 100% original dan bergaransi resmi.
                  </p>
                </div>
                <div className="bg-gray-1 rounded-lg p-5">
                  <h3 className="font-medium text-lg mb-2">Pengiriman Cepat</h3>
                  <p className="text-dark-4 text-sm leading-relaxed">
                    Bekerja sama dengan kurir terpercaya untuk memastikan produk
                    sampai tepat waktu.
                  </p>
                </div>
                <div className="bg-gray-1 rounded-lg p-5">
                  <h3 className="font-medium text-lg mb-2">Harga Terjangkau</h3>
                  <p className="text-dark-4 text-sm leading-relaxed">
                    Menawarkan harga bersaing dengan promo menarik setiap
                    minggu.
                  </p>
                </div>
                <div className="bg-gray-1 rounded-lg p-5">
                  <h3 className="font-medium text-lg mb-2">Customer Support</h3>
                  <p className="text-dark-4 text-sm leading-relaxed">
                    Tim support siap membantu Anda 24/7 melalui chat dan email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
