import { useState } from "react";
import { MessageCircle, ShoppingBag, Minus, Plus, CheckCircle2, Copy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Product, formatNaira } from "@/lib/products";
import { SITE, waLink } from "@/lib/site";

/**
 * Normalize a Nigerian phone number to international +234 format.
 * Accepts: 08068786708, 8068786708, +2348068786708, 2348068786708, with spaces/dashes.
 * Returns null if it can't be formatted into a valid 13-digit +234XXXXXXXXXX.
 */
function formatNgPhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  let national = "";
  if (digits.startsWith("234") && digits.length === 13) national = digits.slice(3);
  else if (digits.startsWith("0") && digits.length === 11) national = digits.slice(1);
  else if (digits.length === 10) national = digits;
  else return null;
  // Nigerian mobile prefixes start with 7, 8 or 9
  if (!/^[789]\d{9}$/.test(national)) return null;
  return `+234${national}`;
}

export function CheckoutDialog({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [confirmation, setConfirmation] = useState<{
    orderId: string;
    waUrl: string;
    phone: string;
  } | null>(null);

  const total = product.price * qty;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim()) {
      toast.error("Please fill your name, phone and delivery address.");
      return;
    }
    const formattedPhone = formatNgPhone(phone);
    if (!formattedPhone) {
      toast.error("Enter a valid Nigerian phone number (e.g. 08068786708).");
      return;
    }
    setPhone(formattedPhone);

    const orderId = `PVT-${Date.now().toString().slice(-6)}`;

    const message =
      `*PROVIC TECHNOLOGIES — ORDER SUMMARY*\n` +
      `Order ID: ${orderId}\n` +
      `Date: ${new Date().toLocaleString("en-NG")}\n\n` +
      `*Product:* ${product.name}\n` +
      `*Category:* ${product.category}\n` +
      `*Unit price:* ${formatNaira(product.price)}\n` +
      `*Quantity:* ${qty}\n` +
      `*Total:* ${formatNaira(total)}\n\n` +
      `*Customer*\n` +
      `Name: ${name}\n` +
      `Phone: ${formattedPhone}\n` +
      `Address: ${address}\n` +
      (notes.trim() ? `Notes: ${notes}\n` : "") +
      `\nPlease confirm my order and share payment details. Thank you!`;

    const url = waLink(SITE.whatsappSales, message);
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Order sent! Opening WhatsApp…");
    setConfirmation({ orderId, waUrl: url, phone: formattedPhone });
  };

  const reset = () => {
    setConfirmation(null);
    setQty(1);
    setName("");
    setPhone("");
    setAddress("");
    setNotes("");
  };

  const copyOrderId = async () => {
    if (!confirmation) return;
    try {
      await navigator.clipboard.writeText(confirmation.orderId);
      toast.success("Order ID copied");
    } catch {
      toast.error("Couldn't copy — please copy manually");
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) setConfirmation(null);
      }}
    >
      <DialogTrigger asChild>
        <Button variant="hero" size="lg" className="w-full">
          <ShoppingBag className="h-5 w-5" /> Checkout Now
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        {confirmation ? (
          <div className="grid gap-4">
            <DialogHeader>
              <div className="mx-auto mb-2 grid h-14 w-14 place-items-center rounded-full bg-emerald-500/10 text-emerald-600">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <DialogTitle className="text-center">Order placed successfully</DialogTitle>
              <DialogDescription className="text-center">
                Your order summary has been sent to our WhatsApp. We'll confirm shortly.
              </DialogDescription>
            </DialogHeader>

            <div className="rounded-xl border border-border bg-muted p-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Order ID</span>
                <button
                  onClick={copyOrderId}
                  className="inline-flex items-center gap-1 font-semibold text-foreground hover:text-gold"
                >
                  {confirmation.orderId}
                  <Copy className="h-3.5 w-3.5" />
                </button>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-muted-foreground">Product</span>
                <span className="font-medium">{product.name}</span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-muted-foreground">Quantity</span>
                <span className="font-medium">{qty}</span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-muted-foreground">Total</span>
                <span className="font-bold text-gold">{formatNaira(total)}</span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-muted-foreground">Your phone</span>
                <span className="font-medium">{confirmation.phone}</span>
              </div>
            </div>

            <Button asChild variant="whatsapp" size="lg" className="w-full">
              <a href={confirmation.waUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="h-5 w-5" /> Open WhatsApp chat
              </a>
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Save your Order ID <span className="font-semibold text-foreground">{confirmation.orderId}</span> for reference.
            </p>
            <Button variant="outline" onClick={reset}>
              Place another order
            </Button>
          </div>
        ) : (
        <>
        <DialogHeader>
          <DialogTitle>Checkout — {product.name}</DialogTitle>
          <DialogDescription>
            Fill your details. We'll send your order summary straight to WhatsApp for instant confirmation.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={submit} className="grid gap-3">
          <div className="flex items-center justify-between rounded-lg border border-border p-3">
            <span className="text-sm font-medium">Quantity</span>
            <div className="flex items-center gap-2">
              <Button
                type="button"
                size="icon"
                variant="outline"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-semibold">{qty}</span>
              <Button
                type="button"
                size="icon"
                variant="outline"
                onClick={() => setQty((q) => q + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Input placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
          <div className="grid gap-1">
            <Input
              placeholder="Phone number e.g. 08068786708"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={(e) => {
                const f = formatNgPhone(e.target.value);
                if (f) setPhone(f);
              }}
              inputMode="tel"
              type="tel"
              maxLength={20}
            />
            <p className="text-xs text-muted-foreground">
              We'll auto-format to <span className="font-medium">+234</span> for WhatsApp.
            </p>
          </div>
          <Textarea
            placeholder="Delivery address (Street, City, State)"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={2}
          />
          <Textarea
            placeholder="Order notes (optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={2}
          />

          <div className="flex items-center justify-between rounded-lg bg-muted p-3 text-sm">
            <span className="text-muted-foreground">Total</span>
            <span className="text-lg font-bold text-gold">{formatNaira(total)}</span>
          </div>

          <DialogFooter>
            <Button type="submit" variant="whatsapp" size="lg" className="w-full">
              <MessageCircle className="h-5 w-5" /> Send Order to WhatsApp
            </Button>
          </DialogFooter>
        </form>
        </>
        )}
      </DialogContent>
    </Dialog>
  );
}