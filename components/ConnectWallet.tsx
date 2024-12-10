import { Button } from "./ui/button";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function ConnectWallet() {
  const { publicKey } = useWallet(); // Destructure publicKey correctly

  return (
    <div>
      <WalletMultiButton 
        // Optional: onClick to log details
        onClick={() => {
          console.log("Public Key:", publicKey ? publicKey.toBase58() : "Not connected")
        }}
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
      />
      
      
    </div>
  )
}