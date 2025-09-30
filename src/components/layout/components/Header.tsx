import { useCompany } from "@/services/company";
import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "@/components/theme";
import { useEffect, useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon, ClockIcon } from "lucide-react";
import CompanyInfo from "@/components/company";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export const Header = () => {
  const [isCompanyInfoOpen, setIsCompanyInfoOpen] = useState(false);
  const { data: company } = useCompany();
  const companyData = company?.data;

  useEffect(() => {
    if (companyData) {
      const root = document.documentElement;
      root.style.setProperty("--brand-primary", companyData.primary_color);
      root.style.setProperty("--brand-secondary", companyData.secondary_color);
    }
  }, [companyData]);

  if (!companyData) {
    return (
      <>
        <Skeleton className="h-38 w-full" />
        <div className="w-full flex flex-col justify-center gap-4 p-4">
          <div className="flex flex-row md:flex-row items-center gap-2">
            <Skeleton className="h-20 w-20 rounded-full" />
            <Skeleton className="h-8 w-48" />
          </div>
          <Skeleton className="h-8 w-full px-2" />
          <Skeleton className="h-24 w-full px-2" />
        </div>
      </>
    );
  }

  return (
    <header className="relative overflow-hidden">
      <ModeToggle className="absolute top-4 right-4 z-10" />
      {companyData.background_image && (
        <div className="dark:opacity-30 opacity-70">
          {companyData.background_image.includes(".mp4") ? (
            <video autoPlay muted loop className="w-full h-48 object-cover">
              <source src={companyData.background_image} type="video/mp4" />
            </video>
          ) : (
            <img
              src={companyData.background_image}
              alt="Background"
              className="w-full h-full object-cover opacity-30"
            />
          )}
        </div>
      )}
      <div className="relative z-20 container mx-auto p-4 h-full flex flex-col justify-end bg-background -mt-6 rounded-t-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-4 bg-background p-2">
            {companyData.logo && (
              <img
                src={companyData.logo}
                alt={`${companyData.name} Logo`}
                className={`h-20 w-20 md:h-20 md:w-20 object-contain rounded-full bg-brand-primary p-2`}
              />
            )}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                {companyData.name}
              </h1>
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
                    companyData.is_open ? "bg-green-600" : "bg-red-600"
                  } animate-pulse`}
                ></div>
                <span
                  className={`font-extrabold ${
                    companyData.is_open ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {companyData.is_open ? "Loja Aberta" : "Loja Fechada"}
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
                {companyData.pick_up_time_minutes} a{" "}
                {companyData.delivery_time_minutes} min
              </p>
            </div>
          </div>
        </div>
        {companyData.messages?.length > 0 &&
          companyData.messages.map((msg, index) => (
            <Alert
              key={index}
              className={`mb-4 bg-background/80 backdrop-blur ${
                msg.msg_severity === "error"
                  ? "border-red-600"
                  : "border-green-600"
              }`}
            >
              <InfoIcon className="h-4 w-4" />
              <AlertDescription className="text-sm">
                {msg.text}
              </AlertDescription>
            </Alert>
          ))}
      </div>

      {companyData && (
        <CompanyInfo
          isOpen={isCompanyInfoOpen}
          setIsOpen={setIsCompanyInfoOpen}
          company={company}
        />
      )}
    </header>
  );
};

export default Header;
