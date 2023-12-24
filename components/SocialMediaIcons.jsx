import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSquareXTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
export function SocialMediaIcons({ className, ...props }) {
  return (
    <>
      <Link href={siteConfig.links.facebook} aria-label="Facebook">
        <FontAwesomeIcon icon={faFacebook} className={className} />
      </Link>
      <Link href={siteConfig.links.twitter} aria-label="Twitter">
        <FontAwesomeIcon icon={faSquareXTwitter} className={className} />
      </Link>
      <Link href={siteConfig.links.youtube} aria-label="Youtube">
        <FontAwesomeIcon icon={faYoutube} className={className} />
      </Link>
      <Link href={siteConfig.links.instagram} aria-label="Instagram">
        <FontAwesomeIcon icon={faInstagram} className={className} />
      </Link>
    </>
  );
}
