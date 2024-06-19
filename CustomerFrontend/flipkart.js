import * as React from "react";
import Router from "next/router";

const Flipkart = () => {
    const router = Router
    const onContactCustomerCareClick = () => {
        router.push('/')
    }

  return (
    <div className="flex flex-col items-center pb-12 bg-gray-100">
      <div className="flex justify-center items-center self-stretch px-16 w-full bg-white max-md:px-5 max-md:max-w-full border-b border-[#f5f5f5]">
        <div className="flex gap-5 justify-between py-3 pl-7 bg-white max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-2.5 justify-between items-center max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4307c2950f93f98bba8329c1c9c6709411bbcb6a540e11dd29aeac631312a7a?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
              className="self-stretch w-40 max-w-full aspect-[3.7]"
            />
            <div className="flex gap-2 justify-end self-stretch px-3 py-2 my-auto text-lg bg-blue-50 rounded-lg text-stone-500 max-md:flex-wrap max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2982e5e1ce090a6380fcf9864d1edf84da05e7fe65f3fa62a71bf62bd9a66f59?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                className="w-6 aspect-square"
              />
              <div className="flex-auto self-start mt-1.5 max-md:max-w-full">
                Search for Products, Brands and More
              </div>
            </div>
            {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/96c78f38e6256ef6b448816ecdb85618b421ea144bee429542e43c80b097ea96?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
              className="self-stretch my-auto w-6 aspect-square"
            /> */}
            {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/143373497c65cda6a56c7ef1d7676196a6fb0bc00828c44372044c0589d2b38f?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
              className="self-stretch my-auto w-3 aspect-square"
            /> */}
          </div>
          <div className="flex gap-px my-auto text-base leading-6 text-center text-black whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/668ea580a347a8164799fbc5726af606d5950cc9c262a19619045d8e9f022b1f?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
              className="w-8 aspect-[1.33]"
            />
            <div className="grow my-auto">Cart</div>
          </div>
          <div className="flex gap-0.5 items-center self-start text-base leading-6 text-center text-black">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a3ba25669d6e352fc4e6a4bfef2b516416f14c5da7d5e33b152862acee15ad3?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
              className="self-stretch my-auto w-8 aspect-[1.33]"
            />
            <div className="flex-auto self-stretch my-auto cursor-pointer" onClick={onContactCustomerCareClick}>
              Contact customer care
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/757e782904ca0ed993b1721b597ab82d5b7c19403bff49ec41bbe3367d6b8070?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
              className="self-stretch aspect-[1.96] w-[82px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-2 w-full text-sm text-center whitespace-nowrap bg-white max-w-[1600px] text-neutral-900 max-md:max-w-full">
        <div className="flex flex-col justify-center bg-white max-md:max-w-full">
          <div className="flex justify-center items-center px-16 py-4 bg-white max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between items-start max-w-full w-[1178px] max-md:flex-wrap">
              <div className="flex flex-col flex-1 self-stretch text-zinc-800">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fe5a07c69338158b81ae187f2acf338e78e5cf1c544f009901ac6597af8617f5?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe5a07c69338158b81ae187f2acf338e78e5cf1c544f009901ac6597af8617f5?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe5a07c69338158b81ae187f2acf338e78e5cf1c544f009901ac6597af8617f5?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe5a07c69338158b81ae187f2acf338e78e5cf1c544f009901ac6597af8617f5?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe5a07c69338158b81ae187f2acf338e78e5cf1c544f009901ac6597af8617f5?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe5a07c69338158b81ae187f2acf338e78e5cf1c544f009901ac6597af8617f5?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe5a07c69338158b81ae187f2acf338e78e5cf1c544f009901ac6597af8617f5?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe5a07c69338158b81ae187f2acf338e78e5cf1c544f009901ac6597af8617f5?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                  className="self-center w-16 aspect-square"
                />
                <div className="mt-4">Grocery</div>
              </div>
              <div className="flex flex-col flex-1 text-zinc-800">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/449c31e9805c87cb247c08f6c82ed1c09a832a8a3141dea0aac33478db763249?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/449c31e9805c87cb247c08f6c82ed1c09a832a8a3141dea0aac33478db763249?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/449c31e9805c87cb247c08f6c82ed1c09a832a8a3141dea0aac33478db763249?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/449c31e9805c87cb247c08f6c82ed1c09a832a8a3141dea0aac33478db763249?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/449c31e9805c87cb247c08f6c82ed1c09a832a8a3141dea0aac33478db763249?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/449c31e9805c87cb247c08f6c82ed1c09a832a8a3141dea0aac33478db763249?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/449c31e9805c87cb247c08f6c82ed1c09a832a8a3141dea0aac33478db763249?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/449c31e9805c87cb247c08f6c82ed1c09a832a8a3141dea0aac33478db763249?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                  className="self-center w-16 aspect-square"
                />
                <div className="mt-4">Mobiles</div>
              </div>
              <div className="flex flex-col flex-1">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/79f17442cb6c8127b9a7a8cb9a76088cb359eb122b88dc5ad8a9ab8568176e67?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/79f17442cb6c8127b9a7a8cb9a76088cb359eb122b88dc5ad8a9ab8568176e67?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/79f17442cb6c8127b9a7a8cb9a76088cb359eb122b88dc5ad8a9ab8568176e67?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/79f17442cb6c8127b9a7a8cb9a76088cb359eb122b88dc5ad8a9ab8568176e67?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/79f17442cb6c8127b9a7a8cb9a76088cb359eb122b88dc5ad8a9ab8568176e67?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/79f17442cb6c8127b9a7a8cb9a76088cb359eb122b88dc5ad8a9ab8568176e67?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/79f17442cb6c8127b9a7a8cb9a76088cb359eb122b88dc5ad8a9ab8568176e67?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/79f17442cb6c8127b9a7a8cb9a76088cb359eb122b88dc5ad8a9ab8568176e67?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                  className="self-center w-16 aspect-square"
                />
                <div className="mt-4">Fashion</div>
              </div>
              <div className="flex flex-col flex-1">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/53cc357ec20385bde11ed11352b9c02376571fa9c97d493af58cf35a03da95ef?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/53cc357ec20385bde11ed11352b9c02376571fa9c97d493af58cf35a03da95ef?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53cc357ec20385bde11ed11352b9c02376571fa9c97d493af58cf35a03da95ef?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/53cc357ec20385bde11ed11352b9c02376571fa9c97d493af58cf35a03da95ef?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/53cc357ec20385bde11ed11352b9c02376571fa9c97d493af58cf35a03da95ef?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53cc357ec20385bde11ed11352b9c02376571fa9c97d493af58cf35a03da95ef?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/53cc357ec20385bde11ed11352b9c02376571fa9c97d493af58cf35a03da95ef?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/53cc357ec20385bde11ed11352b9c02376571fa9c97d493af58cf35a03da95ef?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                  className="ml-3 w-16 aspect-square max-md:ml-2.5"
                />
                <div className="mt-4">Electronics</div>
              </div>
              <div className="flex flex-col flex-1">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/251557191eea1b380cdce0a426caacedce7872251e978bc009afa58b7fac2987?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/251557191eea1b380cdce0a426caacedce7872251e978bc009afa58b7fac2987?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/251557191eea1b380cdce0a426caacedce7872251e978bc009afa58b7fac2987?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/251557191eea1b380cdce0a426caacedce7872251e978bc009afa58b7fac2987?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/251557191eea1b380cdce0a426caacedce7872251e978bc009afa58b7fac2987?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/251557191eea1b380cdce0a426caacedce7872251e978bc009afa58b7fac2987?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/251557191eea1b380cdce0a426caacedce7872251e978bc009afa58b7fac2987?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/251557191eea1b380cdce0a426caacedce7872251e978bc009afa58b7fac2987?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                  className="self-center w-16 aspect-square"
                />
                <div className="mt-4">Home & Furniture</div>
              </div>
              <div className="flex flex-col flex-1 self-stretch text-zinc-800">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/61d98d07e2fa2f4db3a31ce799fdfaf59741e37c669aa70f3b03e4e6e430cde5?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/61d98d07e2fa2f4db3a31ce799fdfaf59741e37c669aa70f3b03e4e6e430cde5?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61d98d07e2fa2f4db3a31ce799fdfaf59741e37c669aa70f3b03e4e6e430cde5?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/61d98d07e2fa2f4db3a31ce799fdfaf59741e37c669aa70f3b03e4e6e430cde5?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/61d98d07e2fa2f4db3a31ce799fdfaf59741e37c669aa70f3b03e4e6e430cde5?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61d98d07e2fa2f4db3a31ce799fdfaf59741e37c669aa70f3b03e4e6e430cde5?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/61d98d07e2fa2f4db3a31ce799fdfaf59741e37c669aa70f3b03e4e6e430cde5?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/61d98d07e2fa2f4db3a31ce799fdfaf59741e37c669aa70f3b03e4e6e430cde5?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                  className="self-center aspect-[1.11] w-[71px]"
                />
                <div className="mt-4">Appliances</div>
              </div>
              <div className="flex flex-col flex-1 text-zinc-800">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/50a9968274c2448c525a84d0a57976ddd82dc2a708a04ea06f0cd895ced8c62f?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/50a9968274c2448c525a84d0a57976ddd82dc2a708a04ea06f0cd895ced8c62f?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/50a9968274c2448c525a84d0a57976ddd82dc2a708a04ea06f0cd895ced8c62f?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/50a9968274c2448c525a84d0a57976ddd82dc2a708a04ea06f0cd895ced8c62f?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/50a9968274c2448c525a84d0a57976ddd82dc2a708a04ea06f0cd895ced8c62f?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/50a9968274c2448c525a84d0a57976ddd82dc2a708a04ea06f0cd895ced8c62f?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/50a9968274c2448c525a84d0a57976ddd82dc2a708a04ea06f0cd895ced8c62f?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/50a9968274c2448c525a84d0a57976ddd82dc2a708a04ea06f0cd895ced8c62f?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                  className="self-center w-16 aspect-square"
                />
                <div className="mt-4">Travel</div>
              </div>
              <div className="flex flex-col flex-1 self-stretch">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/297a13094b58a342546586738ffb99b850ff84dc1a5f0fddf2236cc30c8682f6?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/297a13094b58a342546586738ffb99b850ff84dc1a5f0fddf2236cc30c8682f6?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/297a13094b58a342546586738ffb99b850ff84dc1a5f0fddf2236cc30c8682f6?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/297a13094b58a342546586738ffb99b850ff84dc1a5f0fddf2236cc30c8682f6?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/297a13094b58a342546586738ffb99b850ff84dc1a5f0fddf2236cc30c8682f6?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/297a13094b58a342546586738ffb99b850ff84dc1a5f0fddf2236cc30c8682f6?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/297a13094b58a342546586738ffb99b850ff84dc1a5f0fddf2236cc30c8682f6?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/297a13094b58a342546586738ffb99b850ff84dc1a5f0fddf2236cc30c8682f6?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                  className="self-center w-16 aspect-square"
                />
                <div className="mt-4">Beauty, Toys & More</div>
              </div>
              <div className="flex flex-col flex-1">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/741e0d179f752d4e22ad0b4c33d8d3232556e21f8a5f6917a1783110e09ffdae?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/741e0d179f752d4e22ad0b4c33d8d3232556e21f8a5f6917a1783110e09ffdae?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/741e0d179f752d4e22ad0b4c33d8d3232556e21f8a5f6917a1783110e09ffdae?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/741e0d179f752d4e22ad0b4c33d8d3232556e21f8a5f6917a1783110e09ffdae?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/741e0d179f752d4e22ad0b4c33d8d3232556e21f8a5f6917a1783110e09ffdae?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/741e0d179f752d4e22ad0b4c33d8d3232556e21f8a5f6917a1783110e09ffdae?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/741e0d179f752d4e22ad0b4c33d8d3232556e21f8a5f6917a1783110e09ffdae?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/741e0d179f752d4e22ad0b4c33d8d3232556e21f8a5f6917a1783110e09ffdae?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                  className="self-end w-16 aspect-square"
                />
                <div className="mt-4">Two Wheelers</div>
              </div>
            </div>
          </div>
          <div className="shrink-0 h-px bg-gray-200 max-md:max-w-full" />
        </div>
      </div>
      <div className="flex flex-col justify-center mt-4 w-full bg-white max-w-[1600px] max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/47f6bd49ae7b4701f708ab163ad30b0408c181304bb0c5fa82399b25332b5a57?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/47f6bd49ae7b4701f708ab163ad30b0408c181304bb0c5fa82399b25332b5a57?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47f6bd49ae7b4701f708ab163ad30b0408c181304bb0c5fa82399b25332b5a57?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/47f6bd49ae7b4701f708ab163ad30b0408c181304bb0c5fa82399b25332b5a57?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/47f6bd49ae7b4701f708ab163ad30b0408c181304bb0c5fa82399b25332b5a57?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47f6bd49ae7b4701f708ab163ad30b0408c181304bb0c5fa82399b25332b5a57?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/47f6bd49ae7b4701f708ab163ad30b0408c181304bb0c5fa82399b25332b5a57?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/47f6bd49ae7b4701f708ab163ad30b0408c181304bb0c5fa82399b25332b5a57?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
          className="w-full aspect-[5.88] max-md:max-w-full"
        />
      </div>
      <div className="mt-2 w-full max-w-[1600px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[84%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center self-stretch pb-7 my-auto w-full bg-white max-md:mt-5 max-md:max-w-full">
              <div className="flex flex-col justify-center pt-7 bg-white max-md:max-w-full">
                <div className="flex gap-5 justify-between mx-5 max-w-full text-xl font-semibold tracking-normal leading-7 text-neutral-800 w-[1295px] max-md:flex-wrap max-md:mr-2.5">
                  <div className="flex-auto my-auto">Best of Electronics</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dee52367275f55402cef5da2dff91fc31ce2d8aacf0b755980fb04197371a72d?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                    className="w-6 aspect-square"
                  />
                </div>
                <div className="flex gap-4 pr-1 pb-3 pl-3 mt-7 bg-white max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col flex-1 justify-center items-center p-2 text-sm tracking-normal leading-5 text-center whitespace-nowrap rounded border border-solid border-neutral-200 text-neutral-800">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ff9228d69416f56a138a2ad5b47a62e79bae518e3895b51fbedeef9af9016f6c?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff9228d69416f56a138a2ad5b47a62e79bae518e3895b51fbedeef9af9016f6c?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff9228d69416f56a138a2ad5b47a62e79bae518e3895b51fbedeef9af9016f6c?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff9228d69416f56a138a2ad5b47a62e79bae518e3895b51fbedeef9af9016f6c?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff9228d69416f56a138a2ad5b47a62e79bae518e3895b51fbedeef9af9016f6c?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff9228d69416f56a138a2ad5b47a62e79bae518e3895b51fbedeef9af9016f6c?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff9228d69416f56a138a2ad5b47a62e79bae518e3895b51fbedeef9af9016f6c?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff9228d69416f56a138a2ad5b47a62e79bae518e3895b51fbedeef9af9016f6c?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                      className="aspect-square w-[186px]"
                    />
                    <div className="mt-4">BenQ Monitors</div>
                    <div className="justify-center self-stretch px-12 py-1.5 mt-1 font-semibold bg-white max-md:px-5">
                      From ₹9990
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 justify-center items-center p-2 text-sm tracking-normal leading-5 text-center whitespace-nowrap rounded border border-solid border-neutral-200 text-neutral-800">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3c55e2f5384d4087f7c03e198fc4060d100efb52d7c760027555b4f7fc594cf9?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c55e2f5384d4087f7c03e198fc4060d100efb52d7c760027555b4f7fc594cf9?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c55e2f5384d4087f7c03e198fc4060d100efb52d7c760027555b4f7fc594cf9?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c55e2f5384d4087f7c03e198fc4060d100efb52d7c760027555b4f7fc594cf9?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c55e2f5384d4087f7c03e198fc4060d100efb52d7c760027555b4f7fc594cf9?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c55e2f5384d4087f7c03e198fc4060d100efb52d7c760027555b4f7fc594cf9?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c55e2f5384d4087f7c03e198fc4060d100efb52d7c760027555b4f7fc594cf9?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c55e2f5384d4087f7c03e198fc4060d100efb52d7c760027555b4f7fc594cf9?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                      className="aspect-square w-[186px]"
                    />
                    <div className="mt-4">Monitors</div>
                    <div className="justify-center self-stretch px-12 py-1.5 mt-1.5 font-semibold bg-white max-md:px-5">
                      From ₹9999
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 justify-center items-center p-2 text-sm tracking-normal leading-5 text-center whitespace-nowrap rounded border border-solid border-neutral-200 text-neutral-800">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ed1618f1f04b064aff3c4bb6fa0f749d27edd98d6ca6cd255ba4859dc5a24e63?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed1618f1f04b064aff3c4bb6fa0f749d27edd98d6ca6cd255ba4859dc5a24e63?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed1618f1f04b064aff3c4bb6fa0f749d27edd98d6ca6cd255ba4859dc5a24e63?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed1618f1f04b064aff3c4bb6fa0f749d27edd98d6ca6cd255ba4859dc5a24e63?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed1618f1f04b064aff3c4bb6fa0f749d27edd98d6ca6cd255ba4859dc5a24e63?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed1618f1f04b064aff3c4bb6fa0f749d27edd98d6ca6cd255ba4859dc5a24e63?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed1618f1f04b064aff3c4bb6fa0f749d27edd98d6ca6cd255ba4859dc5a24e63?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ed1618f1f04b064aff3c4bb6fa0f749d27edd98d6ca6cd255ba4859dc5a24e63?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                      className="aspect-square w-[186px]"
                    />
                    <div className="mt-4">Printers</div>
                    <div className="justify-center self-stretch px-12 py-1.5 mt-1.5 font-semibold bg-white max-md:px-5">
                      From ₹3999
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 justify-center items-center p-2 text-sm tracking-normal leading-5 text-center whitespace-nowrap rounded border border-solid border-neutral-200 text-neutral-800">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/babb8df0556a357ad3a921ed4033b5121d2a8a797e8b8e7c9ce066647eebd5e3?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/babb8df0556a357ad3a921ed4033b5121d2a8a797e8b8e7c9ce066647eebd5e3?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/babb8df0556a357ad3a921ed4033b5121d2a8a797e8b8e7c9ce066647eebd5e3?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/babb8df0556a357ad3a921ed4033b5121d2a8a797e8b8e7c9ce066647eebd5e3?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/babb8df0556a357ad3a921ed4033b5121d2a8a797e8b8e7c9ce066647eebd5e3?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/babb8df0556a357ad3a921ed4033b5121d2a8a797e8b8e7c9ce066647eebd5e3?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/babb8df0556a357ad3a921ed4033b5121d2a8a797e8b8e7c9ce066647eebd5e3?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/babb8df0556a357ad3a921ed4033b5121d2a8a797e8b8e7c9ce066647eebd5e3?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                      className="aspect-square w-[186px]"
                    />
                    <div className="mt-4">Best Selling Security </div>
                    <div className="justify-center items-start self-stretch px-16 py-1.5 font-semibold bg-white max-md:px-5">
                      From ₹29
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 justify-center items-center p-2 text-sm tracking-normal leading-5 text-center whitespace-nowrap rounded border border-solid border-neutral-200 text-neutral-800">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ffa23d82ea7cd0e5d28182c0c214a64a368e50f38b9472cc908ee372ee2c0d5e?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffa23d82ea7cd0e5d28182c0c214a64a368e50f38b9472cc908ee372ee2c0d5e?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffa23d82ea7cd0e5d28182c0c214a64a368e50f38b9472cc908ee372ee2c0d5e?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffa23d82ea7cd0e5d28182c0c214a64a368e50f38b9472cc908ee372ee2c0d5e?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffa23d82ea7cd0e5d28182c0c214a64a368e50f38b9472cc908ee372ee2c0d5e?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffa23d82ea7cd0e5d28182c0c214a64a368e50f38b9472cc908ee372ee2c0d5e?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffa23d82ea7cd0e5d28182c0c214a64a368e50f38b9472cc908ee372ee2c0d5e?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ffa23d82ea7cd0e5d28182c0c214a64a368e50f38b9472cc908ee372ee2c0d5e?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                      className="aspect-square w-[186px]"
                    />
                    <div className="mt-4">Top Mirrorless Cameras</div>
                    <div className="justify-center self-stretch px-14 py-1 font-semibold bg-white max-md:px-5">
                      Shop Now!
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 justify-center items-center p-2 text-sm tracking-normal leading-5 text-center whitespace-nowrap rounded border border-solid border-neutral-200 text-neutral-800">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8b32571044bc491366cc69aa07ddc3d13739f0f3e6a829238fc483911092e382?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b32571044bc491366cc69aa07ddc3d13739f0f3e6a829238fc483911092e382?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b32571044bc491366cc69aa07ddc3d13739f0f3e6a829238fc483911092e382?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b32571044bc491366cc69aa07ddc3d13739f0f3e6a829238fc483911092e382?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b32571044bc491366cc69aa07ddc3d13739f0f3e6a829238fc483911092e382?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b32571044bc491366cc69aa07ddc3d13739f0f3e6a829238fc483911092e382?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b32571044bc491366cc69aa07ddc3d13739f0f3e6a829238fc483911092e382?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b32571044bc491366cc69aa07ddc3d13739f0f3e6a829238fc483911092e382?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                      className="aspect-square w-[186px]"
                    />
                    <div className="mt-4">Projectors</div>
                    <div className="justify-center self-stretch px-12 py-1.5 font-semibold bg-white max-md:px-5">
                      From ₹9999
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-start py-2 rounded border border-solid border-neutral-200 max-md:hidden">
                    <div className="flex gap-0">
                      <div className="z-10 shrink-0 self-end mt-20 fill-white h-[88px] max-md:mt-10" />
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dfcf2e1f4b5a8d3b29fb6bd6751a737181bf1792e42b56bab11cba6f896eca41?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dfcf2e1f4b5a8d3b29fb6bd6751a737181bf1792e42b56bab11cba6f896eca41?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dfcf2e1f4b5a8d3b29fb6bd6751a737181bf1792e42b56bab11cba6f896eca41?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dfcf2e1f4b5a8d3b29fb6bd6751a737181bf1792e42b56bab11cba6f896eca41?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dfcf2e1f4b5a8d3b29fb6bd6751a737181bf1792e42b56bab11cba6f896eca41?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dfcf2e1f4b5a8d3b29fb6bd6751a737181bf1792e42b56bab11cba6f896eca41?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dfcf2e1f4b5a8d3b29fb6bd6751a737181bf1792e42b56bab11cba6f896eca41?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dfcf2e1f4b5a8d3b29fb6bd6751a737181bf1792e42b56bab11cba6f896eca41?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                        className="w-4 aspect-[0.09] max-md:hidden"
                      />
                    </div>
                    <div className="shrink-0 mt-8 h-5 bg-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[16%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center w-full bg-white max-md:mt-3">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cd188c9bb02376478d7c0000e73f58138f022b92f85060ef2f76d3fb4baee913?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd188c9bb02376478d7c0000e73f58138f022b92f85060ef2f76d3fb4baee913?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd188c9bb02376478d7c0000e73f58138f022b92f85060ef2f76d3fb4baee913?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd188c9bb02376478d7c0000e73f58138f022b92f85060ef2f76d3fb4baee913?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd188c9bb02376478d7c0000e73f58138f022b92f85060ef2f76d3fb4baee913?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd188c9bb02376478d7c0000e73f58138f022b92f85060ef2f76d3fb4baee913?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd188c9bb02376478d7c0000e73f58138f022b92f85060ef2f76d3fb4baee913?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd188c9bb02376478d7c0000e73f58138f022b92f85060ef2f76d3fb4baee913?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                className="w-full aspect-[0.65]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-2 w-full bg-white max-w-[1604px] max-md:max-w-full">
        <div className="flex flex-col justify-center pt-7 bg-white max-md:max-w-full">
          <div className="flex gap-5 justify-between mx-5 text-xl font-semibold tracking-normal leading-7 text-neutral-800 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
            <div className="flex-auto">Beauty, Food, Toys & more</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd7f843a5c61fd41f807dc361c8e09da0f7950dbfa6a21f36b5a95ae67fddc6f?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
              className="w-6 aspect-square"
            />
          </div>
          <div className="flex gap-4 pr-1 pb-3 pl-3 mt-7 bg-white max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col flex-1 justify-center items-center p-2 text-sm tracking-normal leading-5 text-center whitespace-nowrap rounded border border-solid border-neutral-200 text-neutral-800">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8afeb443f122f2b55e53546015111a56f981336f253f8f97691b3c797f5f1dc3?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8afeb443f122f2b55e53546015111a56f981336f253f8f97691b3c797f5f1dc3?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8afeb443f122f2b55e53546015111a56f981336f253f8f97691b3c797f5f1dc3?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8afeb443f122f2b55e53546015111a56f981336f253f8f97691b3c797f5f1dc3?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8afeb443f122f2b55e53546015111a56f981336f253f8f97691b3c797f5f1dc3?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8afeb443f122f2b55e53546015111a56f981336f253f8f97691b3c797f5f1dc3?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8afeb443f122f2b55e53546015111a56f981336f253f8f97691b3c797f5f1dc3?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8afeb443f122f2b55e53546015111a56f981336f253f8f97691b3c797f5f1dc3?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                className="aspect-square w-[186px]"
              />
              <div className="mt-4">Soft Toys</div>
              <div className="justify-center self-stretch px-12 py-1 font-semibold bg-white max-md:px-5">
                Upto 70% Off
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center p-2 text-sm tracking-normal leading-5 text-center whitespace-nowrap rounded border border-solid border-neutral-200 text-neutral-800">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7e28f6affe695d090afd90afbab277f7d64a46471050d85ed3284acfe63f852e?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e28f6affe695d090afd90afbab277f7d64a46471050d85ed3284acfe63f852e?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e28f6affe695d090afd90afbab277f7d64a46471050d85ed3284acfe63f852e?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e28f6affe695d090afd90afbab277f7d64a46471050d85ed3284acfe63f852e?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e28f6affe695d090afd90afbab277f7d64a46471050d85ed3284acfe63f852e?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e28f6affe695d090afd90afbab277f7d64a46471050d85ed3284acfe63f852e?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e28f6affe695d090afd90afbab277f7d64a46471050d85ed3284acfe63f852e?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e28f6affe695d090afd90afbab277f7d64a46471050d85ed3284acfe63f852e?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                className="aspect-square w-[186px]"
              />
              <div className="mt-4">Electric Cycle</div>
              <div className="justify-center self-stretch px-11 py-1 font-semibold bg-white max-md:px-5">
                Up to 40% Off
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center p-2 text-sm tracking-normal leading-5 text-center whitespace-nowrap rounded border border-solid border-neutral-200 text-neutral-800">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/12717b114e910996a7a5a8ab273a2662e720ca52ae21a6b6dd645d8840bdf872?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/12717b114e910996a7a5a8ab273a2662e720ca52ae21a6b6dd645d8840bdf872?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/12717b114e910996a7a5a8ab273a2662e720ca52ae21a6b6dd645d8840bdf872?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/12717b114e910996a7a5a8ab273a2662e720ca52ae21a6b6dd645d8840bdf872?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/12717b114e910996a7a5a8ab273a2662e720ca52ae21a6b6dd645d8840bdf872?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/12717b114e910996a7a5a8ab273a2662e720ca52ae21a6b6dd645d8840bdf872?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/12717b114e910996a7a5a8ab273a2662e720ca52ae21a6b6dd645d8840bdf872?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/12717b114e910996a7a5a8ab273a2662e720ca52ae21a6b6dd645d8840bdf872?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                className="aspect-square w-[186px]"
              />
              <div className="mt-4">Remote Control Toys</div>
              <div className="justify-center self-stretch px-11 py-1 font-semibold bg-white max-md:px-5">
                Up to 80% Off
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center p-2 text-sm tracking-normal leading-5 text-center whitespace-nowrap rounded border border-solid border-neutral-200 text-neutral-800">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/789cc2fcdf5cdc7231b789938bc9c0fa859ea8738573fe9ef5ef02e788eb6318?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/789cc2fcdf5cdc7231b789938bc9c0fa859ea8738573fe9ef5ef02e788eb6318?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/789cc2fcdf5cdc7231b789938bc9c0fa859ea8738573fe9ef5ef02e788eb6318?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/789cc2fcdf5cdc7231b789938bc9c0fa859ea8738573fe9ef5ef02e788eb6318?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/789cc2fcdf5cdc7231b789938bc9c0fa859ea8738573fe9ef5ef02e788eb6318?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/789cc2fcdf5cdc7231b789938bc9c0fa859ea8738573fe9ef5ef02e788eb6318?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/789cc2fcdf5cdc7231b789938bc9c0fa859ea8738573fe9ef5ef02e788eb6318?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/789cc2fcdf5cdc7231b789938bc9c0fa859ea8738573fe9ef5ef02e788eb6318?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                className="aspect-square w-[186px]"
              />
              <div className="mt-4">Non-Geared Cycles</div>
              <div className="justify-center self-stretch px-11 py-1 font-semibold bg-white max-md:px-5">
                Up to 40% Off
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center p-2 text-sm tracking-normal leading-5 text-center whitespace-nowrap rounded border border-solid border-neutral-200 text-neutral-800">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/62d83a11b6648384dd1bc73b04edddd3e0036f032cb11c895fc497d0bfd5e76e?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/62d83a11b6648384dd1bc73b04edddd3e0036f032cb11c895fc497d0bfd5e76e?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/62d83a11b6648384dd1bc73b04edddd3e0036f032cb11c895fc497d0bfd5e76e?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/62d83a11b6648384dd1bc73b04edddd3e0036f032cb11c895fc497d0bfd5e76e?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/62d83a11b6648384dd1bc73b04edddd3e0036f032cb11c895fc497d0bfd5e76e?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/62d83a11b6648384dd1bc73b04edddd3e0036f032cb11c895fc497d0bfd5e76e?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/62d83a11b6648384dd1bc73b04edddd3e0036f032cb11c895fc497d0bfd5e76e?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/62d83a11b6648384dd1bc73b04edddd3e0036f032cb11c895fc497d0bfd5e76e?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                className="aspect-square w-[186px]"
              />
              <div className="mt-4">Fiction Books</div>
              <div className="justify-center self-stretch px-12 py-1 mt-1.5 font-semibold bg-white max-md:px-5">
                Up to 70% off
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center p-2 text-sm tracking-normal leading-5 text-center whitespace-nowrap rounded border border-solid border-neutral-200 text-neutral-800">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0a5b8ca99cf197059c9ef63a487c182568f9e921b932c8ddcb4148cbb38a918b?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a5b8ca99cf197059c9ef63a487c182568f9e921b932c8ddcb4148cbb38a918b?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a5b8ca99cf197059c9ef63a487c182568f9e921b932c8ddcb4148cbb38a918b?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a5b8ca99cf197059c9ef63a487c182568f9e921b932c8ddcb4148cbb38a918b?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a5b8ca99cf197059c9ef63a487c182568f9e921b932c8ddcb4148cbb38a918b?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a5b8ca99cf197059c9ef63a487c182568f9e921b932c8ddcb4148cbb38a918b?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a5b8ca99cf197059c9ef63a487c182568f9e921b932c8ddcb4148cbb38a918b?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a5b8ca99cf197059c9ef63a487c182568f9e921b932c8ddcb4148cbb38a918b?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                className="aspect-square w-[186px]"
              />
              <div className="mt-4">String Instruments</div>
              <div className="justify-center self-stretch px-11 py-1 font-semibold bg-white max-md:px-5">
                Up to 70% Off
              </div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center p-2 text-sm tracking-normal leading-5 text-center whitespace-nowrap rounded border border-solid border-neutral-200 text-neutral-800">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d537ec6f00c190cb096c6a7d543aaef072b4aa2c7270761c6e9420fa85c23e74?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d537ec6f00c190cb096c6a7d543aaef072b4aa2c7270761c6e9420fa85c23e74?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d537ec6f00c190cb096c6a7d543aaef072b4aa2c7270761c6e9420fa85c23e74?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d537ec6f00c190cb096c6a7d543aaef072b4aa2c7270761c6e9420fa85c23e74?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d537ec6f00c190cb096c6a7d543aaef072b4aa2c7270761c6e9420fa85c23e74?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d537ec6f00c190cb096c6a7d543aaef072b4aa2c7270761c6e9420fa85c23e74?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d537ec6f00c190cb096c6a7d543aaef072b4aa2c7270761c6e9420fa85c23e74?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d537ec6f00c190cb096c6a7d543aaef072b4aa2c7270761c6e9420fa85c23e74?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                className="aspect-square w-[186px]"
              />
              <div className="mt-4">Gym Essentials</div>
              <div className="justify-center self-stretch px-14 py-1.5 font-semibold bg-white max-md:px-5">
                From ₹139
              </div>
            </div>
            <div className="flex flex-col justify-center py-2 rounded border border-solid basis-0 border-neutral-200">
              <div className="flex flex-col pl-2">
                <div className="flex overflow-hidden relative flex-col self-center pt-12 pb-4 pl-7 aspect-[0.37] w-[69px] max-md:pl-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a82e02289183fbd9a91e3c5da50f112f37e24d9aa40e88102eef569971b1fc35?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a82e02289183fbd9a91e3c5da50f112f37e24d9aa40e88102eef569971b1fc35?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a82e02289183fbd9a91e3c5da50f112f37e24d9aa40e88102eef569971b1fc35?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a82e02289183fbd9a91e3c5da50f112f37e24d9aa40e88102eef569971b1fc35?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a82e02289183fbd9a91e3c5da50f112f37e24d9aa40e88102eef569971b1fc35?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a82e02289183fbd9a91e3c5da50f112f37e24d9aa40e88102eef569971b1fc35?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a82e02289183fbd9a91e3c5da50f112f37e24d9aa40e88102eef569971b1fc35?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a82e02289183fbd9a91e3c5da50f112f37e24d9aa40e88102eef569971b1fc35?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="relative shrink-0 mt-8 fill-white h-[88px]" />
                </div>
                <div className="self-end mt-4 text-sm tracking-normal leading-5 text-center text-neutral-800">
                  Microphones
                </div>
              </div>
              <div className="justify-center py-1 pl-12 text-sm font-semibold tracking-normal leading-5 text-center bg-white aspect-[3.45] text-neutral-800 max-md:pl-5">
                Up to 70% off
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-4 w-full bg-white max-w-[1600px] text-neutral-800 max-md:max-w-full">
        <div className="flex flex-col justify-center pt-7 bg-white max-md:max-w-full">
          <div className="flex gap-5 justify-between mx-5 text-xl font-semibold tracking-normal leading-7 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
            <div className="flex-auto">Sports, Healthcare & more</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd7f843a5c61fd41f807dc361c8e09da0f7950dbfa6a21f36b5a95ae67fddc6f?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
              className="w-6 aspect-square"
            />
          </div>
          <div className="flex gap-4 justify-center pr-20 pb-3 pl-3 mt-7 text-sm tracking-normal leading-5 text-center whitespace-nowrap bg-white max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
            <div className="flex flex-col flex-1 items-center px-2 pt-12 pb-2 rounded border border-solid border-neutral-200">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                className="mt-12 aspect-[1.02] blur-[0.5px] w-[62px] max-md:mt-10"
              />
              <div className="mt-14 max-md:mt-10">Coffee Powder</div>
              <div className="justify-center self-stretch px-12 py-1 mt-1.5 font-semibold bg-white max-md:px-5">
                Upto 80% Off
              </div>
            </div>
            <div className="flex flex-col flex-1 px-2 pt-12 pb-2 rounded border border-solid border-neutral-200">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                className="self-center mt-12 aspect-[1.02] blur-[0.5px] w-[62px] max-md:mt-10"
              />
              <div className="mt-14 max-md:mt-10">
                Treadmill, Exercise Bikes &{" "}
              </div>
              <div className="justify-center px-11 py-1 font-semibold bg-white max-md:px-5">
                Up to 70% Off
              </div>
            </div>
            <div className="flex flex-col flex-1 items-center px-2 pt-12 pb-2 rounded border border-solid border-neutral-200">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                className="mt-12 aspect-[1.02] blur-[0.5px] w-[62px] max-md:mt-10"
              />
              <div className="mt-14 max-md:mt-10">Food Spreads</div>
              <div className="justify-center self-stretch px-12 py-1 font-semibold bg-white max-md:px-5">
                Upto 75% Off
              </div>
            </div>
            <div className="flex flex-col flex-1 items-center px-2 pt-12 pb-2 rounded border border-solid border-neutral-200">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                className="mt-12 aspect-[1.02] blur-[0.5px] w-[62px] max-md:mt-10"
              />
              <div className="mt-14 max-md:mt-10">Musical Keyboards</div>
              <div className="justify-center self-stretch px-12 py-1 font-semibold bg-white max-md:px-5">
                up to 70% off
              </div>
            </div>
            <div className="flex flex-col flex-1 items-center px-2 pt-12 pb-2 rounded border border-solid border-neutral-200">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                className="mt-12 aspect-[1.02] blur-[0.5px] w-[62px] max-md:mt-10"
              />
              <div className="mt-14 max-md:mt-10">Self Help Books</div>
              <div className="justify-center self-stretch px-14 py-1.5 font-semibold bg-white max-md:px-5">
                Min 20% off
              </div>
            </div>
            <div className="flex flex-col flex-1 items-center px-2 pt-12 pb-2 rounded border border-solid border-neutral-200">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/322124660c545820442ce6ad7686696d11557061b800e6dc8515bf3ec7121597?apiKey=309691860c1e4d7a9eeaec9b7fdaac05&"
                className="mt-12 aspect-[1.02] blur-[0.5px] w-[62px] max-md:mt-10"
              />
              <div className="mt-14 max-md:mt-10">Honey</div>
              <div className="justify-center self-stretch px-12 py-1 font-semibold bg-white max-md:px-5">
                Upto 75% Off
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flipkart;


