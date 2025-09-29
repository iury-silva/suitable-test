import { useCompanyStore } from "@/stores/company";
import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "@/components/theme";
import { useEffect, useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon, ClockIcon } from "lucide-react";
import CompanyInfo from "@/components/company";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const company = useCompanyStore((state) => state.company);
  const [isCompanyInfoOpen, setIsCompanyInfoOpen] = useState(false);

  useEffect(() => {
    if (company?.data) {
      const root = document.documentElement;
      root.style.setProperty(
        "--brand-primary",
        company.data.primary_color || "#3b82f6"
      );
      root.style.setProperty(
        "--brand-secondary",
        company.data.secondary_color || "#2563eb"
      );
    }
  }, [company?.data]);

  if (!company?.data) {
    return (
      <header className="p-4 bg-gray-100 animate-pulse">
        <div className="h-16 bg-gray-300 rounded"></div>
      </header>
    );
  }

  const { data } = company;

  return (
    <header className="relative overflow-hidden">
      <ModeToggle className="absolute top-4 right-4 z-30" />
      {data.background_image && (
        <div className="inset-0 dark:opacity-30 opacity-70">
          {data.background_image.includes(".mp4") ? (
            <video autoPlay muted loop className="w-full h-38 object-cover">
              <source src={data.background_image} type="video/mp4" />
            </video>
          ) : (
            <img
              src={data.background_image}
              alt="Background"
              className="w-full h-full object-cover opacity-30"
            />
          )}
        </div>
      )}
      <div className="relative z-10 container mx-auto px-4 py-4 h-full flex flex-col justify-end">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-4 bg-background rounded-xl p-2">
            {data.logo && (
              <img
                src={data.logo}
                alt={`${data.name} Logo`}
                className={`h-20 w-20 md:h-20 md:w-20 object-contain rounded-full bg-brand-primary p-2`}
              />
            )}
            <div>
              <h1 className="text-xl md:text-3xl font-bold">{data.name}</h1>
            </div>
          </div>

          <div className="flex md:flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className={`text-sm px-3 py-1 bg-background`}
              >
                <div
                  className={`w-2 h-2 rounded-full mr-2 ${
                    data.is_open ? "bg-green-600" : "bg-red-600"
                  } animate-pulse`}
                ></div>
                <span
                  className={`font-extrabold ${
                    data.is_open ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {data.is_open ? "Loja Aberta" : "Loja Fechada"}
                </span>
              </Badge>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setIsCompanyInfoOpen(true)}
                className="px-2 py-1 h-auto bg-background hover:bg-accent"
              >
                <InfoIcon className="h-4 w-4" />
                Info
              </Button>
            </div>
            <div className="text-sm text-muted-foreground text-center flex flex-row items-center">
              <ClockIcon className="mx-auto mr-1" />
              <p className="font-extrabold">
                {data.pick_up_time_minutes} a {data.delivery_time_minutes} min
              </p>
            </div>
          </div>
        </div>
        {data.messages?.length > 0 && (
          <Alert className="mt-4 bg-green-100 !text-green-800">
            <InfoIcon className="mr-2 inline-block" />
            <AlertDescription className="text-green-800">
              {data.messages[0].text}
            </AlertDescription>
          </Alert>
        )}
      </div>

      <CompanyInfo
        isOpen={isCompanyInfoOpen}
        setIsOpen={setIsCompanyInfoOpen}
      />
    </header>
  );
};

export default Header;
