// Maps string keys used in content.js to react-icons components, so content
// stays plain data (JSON-serializable) instead of holding component references.
import { FiBriefcase, FiSettings, FiDroplet } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLocationDot,
} from "react-icons/fa6";

export const specIcons = {
  bags: FiBriefcase,
  transmission: FiSettings,
  fuel: FiDroplet,
};

export const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
  location: FaLocationDot,
};
