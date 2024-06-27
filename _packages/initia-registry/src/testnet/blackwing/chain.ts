import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "blackwing",
  chain_id: "tomcat-1",
  website: "https://blackwing.fi",
  pretty_name: "Blackwing",
  status: "live",
  network_type: "testnet",
  daemon_name: "minitiad",
  node_home: "$HOME/.minitia",
  key_algos: ["secp256k1"],
  slip44: 118,
  bech32_prefix: "init",
  fees: {
    fee_tokens: [
      {
        denom: "umin",
        fixed_min_gas_price: 0.15,
      },
      {
        denom:
          "l2/aee375e9d0b181f0d9d3a49f9a3d1d6b05d62b0ac81f8c92b9282afa4213d884",
        fixed_min_gas_price: 0.15,
        low_gas_price: 0.15,
        average_gas_price: 0.15,
        high_gas_price: 0.4,
      },
      {
        denom:
          "ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5",
        fixed_min_gas_price: 0.15,
        low_gas_price: 0.15,
        average_gas_price: 0.15,
        high_gas_price: 0.4,
      },
    ],
  },
  staking: {
    staking_tokens: [],
  },
  description: "Blackwing Testnet",
  apis: {
    rpc: [
      {
        address:
          "https://maze-rpc-18bdff44-3aa4-425e-9bc0-06a2afa40af8.ase1-prod.newmetric.xyz",
      },
    ],
    rest: [
      {
        address:
          "https://maze-rest-18bdff44-3aa4-425e-9bc0-06a2afa40af8.ase1-prod.newmetric.xyz",
      },
    ],
    grpc: [
      {
        address: "grpc://54.227.5.191:31000",
      },
    ],
  },
  explorers: [
    {
      kind: "initia scan",
      url: "https://scan.testnet.initia.xyz/tomcat-1",
      tx_page: "https://scan.testnet.initia.xyz/tomcat-1/txs/${txHash}",
      account_page:
        "https://scan.testnet.initia.xyz/tomcat-1/accounts/${accountAddress}",
    },
  ],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/blackwing/images/BLACKWING.png",
      svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/blackwing/images/BLACKWING.svg",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/blackwing/images/BLACKWING.png",
    svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/blackwing/images/BLACKWING.svg",
  },
  metadata: {
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/blackwing/assetlist.json",
    op_bridge_id: "8",
    op_denoms: ["uinit"],
    ibc_channels: [
      {
        chain_id: "initiation-1",
        port_id: "nft-transfer",
        channel_id: "channel-1",
        version: "ics721-1",
      },
      {
        chain_id: "initiation-1",
        port_id: "transfer",
        channel_id: "channel-0",
        version: "ics20-1",
      },
    ],
    minitia: {
      type: "minimove",
      version: "v0.2.12",
    },
  },
};
export default info;
