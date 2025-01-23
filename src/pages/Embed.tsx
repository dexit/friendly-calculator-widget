import { Calculator } from "@/components/Calculator";
import { siteConfig } from "@/config/site";
import { Phone } from "lucide-react";

const Embed = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-[#2D3748]">
            {siteConfig.name}
          </h1>
          <p className="text-xl text-[#4A5568]">{siteConfig.tagline}</p>
          
          <div className="flex items-center justify-center space-x-2 text-[#00BCD4]">
            <Phone className="h-5 w-5" />
            <a 
              href={`tel:${siteConfig.contact.phone}`} 
              className="hover:text-[#00ACC1] transition-colors"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </div>

        <Calculator />
      </div>
    </div>
  );
};

export default Embed;