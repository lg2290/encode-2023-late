# Test 1

1 Owner: 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa
2 Owner: 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D

[Deploy Contract](https://goerli.etherscan.io/tx/0xfb8cdbbf57cd38bc9fd0647d1b096bd93a4009c55f87a1c285bc5b765f4e7d77)
[Change Text](https://goerli.etherscan.io/tx/0x470870fb5a67514301bb3d67df78953ccc23e06ff107c68f2ee0dd494b630121)
[Change Text - Not Owner](https://goerli.etherscan.io/tx/0x8e44401caedddf6b1241736d2ba922deb63707c2654db4a5f2cb67450d7eb1a8)
[Change Owner - Not Owner](https://goerli.etherscan.io/tx/0xaff8889af52f8567e1ad84a7056404de8f41788e6390b871a24cdfba24559380)
[Change Text](https://goerli.etherscan.io/tx/0xe44dc29706f83e415d8410332e7e5ac0caab2eb71c20a1259f86d3c47c5925c0)
[Change Owner](https://goerli.etherscan.io/tx/0x6ae52e7e17965ce07e1c8a6cd8f2bd8aa0b2835b286f0810fc302c746dd5be0d)
[Change Text - Old Owner](https://goerli.etherscan.io/tx/0x853489f4c570c86fb1a56df90a3c3c42a9630a6a28cc45fcf3a4c39d674ffbba)
[Change Owner - Old Owner](https://goerli.etherscan.io/tx/0xba49851ab8673b89f71065f445e6538f4886a82b80cf5f1cc2c784fb7716adf3)
[Change Text - New Owner](https://goerli.etherscan.io/tx/0x7d217501d5d5eccd304f140d9580d943a33fc9ed1650e9a52789372e31eeb3d6)

# Test 2

* Contract: 0xf217daf2943176b90110c68062b6f1fc8ed72d2b
* 1st Owner: 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D
* 2nd Owner: 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa
* 3rd Owner: 0x5858769800844ab75397775Ca2Fa87B270F7FbBe

[Deploy Contract](https://goerli.etherscan.io/tx/0xf4e103078562cf396f94bf054391268b3673522a1f7f4899a7923a64288d400d)
[Set Text](https://goerli.etherscan.io/tx/0xf9fe75acbcd4792d64195d3caa9f9f30024ddaafc95dc3477b46c55818a999c1)
[Set Text - Not Owner](https://goerli.etherscan.io/tx/0xe965773b14e46ccc459f13c8818e948c4e89205003c4e3556f92d0d226dcc86d)
[Change Owner - Not Owner](https://goerli.etherscan.io/tx/0x2cdad4c3df2efa22f2a4107c62e14e94f65bfb2772c3f533641bd478a013d227)
[Change Owner](https://goerli.etherscan.io/tx/0x00d352fa2a51fcb6153e2ee4633f350da10c17d786a204e9614419d7720f7491)
[Set Text - Old Owner](https://goerli.etherscan.io/tx/0xea93e827e5d380a1508ef55279dee209cd3eefc25f9177e6a74d80d77b44d95d)
[Change Owner - Old Owner](https://goerli.etherscan.io/tx/0xfc6f1e5a67ac88fc315b861af87bf65df1dff0043f8aa1656e4969e43cfd5007)
[Set Text - New Owner](https://goerli.etherscan.io/tx/0xe49135aeb61f66468cba6df8bcb0b86348d14fe3af6baa38342f0c4d2a2f1d60)
[Change Owner - New Owner](https://goerli.etherscan.io/tx/0xd7977c094b31c6d0f34b2b9e6cc6f5c2158ec2c0d0783fae7a517dd364bb1d7e)

---

[block:8516416 txIndex:2]from: 0xfc2...f612Dto: HelloWorld.(constructor)value: 0 weidata: 0x608...20033logs: 0hash: 0xa95...7d22e
status	true Transaction mined and execution succeed
transaction hash	0xf4e103078562cf396f94bf054391268b3673522a1f7f4899a7923a64288d400d
from	0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D
to	HelloWorld.(constructor)
gas	573158 gas
transaction cost	573158 gas 
input	0x608...20033
decoded input	{}
decoded output	 - 
logs	[]
val	0 wei

---

call to HelloWorld.helloWorld
CALL
[call]from: 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612Dto: HelloWorld.helloWorld()data: 0xc60...5f76c
from	0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D
to	HelloWorld.helloWorld() 0xf217DAF2943176B90110c68062B6f1fc8ED72d2B
input	0xc60...5f76c
decoded input	{}
decoded output	{
	"0": "string: Hello World!"
}
logs	[]
transact to HelloWorld.setText pending ... 
view on etherscan

---

[block:8516427 txIndex:1]from: 0xfc2...f612Dto: HelloWorld.setText(string) 0xf21...72d2Bvalue: 0 weidata: 0x5d3...00000logs: 0hash: 0x992...80854
status	true Transaction mined and execution succeed
transaction hash	0xf9fe75acbcd4792d64195d3caa9f9f30024ddaafc95dc3477b46c55818a999c1
from	0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D
to	HelloWorld.setText(string) 0xf217DAF2943176B90110c68062B6f1fc8ED72d2B
gas	29893 gas
transaction cost	29893 gas 
input	0x5d3...00000
decoded input	{
	"string newText": "Hello World! v2"
}
decoded output	 - 
logs	[]
val	0 wei

---

call to HelloWorld.helloWorld
CALL
[call]from: 0xfc289231534c6F14EfD0f2496550Aa6cBFCf612Dto: HelloWorld.helloWorld()data: 0xc60...5f76c
from	0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D
to	HelloWorld.helloWorld() 0xf217DAF2943176B90110c68062B6f1fc8ED72d2B
input	0xc60...5f76c
decoded input	{}
decoded output	{
	"0": "string: Hello World! v2"
}
logs	[]

---

call to MyInterface.helloWorld
CALL
[call]from: 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFato: HelloWorld.helloWorld()data: 0xc60...5f76c
from	0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa
to	HelloWorld.helloWorld() 0xf217DAF2943176B90110c68062B6f1fc8ED72d2B
input	0xc60...5f76c
decoded input	{}
decoded output	{
	"0": "string: Hello World! v2"
}
logs	[]
transact to MyInterface.setText pending ... 
view on etherscan

---

[block:8516433 txIndex:6]from: 0xC29...d8DFato: HelloWorld.setText(string) 0xf21...72d2Bvalue: 0 weidata: 0x5d3...00000logs: 0hash: 0x55a...ed4c7
status	false Transaction mined but execution failed
transaction hash	0xe965773b14e46ccc459f13c8818e948c4e89205003c4e3556f92d0d226dcc86d
from	0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa
to	HelloWorld.setText(string) 0xf217DAF2943176B90110c68062B6f1fc8ED72d2B
gas	3000000 gas
transaction cost	24556 gas 
input	0x5d3...00000
decoded input	{
	"string newText": "Hello World! v3"
}
decoded output	 - 
logs	[]
val	0 wei
transact to MyInterface.changeOwner pending ... 
view on etherscan

---

[block:8516440 txIndex:17]from: 0xC29...d8DFato: HelloWorld.changeOwner(address) 0xf21...72d2Bvalue: 0 weidata: 0xa6f...d8dfalogs: 0hash: 0x266...9020a
status	false Transaction mined but execution failed
transaction hash	0x2cdad4c3df2efa22f2a4107c62e14e94f65bfb2772c3f533641bd478a013d227
from	0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa
to	HelloWorld.changeOwner(address) 0xf217DAF2943176B90110c68062B6f1fc8ED72d2B
gas	3000000 gas
transaction cost	24341 gas 
input	0xa6f...d8dfa
decoded input	{
	"address newOwner": "0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa"
}
decoded output	 - 
logs	[]
val	0 wei
transact to MyInterface.changeOwner pending ... 
view on etherscan

---

[block:8516445 txIndex:6]from: 0xfc2...f612Dto: HelloWorld.changeOwner(address) 0xf21...72d2Bvalue: 0 weidata: 0xa6f...d8dfalogs: 0hash: 0x7f2...decaa
status	true Transaction mined and execution succeed
transaction hash	0x00d352fa2a51fcb6153e2ee4633f350da10c17d786a204e9614419d7720f7491
from	0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D
to	HelloWorld.changeOwner(address) 0xf217DAF2943176B90110c68062B6f1fc8ED72d2B
gas	27121 gas
transaction cost	27121 gas 
input	0xa6f...d8dfa
decoded input	{
	"address newOwner": "0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa"
}
decoded output	 - 
logs	[]
val	0 wei
transact to MyInterface.setText pending ... 
view on etherscan

---

[block:8516448 txIndex:5]from: 0xfc2...f612Dto: HelloWorld.setText(string) 0xf21...72d2Bvalue: 0 weidata: 0x5d3...00000logs: 0hash: 0x2b1...c463a
status	false Transaction mined but execution failed
transaction hash	0xea93e827e5d380a1508ef55279dee209cd3eefc25f9177e6a74d80d77b44d95d
from	0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D
to	HelloWorld.setText(string) 0xf217DAF2943176B90110c68062B6f1fc8ED72d2B
gas	3000000 gas
transaction cost	24556 gas 
input	0x5d3...00000
decoded input	{
	"string newText": "Hello World! v3"
}
decoded output	 - 
logs	[]
val	0 wei
transact to MyInterface.changeOwner pending ... 
view on etherscan

---

[block:8516454 txIndex:7]from: 0xfc2...f612Dto: HelloWorld.changeOwner(address) 0xf21...72d2Bvalue: 0 weidata: 0xa6f...d8dfalogs: 0hash: 0xcc4...66b8e
status	false Transaction mined but execution failed
transaction hash	0xfc6f1e5a67ac88fc315b861af87bf65df1dff0043f8aa1656e4969e43cfd5007
from	0xfc289231534c6F14EfD0f2496550Aa6cBFCf612D
to	HelloWorld.changeOwner(address) 0xf217DAF2943176B90110c68062B6f1fc8ED72d2B
gas	3000000 gas
transaction cost	24341 gas 
input	0xa6f...d8dfa
decoded input	{
	"address newOwner": "0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa"
}
decoded output	 - 
logs	[]
val	0 wei

---

call to MyInterface.helloWorld
CALL
[call]from: 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFato: HelloWorld.helloWorld()data: 0xc60...5f76c
from	0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa
to	HelloWorld.helloWorld() 0xf217DAF2943176B90110c68062B6f1fc8ED72d2B
input	0xc60...5f76c
decoded input	{}
decoded output	{
	"0": "string: Hello World! v2"
}
logs	[]

---

call to MyInterface.helloWorld
CALL
[call]from: 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFato: HelloWorld.helloWorld()data: 0xc60...5f76c
from	0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa
to	HelloWorld.helloWorld() 0xf217DAF2943176B90110c68062B6f1fc8ED72d2B
input	0xc60...5f76c
decoded input	{}
decoded output	{
	"0": "string: Hello World! v2"
}
logs	[]
transact to MyInterface.setText pending ... 
view on etherscan

---

[block:8516459 txIndex:3]from: 0xC29...d8DFato: HelloWorld.setText(string) 0xf21...72d2Bvalue: 0 weidata: 0x5d3...00000logs: 0hash: 0x2a1...89cff
status	true Transaction mined and execution succeed
transaction hash	0xe49135aeb61f66468cba6df8bcb0b86348d14fe3af6baa38342f0c4d2a2f1d60
from	0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa
to	HelloWorld.setText(string) 0xf217DAF2943176B90110c68062B6f1fc8ED72d2B
gas	29893 gas
transaction cost	29893 gas 
input	0x5d3...00000
decoded input	{
	"string newText": "Hello World! v3"
}
decoded output	 - 
logs	[]
val	0 wei
transact to MyInterface.changeOwner pending ... 
view on etherscan

---

[block:8516482 txIndex:60]from: 0xC29...d8DFato: HelloWorld.changeOwner(address) 0xf21...72d2Bvalue: 0 weidata: 0xa6f...7fbbelogs: 0hash: 0x1a2...4512d
status	true Transaction mined and execution succeed
transaction hash	0xd7977c094b31c6d0f34b2b9e6cc6f5c2158ec2c0d0783fae7a517dd364bb1d7e
from	0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa
to	HelloWorld.changeOwner(address) 0xf217DAF2943176B90110c68062B6f1fc8ED72d2B
gas	27109 gas
transaction cost	27109 gas 
input	0xa6f...7fbbe
decoded input	{
	"address newOwner": "0x5858769800844ab75397775Ca2Fa87B270F7FbBe"
}
decoded output	 - 
logs	[]
val	0 wei

---

call to MyInterface.helloWorld
CALL
[call]from: 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFato: HelloWorld.helloWorld()data: 0xc60...5f76c
from	0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa
to	HelloWorld.helloWorld() 0xf217DAF2943176B90110c68062B6f1fc8ED72d2B
input	0xc60...5f76c
decoded input	{}
decoded output	{
	"0": "string: Hello World! v3"
}
logs	[]

---

call to MyInterface.helloWorld
CALL
[call]from: 0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFato: HelloWorld.helloWorld()data: 0xc60...5f76c
from	0xC29eB9a48c8a69273D99D52b4279084ae8ad8DFa
to	HelloWorld.helloWorld() 0xf217DAF2943176B90110c68062B6f1fc8ED72d2B
input	0xc60...5f76c
decoded input	{}
decoded output	{
	"0": "string: Hello World! v3"
}
logs	[]

