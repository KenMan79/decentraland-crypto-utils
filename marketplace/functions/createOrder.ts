import { eth } from "../../export"
import { getUserAccount } from "@decentraland/EthereumController"
import { getContract } from "../contract"

/** Create an order, price in MANA (1 = 1 MANA) */
export async function createOrder(
  nftAddress: eth.Address,
  assetId: number,
  price: number,
  expireAt: number
) {
  const { contract } = await getContract()
  const fromAddress = await getUserAccount()

  const res = await contract.createOrder(
    nftAddress,
    assetId,
    eth.toWei(price, 'ether').toString(),
    expireAt,
    {
      from: fromAddress
    }
  )
  return res
}
