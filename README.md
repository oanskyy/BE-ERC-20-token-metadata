# BE-ERC-20-token-metadata 
WHAT? show the metadata for several tokens || 
HOW? use Alchemy's Token API endpoint **getTokenMetadata** || Use Alchemy's token API to get all the metadata for your ERC-20 token including name, symbol, and other important details. 
USE CASES! 
1. DeFi app aggregating tokens: Uniswap, Balancer, Curve Finance, Yearn Finance (Yearn)
2. Analytics app: CoinGecko, Zapper, DeBank

API Endpoint
This tutorial uses the alchemy_getTokenMetadata endpoint.

Often when you are a DeFi app aggregating several tokens on your platform (like Uniswap), or an analytics app displaying data about thousands of tokens (like CoinGecko) - you need to show the metadata for several tokens. The metadata includes important fields like the token's name, symbol, and logo.

Alchemy's Token API endpoint getTokenMetadata can come in handy for use-cases like that! In this tutorial, we will fetch the metadata for the USDT token.
📘


source: https://docs.alchemy.com/docs/how-to-get-token-metadata#understanding-the-api-response
