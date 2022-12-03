import Image from 'next/image'
import HeroImage from '../public/assets/hero-image.png'

export default function HomePage() {
    return (
        <div>
            <Image
                className="w-full h-auto"
                src={HeroImage}
                alt="A kite on the sky and a man running on the beach"
            />
            <h1>The world&apos;s greatest fake site</h1>
            <span>
                Create the world&apos;s greatest fake site and enjoy the breeze
                of fresh air when you complete it
            </span>
            <button>Do something awesome</button>
            <h2>Video Title (from videos.json)</h2>
            <span>Video Description (from videos.json)</span>
            <h3>Ready to have your cake and eat it too?</h3>
            <span>
                Start by designing the experience you have in mind. We&apos;ll
                guide you through each step. If your experience meets the
                quality standards, you&apos;ll hear more about what&apos;s next.
            </span>
        </div>
    )
}
