// Maps string keys used in content.js to react-icons components, so content
// stays plain data (JSON-serializable) instead of holding component references.
import { FiUsers, FiBriefcase, FiSettings, FiDroplet } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

export const specIcons = {
  seats: FiUsers,
  bags: FiBriefcase,
  transmission: FiSettings,
  fuel: FiDroplet,
};

export const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  twitter: FaXTwitter,
  youtube: FaYoutube,
};
