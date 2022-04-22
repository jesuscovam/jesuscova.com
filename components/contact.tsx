import { toast } from 'react-hot-toast'
import Image from 'next/image'

const ETH_WALLET = '0x928716fCC08817db3f608FE94F78705ceA370a44' as const
const ETH_WALLET_SHORT = `${ETH_WALLET.slice(0, 5)}...${ETH_WALLET.slice(
  ETH_WALLET.length - 4
)}`

interface ILink {
  url: string
  label: string
}

const links: ILink[] = [
  {
    url: 'https://www.twitter.com/jesusacova',
    label: 'twitter',
  },
  {
    url: 'https://www.github.com/jesuscovam/jesuscova.com',
    label: 'github',
  },
]

function Link({ url, label }: ILink): JSX.Element {
  return (
    <a
      className="text-indigo-400 underline"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  )
}

export function Contact(): JSX.Element {
  function copyAddress() {
    navigator.clipboard.writeText(ETH_WALLET)
    toast.success('Copied to clipboard')
  }

  return (
    <div className="flex flex-col space-y-5">
      <Image
        className="rounded-2xl"
        layout="responsive"
        src="/jesus.jpg"
        quality={100}
        width="200"
        height="200"
      />
      <div className="flex flex-col space-y-1 text-left">
        <h1>jesus cova</h1>
        {links?.map((link) => (
          <Link key={link?.url} {...link} />
        ))}

        <button
          className="text-left text-indigo-400 underline"
          onClick={copyAddress}
        >
          {ETH_WALLET_SHORT}
        </button>
      </div>
    </div>
  )
}
