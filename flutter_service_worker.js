'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "335354016351097888331c46f22b8f8d",
"assets/AssetManifest.bin.json": "5286ed56dc453b882ce39a6db31bc28a",
"assets/AssetManifest.json": "ce8d00a4e1109b0898d353a4f6fc6ca1",
"assets/assets/audio/1.mp3": "7bed7ff12adac3474e844863d900cd43",
"assets/assets/audio/10.mp3": "328e33a2daacc9ba5e2187e296ec5d3b",
"assets/assets/audio/100.mp3": "e2132166102dfe7441d27995b3d0bdb5",
"assets/assets/audio/101.mp3": "287d9813f7021d4ba7fc9a2fabd525c5",
"assets/assets/audio/102.mp3": "b974d49bb726b17fef9f441bee9c4ef7",
"assets/assets/audio/103.mp3": "6031d013756d500539404d64bd3a65bd",
"assets/assets/audio/104.mp3": "d220448900ab41ce8374e4b54449eae2",
"assets/assets/audio/105.mp3": "31e58b4723224cc2ec9e4a2f654a414a",
"assets/assets/audio/106.mp3": "d87c921a1f2f4495337e11480cef5ea7",
"assets/assets/audio/107.mp3": "9b52c7f002e436a355d9d6ce1f2179ea",
"assets/assets/audio/108.mp3": "939c2dc0945427dce89bff3247049521",
"assets/assets/audio/109.mp3": "62269d8453fd6b6e35ff1ccd7b73521d",
"assets/assets/audio/11.mp3": "10f90126a1c367a3cb3cbb97a53c922f",
"assets/assets/audio/110.mp3": "6c9da56f6b818dac22a2be4d027e5a05",
"assets/assets/audio/111.mp3": "7db0e3339d6e0126066a34f38c0f7066",
"assets/assets/audio/112.mp3": "dcb6eb5aabfcfb4d7164d46c3bd4f681",
"assets/assets/audio/113.mp3": "adbd15c144df0a272567a731b2c263d0",
"assets/assets/audio/114.mp3": "c1b5ccfd566b57f0e30366327a06f433",
"assets/assets/audio/115.mp3": "aa9d226d8957b22b58082cba79f8f593",
"assets/assets/audio/116.mp3": "0a61965bd601a770056a99a691f679d9",
"assets/assets/audio/117.mp3": "8f465538434fdc498f5b52b1b5a1c51f",
"assets/assets/audio/118.mp3": "489fb19ffcf964694ea913da346ec477",
"assets/assets/audio/119.mp3": "0544abcfbbc847c93fc6d74cc3e61697",
"assets/assets/audio/12.mp3": "ebc7cf94fec3bdc4e6866ae37d50050d",
"assets/assets/audio/120.mp3": "67eb3b203a4d73b1c1aeae3b4737cb48",
"assets/assets/audio/121.mp3": "83949c7328e619ef824d6b05bfd9764c",
"assets/assets/audio/122.mp3": "772700ab8d5da62f6783b3b70d2ccb75",
"assets/assets/audio/123.mp3": "132d0bcae48505ebdf2d6c465f0e300f",
"assets/assets/audio/124.mp3": "53ea0f64167bfdc2913acf5ad3f4e42d",
"assets/assets/audio/125.mp3": "7a359d5519776c6684cca8ad2ead572c",
"assets/assets/audio/126.mp3": "8d66f185b8b10f171950988fafa0bd7a",
"assets/assets/audio/127.mp3": "09d3658cf362265cf8dcf7d389b86371",
"assets/assets/audio/128.mp3": "be08864e15749e9ded33b7c8b370879f",
"assets/assets/audio/129.mp3": "1676ee7a5576da6c104048399171f41a",
"assets/assets/audio/13.mp3": "fbd2277debd17abf9db80b985e656065",
"assets/assets/audio/130.mp3": "66b3e493e1d049bcbb92cabde05e1146",
"assets/assets/audio/131.mp3": "5d94e338bb0c7b6c79e8678b1ff458a3",
"assets/assets/audio/132.mp3": "1e4b1523b44a2af5e7d12c0ea36e1e2b",
"assets/assets/audio/133.mp3": "90436ecfc0d70c715ee7716066c8fdfb",
"assets/assets/audio/134.mp3": "ee167497ec6ddb2bbec378ead59c0fdf",
"assets/assets/audio/135.mp3": "f4d999f7899c454423e010aa11816998",
"assets/assets/audio/136.mp3": "547e4d404da74fa395dbf0d298ac8ff3",
"assets/assets/audio/137.mp3": "5e34de257cf0658d3878c62ae1f1c312",
"assets/assets/audio/138.mp3": "2a4d25fe00021db5e499ec1163a820cb",
"assets/assets/audio/139.mp3": "16850cd2396e150194abdb19ac0149d7",
"assets/assets/audio/14.mp3": "0ecf6792bf2bb8e16bcd7a11d989d34b",
"assets/assets/audio/140.mp3": "fe2ad90fe4f2e7ae2e50e42cea8165a5",
"assets/assets/audio/141.mp3": "634f2d7f95f86be25c0ad17333662a33",
"assets/assets/audio/142.mp3": "a93c9ef1b4fdc75bd1680f1e0eee2625",
"assets/assets/audio/143.mp3": "82fdfcd1938308a68c5674aa11e16b94",
"assets/assets/audio/144.mp3": "8cf327800a6888876b4a16f8161f7e80",
"assets/assets/audio/145.mp3": "837b0df8fec1156f8cb80b1c3317bdfd",
"assets/assets/audio/146.mp3": "50f1063f92cf2ab54183d99cd35a60a9",
"assets/assets/audio/147.mp3": "eb9637e08e2da141289f57280b5bcd91",
"assets/assets/audio/148.mp3": "c11bd2b94ee30c6874f652f25097547f",
"assets/assets/audio/149.mp3": "e660262e0d0fe2a31609ee5b77fe452f",
"assets/assets/audio/15.mp3": "bf4ac86ff21fb9de4aa91b040c47e6ab",
"assets/assets/audio/150.mp3": "cd90fccc8653b79fdd1b5ccad57b4e74",
"assets/assets/audio/151.mp3": "9f25cd6e405eb974323cd20f235fb456",
"assets/assets/audio/152.mp3": "eb824eef300709ae3642e7a0a5db6e99",
"assets/assets/audio/154.mp3": "86e9c5e4cc5fef446ef83b90272487cd",
"assets/assets/audio/155.mp3": "fcf1d7c6626cc374c2cc00abdec17078",
"assets/assets/audio/156.mp3": "3415bcb427ed8bf91c98a48e896c1649",
"assets/assets/audio/157.mp3": "379e71fc7e4920d93cb02064ef504f2d",
"assets/assets/audio/158.mp3": "feb1429e526afed87aaf767d89d62fc8",
"assets/assets/audio/159.mp3": "846149a41a935c3f559ec713e2a3395a",
"assets/assets/audio/16.mp3": "b011ed7ba5a68a1eccc665167234e89c",
"assets/assets/audio/160.mp3": "058297270014f6ca787937bbd8e9dbff",
"assets/assets/audio/161.mp3": "89725adcc3855b9fa0005565aabedbce",
"assets/assets/audio/162.mp3": "e7b37f647c3decd73090b13b74e16c14",
"assets/assets/audio/163.mp3": "92ed9ba103cae294be4ef5702b2491a2",
"assets/assets/audio/164.mp3": "45a43632f9c7b85b2b0f16a903680c0c",
"assets/assets/audio/165.mp3": "be45ebcf7b9128b4514f926f17aa3742",
"assets/assets/audio/166.mp3": "896919a0699ea205ff2d4522c7a24a02",
"assets/assets/audio/167.mp3": "3d29a9595eae87fd8baa1c5717fcc57b",
"assets/assets/audio/168.mp3": "3a061228b0694f8c7ba535dfa92dbec6",
"assets/assets/audio/169.mp3": "116d0b9c18a33751a05ed64e3c14d7bf",
"assets/assets/audio/17.mp3": "c29ab0da00f1535cfcac88f2575f6d9c",
"assets/assets/audio/170.mp3": "f8841dd1850e8421f5797372f27946a6",
"assets/assets/audio/171.mp3": "cbb9fdd403bcacf0d1942bb0cbd9d620",
"assets/assets/audio/172.mp3": "ade7292792294b8e1db510429d0665ee",
"assets/assets/audio/173.mp3": "31c1961dea14ec73f57aff17de2f99e4",
"assets/assets/audio/174.mp3": "c3515167204d2ffe263c406c0798734a",
"assets/assets/audio/175.mp3": "4672864e40f245e79918f1c1137a7e00",
"assets/assets/audio/176.mp3": "e34a2e3fb068c31aa5f0530255c1b9dc",
"assets/assets/audio/177.mp3": "e575a954367c835167c4f4abc71fbe2c",
"assets/assets/audio/178.mp3": "b7130c0a217b8c40ec6cc1c294a5b6b9",
"assets/assets/audio/179.mp3": "189c05f74a0bdf2e2d7b36972e5cac0b",
"assets/assets/audio/18.mp3": "f4b4f1bb77c5cffc1f3e97b6e6ce5a25",
"assets/assets/audio/180.mp3": "5e6bcace1c0fbe294ce25c2cbfb79990",
"assets/assets/audio/181.mp3": "76a8586d451578d8611ea7eb6ab10d3c",
"assets/assets/audio/182.mp3": "8a569f4b2dea888a5b67a16d8c72cdc1",
"assets/assets/audio/183.mp3": "2aae40e03d82ac7be746178669c4c45f",
"assets/assets/audio/184.mp3": "747172826ffdfe8765054516e0898ed8",
"assets/assets/audio/185.mp3": "e7cb8a73a7cfdfa1ca3b894bca3da132",
"assets/assets/audio/186.mp3": "78863be434afb0a37cc0869bab9f60de",
"assets/assets/audio/187.mp3": "48f00026091690e07a41a7ef16db852e",
"assets/assets/audio/188.mp3": "cb3a46327d63f7415e6b43c98648676e",
"assets/assets/audio/189.mp3": "bca94c8668091855851c8fe43dedafda",
"assets/assets/audio/19.mp3": "ef2c9ed0a5eeabe44bc15eca539f4e1e",
"assets/assets/audio/190.mp3": "7318836b576685c989ee047a5060217d",
"assets/assets/audio/191.mp3": "f9ab5d0b72b63a16695f64293c5a799d",
"assets/assets/audio/192.mp3": "a812bf3e1cab9c0436c78367d31e8527",
"assets/assets/audio/193.mp3": "21e3c78baa0eeecd845e300c744aa2d6",
"assets/assets/audio/194.mp3": "9fe3ff48ccfdd9a16ef3ebf2e5bc1e0d",
"assets/assets/audio/195.mp3": "96a420e44204000cde0529aff05ba084",
"assets/assets/audio/196.mp3": "3c7bc4500aeff1f6a35b19e20942734b",
"assets/assets/audio/197.mp3": "f7f1732afdbfbd388a11f797adaec6a4",
"assets/assets/audio/198.mp3": "6b05e9df0b17f48df44cef4ab66e7454",
"assets/assets/audio/199.mp3": "6bfb74b7512e84c067bd854dd17dd264",
"assets/assets/audio/2.mp3": "ef0d4cf272b55427e73b8f276e8c54d2",
"assets/assets/audio/20.mp3": "bab4e6f66c0e26f23cba5e60a95b42aa",
"assets/assets/audio/200.mp3": "129c4e07570c8b886c9ec8dd5593e6e7",
"assets/assets/audio/201.mp3": "9f80fced7969cd0c48c0d64fbcf4eff2",
"assets/assets/audio/202.mp3": "6afcfd0b5009e9372755de4177f0b1f1",
"assets/assets/audio/203.mp3": "e117998d8ac4b44fd1de9fb760945cc2",
"assets/assets/audio/204.mp3": "f062d329f3d4273da32f65d462cf96ab",
"assets/assets/audio/205.mp3": "7afb79d495a02f7d747e2841da6ce0c0",
"assets/assets/audio/206.mp3": "357f26a5be89e7e13aa34d140e26b90d",
"assets/assets/audio/207.mp3": "9e472af8aac23dede59212817bdbc195",
"assets/assets/audio/208.mp3": "4e014583240086bcc980bfe9be9c069b",
"assets/assets/audio/209.mp3": "1e1d0222e7d7ab0d0f33728a6bb85fed",
"assets/assets/audio/21.mp3": "17318bd6b1106d2a42513d15595b428e",
"assets/assets/audio/210.mp3": "606cc9822e2fe4632232eb6586c44e3e",
"assets/assets/audio/211.mp3": "de06221cc53d96de8779cdfc4b3ec733",
"assets/assets/audio/212.mp3": "e664fa64eb6c82fe0e58ef73ee008b60",
"assets/assets/audio/213.mp3": "4c31b39cbd4a69740efdb0b8ccd81771",
"assets/assets/audio/214.mp3": "813ff5be01941bfb46597350fbb05198",
"assets/assets/audio/215.mp3": "54dc75ace42fed16914b2d87aaf8546b",
"assets/assets/audio/216.mp3": "80f1964c253a1f44ab1fb44457a48121",
"assets/assets/audio/217.mp3": "986b57a1a0899b9d1c9fd21ad9bcde80",
"assets/assets/audio/218.mp3": "a4116e50c866a14a297e772af03e170e",
"assets/assets/audio/219.mp3": "af29573ceea696ebe059d2f8199b843d",
"assets/assets/audio/22.mp3": "b117405a6ea746b588d1ce4d3eb1ef1b",
"assets/assets/audio/220.mp3": "fa521c322499e8e6b180abb93fd949c6",
"assets/assets/audio/221.mp3": "08c6ecef30f3e64938bb78359bf0ae58",
"assets/assets/audio/222.mp3": "944231c0a226538d9441ad1cc81df4a6",
"assets/assets/audio/223.mp3": "aa6c088bcf0bebac3a8e79fa175667c5",
"assets/assets/audio/224.mp3": "eb1129530f714b80627fbb5715efe2df",
"assets/assets/audio/225.mp3": "bab874000e58716cff9ec24348ab54a7",
"assets/assets/audio/226.mp3": "164f2207ab7aa0019a1d71dee5d520d2",
"assets/assets/audio/227.mp3": "77b56b49ee740df0876fe2288e47e6aa",
"assets/assets/audio/228.mp3": "43caa2c67b82567786d61dc6dfd39f01",
"assets/assets/audio/229.mp3": "0713dc6a2782b92e0099bf2c04859320",
"assets/assets/audio/23.mp3": "8885632430f3a4046c3f1f6376fc4887",
"assets/assets/audio/230.mp3": "0b500290d8d9fe4f281fee9f50d9576a",
"assets/assets/audio/231.mp3": "3a8232deea134bdc096ed9b795c40ef8",
"assets/assets/audio/232.mp3": "c2c22ab7eba7779431f72d33a93e687c",
"assets/assets/audio/233.mp3": "04ad5ca29aa90f1c82f878e28c8dfcd5",
"assets/assets/audio/234.mp3": "88ae4e1f3ea3e4adb49493d1330b27fd",
"assets/assets/audio/235.mp3": "7b1992815e5d85bbbe40bef49e7b9c31",
"assets/assets/audio/236.mp3": "0592fc19a6a621eed5890772a83ddc7c",
"assets/assets/audio/237.mp3": "fdb699300bacd7b18d821476a05e1dd0",
"assets/assets/audio/238.mp3": "24aebd68f3f2deb1e423d8cd0a45ea17",
"assets/assets/audio/239.mp3": "5f0bbbde7e04951151db667f46d65417",
"assets/assets/audio/24.mp3": "128badad69b49f39af6caa7cc82c552e",
"assets/assets/audio/240.mp3": "eb39569dbbfe24c69ffcdb1798ddfa15",
"assets/assets/audio/241.mp3": "2f74ba7f2e16460a82909c60f29c5ece",
"assets/assets/audio/242.mp3": "0c7f898d7f11aadb63f86e83b563b60b",
"assets/assets/audio/243.mp3": "16f08c187fa062bc0bacd4689f3a7eb9",
"assets/assets/audio/244.mp3": "3ff4e7ac144c31dd9fe4ce674b954407",
"assets/assets/audio/245.mp3": "68228de6e2087b6ebe64ec167d29ef47",
"assets/assets/audio/246.mp3": "de554d810b246d98ebdf104f2264a6ca",
"assets/assets/audio/247.mp3": "c3dff56b1c8dd2cc465e6f28d41fa185",
"assets/assets/audio/248.mp3": "9b30493b59ff757e1fb352d058013c2a",
"assets/assets/audio/249.mp3": "d09b93869e0ea060d4ee38870cab6f4d",
"assets/assets/audio/25.mp3": "5fd150652c444335e668a553a3fcc089",
"assets/assets/audio/250.mp3": "08d3431188718d5e81f24b1e3ee4f56a",
"assets/assets/audio/251.mp3": "f3d16662bdfec80cec9cdf5894d67f1d",
"assets/assets/audio/252.mp3": "33ce2e8dcf8d5911c9352a3d0e149292",
"assets/assets/audio/253.mp3": "fc96b050be5cc345f8d5cbc03b6becc8",
"assets/assets/audio/254.mp3": "3a3a6887ac5a7961bc8c28655db65b38",
"assets/assets/audio/255.mp3": "ed4d8393b69383bdfb3864adf219bfcc",
"assets/assets/audio/256.mp3": "ac59444cb57bc33b2dc2cd2f44fbdf9a",
"assets/assets/audio/257.mp3": "8e2df6b6416ecc5b618dae99473ce528",
"assets/assets/audio/258.mp3": "a0d9390c822a5e486bf44c91cfba17d0",
"assets/assets/audio/259.mp3": "42568664cf7613cc9ba392093db01ad3",
"assets/assets/audio/26.mp3": "5be8b73a1efef2b05b561bf44b118059",
"assets/assets/audio/260.mp3": "02d54eda2684ad43ac729f7d1b942432",
"assets/assets/audio/261.mp3": "74644bc4296ab195b6dd4ede4f2ff6ea",
"assets/assets/audio/262.mp3": "53ac953e035d4807cc8bccb50617ad7d",
"assets/assets/audio/263.mp3": "56871020b7af5dda010cf827368b0657",
"assets/assets/audio/264.mp3": "6beb7bf7b22f50ac2842ff3f83c62437",
"assets/assets/audio/265.mp3": "da144226e22c7f89ec17bb0d06b15440",
"assets/assets/audio/266.mp3": "f7c680760e9a79b7cadd9b05283bd3f0",
"assets/assets/audio/267.mp3": "5d111cee1dc4c40072a90ac6e7c431a1",
"assets/assets/audio/27.mp3": "a25be30d55ac174979a5cba9e2cfde7f",
"assets/assets/audio/28.mp3": "b800903e40239a2537164771d31e45d6",
"assets/assets/audio/29.mp3": "1a639e0ec644f47f067b941f73c8caf7",
"assets/assets/audio/3.mp3": "ab904632af47008935cea8cc2c323e78",
"assets/assets/audio/30.mp3": "1864c9bbf8cd4880c072eb409c3a818d",
"assets/assets/audio/31.mp3": "3602a56ae003308d746099e6e5d224e6",
"assets/assets/audio/32.mp3": "6208c0ac2b512bac277672160000864a",
"assets/assets/audio/33.mp3": "bb9d997f7133fd12e0bcfa0d9a8fba82",
"assets/assets/audio/34.mp3": "8b29535a9d1ce855d6a224cecb31a670",
"assets/assets/audio/35.mp3": "fe017f68dcbb9fafa6a4ad19f6ee544c",
"assets/assets/audio/36.mp3": "0ef16d944ddea70e91acc939e4d83d18",
"assets/assets/audio/37.mp3": "00efb7d37c5013584ee89d267e887c1a",
"assets/assets/audio/38.mp3": "b8c28df085952eaecad62f47c47feada",
"assets/assets/audio/39.mp3": "cb84eb8ca657d3017551b4f8a4fe2da0",
"assets/assets/audio/4.mp3": "afcdd09e43aa8922cb1fd5c98a2cc66f",
"assets/assets/audio/40.mp3": "b2185335b1be52aec92fe2759ed623e6",
"assets/assets/audio/41.mp3": "afdb8b7eb1fb84fd1631e41c51092442",
"assets/assets/audio/42.mp3": "b638c9483fe3ccbe1e76cd15b821d0a6",
"assets/assets/audio/43.mp3": "fdfecfd8b8f3b5ccba216358a813d2ba",
"assets/assets/audio/44.mp3": "e2b09122a4a7e077ea4c4b75c05dcc84",
"assets/assets/audio/45.mp3": "9dd9a0bb6fbf111f731ea547a6595de9",
"assets/assets/audio/46.mp3": "fcac718e079ae9fe4f62c084b225772c",
"assets/assets/audio/47.mp3": "e991194535c00efd4d91bee696769163",
"assets/assets/audio/48.mp3": "fdd78a7ec33a93e4ccd14eb5d31c877a",
"assets/assets/audio/49.mp3": "543fcfdbea561ebaf279a782b94d5314",
"assets/assets/audio/5.mp3": "726036fb1443ef8c60d633747053c6f0",
"assets/assets/audio/50.mp3": "64a20d8a1b534b3bc39a13874673ec08",
"assets/assets/audio/51.mp3": "602cf27516b67262358fc773b908bb92",
"assets/assets/audio/52.mp3": "c5f40bab3160941aea82bd7e45a6cdf0",
"assets/assets/audio/53.mp3": "b661ed253a75d1e7b99996e61a32f3bf",
"assets/assets/audio/54.mp3": "46df06d0f814520fe5fa13cb9cadf8f0",
"assets/assets/audio/55.mp3": "1b305b67612271ea29ab6f456473630a",
"assets/assets/audio/56.mp3": "a37b5beb104b66d13f8f9506b06e3536",
"assets/assets/audio/57.mp3": "5e34bb125bd7d57acd8e5d6ca921bab5",
"assets/assets/audio/58.mp3": "c12ebdff17d2406cc1c98f4e500fdbc9",
"assets/assets/audio/59.mp3": "d872436ab64e8628911977a29151c410",
"assets/assets/audio/6.mp3": "b5b8a0a221c3b08a698f25189e8172b8",
"assets/assets/audio/60.mp3": "cc141a498d6eb2d37b777c8541453944",
"assets/assets/audio/61.mp3": "0336941feef58b04fefa431b4f1f754e",
"assets/assets/audio/62.mp3": "171bee437d6a3b16c16b0d313b1d8b79",
"assets/assets/audio/63.mp3": "78582a42336531c0fe4de983a73c13fe",
"assets/assets/audio/64.mp3": "81a141528b83febea337b6abb69f9a32",
"assets/assets/audio/65.mp3": "91dc14cf0396a67e1d0104853bca68c6",
"assets/assets/audio/66.mp3": "b5e3d47143bc8fe097fd9d622630dd00",
"assets/assets/audio/67.mp3": "3aef365309a4f43517a1549af1697bd1",
"assets/assets/audio/68.mp3": "2514969f618db73c8236f0c9fc1fa738",
"assets/assets/audio/69.mp3": "9de25dd752f2fc154cc3350a2eefb6fd",
"assets/assets/audio/7.mp3": "6af99ed043e4d2141c12a17b88da0049",
"assets/assets/audio/70.mp3": "8768ab8690ab12183685d495b4056777",
"assets/assets/audio/71.mp3": "e43c6bc238b5868a38e116e839759fcf",
"assets/assets/audio/72.mp3": "2dd5bdb789321911969abccfcd65957f",
"assets/assets/audio/73.mp3": "8d7fa70076615cb5895f67c3ec4fc10b",
"assets/assets/audio/74.mp3": "33f3ca9e45175141727a749daa16018b",
"assets/assets/audio/75.mp3": "184fde5ceb249b88f11f8675397520ab",
"assets/assets/audio/76.mp3": "0190cbec4e4ac40439750094ce1f2829",
"assets/assets/audio/77.mp3": "fdbe7990f8cabaf87d34c7215bfb96d1",
"assets/assets/audio/78.mp3": "2f28e62101e6e6fa68ecbdcbdc58c0f9",
"assets/assets/audio/79.mp3": "7a942c5160b7cfed3736d7c2ac3f0ed1",
"assets/assets/audio/8.mp3": "1bfa88dbf50cebc18c44ce7349f33bd5",
"assets/assets/audio/80.mp3": "b9736e3a08fea42e50aa607fdb71829d",
"assets/assets/audio/81.mp3": "ba0f2731daeeca27987733324aa444d7",
"assets/assets/audio/82.mp3": "8eacf9fb6d7716c06bebf70d5e2190e2",
"assets/assets/audio/83.mp3": "895e1d08b90d214380c151c6bc31f937",
"assets/assets/audio/84.mp3": "41469c50810e24f7016ea7961c64ec1e",
"assets/assets/audio/85.mp3": "4c7ebfda41165d384536b55c78b1d1f5",
"assets/assets/audio/86.mp3": "c50b7b5282865995e84ca71c426a7e19",
"assets/assets/audio/87.mp3": "1dab0eee3b3e1d6614425a9505dc1839",
"assets/assets/audio/88.mp3": "f27b2b5382bbb88b49cf55e78358006b",
"assets/assets/audio/89.mp3": "57e0059a8aa882c0278b72f7ac48f599",
"assets/assets/audio/9.mp3": "d09f19047d073f512e4180e44ee8e186",
"assets/assets/audio/90.mp3": "99bee0a8df0ce6ffa5237d7565de46a3",
"assets/assets/audio/91.mp3": "3b95c8c60991d41aa9ce1a74283b3f8b",
"assets/assets/audio/92.mp3": "144a4bebb8de2a0abd4783214ec3b0cd",
"assets/assets/audio/93.mp3": "9169c3e6192567c6dfa5b349a299d87f",
"assets/assets/audio/94.mp3": "892651c8a3f1d7a56dd23f79bd22c788",
"assets/assets/audio/95.mp3": "5d1ff2164ca3cbd9b68418975eec0b93",
"assets/assets/audio/96.mp3": "ff9b3a902a5298f08524165ac415620e",
"assets/assets/audio/97.mp3": "8be9abbd2508d300e3229dcdda9e3dba",
"assets/assets/audio/98.mp3": "4ed684836a50ae73d7a3bcbd5f4810c0",
"assets/assets/audio/99.mp3": "b89340be4b732cd4cfb2ef008b4f08e7",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_002.mp3": "7890e1aa8e386374e80b9265024c79a4",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_003.mp3": "83e3c0d11f605e154be99452b47d2cce",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_004.mp3": "28d9a96c490df1845dbdd6dcb7875997",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_005.mp3": "33466be4e7b544644f1a2fc15772e26f",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_006.mp3": "fe69c1efd8db7ae932cff634b61e152c",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_007.mp3": "9e1c5c1c8bb431aa3f89bccf00d49f4b",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_008.mp3": "80b39723aad46095e5bc17f2a7360976",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_009.mp3": "69901b93d7ce4822450f91bb27680e33",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_010.mp3": "a1dccccf55499da9ae35360fd4a66b18",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_011.mp3": "0ac68561e854d9ec7838c330776614f9",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_012.mp3": "83aab59a2d9a6db658a7c15f1c2f6431",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_013.mp3": "0743d51c8c6a53cde58b11a21d31ae13",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_014.mp3": "4906d1e2af486f13941bbc4602550913",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_015.mp3": "934de8e4c50d0a08e7ec911098d920f4",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_016.mp3": "a337ae0bffc913b302e90949a459221d",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_017.mp3": "7e7279a28c310aa3d545a4fe5653efd5",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_018.mp3": "6f7d33139d1d60f1aff38c9300975959",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_019.mp3": "8175cdfb8bb984f5666d6db2a217b4b5",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_020.mp3": "d5400c00cc083148e3d14ec0f5479514",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_021.mp3": "4178f78aed98e53dcbe7c21a8c33e446",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_022.mp3": "44c7ea8ac5457c964812e3d595ec2dd8",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_023.mp3": "5ab6eeb53268b4d29749d8b55a51ec60",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_024.mp3": "52deba7ffc32499c66d23e69232f8e13",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_025.mp3": "884370358f60dcdc22a2913068404fa0",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_026.mp3": "b8e3d732a19eeffd1499dc4e8a982dcc",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_027.mp3": "7c60eb6e47b71fab37bd6e807d585145",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_028.mp3": "e7cc9b3eeaaf3ceb545efb8fd682e169",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_029.mp3": "83b17ab4e2360eb21bfed8aec55fce7a",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_030.mp3": "0f828c0d322c9d06113132a8eac6d878",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_031.mp3": "5d2def7067079b317c134c5b1de12d3d",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_032.mp3": "50c773505bce075d9732fdffc4720695",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_033.mp3": "cbeb420b97d712aa69dbf5f3bb40eae8",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_034.mp3": "e2cf05dd4345020e09a992c276917f9b",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_035.mp3": "f79b2ac23abaf4c6953b80961381f161",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_036.mp3": "7fc09b3d406adbd3e1b132887d62d80f",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_037.mp3": "fe7f7835008ec8ff1b034f08252a64f9",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_038.mp3": "2c5816199e20159caaf7aa52c1561a11",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_039.mp3": "c71b12943c0768b34317ecb8970e9e55",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_040.mp3": "b5e7d0cddb9fc11c1e4db87bc716c164",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_041.mp3": "890790bbc5fb1c80c28aba6e3872b71d",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_042.mp3": "45f183748db5f429b4988193cdb67c5e",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_043.mp3": "9b148bbd3e60a09a42127a784c97e6e6",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_044.mp3": "420c01e3d120a3553935376b108f1171",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_045.mp3": "19b11f8ecbd1f3591e373d8f89497a37",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_046.mp3": "1676fa9fc1d1aff51dcaa542e9e5ab8e",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_047.mp3": "638edbb9da51f121e927eafc15f04aaa",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_048.mp3": "0095d7be513d83a3be9549c641ccb7c7",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_049.mp3": "2fa454bd4e3ec4c00ddef7f3548aaf1f",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_050.mp3": "2777414659fbbb3d98f60369c8481db0",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_051.mp3": "6f887092589a920022ebe8321395df37",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_052.mp3": "cafad79f2389348d3280c21a3fa803fc",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_053": "202a626db3c4a811262428705dcb1ac6",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_053.mp3": "202a626db3c4a811262428705dcb1ac6",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_054.mp3": "7560c9eb83eec02cb42a1ded60253e91",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_055.mp3": "cb8b772b87d50e2ce0e0ed87d98be16b",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_056.mp3": "03766def8b90c7e8b789e93ccb23862b",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_057.mp3": "022615984430b7389be92b95a20ab349",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_058.mp3": "9c2370394b8cab69e3a239e4950c84f3",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_059.mp3": "40c68e5a925e1be7a338c1526c15687e",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_060.mp3": "02a551031435e2b01b9917ab1372465a",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_061.mp3": "0fd029569b120583f95ad594689a5dc5",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_062.mp3": "e05f787a6188978c60db9a38f248b72a",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_063.mp3": "5de18cc82790b11a8a08cdd62153063d",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_064.mp3": "3cabf0be6ec1adc1d72dc577ac70052c",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_065.mp3": "92d12d6c49ff6b1046b0cac60cb8f5fb",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_066.mp3": "6650671c87d6a58ece95fdee1ada180a",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_067.mp3": "e9d20620b79b9a03bf0c0364f7ec07c4",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_068.mp3": "8ffa3ce48ad6b4c29fccbef22bcc1109",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_069.mp3": "01316aeb0225edb6b64ad06b5f72213f",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_070.mp3": "3fcf5bbc14324d4368b2f73a777dc664",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_071.mp3": "93955316aca93841759340f38cbe23bd",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_072.mp3": "e1e2d098986d8407c8437bbb2abd240e",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_073.mp3": "7fc07c8a0e6b167de30dc10af87a2258",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_074.mp3": "a94172450a4a32c48faba19dc3e6b7db",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_075.mp3": "2ea536985f518313024346e5e9d3dee8",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_076.mp3": "ae548f3e7a01f24282f5846e9fac7ff9",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_077.mp3": "80dbd3086d9872c9e86a3b29058c02e1",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_078.mp3": "e58e4d662d81dc588743a029a8b7b58d",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_079.mp3": "6f7c46ff4dbc9064b55f86dfb0d89998",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_080.mp3": "24f6e29f14dc04eb0f30238c88f90f09",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_081.mp3": "9259ddcbb25653cb5ccace101c0d571e",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_082.mp3": "bd3d13db7b47a10727b0727238addc86",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_083.mp3": "d2428def25f77963c067cb33031a4ad9",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_084.mp3": "4a8680c2c524d02d7361332488c16694",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_085.mp3": "a8d691767541e23043344fe745210329",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_086.mp3": "96b74749fb0abdc1a369f1f4bb947c8d",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_087.mp3": "be5caaf41a206bdc8475952ad0463fe7",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_088.mp3": "58621af1964c369969474686bea1870a",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_089.mp3": "7275665aac2d09347933b0b76d4147df",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_090.mp3": "9032e9f67859e4fa1a63a92b368f907c",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_091.mp3": "a97b4b7e6989fb6b4b37d0f1fdf743eb",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_092.mp3": "4f0aa510f542f90171d53b925c979096",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_094.mp3": "8ebbc20c7cc6eca66479edcaa7e72099",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_095.mp3": "f7c8e2efd1fb6705f90380b2cd722498",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_096.mp3": "cfd53ae4e131790298dde3b5617fa31c",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_097.mp3": "ce516f1f85f87b92770313dfcf59eaa6",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_098.mp3": "4f99921a84ee18fd3d30d61dc7058bf5",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_099.mp3": "405dfa34c21f86765d01d16a7cf6251e",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_100.mp3": "bdeabe9f4303eac91b1a71f6050f0d9a",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_101.mp3": "239a0d33ddf552f3c75f7b4b4c337ea8",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_102.mp3": "118fddb58c8bb55dd39eedaa0320be15",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_103.mp3": "23dd83f1fe7781d6086bf230b12a0d2f",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_104.mp3": "3d9c1ab169b538e41a8a90b8b04621c0",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_105.mp3": "3d99c484f8735cb0ee5916b69e207a28",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_106.mp3": "35eda9c50147cfb58b920bb0503127e8",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_107.mp3": "a50144e1b37263c35a89a920292bbf78",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_108.mp3": "f12d1b3dba51c163e2bae9b034e47bac",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_109.mp3": "e67144b6a80ccf486fa067c930d568e5",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_110.mp3": "bce321e4eb3affe5e262064a676170e6",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_111.mp3": "803f6c1cd950669865ce3554e65ced00",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_112.mp3": "bfadff52314602acb81c2eba130af1e1",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_113.mp3": "148da5fff04f2748fdc51f0c4469328f",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_114.mp3": "502c829b91a62c9f91c7bed24b8bc205",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_115.mp3": "a8d7e5704a06cd8f19daeea3987c1f2b",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_116.mp3": "7952de62ff2917e2dbd4e9534bbb8855",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_117.mp3": "23766a17810ee01ec402e4b8c62e5cf7",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_118.mp3": "13bb0d109a0aa830611cf89eb7d8eddd",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_119.mp3": "d2bdef2c2785e99553a2521c27d7c672",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_120.mp3": "873c77b4af7325c8599cdfe318b2117c",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_121.mp3": "fc1309382b24dfa9e60d811671ac7830",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_122.mp3": "03851f41acab8591ff0e8b10dbf32d5f",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_123.mp3": "7028bc9ff4cbcc62419b8c37abf9c9be",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_124.mp3": "7b6c5b0fa52179efbbaaeb2c816b2db9",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_125.mp3": "d8f0630623a07c47ef11fd617eb04dc7",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_126.mp3": "20b1d1b93409e8e26273a86177d5ac21",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_127.mp3": "4676394104977be7d4de433b6aee983b",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_128.mp3": "8cfa3b3a3ae2e92d37618974fc6b9da0",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_129.mp3": "b0d62d0e5687f0f073381c75e9455a6b",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_130.mp3": "22ba417d8d09e7779d114b9283b6e1b0",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_131.mp3": "a61c8043269e8600cb8922f17858cc80",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_132.mp3": "d565fb55cea2cc5c1cf5aba4c48eded4",
"assets/assets/audio/ar_7esn_AlMoslem_by_Doors_133.mp3": "4e8a48f280bf93d2c2c3bad328ae53e2",
"assets/assets/images/adhkar_dark.jpg": "1ff97a56edfba63371fc99afb940cbd6",
"assets/assets/images/adhkar_light.jpg": "5f8ce8f57698faed5f7d2ca9c578f1a9",
"assets/assets/images/background.jpg": "c688e096bf58c373d2bd1df35e1078a3",
"assets/assets/images/bg1_light.jpg": "845c5902edbf01e0151adbae28904156",
"assets/assets/images/bg_caed_light.jpg": "b6ed3306839060ec6da0c697bcca42f5",
"assets/assets/images/bg_card_light.jpg": "60364f61abe3321f4c0e86ac6eb0115d",
"assets/assets/images/bg_dark.jpg": "3bb733d25c39d8734dfea3c42db6bdff",
"assets/assets/images/bg_light%2520.jpg": "ff07ae86f775502934570f7e9c7c846b",
"assets/assets/images/bg_light.jpg": "a9cf5a6df0f8ba8dee3f459c2dbece25",
"assets/assets/images/Border-001.png": "bb3a3894436acbc7aa86987a808f1fce",
"assets/assets/images/icon_num.png": "7d73c79887cd4ac152d09f622caa117e",
"assets/assets/images/play_store_512.png": "c8204523ac9d28ae147e04d78d80ed4d",
"assets/assets/json/adhkar.json": "5befd3e7130a141f7ad60ec1afe4d8ac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2eb2daba4c75b6aa6fbc56d1b7a31920",
"assets/NOTICES": "73f35d25b162112f1830b06596545183",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "e0360918c23469bf30c3ab89546b54c6",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "6f622866fff9bb290865a7d40e3a022a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2e5e04f82499db390d084350d8185a99",
"/": "2e5e04f82499db390d084350d8185a99",
"main.dart.js": "c2ccfc73d9e15355be05592174a2540c",
"manifest.json": "bb75709ef9b018777627ac864558cd57",
"version.json": "ea42c4a282d0a424c516866c6978bce5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
