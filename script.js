const root = document.getElementById('root');
root.innerHTML = `
  <main class="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white px-6 py-16 font-sans">
    <div class="max-w-7xl mx-auto space-y-24 relative">
      <!-- Logo Section -->
      <div class="absolute top-4 left-4">
        <img src="./xpplus-logo transparent final.png" alt="XPPLUS Logo" class="h-12">
      </div>
      <!-- Content Sections -->
      <section class="text-center space-y-8">
        <h1 class="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">XPPLUS (XP+)</h1>
        <p class="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          The Official Currency of the XPPLUS Game Store. Built for gamers, creators & digital rebels. Powered by Polygon. Backed by real value.
        </p>
        <div class="flex justify-center gap-6 flex-wrap">
          <a href="/XPPLUS_Whitepaper.pdf" class="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg transition">📄 Whitepaper</a>
          <a href="https://www.sushi.com/swap?chainId=137&token0=POL&token1=0xB12271D2A7deFd5Ae7088bc929Ce4235dE71516F" class="bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90 px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg transition" target="_blank" rel="noopener noreferrer">🛒 Buy XP+</a>
        </div>
      </section>
      <!-- Other Sections -->
      <section class="text-center">
        <h2 class="text-4xl font-bold mb-10">XP+ Wallets</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          ${[
            ['Owner', '0xcE9134349a7EE91B8fC8ACBCc2f2ad613eF1E712'],
            ['Team', '0x85Ac7cDeb18AE4951f52D28d76d5f86aC79867DB'],
            ['Marketing', '0xB4acC5506Dc7029d34055a6Dd4ce1f079979F254'],
            ['Airdrop', '0xeBA8d8f4D948F691ed19163d061758324Fd837e0'],
            ['Liquidity', '0xc53a913463Bf3d8248B73633E1d3d8C77CFD3E57'],
            ['Treasury', '0xdcb8d17904aA110d0fB2306456141c754E3257c3'],
          ].map(([label, address]) => `
            <div class="bg-gray-800 p-4 rounded-xl shadow border border-purple-700">
              <h3 class="font-bold text-white text-lg mb-2">${label} Wallet</h3>
              <code class="block text-sm text-purple-300 break-all">${address}</code>
            </div>
          `).join('')}
        </div>
      </section>
      <section class="text-center space-y-4">
        <h2 class="text-3xl font-bold">🚀 XP+ is Live on Polygon</h2>
        <p class="text-lg text-gray-300">
          Contract Address:
          <code class="bg-gray-800 px-3 py-1 rounded-md inline-block ml-2">0xB12271D2A7deFd5Ae7088bc929Ce4235dE71516F</code>
        </p>
        <p class="text-lg text-green-400 font-semibold">XPPLUS is backed by liquidity and actively traded on SushiSwap</p>
      </section>
      <section id="buy" class="text-center space-y-8">
        <h2 class="text-3xl font-bold">🎮 How to Get XP+</h2>
        <ol class="list-decimal list-inside space-y-3 text-left text-lg text-gray-300 max-w-xl mx-auto">
          <li>Connect your wallet to Polygon</li>
          <li>Go to <a href="https://www.sushi.com/swap?chainId=137&token0=POL&token1=0xB12271D2A7deFd5Ae7088bc929Ce4235dE71516F" class="underline text-pink-400 hover:text-pink-300" target="_blank" rel="noopener noreferrer">SushiSwap</a></li>
          <li>Swap MATIC for XPPLUS using the token address</li>
          <li>Use XP+ in games, staking, and purchases</li>
        </ol>
      </section>
      <footer class="text-center text-sm text-gray-500 pt-16 border-t border-gray-800 mt-12">
        XPPLUS © 2025. Powering the Game Economy. <br /> Contact: <strong class="text-white">admin@xpplus.app</strong>
      </footer>
    </div>
  </main>
`;
