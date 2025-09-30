import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  MailIcon,
  ExternalLinkIcon,
  InstagramIcon,
  FacebookIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatTime } from "@/utils/formatTime";
import { DAY_NAMES } from "@/utils/dates";
import { useCallback } from "react";
import type { Company } from "@/types/company";

export function CompanyInfo({
  isOpen,
  setIsOpen,
  company,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  company: Company;
}) {
  const handleOpenLink = useCallback((url: string) => {
    window.open(url, "_blank");
  }, []);

  if (!company?.data) {
    return null;
  }

  const { data } = company;

  const openGoogleMaps = () => {
    if (data.address) {
      const fullAddress = `${data.address.street}, ${data.address.number}, ${data.address.city}, ${data.address.state}`;
      const encodedAddress = encodeURIComponent(fullAddress);
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
      handleOpenLink(mapsUrl);
    }
  };

  const socialLinks = [
    { name: "Instagram", icon: InstagramIcon, url: data.instagram_url },
    { name: "Facebook", icon: FacebookIcon, url: data.facebook_url },
    { name: "Website", icon: ExternalLinkIcon, url: data.website_url },
  ].filter((social) => social.url);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="mx-auto max-w-md md:max-w-xl h-[100vh] flex flex-col p-0 gap-0 bg-card">
        <DialogHeader className="px-6 py-4 border-b flex-shrink-0">
          <DialogTitle className="text-xl font-bold flex items-center gap-3">
            {data.logo && (
              <img
                src={data.logo}
                alt={`${data.name} Logo`}
                className="h-8 w-8 object-contain rounded-lg"
              />
            )}
            {data.name}
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto">
          <Accordion type="single" collapsible className="w-full">
            {data.about && (
              <AccordionItem value="about" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/50">
                  <span className="font-semibold">Sobre nós</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {data.about}
                  </p>
                </AccordionContent>
              </AccordionItem>
            )}

            {data.address && (
              <AccordionItem value="address" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/50">
                  <div className="flex items-center gap-3">
                    <MapPinIcon className="h-5 w-5 text-brand-primary" />
                    <span className="font-semibold">Endereço</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 space-y-3">
                  <div className="text-muted-foreground">
                    <p>
                      {data.address.street}, {data.address.number}
                    </p>
                    {data.address.complement && (
                      <p>{data.address.complement}</p>
                    )}
                    <p>{data.address.neighborhood}</p>
                    <p>
                      {data.address.city} - {data.address.state}
                    </p>
                    {data.address.cep && <p>CEP: {data.address.cep}</p>}
                  </div>
                  <Button
                    onClick={openGoogleMaps}
                    className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white"
                  >
                    <MapPinIcon className="h-4 w-4 mr-2" />
                    Como chegar
                    <ExternalLinkIcon className="h-4 w-4 ml-2" />
                  </Button>
                </AccordionContent>
              </AccordionItem>
            )}

            {data.opening_hours && data.opening_hours.length > 0 && (
              <AccordionItem value="hours" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/50">
                  <div className="flex items-center gap-3">
                    <ClockIcon className="h-5 w-5 text-brand-primary" />
                    <span className="font-semibold">
                      Horário de funcionamento
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 space-y-2">
                  <div className="space-y-1">
                    {data.opening_hours.map((hour, index) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-muted-foreground">
                            {DAY_NAMES[hour.day]} ({hour.shift}):
                          </span>
                          <span>
                            {formatTime(hour.start)} - {formatTime(hour.end)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex items-center gap-2 mt-3 pt-2 border-t">
                    <div
                      className={`w-2 h-2 rounded-full animate-pulse ${
                        data.is_open ? "bg-green-500" : "bg-red-500"
                      }`}
                    />
                    <span
                      className={`text-sm font-medium ${
                        data.is_open ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {data.is_open ? "Aberto agora" : "Fechado"}
                    </span>
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}
            {(data.phone || data.email || data.whatsapp_url) && (
              <AccordionItem value="contact" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/50">
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="h-5 w-5 text-brand-primary" />
                    <span className="font-semibold">Contato</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 space-y-3">
                  {data.phone && (
                    <div className="flex items-center gap-3">
                      <PhoneIcon className="h-4 w-4 text-muted-foreground" />
                      <a
                        href={`tel:${data.phone}`}
                        className="text-muted-foreground hover:text-brand-primary transition-colors"
                      >
                        {data.phone}
                      </a>
                    </div>
                  )}
                  {data.email && (
                    <div className="flex items-center gap-3">
                      <MailIcon className="h-4 w-4 text-muted-foreground" />
                      <a
                        href={`mailto:${data.email}`}
                        className="text-muted-foreground hover:text-brand-primary transition-colors"
                      >
                        {data.email}
                      </a>
                    </div>
                  )}
                  {data.whatsapp_url && (
                    <Button
                      onClick={() => handleOpenLink(data.whatsapp_url)}
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                    >
                      <PhoneIcon className="h-4 w-4 mr-2" />
                      WhatsApp
                      <ExternalLinkIcon className="h-4 w-4 ml-2" />
                    </Button>
                  )}
                </AccordionContent>
              </AccordionItem>
            )}
            {socialLinks.length > 0 && (
              <AccordionItem value="social" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/50">
                  <span className="font-semibold">Redes sociais</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 space-y-2">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.name}
                      variant="outline"
                      onClick={() => handleOpenLink(social.url)}
                      className="w-full justify-start hover:bg-brand-primary hover:text-white hover:border-brand-primary"
                    >
                      <social.icon className="h-4 w-4 mr-3" />
                      {social.name}
                      <ExternalLinkIcon className="h-4 w-4 ml-auto" />
                    </Button>
                  ))}
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CompanyInfo;
