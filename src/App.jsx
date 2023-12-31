import React, { useState } from "react";
import MyGroup from "./components/MyGroup.jsx";
import walletConnectFcn from "./components/hedera/walletConnect.js";
import contractDeployFcn from "./components/hedera/contractDeploy.js";
import contractExecuteFcn from "./components/hedera/contractExecute.js";
import "./styles/App.css";
import InputBoxes from './components/InputBoxes';


function App() {
	const [walletData, setWalletData] = useState();
	const [account, setAccount] = useState();
	const [network, setNetwork] = useState();
	const [contractAddress, setContractAddress] = useState();

	const [connectTextSt, setConnectTextSt] = useState("");
	const [contractTextSt, setContractTextSt] = useState();
	const [executeTextSt, setExecuteTextSt] = useState();

	const [connectLinkSt, setConnectLinkSt] = useState("");
	const [contractLinkSt, setContractLinkSt] = useState();
	const [executeLinkSt, setExecuteLinkSt] = useState();

	async function connectWallet() {
		if (account !== undefined) {
			setConnectTextSt(`🔌 Account is already connected ⚡ ✅`);
		} else {
			const wData = await walletConnectFcn();

			let newAccount = wData[0];
			let newNetwork = wData[2];
			if (newAccount !== undefined) {
				setConnectTextSt(`🔌 Account connected ⚡ ✅`);
				setConnectLinkSt(`https://hashscan.io/${newNetwork}/account/${newAccount}`);

				setWalletData(wData);
				setAccount(newAccount);
				setNetwork(newNetwork);
				setContractTextSt();
			}
		}
	}

	async function contractDeploy() {
		if (account === undefined) {
			setContractTextSt("🛑 Connect a wallet first! 🛑");
		} else {
			const cAddress = await contractDeployFcn(walletData);

			if (cAddress === undefined) {
			} else {
				setContractAddress(cAddress);
				setContractTextSt(`Contract deployed ✅`);
				setExecuteTextSt(``);
				setContractLinkSt(`https://hashscan.io/${network}/address/${cAddress}`);
			}
		}
	}

	async function contractExecute() {
		if (contractAddress === undefined) {
			setExecuteTextSt("🛑 Deploy a contract first! 🛑");
		} else {
			const [txHash, finalCount] = await contractExecuteFcn(walletData, contractAddress);

			if (txHash === undefined || finalCount === undefined) {
			} else {
				setExecuteTextSt(`User Verified!🎉🎉🎉 | (Transaction hash)`);
				setExecuteLinkSt(`https://hashscan.io/${network}/tx/${txHash}`);
				
			}
		}
	}
	return (
		<div className="App">
			<h1 className="header">Add your MetaMask wallet, enter user details, get verified, and start the journey of efficient parking!</h1>
			<MyGroup fcn={connectWallet} buttonLabel={"Connect Wallet"} text={connectTextSt} link={connectLinkSt} />

			<MyGroup fcn={contractDeploy} buttonLabel={"Deploy Verification Contract"} text={contractTextSt} link={contractLinkSt} />

			<MyGroup fcn={contractExecute} buttonLabel={"Execute Contract"} text={executeTextSt} link={executeLinkSt} />
			
			<MyGroup buttonLabel={"Sign up"} />
			<InputBoxes />

		</div>
	);
}
export default App;
