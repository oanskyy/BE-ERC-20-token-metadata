// Importing necessary modules from the alchemy-sdk package
import { Alchemy, Network } from "alchemy-sdk"

// Configuration object containing API key and network information
const config = {
	apiKey: "aooqsC2Fs7rOj9x2NMJ9-F_olV4x3A3r",
	network: Network.ETH_MAINNET
}

// Creating an instance of Alchemy with the provided configuration
const alchemy = new Alchemy(config)

// The token address we want to query for metadata
// in this case USDT (0xdAC17F958D2ee523a2206206994597C13D831ec7)
const metadata = await alchemy.core.getTokenMetadata(
	"0xdAC17F958D2ee523a2206206994597C13D831ec7"
)

console.log("TOKEN METADATA")
console.log(metadata)
