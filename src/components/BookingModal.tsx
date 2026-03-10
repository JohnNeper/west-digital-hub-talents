import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Calendar } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const CALCOM_URL = "https://cal.com/your-username/30min";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const { lang } = useLang();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2">
              <Calendar className="text-primary" size={20} />
            </div>
            <div>
              <DialogTitle className="font-heading">
                {lang === "en" ? "Book a Call" : "Réserver un Appel"}
              </DialogTitle>
              <DialogDescription>
                {lang === "en"
                  ? "Schedule a free 30-minute consultation with our team."
                  : "Planifiez une consultation gratuite de 30 minutes avec notre équipe."}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div className="px-6 pb-6">
          <div className="rounded-lg overflow-hidden border border-border">
            <iframe
              src={CALCOM_URL + "?embed=true&theme=auto"}
              style={{ width: "100%", height: "540px", border: "none" }}
              title="Book a call"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
